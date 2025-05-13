import animationCharCome from "@/lib/utils/animationCharCome";
import { useEffect, useRef } from "react";
import { Accordion } from "react-bootstrap";
import Detail1 from "../../../public/assets/imgs/blog/detail/1.jpg";
import Detail2 from "../../../public/assets/imgs/blog/detail/2.jpg";
import Detail3 from "../../../public/assets/imgs/blog/detail/3.jpg";
import Image from "next/image";
import Link from "next/link";

const Privacy1 = () => {
  const charAnim = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
  }, []);
  return (
    <>
      <section className="faq__area-6">
        <div className="container g-0 line pt-130 pb-140">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper">
                <h2 className="sec-title-2 animation__char_come" ref={charAnim}>
                  Chính sách bảo mật
                </h2>
                <p>
                  Chính sách bảo mật của OCCO.
                </p>
              </div>
            </div>
          </div>

          <div className="col-xxl-8 col-xl-10 offset-xxl-2 offset-xl-1">
              <div className="blog__detail-content">
                <p>
                  Chúng tôi cam kết tôn trọng và bảo vệ quyền riêng tư của bạn. Chính sách bảo mật này nhằm mục đích giải thích cách chúng tôi thu thập, sử dụng, chia sẻ và bảo vệ thông tin cá nhân của bạn khi bạn truy cập và sử dụng website của chúng tôi.
                </p>
                <p>
                  Chúng tôi cam kết tôn trọng và bảo vệ quyền riêng tư của bạn. Chính sách bảo mật này nhằm mục đích giải thích cách chúng tôi thu thập, sử dụng, chia sẻ và bảo vệ thông tin cá nhân của bạn khi bạn truy cập và sử dụng website của chúng tôi.
                </p>
                <Image
                  priority
                  width={850}
                  style={{ height: "auto" }}
                  src={Detail2}
                  alt="Blog Image"
                />
                <h2>JavaScript</h2>
                <p>
                  Chúng tôi cam kết tôn trọng và bảo vệ quyền riêng tư của bạn. Chính sách bảo mật này nhằm mục đích giải thích cách chúng tôi thu thập, sử dụng, chia sẻ và bảo vệ thông tin cá nhân của bạn khi bạn truy cập và sử dụng website của chúng tôi.
                </p>
                <h2>Fremework</h2>
                <p>
                  Chúng tôi cam kết tôn trọng và bảo vệ quyền riêng tư của bạn. Chính sách bảo mật này nhằm mục đích giải thích cách chúng tôi thu thập, sử dụng, chia sẻ và bảo vệ thông tin cá nhân của bạn khi bạn truy cập và sử dụng website của chúng tôi.
                </p>
                <ul>
                  <li>Brand Development</li>
                  <li>UX/UI Design</li>
                  <li>Front-end Development</li>
                  <li>Copywriting</li>
                  <li>Shopify Development</li>
                </ul>
                <h2>Visual Studio</h2>
                <p>
                  Chúng tôi cam kết tôn trọng và bảo vệ quyền riêng tư của bạn. Chính sách bảo mật này nhằm mục đích giải thích cách chúng tôi thu thập, sử dụng, chia sẻ và bảo vệ thông tin cá nhân của bạn khi bạn truy cập và sử dụng website của chúng tôi.
                </p>
                <Image
                  priority
                  width={850}
                  style={{ height: "auto" }}
                  src={Detail3}
                  alt="Code"
                />
              </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default Privacy1;
