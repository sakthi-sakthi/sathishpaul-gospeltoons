# Sathish Paul SDB - React + Vite Website

🙏 **Where Scripture Meets Creative Expression**

A modern, animated, and visually engaging React website for Sathish Paul SDB, a Salesian priest, artist, and evangelizer.

---

## 🚀 Quick Start

### **Prerequisites**
- Node.js (v18 or higher)
- npm or yarn

### **Installation**

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
fr-sathish-paul-website/
├── public/
│   ├── fr-sathish-paul.jpg       # Your photo
│   ├── gospel-toon-sample.jpg     # Gospel Toon sample
│   ├── eucharist-sample.jpg       # Eucharist image
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx             # Navigation header
│   │   ├── HeroSection.jsx        # Hero with priest photo
│   │   ├── GospelToonsSection.jsx # Gospel Toons (English/Tamil)
│   │   ├── JesusSection.jsx       # Sacred Gallery categories
│   │   ├── Footer.jsx             # Footer
│   │   ├── ParticlesBackground.jsx
│   │   ├── FloatingShapes.jsx
│   │   ├── WhatsAppButton.jsx
│   │   ├── BackToTop.jsx
│   │   ├── Lightbox.jsx
│   │   └── [ComponentName].css    # Component styles
│   ├── App.jsx                    # Main app component
│   ├── App.css                    # Global animations
│   ├── index.css                  # CSS variables & reset
│   └── main.jsx                   # React entry point
├── index.html                     # HTML template
├── package.json                   # Dependencies
├── vite.config.js                 # Vite configuration
└── README.md                      # This file
```

---

## 📸 Add Your Images

Place these images in the `public/` folder:

1. **`public/fr-sathish-paul.jpg`** - Your photo in priest attire
2. **`public/gospel-toon-sample.jpg`** - Gospel Toon illustration
3. **`public/eucharist-sample.jpg`** - Eucharist image

The app will automatically use these images!

---

## ✨ Features

### 🎨 **Modern React Architecture**
- ✅ Component-based structure
- ✅ React Hooks (useState, useEffect, useRef)
- ✅ Vite for fast development
- ✅ No class components - all functional

### 📖 **Gospel Toons**
- ✅ English & Tamil sections
- ✅ Month-based navigation (Jan-Dec)
- ✅ 365 daily illustrations
- ✅ Interactive gallery with hover effects
- ✅ Lightbox image viewer

### ✝️ **Sacred Gallery**
- ✅ 6 Categories (Mary, Saints, Eucharist, Church, Scripture, Common)
- ✅ Modal galleries
- ✅ Animated icons

### 🔧 **Interactive Features**
- ✅ Smooth scroll navigation
- ✅ Particles.js background
- ✅ Floating religious symbols
- ✅ WhatsApp floating button
- ✅ Back to top button
- ✅ Responsive mobile menu
- ✅ Scroll-based animations

---

## 🎯 Development Commands

```bash
# Development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

---

## 📦 Dependencies

### **Core**
- `react` ^18.2.0
- `react-dom` ^18.2.0
- `vite` ^5.0.8

### **Dev Dependencies**
- `@vitejs/plugin-react` ^4.2.1
- `@types/react` ^18.2.43
- `@types/react-dom` ^18.2.17

### **External**
- Font Awesome 6.4.0 (CDN)
- Google Fonts: Playfair Display, Poppins
- Particles.js 2.0.0 (CDN)

---

## 🎨 Customization

### **Colors**
Edit CSS variables in `src/index.css`:

```css
:root {
    --primary-color: #4A90E2;      /* Main blue */
    --secondary-color: #D4AF37;    /* Gold */
    --accent-color: #8B7355;       /* Brown */
}
```

### **Content**
- **Header**: Edit `src/components/Header.jsx`
- **Hero Text**: Edit `src/components/HeroSection.jsx`
- **Contact**: Edit `src/components/Footer.jsx` & `WhatsAppButton.jsx`

---

## 🌐 Deployment

### **Netlify / Vercel**
```bash
# Build the project
npm run build

# Deploy the 'dist' folder
```

### **GitHub Pages**
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"deploy": "npm run build && gh-pages -d dist"

# Deploy
npm run deploy
```

---

## 📱 Responsive Design

Optimized for:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Laptop (1024px+)
- 🖥️ Desktop (1440px+)

---

## 🔧 Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: CSS Modules (component-scoped)
- **Icons**: Font Awesome 6
- **Fonts**: Google Fonts
- **Animation**: Particles.js + Custom CSS

---

## 📞 Contact

**Sathish Paul SDB**
- 📧 Email: sathishpauljsdb@gmail.com
- 📱 WhatsApp: +91 9361255296
- 🌐 Website: sathishpaul.net

---

## 🙏 About

A Salesian priest combining professional art and graphic design with pastoral ministry to make the Gospel accessible to all through **Gospeltoons** - daily Gospel illustrations.

---

## 📄 License

Copyright © 2025 Sathish Paul SDB | All rights reserved

---

**Built with 💙 Faith, Creativity, and React**
