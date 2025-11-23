import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-box">
          <div className="auth-icon">
            <i className="fas fa-user-circle"></i>
          </div>
          <h1>Customer Login</h1>
          <p className="auth-message">
            We're building our customer portal to serve you better!
          </p>
          <div className="coming-soon-badge">
            <i className="fas fa-tools"></i> Coming Soon
          </div>
          <p className="auth-info">
            You'll soon be able to:
          </p>
          <ul className="feature-list">
            <li><i className="fas fa-check"></i> Track your service history</li>
            <li><i className="fas fa-check"></i> Book appointments online</li>
            <li><i className="fas fa-check"></i> View service invoices</li>
            <li><i className="fas fa-check"></i> Get service reminders</li>
          </ul>
          <div className="auth-actions">
            <p>Need service now?</p>
            {/* <Link to="/schedule-service" className="btn">Schedule a Service</Link> */}
            <Link to="/#contact" className="btn-secondary">Contact Us</Link>
          </div>
          <p className="auth-footer">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;