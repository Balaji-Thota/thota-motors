import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const progressRef = useRef(null);


  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
  
      // Update scroll bar width
      if (progressRef.current) {
        progressRef.current.style.width = `${scrollPercent}%`;
      }
  
      // Toggle navbar scrolled background
      setScrolled(scrollTop > 50);
  
      // Highlight active nav link
      const sections = ['home', 'services', 'gallery', 'about', 'contact'];
      const scrollPosition = scrollTop + 200;
  
      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  

  const isReportPage = location.pathname === "/report-problem";

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
    <div className="navbar-wrapper">
    {/* Left: Brand name */}
    <div className="company-name-vertical">
      <a href="#home">
        <span className="line1">T/⬭\TA</span>
        <span className="line2">MOTORS</span>
      </a>
    </div>

    {!isReportPage ? (
      <>
        {/* Middle: Nav menu and toggle */}
        <div className="nav-center">
          <div className={`nav-toggle ${menuOpen ? 'active' : ''}`} onClick={handleToggle}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <li>
              <a href="#home" onClick={() => setMenuOpen(false)} className={activeSection === 'home' ? 'active' : ''}>Home</a>
            </li>
            <li>
              <a href="#services" onClick={() => setMenuOpen(false)} className={activeSection === 'services' ? 'active' : ''}>Services</a>
            </li>
            <li>
              <a href="#gallery" onClick={() => setMenuOpen(false)} className={activeSection === 'gallery' ? 'active' : ''}>Gallery</a>
            </li>
            <li>
              <a href="#about" onClick={() => setMenuOpen(false)} className={activeSection === 'about' ? 'active' : ''}>About Us</a>
            </li>
            <li>
              <a href="#contact" onClick={() => setMenuOpen(false)} className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
            </li>
          </ul>
        </div>

        {/* Right: Button */}
        <div className="report-btn">
          <Link to="/report-problem" className="btn" onClick={() => setMenuOpen(false)}>Report a Problem</Link>
        </div>
      </>
    ) : (
      <div className="report-btn" style={{ marginLeft: "auto" }}>
        <Link to="/" className="btn">Home</Link>
      </div>
    )}
  </div>
<div className="scroll-progress" ref={progressRef}></div>
</nav>


  );
}

export default Navbar;
