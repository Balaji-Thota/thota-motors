function Contact() {
    return (
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2>Contact Us</h2>
            <p>Get in touch with our team</p>
          </div>
  
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info">
              <div className="info-card">
                <i className="fas fa-map-marker-alt"></i>
                <h3>Location</h3>
                <p>Plot No:62, AutoNagar, Phase-1, Vedayapalem,<br />Nellore, AP 524004</p>
              </div>
  
              <div className="info-card">
                <i className="fas fa-phone-alt"></i>
                <h3>Phone 🇮🇳</h3>
                <p>+91 9848 452133</p>
                <p>+91 8886 413235</p>
              </div>
  
              <div className="info-card">
                <i className="fas fa-clock"></i>
                <h3>Hours</h3>
                <p>Mon-Sat: 10:00 AM - 7:30 PM<br />Sun: Closed</p>
              </div>
  
              <div className="info-card">
                <i className="fas fa-envelope"></i>
                <h3>Email</h3>
                <p>
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" 
                        alt="Gmail" 
                        width="16" 
                        style={{ verticalAlign: "middle", marginRight: "8px" }}
                    />
                    thotamotors19@gmail.com
                </p>
              </div>
            </div>
  
            {/* Google Map Embed */}
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3864.3773588875315!2d79.94994160000002!3d14.4053971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4cf2f1027fc391%3A0xcf5d7a95c7a49a56!2sTata%20Motors!5e0!3m2!1sen!2sus!4v1740506267071!5m2!1sen!2sus"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Thota Motors Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Contact;
  