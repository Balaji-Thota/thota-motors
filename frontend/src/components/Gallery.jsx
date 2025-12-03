import { useEffect, useState } from 'react';

function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    { src: "/images/2.jpg", alt: "Workshop Image 1" },
    { src: "/images/3.jpg", alt: "Workshop Image 2" },
    { src: "/images/6.JPG", alt: "Workshop Image 3" },
    { src: "/images/4.jpg", alt: "Workshop Image 4" },
    { src: "/images/7.JPG", alt: "Workshop Image 5" },
    { src: "/images/8.jpg", alt: "Workshop Image 6" },
    { src: "/images/5.jpg", alt: "Workshop Image 7" },
    { src: "/images/10.jpg", alt: "Workshop Image 8" },
    { src: "/images/9.jpg", alt: "Workshop Image 9" }
  ];

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (!lightboxOpen) return;
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'Escape') closeLightbox();
  };

  // Add keyboard listener
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-header">
          <h2>Our Workshop</h2>
          <p>Take a look at our workspace</p>
        </div>

        <div className="gallery-grid">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="gallery-item"
              onClick={() => openLightbox(index)}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
              <div className="gallery-overlay">
                <span>Click to view</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <i className="fas fa-times"></i>
          </button>

          <button className="lightbox-arrow lightbox-prev" onClick={(e) => { e.stopPropagation(); prevImage(); }}>
            <i className="fas fa-chevron-left"></i>
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={images[currentImage].src} alt={images[currentImage].alt} />
            <p className="lightbox-counter">{currentImage + 1} / {images.length}</p>
          </div>

          <button className="lightbox-arrow lightbox-next" onClick={(e) => { e.stopPropagation(); nextImage(); }}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      )}
    </section>
  );
}

export default Gallery;