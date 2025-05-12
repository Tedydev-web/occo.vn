import { useEffect, useRef } from "react";
import Link from "next/link.js";
import Award from "../../../public/assets/imgs/about/award.png";
import Image from "next/image.js";
import animationWordCome from "@/lib/utils/animationWordCome";

const AboutHero = () => {
  const wordAnim = useRef();
  useEffect(() => {
    animationWordCome(wordAnim.current);
  }, []);
  return (
    <>
      <section className="hero__about">
        <div className="container g-0 line">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-12">
              <div className="hero__about-content">
                <h1 className="hero-title animation__word_come" ref={wordAnim}>
                  Kết nối thế giới của bạn với <span style={{color:'#00bfff'}}>OCCO</span>!
                  <br />
                  Mạng xã hội hiện đại – Nơi livestream, kết bạn, chia sẻ và giải trí.
                </h1>
                <div className="hero__about-info">
                  <div className="hero__about-btn">
                    <div className="btn_wrapper">
                      <Link
                        href="/service"
                        className="wc-btn-primary btn-hover btn-item"
                      >
                        <span></span> Khám phá OCCO <br />
                        ngay hôm nay!
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="hero__about-text title-anim">
                    <p>
                      OCCO mang đến trải nghiệm mạng xã hội thế hệ mới: kết nối
                      bạn bè, khám phá cộng đồng, livestream, chia sẻ khoảnh
                      khắc, giải trí không giới hạn.
                      <br />
                      Tham gia OCCO để gặp gỡ những người bạn mới, thể hiện cá
                      tính và truyền cảm hứng mỗi ngày!
                    </p>
                  </div>
                  <div className="hero__about-award">
                    <Image
                      priority
                      width={126}
                      height={82}
                      src={Award}
                      alt="Best Studio Award"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row hero__about-row">
            <div className="col-xxl-12">
              <div className="hero__about-video">
                <video loop muted autoPlay playsInline>
                  <source src="assets/video/video.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHero;
