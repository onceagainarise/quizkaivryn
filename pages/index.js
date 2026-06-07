// pages/index.js
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Quizkaivryn | Download the Ultimate Trivia App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="app-container">
        <div className="background-blur"></div>
        
        <main className="card" id="landing-card">
          {/* Logo & Header */}
          <header>
            <h1 id="app-title">Quizkaivryn</h1>
            <p className="subtitle">Level up your trivia game. Solve, learn, and conquer.</p>
          </header>

          {/* Interactive CSS Smartphone Mockup */}
          <div className="mockup-container">
            <div className="phone-mockup" aria-hidden="true">
              <div className="screen-content">
                {/* Simulated Phone Top Bar */}
                <div className="screen-header">
                  <span>12:00</span>
                  <span>⚡ 100%</span>
                </div>

                {/* Simulated Quiz UI */}
                <div className="quiz-card">
                  <p className="quiz-question">Which layer of Earth's atmosphere contains the ozone layer?</p>
                  
                  <div className="quiz-options">
                    <div className="quiz-option">A. Troposphere</div>
                    <div className="quiz-option active">B. Stratosphere</div>
                    <div className="quiz-option">C. Mesosphere</div>
                    <div className="quiz-option">D. Thermosphere</div>
                  </div>
                </div>

                {/* Simulated App Navigation */}
                <div className="screen-footer">
                  <span>Home</span>
                  <span>🏆 Leaderboard</span>
                  <span>Profile</span>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Area */}
          <div className="cta-container">
            <a 
              href="/api/download" 
              className="btn-download" 
              id="btn-download-apk"
              rel="noopener noreferrer"
            >
              Download APK
            </a>
            
            <div className="badge-info" id="download-badge">
              <span className="dot-pulse" aria-hidden="true"></span>
              <span>v1.0.2 • Direct Download (Safe & Secure)</span>
            </div>
          </div>

          {/* Feature Badges Row */}
          <div className="features-row">
            <div className="feature-item">
              <div className="feature-title">Fast Trivia</div>
              <div className="feature-desc">10-sec rounds</div>
            </div>
            <div className="feature-item">
              <div className="feature-title">15+ Topics</div>
              <div className="feature-desc">Movies, series ..</div>
            </div>
            <div className="feature-item">
              <div className="feature-title">No Ads</div>
              <div className="feature-desc">Pure focus</div>
            </div>
          </div>

          {/* Footer branding */}
          <footer className="footer-text">
            <span>© 2026 </span>
            <a className="footer-link" href="https://github.com" target="_blank" rel="noopener noreferrer">
              Quizkaivryn App
            </a>
            <span>. All rights reserved.</span>
          </footer>
        </main>
      </div>
    </>
  );
}
