# 🚀 Setup Instructions - React + Vite

## Quick Start (3 Steps)

### **Step 1: Install Node.js**
Download and install from: https://nodejs.org
(Choose LTS version - v18 or higher)

### **Step 2: Open Terminal**
```bash
cd C:\Users\BSOFTCH03\Documents\AL\ALProject1
```

### **Step 3: Run These Commands**
```bash
# Install all dependencies
npm install

# Start the development server
npm run dev
```

**That's it!** Open your browser to `http://localhost:3000` 🎉

---

## 📸 Don't Forget Your Images!

Move these 3 images to the `public/` folder:

```powershell
# In PowerShell, run:
move fr-sathish-paul.jpg public/
move gospel-toon-sample.jpg public/
move eucharist-sample.jpg public/
```

Or manually drag and drop them into the `public/` folder.

---

## 📁 File Structure

```
ALProject1/
├── public/                      ← PUT YOUR IMAGES HERE
│   ├── fr-sathish-paul.jpg
│   ├── gospel-toon-sample.jpg
│   └── eucharist-sample.jpg
├── src/
│   ├── components/              ← React components
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── index.html
```

---

## 🎯 Available Commands

```bash
# Development (with hot reload)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Check for errors
npm run lint
```

---

## 🐛 Common Issues

### "npm is not recognized"
→ You need to install Node.js first

### "Port 3000 is already in use"
→ Run: `npx kill-port 3000`

### Images not showing
→ Make sure images are in the `public/` folder

---

## 🌐 Deploy to Production

### Option 1: Netlify (Easiest)
1. Go to https://netlify.com
2. Drag and drop the `dist/` folder (after running `npm run build`)

### Option 2: Vercel
1. Go to https://vercel.com
2. Import your project
3. It will automatically detect Vite

---

## ✨ What Changed?

Your static website is now a **React application**:
- ⚡ Faster development with hot reload
- 🧩 Organized code with components
- 🚀 Better performance
- 📱 Still fully responsive

Everything works exactly the same, but the code is now more maintainable!

---

**Need help?** Read the full `REACT-MIGRATION-GUIDE.md`

