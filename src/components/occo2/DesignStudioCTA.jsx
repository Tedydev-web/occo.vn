import Link from "next/link";

const DesignStudioCTA = () => {
  return (
    <>
      <section className="cta__area-2">
        <div className="container line pt-130 pb-120">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="cta__content-2">
                <p className="cta__sub-title-2 title-anim">
                  Sẵn sàng thay đổi cách bạn kết nối?
                </p>
                <h2 className="cta__title-2 title-anim">
                  Tải OCCO ngay!
                </h2>
              </div>
              <div style={{ display: "flex", gap: "32px", justifyContent: "center", marginTop: 24, flexWrap: "wrap" }}>
                <Link
                  href="/contact"
                  className="wc-btn-pink btn-hover btn-item"
                  style={{ minWidth: 120, padding: "8px 20px", fontSize: 16, borderRadius: 32, height: 44, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, whiteSpace: "nowrap" }}
                >
                  <span></span>Android <i className="fa-solid fa-arrow-right" style={{ marginLeft: 8 }}></i>
                </Link>
              </div>
              <div style={{ display: "flex", gap: "32px", justifyContent: "center", marginTop: 48, flexWrap: "wrap" }}>
                <Link
                  href="/contact"
                  className="wc-btn-pink btn-hover btn-item"
                  style={{ minWidth: 120, padding: "8px 20px", fontSize: 16, borderRadius: 32, height: 44, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, whiteSpace: "nowrap" }}
                >
                  <span></span>IOS <i className="fa-solid fa-arrow-right" style={{ marginLeft: 8 }}></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DesignStudioCTA;
