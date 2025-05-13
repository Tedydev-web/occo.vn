import { FreeMode, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

const DigitalAgencyRoll = () => {
  return (
    <>
      <section className="roll__area">
        <div className="roll__slider">
          <Swiper
            modules={[FreeMode, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            freeMode={true}
            loop={true}
            centeredSlides={true}
            allowTouchMove={false}
            speed={2000}
            autoplay={{
              delay: 1,
              disableOnInteraction: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
              800: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1300: {
                slidesPerView: 5,
              },
              1900: {
                slidesPerView: 8,
              },
            }}
          >
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Kết bạn</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Livestream</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Chat nhóm</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Story</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Video</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Khám phá</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Cộng đồng</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Bảo mật</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Sự kiện</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Đa nền tảng</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Chat nhóm</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Story</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Video</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Bảo mật</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Đa nền tảng</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Khám phá</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Cộng đồng</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Bảo mật</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Sự kiện</h2>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default DigitalAgencyRoll;
