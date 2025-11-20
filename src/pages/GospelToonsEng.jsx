import { useState, useEffect, useCallback, useRef } from 'react'
import { ThreeDots } from 'react-loader-spinner'
import Lightbox from '../components/Lightbox'
import MonthSidebar from '../components/MonthSidebar'
import ImageSEO from '../components/ImageSEO'
import './GospelToonsPage.css'

const months = [
  { key: 'jan', name: 'January', days: 31 },
  { key: 'feb', name: 'February', days: 28 },
  { key: 'mar', name: 'March', days: 31 },
  { key: 'apr', name: 'April', days: 30 },
  { key: 'may', name: 'May', days: 31 },
  { key: 'jun', name: 'June', days: 30 },
  { key: 'jul', name: 'July', days: 31 },
  { key: 'aug', name: 'August', days: 31 },
  { key: 'sep', name: 'September', days: 30 },
  { key: 'oct', name: 'October', days: 31 },
  { key: 'nov', name: 'November', days: 30 },
  { key: 'dec', name: 'December', days: 31 }
]

const colors = ['4A90E2', '667eea', '764ba2', 'D4AF37', '8B7355', '2E5090']

const GospelToonsEng = () => {
  const [activeMonth, setActiveMonth] = useState('jan')
  const [images, setImages] = useState([])
  const [gospelData, setGospelData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [monthLoading, setMonthLoading] = useState(false)
  const [lightboxData, setLightboxData] = useState({ 
    isOpen: false, 
    src: '', 
    caption: '', 
    images: [], 
    currentIndex: 0 
  })

  useEffect(() => {
    const fetchGospelData = async () => {
      try {
        const response = await fetch('/gospel-data.json')
        const data = await response.json()
        setGospelData(data)
      } catch (error) {
        console.error('Error loading gospel data:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchGospelData()
  }, [])

  const loadMonth = useCallback((monthKey) => {
    if (!gospelData) return

    setMonthLoading(true)
    setActiveMonth(monthKey)

    setTimeout(() => {
      const month = months.find(m => m.key === monthKey)
      const monthData = gospelData.english?.[monthKey] || []

      if (monthData.length === 0) {
        setImages([])
        setMonthLoading(false)
        return
      }

      const newImages = monthData.map((item) => {
        const colorIndex = item.day % colors.length
        // Enhanced alt text with Bible verse reference if available
        const altText = item.bibleVerse 
          ? `${item.name} - ${item.bibleVerse} - ${month.name} ${item.day}, 2025 - Gospeltoons by Sathish Paul SDB`
          : `${item.name} - ${month.name} ${item.day}, 2025 - Gospeltoons by Sathish Paul SDB`
        
        return {
          src: item.path,
          fallback: `https://via.placeholder.com/400x500/${colors[colorIndex]}/ffffff?text=Day+${item.day}`,
          alt: altText,
          date: `${month.name.toUpperCase()} ${item.day}, 2025`,
          name: item.name,
          day: item.day,
          bibleVerse: item.bibleVerse || '',
          textContent: item.textContent || item.quote || '', // Text from image
          description: item.description || `${item.name} Gospeltoon for ${month.name} ${item.day}`
        }
      })

      setImages(newImages)
      setMonthLoading(false)
    }, 400)
  }, [gospelData])

  useEffect(() => {
    if (gospelData) {
      loadMonth('jan')
    }
  }, [gospelData, loadMonth])

  const openLightbox = (src, caption, images = [], currentIndex = 0) => {
    setLightboxData({ isOpen: true, src, caption, images, currentIndex })
  }

  const closeLightbox = () => {
    setLightboxData({ isOpen: false, src: '', caption: '', images: [], currentIndex: 0 })
  }

  const navigateLightbox = (direction) => {
    const { images, currentIndex } = lightboxData
    if (images.length === 0) return

    let newIndex = currentIndex
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % images.length
    } else if (direction === 'prev') {
      newIndex = (currentIndex - 1 + images.length) % images.length
    }

    const newImage = images[newIndex]
    setLightboxData({
      ...lightboxData,
      src: newImage.src,
      caption: `${newImage.name} - ${newImage.date}`,
      currentIndex: newIndex
    })
  }

  return (
    <div className="gospeltoons-page">
      <ImageSEO 
        images={images} 
        pageUrl={typeof window !== 'undefined' ? window.location.href : ''}
        pageTitle={`Gospeltoons English - ${months.find(m => m.key === activeMonth)?.name || 'January'} 2025`}
      />
      <div className="page-content">
        <MonthSidebar 
          months={months}
          activeMonth={activeMonth}
          onMonthClick={loadMonth}
          language="english"
        />

        <div className="content-area">
          {monthLoading && (
            <div className="month-loader">
              <ThreeDots
                height={60}
                width={60}
                color="#ffa72c"
                secondaryColor="#ffa72c"
                visible={true}
                ariaLabel="dots-loading"
              />
            </div>
          )}

          <div className="gallery-grid">
            {loading ? (
              <div className="gospel-loader">
                <ThreeDots
                  height={60}
                  width={60}
                  color="#ffa72c"
                  secondaryColor="#ffa72c"
                  visible={true}
                  ariaLabel="oval-loading"
                />
              </div>
            ) : images.length === 0 ? (
              <div className="no-data-message">No images available for this month</div>
            ) : (
              images.map((image, index) => (
                <div
                  key={`${image.day}-${index}`}
                  className="gallery-card"
                  style={{ animationDelay: `${index * 0.05}s` }}
                  onClick={() => openLightbox(image.src, `${image.name} - ${image.date}`, images, index)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    title={image.description || image.alt}
                    onError={(e) => { e.target.src = image.fallback }}
                  />
                  {/* Hidden text content for SEO - matches text in image */}
                  {image.textContent && (
                    <div className="sr-only" aria-hidden="true">
                      {image.textContent}
                      {image.bibleVerse && ` - ${image.bibleVerse}`}
                    </div>
                  )}
                  <div className="card-overlay">
                    <div className="card-info">
                      <div className="card-date">{image.date}</div>
                      <div className="card-title">{image.name}</div>
                      {image.bibleVerse && (
                        <div className="card-verse">{image.bibleVerse}</div>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <Lightbox 
        isOpen={lightboxData.isOpen}
        src={lightboxData.src}
        caption={lightboxData.caption}
        onClose={closeLightbox}
        onNavigate={navigateLightbox}
        hasMultipleImages={lightboxData.images.length > 1}
        currentIndex={lightboxData.currentIndex}
        totalImages={lightboxData.images.length}
      />
    </div>
  )
}

export default GospelToonsEng

