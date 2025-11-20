import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GAListener from './components/GAListener.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GAListener />
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
