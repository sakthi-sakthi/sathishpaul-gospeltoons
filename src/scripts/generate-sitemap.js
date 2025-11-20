// Import required Node.js modules
import fs from 'fs';                       // File system module for reading/writing files
import path from 'path';                   // Path utilities for file system operations
import { fileURLToPath } from 'url';       // Convert file URL to path
import { create } from 'xmlbuilder2';      // XML builder library to create XML documents

// Get the directory of the current script file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Calculate the path to the project root (two levels up from src/scripts/)
const projectRoot = path.resolve(__dirname, '../..');
const publicDir = path.join(projectRoot, 'public');

// Set the base URL for your website
const baseUrl = 'https://www.sathishpaul.net';
// Add your routes here eg /gospeltoons-eng, /gospeltoons-tamil, /catholic-designs, etc.
const routes = [
    '/', // Currently only includes the homepage
    '/gospeltoons-eng',
    '/gospeltoons-tamil',
    '/catholic-designs',
];

// Create a new XML document with the sitemap and image namespaces
// This creates the root <urlset> element with proper XML declaration
const urlset = create({ version: '1.0' }).ele('urlset', { 
    xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9',
    'xmlns:image': 'http://www.google.com/schemas/sitemap-image/1.1'
});

// Helper function to normalize image paths (ensure they start with /)
const normalizeImagePath = (imagePath) => {
    if (!imagePath) return '';
    return imagePath.startsWith('/') ? imagePath : '/' + imagePath;
};

// Load gallery images for Catholic Designs page
let galleryImages = {};
try {
    const galleryData = JSON.parse(fs.readFileSync(path.join(publicDir, 'galleryImages.json'), 'utf8'));
    galleryImages = galleryData;
    console.log('✅ Loaded galleryImages.json');
} catch (error) {
    console.warn('⚠️  Could not load galleryImages.json:', error.message);
}

// Load gospel data for Gospel Toons pages
let gospelData = {};
try {
    const gospelDataRaw = JSON.parse(fs.readFileSync(path.join(publicDir, 'gospel-data.json'), 'utf8'));
    gospelData = gospelDataRaw;
    console.log('✅ Loaded gospel-data.json');
} catch (error) {
    console.warn('⚠️  Could not load gospel-data.json:', error.message);
}

// Loop through each route and add it to the sitemap with images
routes.forEach(route => {
    // Create a new <url> element for each route
    const url = urlset.ele('url');
    
    // Add the full URL (base + route) as the <loc> element
    url.ele('loc').txt(baseUrl + route);
    
    // Add the current date/time as the <lastmod> element in ISO format
    url.ele('lastmod').txt(new Date().toISOString());
    
    // Add images based on the route
    if (route === '/catholic-designs') {
        // Add all images from galleryImages.json
        Object.keys(galleryImages).forEach(category => {
            const images = galleryImages[category] || [];
            images.forEach(image => {
                if (image.src) {
                    const imageElement = url.ele('image:image');
                    imageElement.ele('image:loc').txt(baseUrl + normalizeImagePath(image.src));
                    if (image.title) {
                        imageElement.ele('image:title').txt(image.title);
                        imageElement.ele('image:caption').txt(image.title);
                    }
                }
            });
        });
    } else if (route === '/gospeltoons-eng' && gospelData.english) {
        // Add all English gospel toons images
        Object.keys(gospelData.english).forEach(month => {
            const monthData = gospelData.english[month] || [];
            monthData.forEach(item => {
                if (item.path) {
                    const imageElement = url.ele('image:image');
                    imageElement.ele('image:loc').txt(baseUrl + normalizeImagePath(item.path));
                    if (item.name) {
                        imageElement.ele('image:title').txt(item.name);
                        imageElement.ele('image:caption').txt(item.name);
                    }
                }
            });
        });
    } else if (route === '/gospeltoons-tamil' && gospelData.tamil) {
        // Add all Tamil gospel toons images
        Object.keys(gospelData.tamil).forEach(month => {
            const monthData = gospelData.tamil[month] || [];
            monthData.forEach(item => {
                if (item.path) {
                    const imageElement = url.ele('image:image');
                    imageElement.ele('image:loc').txt(baseUrl + normalizeImagePath(item.path));
                    if (item.name) {
                        imageElement.ele('image:title').txt(item.name);
                        imageElement.ele('image:caption').txt(item.name);
                    }
                }
            });
        });
    }
});

// Convert the XML object to a formatted string
const xml = urlset.end({ prettyPrint: true });

// Write the XML to the sitemap.xml file in the public directory
const sitemapPath = path.join(publicDir, 'sitemap.xml');
fs.writeFileSync(sitemapPath, xml);

// Count total images
let totalImages = 0;
if (galleryImages) {
    Object.keys(galleryImages).forEach(category => {
        totalImages += (galleryImages[category] || []).length;
    });
}
if (gospelData.english) {
    Object.keys(gospelData.english).forEach(month => {
        totalImages += (gospelData.english[month] || []).length;
    });
}
if (gospelData.tamil) {
    Object.keys(gospelData.tamil).forEach(month => {
        totalImages += (gospelData.tamil[month] || []).length;
    });
}

// Log a success message to the console
console.log(`✅ Sitemap generated successfully with ${totalImages} images!`);