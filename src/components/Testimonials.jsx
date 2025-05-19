import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>What Our Customers Say</h2>
          <p>Don't just take our word for it</p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          loop={true}
        >
          {/* Testimonial 1 */}
          <SwiperSlide>
            <div className="testimonial-card">
              <p>"Great expertise. We are basically from Vijayawada. Couple of things we could not get fixed in Vijayawada... we got them done at this center. Really loved it."</p>
              <div className="testimonial-author">
                <h4>Soujanya Chinnapareddy</h4>
                <p>Loyal Customer</p>
              </div>
            </div>
          </SwiperSlide>

          {/* Testimonial 2 */}
          <SwiperSlide>
            <div className="testimonial-card">
              <p>"I would really suggest someone to go there. Owner is a very humble person and it is one of the best reliable car service centres."</p>
              <div className="testimonial-author">
                <h4>Naveen T</h4>
                <p>Regular Customer</p>
              </div>
            </div>
          </SwiperSlide>

          {/* Testimonial 3 */}
          <SwiperSlide>
            <div className="testimonial-card">
              <p>"Fantastic Service. You don't even get this kind of service in Nellore Authorized Service Centre."</p>
              <div className="testimonial-author">
                <h4>Sivaditya Gali (Sivaditya)</h4>
                <p>Local Guide</p>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;
