import { useState, useEffect } from 'react'
import Lightbox from '../components/Lightbox'
import CategorySidebar from '../components/CategorySidebar'
import './CatholicDesignsPage.css'

const categories = [
  { id: 'jesus', title: 'Jesus' },
  { id: 'mary', title: 'Mary' },
  { id: 'saints', title: 'Saints' },
  { id: 'eucharist', title: 'Eucharist' },
  { id: 'church', title: 'Church' },
  { id: 'scripture', title: 'Scripture' },
  { id: 'common', title: 'Common' }
]

const CatholicDesigns = () => {
  const [activeCategory, setActiveCategory] = useState('jesus')
  const [categoryImages, setCategoryImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [lightboxData, setLightboxData] = useState({ 
    isOpen: false, 
    src: '', 
    caption: '', 
    images: [], 
    currentIndex: 0 
  })

  useEffect(() => {
    loadCategoryImages('jesus')
  }, [])

  const loadCategoryImages = async (categoryId) => {
    setLoading(true)
    try {
      const res = await fetch('/galleryImages.json')
      const data = await res.json()
      setCategoryImages(data[categoryId] || [])
      setActiveCategory(categoryId)
    } catch (err) {
      console.error("Error loading images:", err)
      setCategoryImages([])
    } finally {
      setLoading(false)
    }
  }

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
      caption: newImage.title,
      currentIndex: newIndex
    })
  }

  const allImages = categoryImages.map(img => ({
    src: img.src,
    name: img.title,
    date: ''
  }))

  return (
    <div className="catholic-designs-page">

      <div className="page-content">
        <CategorySidebar 
          categories={categories}
          activeCategory={activeCategory}
          onCategoryClick={loadCategoryImages}
        />

        <div className="content-area">
          <div className="gallery-grid">
            {loading ? (
              <div className="loading-message">Loading images...</div>
            ) : categoryImages.length === 0 ? (
              <div className="no-data-message">No images available for this category</div>
            ) : (
              categoryImages.map((image, index) => (
                <div
                  key={index}
                  className="gallery-card"
                  style={{ animationDelay: `${index * 0.05}s` }}
                  onClick={() => openLightbox(image.src, image.title, allImages, index)}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x500/8B7355/ffffff?text=Image+Not+Found'
                    }}
                  />
                  <div className="card-overlay">
                    <div className="card-info">
                      <div className="card-title">{image.title}</div>
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

export default CatholicDesigns

