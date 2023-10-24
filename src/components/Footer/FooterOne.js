import React from "react";
import logoFooter from "../../assets/images/Tawikarn/Logo.png";
import FooterCopyright from "./FooterCopyright";

const FooterOne = () => (
  <>
    <footer className="footer" id="footer-fixed">
      <div className="footer-main">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-4">
              <div className="widget widget-text">
                <div className="logo logo-footer">
                  <a href={`${process.env.PUBLIC_URL}/`}>
                    <img
                      className="logo logo-display"
                      src={logoFooter}
                      style={{maxHeight: '100px'}}
                      alt=""
                    />
                  </a>
                  <p>
                  ป้ายไวนิลลพบุรี, ป้ายอิงค์เจ็ท,ป้ายคัทเอาท์, ป้ายบิลบอร์ด, ป้ายกองโจร, ป้ายแบรนเนอร์, ป้ายขวางถนน,ป้ายธงญี่ปุ่น,ป้ายอาคาร, ป้ายไวนิล, ป้ายโฆษณาครบวงจร, พิมพ์ป้ายโฆษณา
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="widget widget-links" style={{color: '#fff'}}>
                <h5 className="widget-title">เวลาเปิดทำการ</h5>
                <div>วันจันทร์ - วันเสาร์    09:00 - 17:30</div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="widget widget-text widget-links">
                <h5 className="widget-title">ติดต่อเรา</h5>
                <ul>
                  <li>
                    <i className="icofont icofont-google-map"></i>
                    <span className="text-white">25/8 ถนนพระยาพิชัยดาบหัก (ช.19) ตำบลเขาสามยอด อำเภอเมืองลพบุรี จ.ลพบุรี 15000</span>
                  </li>
                  <li>
                    <i className="icofont icofont-iphone"></i>
                    <a href="tel:441632960290">062-563-8090</a>
                  </li>
                  <li>
                    <i className="icofont icofont-mail"></i>
                    <a href="ying-1166@hotmail.com">
                    ying-1166@hotmail.com
                    </a>
                  </li>
                  <li>
                    <i className="icofont icofont-globe"></i>
                    <a href={process.env.PUBLIC_URL}>www.tawikarn.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterCopyright />
    </footer>
    <div className="footer-height" style={{ height: "463px" }}></div>
  </>
);

export default FooterOne;
