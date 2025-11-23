import { useState, useEffect } from 'react';

function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  // Check if business is currently open
  useEffect(() => {
    const checkBusinessHours = () => {
      const now = new Date();
      const day = now.getDay(); // 0 = Sunday, 6 = Saturday
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const currentTime = hours + minutes / 60;

      // Open: Mon-Sat (10:00 AM - 7:30 PM), Closed: Sunday
      const openTime = 10; // 10:00 AM
      const closeTime = 19.5; // 7:30 PM

      if (day === 0) {
        // Sunday - Closed
        setIsOpen(false);
      } else if (day >= 1 && day <= 6) {
        // Monday to Saturday
        setIsOpen(currentTime >= openTime && currentTime < closeTime);
      } else {
        setIsOpen(false);
      }
    };

    checkBusinessHours();
    // Check every minute
    const interval = setInterval(checkBusinessHours, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Contact Us</h2>
          <p>Get in touch with our team</p>
          <div style={{ marginTop: "10px" }}>
            <span className={`status-badge ${isOpen ? 'open' : 'closed'}`}>
              {isOpen ? '🟢 Open Now' : '🔴 Closed Now'}
            </span>
          </div>
        </div>

        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
            <div className="info-card">
              <h3>Location
                <a 
                  href="https://www.google.com/maps/place/Tata+Motors/@14.4053971,79.9499416,17z/data=!3m1!4b1!4m6!3m5!1s0x3a4cf2f1027fc391:0xcf5d7a95c7a49a56!8m2!3d14.4053971!4d79.9499416!16s%2Fg%2F11g6b0qq1n?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="location-icon-link"
                >
                  <img src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Google_Maps_icon_%282020%29.svg" alt="Google Maps" className="google-maps-icon" />
                </a>
              </h3>
              <p>
                Plot No:62, AutoNagar, Phase-1,
                Vedayapalem, Nellore, AP - 524004
              </p>
            </div>

            <div className="info-card">
              <h3>Phone 🇮🇳</h3>
              <p>
                <a href="tel:+919848452133" className="phone-link">
                  +91 9848 452133
                </a>
              </p>
              <p>
                <a href="tel:+918886413235" className="phone-link">
                  +91 8886 413235
                </a>
              </p>
              <a 
                href="https://wa.me/919848452133?text=Hello%20Thota%20Motors,%20I%20would%20like%20to%20inquire%20about%20your%20services." 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn"
                style={{ marginTop: "10px", fontSize: "14px", padding: "8px 16px", backgroundColor: "#25D366" }}
              >
                WhatsApp Us
              </a>
            </div>

            <div className="info-card">
              <h3>Working Hours</h3>
              <p>
                <strong>Monday - Saturday :</strong> <br/>10:00 AM - 7:30 PM<br />
                <strong>Sunday:</strong> Closed
              </p>
            </div>

            <div className="info-card">
              <h3>Email</h3>
              <p>
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" 
                  alt="Gmail" 
                  width="16" 
                  style={{ verticalAlign: "middle", marginRight: "8px" }}
                />
                <a href="mailto:thotamotors19@gmail.com" className="phone-link">
                  thotamotors19@gmail.com
                </a>
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

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919848452133?text=Hello%20Thota%20Motors,%20I%20would%20like%20to%20inquire%20about%20your%20services." 
        className="whatsapp-float"
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </section>
  );
}

export default Contact;