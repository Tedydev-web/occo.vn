import { FreeMode, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Testimonial41 from "../../../public/assets/imgs/testimonial/4/1.jpg";
import Testimonial42 from "../../../public/assets/imgs/testimonial/4/2.jpg";
import Testimonial43 from "../../../public/assets/imgs/testimonial/4/3.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const StartupAgencyTestimonial = () => {
  return (
    <>
      <section className="testimonial__area-4 mt-5">
        <div className="container g-0 line_4">
          <div className="line-col-4">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className="row">
            <div className="col-xxl-12">
              <div className="testimonial__sec-title text-anim">
                <h2 className="sec-subtile-6">Cảm nhận người dùng</h2>
                <h3 className="sec-title-6 title-anim">Cộng đồng OCCO nói gì?</h3>
                <p>
                  Hàng triệu bạn trẻ đã lựa chọn OCCO để kết nối, livestream và chia sẻ mỗi ngày.
                </p>
              </div>
            </div>
            <div className="testimonial__slider-4">
              <Swiper
                modules={[FreeMode, Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={3}
                freeMode={true}
                loop={true}
                speed={2000}
                navigation={{
                  prevEl: ".prev-button",
                  nextEl: ".next-button",
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
                pagination={{
                  el: ".pagination",
                  type: "fraction",
                }}
                className="swiper testimonial__slider-4"
              >
                <div className="swiper-wrapper">
                  <SwiperSlide>
                    <div className="testimonial__slide-4">
                      <Image
                        priority
                        width={85}
                        height={85}
                        className="testimonial__img-4"
                        src={Testimonial41}
                        alt="Testimonial Image"
                      />
                      <div className="testimonial__info-4">
                        <h4 className="testimonial__feedback-4">
                          Livestream cực chất!
                        </h4>
                        <p>
                          OCCO giúp mình dễ dàng livestream, kết nối với nhiều bạn mới và nhận được rất nhiều sự ủng hộ từ cộng đồng.
                        </p>
                        <h5 className="testimonial__name-4">
                          Minh Anh
                        </h5>
                        <h6 className="testimonial__role-4">
                          Streamer
                        </h6>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimonial__slide-4">
                      <Image
                        priority
                        width={85}
                        height={85}
                        className="testimonial__img-4"
                        src={Testimonial42}
                        alt="Testimonial Image"
                      />
                      <div className="testimonial__info-4">
                        <h4 className="testimonial__feedback-4">Kết bạn siêu nhanh</h4>
                        <p>
                          Chỉ vài thao tác là mình đã tìm được bạn chung sở thích, chat nhóm cực vui và an toàn.
                        </p>
                        <h5 className="testimonial__name-4">Quốc Duy</h5>
                        <h6 className="testimonial__role-4">Sinh viên</h6>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimonial__slide-4">
                      <Image
                        priority
                        width={85}
                        height={85}
                        className="testimonial__img-4"
                        src={Testimonial43}
                        alt="Testimonial Image"
                      />
                      <div className="testimonial__info-4">
                        <h4 className="testimonial__feedback-4">
                          Chia sẻ video cực dễ
                        </h4>
                        <p>
                          OCCO cho phép mình đăng video, ảnh chất lượng cao mà không lo bị giới hạn. Bảo mật cũng rất yên tâm!
                        </p>
                        <h5 className="testimonial__name-4">Thuỳ Linh</h5>
                        <h6 className="testimonial__role-4">
                          Gen Z
                        </h6>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimonial__slide-4">
                      <Image
                        priority
                        width={85}
                        height={85}
                        className="testimonial__img-4"
                        src={Testimonial41}
                        alt="Testimonial Image"
                      />
                      <div className="testimonial__info-4">
                        <h4 className="testimonial__feedback-4">
                          Cộng đồng truyền cảm hứng
                        </h4>
                        <p>
                          Ở OCCO, mình luôn cảm thấy được chia sẻ, học hỏi và nhận động lực tích cực từ mọi người.
                        </p>
                        <h5 className="testimonial__name-4">Hải Đăng</h5>
                        <h6 className="testimonial__role-4">
                          Vlogger
                        </h6>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimonial__slide-4">
                      <Image
                        priority
                        width={85}
                        height={85}
                        className="testimonial__img-4"
                        src={Testimonial42}
                        alt="Testimonial Image"
                      />
                      <div className="testimonial__info-4">
                        <h4 className="testimonial__feedback-4">Giải trí mỗi ngày</h4>
                        <p>
                          OCCO là nơi mình thư giãn sau giờ học, xem livestream, chơi mini game cùng bạn bè rất vui vẻ.
                        </p>
                        <h5 className="testimonial__name-4">Bảo Trân</h5>
                        <h6 className="testimonial__role-4">Học sinh</h6>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimonial__slide-4">
                      <Image
                        priority
                        width={85}
                        height={85}
                        className="testimonial__img-4"
                        src={Testimonial43}
                        alt="Testimonial Image"
                      />
                      <div className="testimonial__info-4">
                        <h4 className="testimonial__feedback-4">
                          Bảo mật và riêng tư
                        </h4>
                        <p>
                          OCCO luôn bảo vệ thông tin cá nhân của mình, mình rất yên tâm khi sử dụng app này mỗi ngày.
                        </p>
                        <h5 className="testimonial__name-4">Kim Ngân</h5>
                        <h6 className="testimonial__role-4">
                          Content Creator
                        </h6>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
                <div className="testimonial__btn-4">
                  <div
                    style={{ cursor: "pointer" }}
                    className="next-button swipper-btn"
                  >
                    <i className="fa-solid fa-arrow-left"></i>
                  </div>
                  <div
                    style={{ cursor: "pointer" }}
                    className="prev-button swipper-btn"
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                  <div className="pagination testimonial__pagination-4">
                    <div className="pag"></div>
                  </div>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StartupAgencyTestimonial;
