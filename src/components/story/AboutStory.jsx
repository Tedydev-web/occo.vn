import Story1 from "../../../public/assets/imgs/story/1.jpg";
import Story2 from "../../../public/assets/imgs/story/2.jpg";
import Story3 from "../../../public/assets/imgs/story/3.jpg";
import Story4 from "../../../public/assets/imgs/story/4.jpg";
import Image from "next/image";

const AboutStory = () => {
  return (
    <>
      <section className="story__area">
        <div className="container g-0 line pt-140">
          <span className="line-3"></span>
          <div className="sec-title-wrapper">
            <div className="from-text">
              from <span>1990</span>
            </div>

            <div className="row">
              <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                <h2 className="sec-sub-title title-anim">Digital Studio</h2>
                <h3 className="sec-title title-anim">Our story</h3>
              </div>
              <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                <div className="story__text">
                  <p>
                    OCCO là mạng xã hội thế hệ mới, nơi mọi người có thể kết nối, chia sẻ và khám phá những giá trị cộng đồng đa sắc màu. Chúng tôi tin rằng mỗi cá nhân đều xứng đáng được lắng nghe và truyền cảm hứng.
                  </p>
                  <p>
                    Đội ngũ OCCO luôn đặt sự sáng tạo, bảo mật và trải nghiệm người dùng lên hàng đầu. Sứ mệnh của chúng tôi là xây dựng một không gian an toàn, hiện đại, thúc đẩy sự gắn kết và phát triển cộng đồng, giúp bạn mở rộng mạng lưới và lan tỏa giá trị tích cực.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
              <div className="story__img-wrapper">
                <Image
                  priority
                  width={300}
                  style={{ height: "auto" }}
                  src={Story1}
                  alt="Story Thumbnail"
                  className="w-100"
                />
              </div>
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div className="story__img-wrapper img-anim">
                <Image
                  priority
                  width={520}
                  style={{ height: "auto" }}
                  src={Story2}
                  alt="Story Thumbnail"
                  data-speed="auto"
                />
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div className="story__img-wrapper">
                <Image
                  priority
                  width={230}
                  style={{ height: "auto" }}
                  src={Story3}
                  alt="Story Thumbnail"
                />
                <Image
                  priority
                  width={410}
                  style={{ height: "auto" }}
                  src={Story4}
                  alt="Story Thumbnail"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutStory;
