import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-box">
          <div className="auth-icon">
            <i className="fas fa-user-plus"></i>
          </div>
          <h1>Create Your Account</h1>
          <p className="auth-message">
            We're building an amazing customer experience platform!
          </p>
          <div className="coming-soon-badge">
            <i className="fas fa-tools"></i> Coming Soon
          </div>
          <p className="auth-info">
            Join our customer portal to enjoy:
          </p>
          <ul className="feature-list">
            <li><i className="fas fa-check"></i> Easy online booking</li>
            <li><i className="fas fa-check"></i> Digital service records</li>
            <li><i className="fas fa-check"></i> Exclusive member offers</li>
            <li><i className="fas fa-check"></i> Priority scheduling</li>
          </ul>
          <div className="auth-actions">
            <p>Get started today!</p>
            {/* <Link to="/schedule-service" className="btn">Schedule Your First Service</Link> */}
            <Link to="/#contact" className="btn-secondary">Contact Us Directly</Link>
          </div>
          <p className="auth-footer">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;