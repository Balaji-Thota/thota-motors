import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const progressRef = useRef(null);


  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleDropdownToggle = () => {
  setDropdownOpen(!dropdownOpen);
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
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownOpen && !event.target.closest('.profile-dropdown')) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [dropdownOpen]);

  const isReportPage = ["/report-problem", "/login", "/signup", "/schedule-service"].includes(location.pathname);

  return (
    <nav className={`navbar ${scrolled || isReportPage ? 'scrolled' : ''}`}>
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
        {/* MOBILE: Profile in center */}
        <div className="profile-dropdown mobile-profile">
          <button className="profile-btn" onClick={handleDropdownToggle}>
            <i className="fas fa-user-circle"></i>
          </button>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li><Link to="/login" onClick={() => setDropdownOpen(false)}>Login</Link></li>
              <li><Link to="/signup" onClick={() => setDropdownOpen(false)}>Sign Up</Link></li>
              <li><Link to="/report-problem" onClick={() => setDropdownOpen(false)}>Report an Issue</Link></li>
            </ul>
          )}
        </div>

        {/* MOBILE: Hamburger on right */}
        <div className={`nav-toggle ${menuOpen ? 'active' : ''}`} onClick={handleToggle}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* DESKTOP: Nav menu in center */}
        <div className="nav-center desktop-nav">
          <ul className="nav-menu">
            <li><a href="#home" onClick={() => setMenuOpen(false)} className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
            <li><a href="#services" onClick={() => setMenuOpen(false)} className={activeSection === 'services' ? 'active' : ''}>Services</a></li>
            <li><a href="#gallery" onClick={() => setMenuOpen(false)} className={activeSection === 'gallery' ? 'active' : ''}>Gallery</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)} className={activeSection === 'about' ? 'active' : ''}>About</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)} className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
          </ul>
        </div>

        {/* DESKTOP: Profile on right */}
        <div className="profile-dropdown desktop-profile">
          <button className="profile-btn" onClick={handleDropdownToggle}>
            <i className="fas fa-user-circle"></i>
          </button>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li><Link to="/login" onClick={() => setDropdownOpen(false)}>Login</Link></li>
              <li><Link to="/signup" onClick={() => setDropdownOpen(false)}>Sign Up</Link></li>
              <li><Link to="/report-problem" onClick={() => setDropdownOpen(false)}>Report an Issue</Link></li>
            </ul>
          )}
        </div>

        {/* NEW: Mobile slide-in menu */}
        <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
          <ul className="mobile-nav-menu">
            <li><a href="#home" onClick={() => setMenuOpen(false)} className={activeSection === 'home' ? 'active' : ''}><i className="fas fa-home"></i> Home</a></li>
            <li><a href="#services" onClick={() => setMenuOpen(false)} className={activeSection === 'services' ? 'active' : ''}><i className="fas fa-wrench"></i> Services</a></li>
            <li><a href="#gallery" onClick={() => setMenuOpen(false)} className={activeSection === 'gallery' ? 'active' : ''}><i className="fas fa-images"></i> Gallery</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)} className={activeSection === 'about' ? 'active' : ''}><i className="fas fa-info-circle"></i> About</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)} className={activeSection === 'contact' ? 'active' : ''}><i className="fas fa-phone"></i> Contact</a></li>
          </ul>
        </div>
      </>
    ) : (
      <>
        <div></div> {/* Empty middle column for grid */}
        <div className="profile-dropdown">
          <Link to="/" className="btn">Home</Link>
        </div>
      </>
    )}
    </div>
      {!isReportPage && <div className="scroll-progress" ref={progressRef}></div>}
  </nav>


  );
}

export default Navbar;
