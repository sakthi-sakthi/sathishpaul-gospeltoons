import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <a href="https://www.sathishpaul.net" target="_blank" rel="noopener noreferrer" className="footer-url">
            www.sathishpaul.net
          </a>
        </div>
        <div className="footer-right">
          <a href="https://www.facebook.com/share/1PgmjRSQyd/" className="social-icon" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/sathishpaul1?igsh=dmFqNGQxaDVqZHVv" className="social-icon" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com" className="social-icon" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1227" width="20" height="20" fill="currentColor">
              <path d="M714.2 519.4 1160 0H1050L669.8 442.1 360.3 0H0l468.2 681.6L0 1227h110.3l406.2-469.9 327.2 469.9H1200L714.2 519.4zM562.4 687.5 522.1 630 150.9 80h153.1l300.2 435.9 40.3 57.5 389.1 566.6H880.6L562.4 687.5z" />
            </svg>
          </a>
          <a href="https://youtube.com/@jsathishpaul?si=lzcAg-S8dRGTtszr" className="social-icon" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="https://www.linkedin.com" className="social-icon" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
