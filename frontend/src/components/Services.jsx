import { useEffect, useState } from 'react';

function Services() {
  const [showServices, setShowServices] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const serviceSection = document.getElementById('services');
      if (serviceSection) {
        const sectionTop = serviceSection.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
          setShowServices(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Complete Auto Repair & Maintenance, External services included!</p>
        </div>

        <div className={`services-grid ${showServices ? 'animate-services' : ''}`}>
          {/* Service 1 */}
          <div className="service-card">
            <h3>Oil Change Service</h3>
            <p>Professional oil change with multi-point inspection</p>
            <ul>
              <li>Synthetic oil options</li>
              <li>Filter replacement</li>
              <li>Fluid check</li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="service-card">
            <h3>Brake Service</h3>
            <p>Complete brake system inspection and repair</p>
            <ul>
              <li>Brake pad replacement</li>
              <li>Rotor resurfacing</li>
              <li>Brake fluid service</li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="service-card">
            <h3>Engine Diagnostic</h3>
            <p>Engine & Transmission Repairs</p>
            <ul>
              <li>Check engine light</li>
              <li>Engine overhauling</li>
              <li>Transmission issues</li>
            </ul>
          </div>

          {/* Service 4 */}
          <div className="service-card">
            <h3>Wheel Service</h3>
            <p>Tire rotation and wheel alignment</p>
            <ul>
              <li>Tire balancing</li>
              <li>Wheel alignment</li>
              <li>Tire pressure check</li>
            </ul>
          </div>

          {/* Service 5 */}
          <div className="service-card">
            <h3>Body Work</h3>
            <p>Restore your car's shine</p>
            <ul>
              <li>Fix dents & scratches</li>
              <li>Quality paint finish</li>
              <li>Rust protection coating</li>
            </ul>
          </div>

          {/* Service 6 */}
          <div className="service-card">
            <h3>Car Wash</h3>
            <p>Car Wash & Interior Vacuum</p>
            <ul>
              <li>Thorough exterior wash</li>
              <li>Interior vacuuming</li>
              <li>Odor removal & fresh scent</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Services;
