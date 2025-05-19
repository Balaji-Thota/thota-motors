function Gallery() {
    return (
      <section id="gallery" className="gallery">
        <div className="container">
          <div className="section-header">
            <h2>Our Workshop</h2>
            <p>Take a look at our workspace</p>
          </div>
  
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="/images/2.jpg" alt="Workshop Image 1" loading="lazy" />
            </div>
            <div className="gallery-item">
              <img src="/images/3.jpg" alt="Workshop Image 2" loading="lazy" />
            </div>
            <div className="gallery-item">
              <img src="/images/6.JPG" alt="Workshop Image 3" loading="lazy" />
            </div>
            <div className="gallery-item">
              <img src="/images/4.jpg" alt="Workshop Image 4" loading="lazy" />
            </div>
            <div className="gallery-item">
              <img src="/images/7.JPG" alt="Workshop Image 5" loading="lazy" />
            </div>
            <div className="gallery-item">
              <img src="/images/8.jpg" alt="Workshop Image 6" loading="lazy" />
            </div>
            <div className="gallery-item">
              <img src="/images/5.jpg" alt="Workshop Image 7" loading="lazy" />
            </div>
            <div className="gallery-item">
              <img src="/images/10.jpg" alt="Workshop Image 8" loading="lazy" />
            </div>
            <div className="gallery-item">
              <img src="/images/9.jpg" alt="Workshop Image 9" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Gallery;
  