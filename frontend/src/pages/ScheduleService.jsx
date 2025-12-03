import { Link } from 'react-router-dom';

function ScheduleService() {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-box">
          <div className="auth-icon">
            <i className="fas fa-calendar-check"></i>
          </div>
          <h1>Schedule Your Service</h1>
          <p className="auth-message">
            We're building an advanced online booking system for your convenience!
          </p>
          <div className="coming-soon-badge">
            <i className="fas fa-tools"></i> Coming Soon
          </div>
          <p className="auth-info">
            Our upcoming booking system will offer:
          </p>
          <ul className="feature-list">
            <li><i className="fas fa-check"></i> Choose your preferred date & time</li>
            <li><i className="fas fa-check"></i> Select specific services needed</li>
            <li><i className="fas fa-check"></i> Get instant confirmation</li>
            <li><i className="fas fa-check"></i> Receive SMS reminders</li>
          </ul>
          <div className="auth-actions">
            <p>Need immediate assistance?</p>
            <a href="tel:+919848452133" className="btn">
              <i className="fas fa-phone"></i> Call Us: +91 9848 452133
            </a>
            <a 
              href="https://wa.me/919848452133?text=Hello%20Thota%20Motors,%20I%20would%20like%20to%20schedule%20a%20service." 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <i className="fab fa-whatsapp"></i> WhatsApp Us
            </a>
          </div>
          <div className="quick-info">
            <p><strong>Working Hours:</strong></p>
            <p>Monday - Saturday: 10:00 AM - 7:30 PM</p>
            <p>Sunday: Closed</p>
          </div>
          <p className="auth-footer">
            Have questions? <Link to="/#contact">Contact Us</Link> or <Link to="/report-problem">Report an Issue</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ScheduleService;