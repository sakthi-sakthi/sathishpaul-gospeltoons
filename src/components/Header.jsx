import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path) => {
    return location.pathname === path
  }

  const closeMenus = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo-section" onClick={closeMenus}>
          <div className="logo-circle">
            <img 
              src="/images/my icon.png" 
              alt="Profile"
              className="logo-img"
              onError={(e) => {
                e.target.src = '/images/Profile1.jpeg'
              }}
            /> 
          </div> <h2 className="logo-text">Sathish Paul SDB</h2>
        </Link>

        <nav className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <button 
            className="nav-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className="fas fa-bars"></i>
          </button>
          <ul className="nav-list">
            <li>
              <Link 
                to="/"
                className={`nav-link home-link ${location.pathname === '/' ? 'active' : ''}`}
                onClick={closeMenus}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/gospeltoons-eng"
                className={`nav-link ${isActive('/gospeltoons-eng') ? 'active' : ''}`}
                onClick={closeMenus}
              >
                Gospeltoons English
              </Link>
            </li>
            <li>
              <Link 
                to="/gospeltoons-tamil"
                className={`nav-link ${isActive('/gospeltoons-tamil') ? 'active' : ''}`}
                onClick={closeMenus}
              >
                Gospeltoons Tamil
              </Link>
            </li>
            <li>
              <Link 
                to="/catholic-designs"
                className={`nav-link ${isActive('/catholic-designs') ? 'active' : ''}`}
                onClick={closeMenus}
              >
                Catholic Designs
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
