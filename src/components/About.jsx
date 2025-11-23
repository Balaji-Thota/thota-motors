function About() {
    return (
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            {/* About Text */}
            <div className="about-text">
              <h2>About <u>THOTA MOTORS</u></h2>
              <p>
                With over 15 years of experience, Thota Motors has been the trusted choice for automotive repair and maintenance in the region. Our technicians use innovative equipment and genuine parts to ensure your vehicle receives the best care possible.
              </p>
  
              <div className="about-features">
                <div className="feature">
                  <i className="fas fa-tools"></i>
                  <h4>Technicians</h4>
                  <p>Experienced<br /> Mechanics</p>
                </div>
                <div className="feature">
                  <i className="fas fa-clock"></i>
                  <h4>Quick Service</h4>
                  <p>Fast service<br />Timely work</p>
                </div>
                <div className="feature">
                  <i className="fas fa-shield-alt"></i>
                  <h4>Quality Parts</h4>
                  <p>TATA Motors original parts | Available!</p>
                </div>
              </div>
            </div>
  
            {/* About Image */}
            <div className="about-image">
              <img src="/images/1.jpg" alt="Our Workshop" />
              <div className="image-badge">
                <div className="badge-year">EST.</div>
                <div className="badge-number">2009</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default About;
  