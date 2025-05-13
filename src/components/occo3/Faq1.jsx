import animationCharCome from "@/lib/utils/animationCharCome";
import { useEffect, useRef } from "react";
import { Accordion } from "react-bootstrap";

const Faq1 = () => {
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
                  Câu hỏi thường gặp về OCCO
                </h2>
                <p>
                  Giải đáp các thắc mắc phổ biến về mạng xã hội OCCO.<br />
                  Nếu bạn cần hỗ trợ thêm, vui lòng liên hệ đội ngũ OCCO!
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xxl-12">
              <div className="faq__list-6">
                <Accordion defaultActiveKey="0" className="accordion" id="accordionExample">
                  <Accordion.Item eventKey="0" className="accordion-item">
                    <Accordion.Header>OCCO là gì?</Accordion.Header>
                    <Accordion.Body>
                      OCCO là nền tảng mạng xã hội mới giúp bạn kết nối, trò chuyện, chia sẻ khoảnh khắc và khám phá cộng đồng đa sắc màu.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1" className="accordion-item">
                    <Accordion.Header>Làm sao để đăng ký tài khoản OCCO?</Accordion.Header>
                    <Accordion.Body>
                      Bạn có thể đăng ký tài khoản OCCO dễ dàng bằng email, số điện thoại hoặc liên kết với tài khoản mạng xã hội khác.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2" className="accordion-item">
                    <Accordion.Header>OCCO có miễn phí không?</Accordion.Header>
                    <Accordion.Body>
                      OCCO hoàn toàn miễn phí cho người dùng cá nhân. Một số tính năng nâng cao hoặc dành cho doanh nghiệp sẽ có gói dịch vụ riêng.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3" className="accordion-item">
                    <Accordion.Header>Làm sao để bảo mật tài khoản OCCO?</Accordion.Header>
                    <Accordion.Body>
                      OCCO luôn chú trọng bảo mật. Bạn nên sử dụng mật khẩu mạnh, bật xác thực 2 bước và không chia sẻ thông tin đăng nhập cho bất kỳ ai.
                    </Accordion.Body>
                  </Accordion.Item>
                  {/* Thêm các câu hỏi khác nếu cần */}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq1;
