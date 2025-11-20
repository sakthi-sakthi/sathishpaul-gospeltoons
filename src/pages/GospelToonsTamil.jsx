import { useState, useEffect, useCallback } from 'react'
import { ThreeDots } from 'react-loader-spinner'
import Lightbox from '../components/Lightbox'
import MonthSidebar from '../components/MonthSidebar'
import './GospelToonsPage.css'

const months = [
  { key: 'jan', name: 'January', tamil: 'ஜனவரி', days: 31 },
  { key: 'feb', name: 'February', tamil: 'பிப்ரவரி', days: 28 },
  { key: 'mar', name: 'March', tamil: 'மார்ச்', days: 31 },
  { key: 'apr', name: 'April', tamil: 'ஏப்ரல்', days: 30 },
  { key: 'may', name: 'May', tamil: 'மே', days: 31 },
  { key: 'jun', name: 'June', tamil: 'ஜூன்', days: 30 },
  { key: 'jul', name: 'July', tamil: 'ஜூலை', days: 31 },
  { key: 'aug', name: 'August', tamil: 'ஆகஸ்ட்', days: 31 },
  { key: 'sep', name: 'September', tamil: 'செப்டம்பர்', days: 30 },
  { key: 'oct', name: 'October', tamil: 'அக்டோபர்', days: 31 },
  { key: 'nov', name: 'November', tamil: 'நவம்பர்', days: 30 },
  { key: 'dec', name: 'December', tamil: 'டிசம்பர்', days: 31 }
]

const colors = ['4A90E2', '667eea', '764ba2', 'D4AF37', '8B7355', '2E5090']

const GospelToonsTamil = () => {
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
      const monthData = gospelData.tamil?.[monthKey] || []

      if (monthData.length === 0) {
        setImages([])
        setMonthLoading(false)
        return
      }

      const newImages = monthData.map((item) => {
        const colorIndex = item.day % colors.length
        return {
          src: item.path,
          fallback: `https://via.placeholder.com/400x500/${colors[colorIndex]}/ffffff?text=Day+${item.day}`,
          alt: `${item.name} - ${month.tamil} ${item.day}`,
          date: `${month.tamil} ${item.day}, 2025`,
          name: item.name,
          day: item.day
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
      <div className="page-content">
        <MonthSidebar 
          months={months}
          activeMonth={activeMonth}
          onMonthClick={loadMonth}
          language="tamil"
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
                    onError={(e) => { e.target.src = image.fallback }}
                  />
                  <div className="card-overlay">
                    <div className="card-info">
                      <div className="card-date">{image.date}</div>
                      <div className="card-title">{image.name}</div>
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

export default GospelToonsTamil