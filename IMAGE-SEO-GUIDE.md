# Image SEO Guide - How Google Extracts Text from Images

## Overview
This guide explains how Google extracts text from images and how to optimize your Gospeltoons images for better search visibility.

## How Google Extracts Text from Images

### 1. **OCR (Optical Character Recognition)**
Google uses advanced OCR technology to:
- Detect text within images
- Extract readable text from images
- Index this text for search results

### 2. **What Google Shows in Search Results**
When someone searches for text that appears in your images, Google may show:
- **Image thumbnail** in search results
- **Extracted text snippet** below the image
- **Page title and URL** where the image is located
- **Image context** from surrounding page content

### 3. **Example Search Result Display**
```
[Image Thumbnail]
"Mary treasured up all these things and pondered them"
sathishpaul.net/gospeltoons-eng
Gospeltoons - January 1, 2025 - Mary, Mother of God
```

## SEO Optimizations Implemented

### 1. **Structured Data (JSON-LD)**
- Added `ImageGallery` schema with `ImageObject` for each image
- Includes text content, Bible verses, and metadata
- Helps Google understand image content and context

### 2. **Enhanced Alt Text**
- Alt text now includes:
  - Image title/name
  - Bible verse reference (if available)
  - Date information
  - Author attribution
- Example: `"Mary, Mother of God - Luke 2:16-21 - January 1, 2025 - Gospeltoons by Sathish Paul SDB"`

### 3. **Hidden Text Content**
- Added screen-reader-only text that matches image content
- Includes Bible verses and quotes from images
- Visible to search engines but not to users
- Uses `.sr-only` CSS class

### 4. **Image Metadata**
- `title` attribute on images
- `description` field in image data
- `textContent` field containing extracted text
- `bibleVerse` field for scripture references

### 5. **Page-Level SEO**
- Dynamic page titles based on month and language
- Proper meta tags for image search
- Structured data for image galleries

## How to Add Text Content to Images

### Update `gospel-data.json`
Add these fields to each image entry:

```json
{
  "day": 1,
  "name": "Mary, Mother of God",
  "path": "images/2026/1 Jan/1 Jan 2026 ENG (1).jpg",
  "bibleVerse": "Luke 2:16-21",
  "textContent": "Mary treasured up all these things and pondered them in her heart",
  "quote": "Mary treasured up all these things and pondered them",
  "description": "Gospeltoon showing Mary holding baby Jesus with quote from Luke 2:16-21"
}
```

### Fields Explained:
- **`bibleVerse`**: Scripture reference (e.g., "Luke 2:16-21")
- **`textContent`**: Full text visible in the image
- **`quote`**: Main quote or verse text
- **`description`**: Detailed description of the image content

## Best Practices

### 1. **Text Content**
- Include ALL text that appears in the image
- Use exact quotes and verses
- Include both the quote and Bible reference

### 2. **Alt Text**
- Be descriptive and specific
- Include relevant keywords naturally
- Mention Bible verses and dates

### 3. **Image Quality**
- Use high-quality images (Google prefers clear text)
- Ensure text is readable in the image
- Use appropriate image formats (JPG, PNG, WebP)

### 4. **File Names**
- Use descriptive file names
- Include date and language in filename
- Example: `1-Jan-2026-ENG-Mary-Mother-of-God.jpg`

### 5. **Page Context**
- Surround images with relevant text
- Include Bible verse references in page content
- Add descriptive captions

## Testing Your SEO

### 1. **Google Search Console**
- Submit your sitemap
- Monitor image search performance
- Check for indexing issues

### 2. **Google Rich Results Test**
- Test structured data: https://search.google.com/test/rich-results
- Verify JSON-LD is valid
- Check for errors

### 3. **Image Search**
- Search for specific quotes from your images
- Check if images appear in results
- Verify text extraction is working

### 4. **View Page Source**
- Check that structured data is present
- Verify alt text is correct
- Confirm hidden text is in HTML

## Example Implementation

### Image with Text Content:
```jsx
<img
  src="/images/2026/1 Jan/1 Jan 2026 ENG (1).jpg"
  alt="Mary, Mother of God - Luke 2:16-21 - January 1, 2025 - Gospeltoons by Sathish Paul SDB"
  title="Gospeltoon showing Mary holding baby Jesus with quote from Luke 2:16-21"
/>

{/* Hidden text for SEO */}
<div className="sr-only" aria-hidden="true">
  Mary treasured up all these things and pondered them in her heart - Luke 2:16-21
</div>
```

### Structured Data Generated:
```json
{
  "@type": "ImageObject",
  "url": "https://www.sathishpaul.net/images/2026/1 Jan/1 Jan 2026 ENG (1).jpg",
  "name": "Mary, Mother of God",
  "description": "Gospeltoon showing Mary holding baby Jesus with quote from Luke 2:16-21",
  "text": "Mary treasured up all these things and pondered them in her heart",
  "datePublished": "JANUARY 1, 2025"
}
```

## Monitoring Results

### What to Track:
1. **Image search impressions** in Google Search Console
2. **Click-through rates** from image search
3. **Queries** that bring users to your images
4. **Indexing status** of images

### Expected Timeline:
- Initial indexing: 1-2 weeks
- Text extraction: 2-4 weeks
- Search result appearance: 4-8 weeks

## Additional Resources

- [Google Image SEO Guidelines](https://developers.google.com/search/docs/appearance/google-images)
- [Structured Data for Images](https://schema.org/ImageObject)
- [Google Search Console](https://search.google.com/search-console)

## Notes

- Google's OCR is constantly improving
- Text extraction works best with clear, readable text
- Multiple languages may require separate optimization
- Regular updates to image metadata help maintain rankings

