function Testimonials() {
  const reviews = [
    {
      name: "Soujanya Chinnapareddy",
      text: "Great expertise. We are basically from Vijayawada. Couple of things we could not get fixed in Vijayawada... we got them done at this center. Really loved it.",
      rating: 5,
      date: "3 months ago"
    },
    {
      name: "Naveen T",
      text: "I would really suggest someone to go there. Owner is a very humble person and it is one of the best reliable car service centres.",
      rating: 5,
      date: "5 months ago"
    },
    {
      name: "Sivaditya Gali",
      subtitle: "Local Guide",
      text: "Fantastic Service. You don't even get this kind of service in Nellore Authorized Service Centre.",
      rating: 5,
      date: "8 months ago"
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <i 
        key={index} 
        className={index < rating ? "fas fa-star" : "far fa-star"}
      ></i>
    ));
  };

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>What Our Customers Say</h2>
          <p>Real reviews from Google</p>
        </div>

        <div className="testimonials-grid-static">
          {reviews.map((review, index) => (
            <div key={index} className="testimonial-card-google">
              {/* Google Badge Header */}
              <div className="google-header">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" 
                  alt="Google" 
                  className="google-logo"
                />
                <span className="posted-on">Posted on Google</span>
              </div>

              {/* Star Rating */}
              <div className="star-rating">
                {renderStars(review.rating)}
              </div>

              {/* Review Text */}
              <p className="review-text">"{review.text}"</p>

              {/* Author Info */}
              <div className="testimonial-author-google">
                <div className="author-avatar">
                  {review.name.charAt(0)}
                </div>
                <div className="author-details">
                  <h4>{review.name}</h4>
                  {review.subtitle && <span className="author-subtitle">{review.subtitle}</span>}
                  <p className="review-date">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;