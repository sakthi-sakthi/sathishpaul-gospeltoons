import { useEffect } from 'react'

/**
 * Component to add structured data (JSON-LD) for images with text content
 * This helps Google extract and index text from images
 */
const ImageSEO = ({ images, pageUrl, pageTitle }) => {
  useEffect(() => {
    if (!images || images.length === 0) return

    // Create structured data for ImageGallery
    const imageGallerySchema = {
      "@context": "https://schema.org",
      "@type": "ImageGallery",
      "name": pageTitle || "Gospeltoons Gallery",
      "url": pageUrl || (typeof window !== 'undefined' ? window.location.href : ''),
      "description": "Collection of Gospeltoons images with Bible verses and Christian content",
      "image": images.map((img, index) => {
        const baseUrl = typeof window !== 'undefined' ? window.location.origin : ''
        const fullImageUrl = img.src.startsWith('http') 
          ? img.src 
          : `${baseUrl}${img.src.startsWith('/') ? '' : '/'}${img.src}`
        
        return {
          "@type": "ImageObject",
          "url": fullImageUrl,
          "name": img.name || img.alt || `Gospeltoon ${index + 1}`,
          "description": img.description || img.alt || img.caption || "",
          "text": img.textContent || "", // Text extracted from image
          "datePublished": img.date || "",
          "author": {
            "@type": "Person",
            "name": "Sathish Paul SDB"
          },
          "copyrightHolder": {
            "@type": "Person",
            "name": "Sathish Paul SDB"
          }
        }
      })
    }

    // Add script tag with structured data
    const scriptId = 'image-gallery-schema'
    let script = document.getElementById(scriptId)
    
    if (script) {
      script.remove()
    }
    
    script = document.createElement('script')
    script.id = scriptId
    script.type = 'application/ld+json'
    script.text = JSON.stringify(imageGallerySchema)
    document.head.appendChild(script)

    return () => {
      const scriptToRemove = document.getElementById(scriptId)
      if (scriptToRemove) {
        scriptToRemove.remove()
      }
    }
  }, [images, pageUrl, pageTitle])

  return null
}

export default ImageSEO

