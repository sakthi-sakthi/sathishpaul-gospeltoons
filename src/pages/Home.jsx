import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

const Home = () => {
  const navigate = useNavigate()
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="home-page">
      <div className="home-hero">
        <div className="category-circles">

          {/* 1. Gospeltoons English */}
          <div
            className="category-circle"
            onClick={() => navigate('/gospeltoons-eng')}
          >
            <img
              src="/images/Logo 1.png"
              alt="Gospeltoons English"
              className="circle-logo-img"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'block'
              }}
            />
            <div className="circle-content fallback" style={{ display: 'none' }}>
              <div className="gt-logo-large">GT</div>
              <div className="circle-text">
                <span className="circle-label orange">English</span>
                <span className="circle-name">Gospeltoons</span>
              </div>
            </div>
          </div>

          {/* 2. Gospeltoons Tamil */}
          <div
            className="category-circle"
            onClick={() => navigate('/gospeltoons-tamil')}
          >
            <img
              src="/images/Logo 2.png"
              alt="Gospeltoons Tamil"
              className="circle-logo-img"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'block'
              }}
            />
            <div className="circle-content fallback" style={{ display: 'none' }}>
              <div className="gt-logo-large">GT</div>
              <div className="circle-text">
                <span className="circle-label orange">Tamil</span>
                <span className="circle-name">Gospeltoons</span>
              </div>
            </div>
          </div>

          {/* 3. Catholic Designs */}
          <div
            className="category-circle"
            onClick={() => navigate('/catholic-designs')}
          >
            <img
              src="/images/Logo 3.png"
              alt="Catholic Designs"
              className="circle-logo-img"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'block'
              }}
            />

            <div className="circle-content catholic fallback" style={{ display: 'none' }}>
              <div className="catholic-text">
                <span className="catholic-title">CATHOLIC</span>
                <span className="catholic-subtitle orange">DESIGNS</span>
              </div>
            </div>
          </div>

        </div>

        {/* About Section */}
        <div className="about-section">
          <div className="about-image">
            <img
              src="/images/my icon.png"
              alt="Sathish Paul SDB"
              onError={(e) => {
                e.target.src = '/images/Profile1.jpeg'
              }}
            />
          </div>

          <div className="about-text">
            <p>
              Hi, I'm Sathish Paul - a Salesian priest who loves people, stories, colours, and the simple beauty of the Gospel. I believe that faith becomes more powerful when it is expressed with joy and creativity, and that is why I create art, designs, and Gospeltoons - using simple drawings and visuals to make Scripture and Christian content come alive for every heart.
              {!isExpanded && (
                <>
                  {' '}
                  <button 
                    className="read-more-btn" 
                    onClick={() => setIsExpanded(true)}
                    style={{ textDecoration: 'none' }}
                  >
                    Read More
                  </button>
                </>
              )}
              {isExpanded && (
                <>
                  {' '}Through my ministry, I meet young people, religious, and families whose dreams, struggles, and laughter inspire me every day. I try to respond with art, words, and hope. I enjoy graphic designing and creating creative Catholic visuals that support parishes and youth groups, helping them communicate faith in a beautiful and meaningful way.

                  My mission is to animate, inspire, and communicate the Lord Jesus and His Gospel in ways that feel close, warm, and alive. I believe that even one small drawing, one simple design, or a short message can touch someone deeply and brighten their day. If you love faith, creativity, spirituality, or simply need a moment of positivity and renewal, you're in the right place. Welcome - let's grow, reflect, dream, and draw hope together.{' '}
                  <button 
                    className="read-more-btn" 
                    onClick={() => setIsExpanded(false)}
                    style={{ textDecoration: 'none' }}
                  >
                    Read Less
                  </button>
                </>
              )}
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home