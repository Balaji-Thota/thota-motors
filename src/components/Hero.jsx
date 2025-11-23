import { Link } from 'react-router-dom';

function Hero() {
    return (
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>THOTA MOTORS</h1>
          <p>Your Trusted Car Service Center for Reliable Repairs & Maintenance!</p>
          <Link to="/schedule-service" className="cta-button">Schedule Service</Link>
        </div>
      </section>
    );
  }
  
  export default Hero;
  