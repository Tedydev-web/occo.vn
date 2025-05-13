import { FreeMode, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/free-mode";

const AboutTestimonial = () => {
  return (
    <>
      <section className="testimonial__area-2">
        <div className="container g-0 line pb-140">
          <span className="line-3"></span>

          <div className="row g-0">
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div className="testimonial__video">
                <video autoPlay muted loop>
                  <source src="assets/video/testimonial.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
              <div className="testimonial__slider-wrapper-2">
                <div className="testimonial__slider">
                  <Swiper
                    modules={[FreeMode, Navigation]}
                    spaceBetween={0}
                    slidesPerView={1}
                    freeMode={true}
                    loop={true}
                    speed={2000}
                    navigation={{
                      nextEl: ".next-button",
                      prevEl: ".prev-button",
                    }}
                  >
                    <SwiperSlide>
                      <div className="testimonial__slide">
                        <div className="testimonial__inner-2">
                          <h2 className="testimonial__title-2">
                            OCCO giúp tôi kết nối với rất nhiều bạn mới
                          </h2>
                          <p className="testimonial__text-2">
                            Từ khi sử dụng OCCO, mình đã mở rộng mạng lưới bạn bè, tham gia nhiều sự kiện ý nghĩa và cảm thấy an toàn khi chia sẻ khoảnh khắc cá nhân.
                          </p>
                          <h3 className="testimonial__author">Nguyễn Minh Anh</h3>
                          <h4 className="testimonial__role">Sinh viên</h4>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="testimonial__slide">
                        <div className="testimonial__inner-2">
                          <h2 className="testimonial__title-2">
                            Trải nghiệm mạng xã hội hiện đại, bảo mật
                          </h2>
                          <p className="testimonial__text-2">
                            OCCO có giao diện đẹp, dễ dùng và rất chú trọng bảo mật. Gia đình tôi yên tâm cho các con sử dụng để học hỏi và kết nối cộng đồng.
                          </p>
                          <h3 className="testimonial__author">Lê Thị Hồng</h3>
                          <h4 className="testimonial__role">Phụ huynh</h4>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="testimonial__slide">
                        <div className="testimonial__inner-2">
                          <h2 className="testimonial__title-2">
                            OCCO lan tỏa giá trị tích cực
                          </h2>
                          <p className="testimonial__text-2">
                            Tôi thích OCCO vì cộng đồng thân thiện, nhiều hoạt động ý nghĩa và luôn khuyến khích chia sẻ những điều tốt đẹp mỗi ngày.
                          </p>
                          <h3 className="testimonial__author">Phạm Quốc Bảo</h3>
                          <h4 className="testimonial__role">Nhân viên văn phòng</h4>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>

                <div className="testimonial__pagination">
                  <div style={{ cursor: "pointer" }} className="prev-button">
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                  <div style={{ cursor: "pointer" }} className="next-button">
                    <i className="fa-solid fa-arrow-left"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutTestimonial;
