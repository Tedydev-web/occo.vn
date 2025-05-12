import Link from "next/link";

const DigitalAgencyCTA = () => {
  return (
    <>
      <section className="cta__area">
        <div className="container line pb-110">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="cta__content">
                <p className="cta__sub-title">Tham gia OCCO ngay!</p>
                <h2 className="cta__title title-anim">
                  Đăng ký tài khoản để khám phá mạng xã hội hiện đại, kết nối và
                  giải trí không giới hạn cùng OCCO.
                </h2>
                <div className="btn_wrapper">
                  <Link
                    href="/register"
                    className="wc-btn-primary btn-hover btn-item"
                  >
                    <span></span>Trải nghiệm{" "}
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalAgencyCTA;
