import Image from "next/image";
import Shape1 from "../../../public/assets/imgs/home-7/shape-1.png";
import Shape2 from "../../../public/assets/imgs/home-7/shape-2.png";
import Shape3 from "../../../public/assets/imgs/home-7/shape-3.png";

const ServiceV6Hero = () => {
  return (
    <>
      <section className="hero__area-7">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="hero__title-wrap-7">
                <h1 className="hero__title-7">
                  OCCO - Mạng xã hội thế hệ mới
                  <Image
                    priority
                    width={135}
                    style={{ height: "auto" }}
                    src={Shape1}
                    alt="shape"
                  />
                  Kết nối, sáng tạo, truyền cảm hứng
                  <Image
                    priority
                    width={125}
                    style={{ height: "auto" }}
                    src={Shape2}
                    alt="shape"
                  />
                </h1>
              </div>
              <div className="hero__text-7">
                <h2 className="about">Khám phá OCCO</h2>
                <p>
                  OCCO mang đến trải nghiệm mạng xã hội hiện đại: kết bạn, trò chuyện, livestream, chia sẻ khoảnh khắc và tham gia cộng đồng đa sắc màu. Cùng OCCO, mọi kết nối đều trở nên ý nghĩa và truyền cảm hứng mỗi ngày.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Image
          priority
          width={320}
          style={{ height: "auto" }}
          src={Shape3}
          alt="shape"
          className="shape-1"
        />
      </section>
    </>
  );
};

export default ServiceV6Hero;
