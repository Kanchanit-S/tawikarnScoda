import React from "react";
import bgImg from "../../assets/images/background/parallax-bg-19.jpg";
import tawikarnLogo from  "../../assets/images/Tawikarn/Logo.png";
const HeroDemo = () => {
  return (
    <section className="pt-0" id="demo-header-section">
      <div id="demo">
        <div
          className="parallax-img"
          style={{
            background: `url(${bgImg}) center center / cover scroll no-repeat`,
          }}
        ></div>
        <div className="hero-text-wrap gradient-overlay-bg">
          <div className="hero-text white-color">
            <div className="container text-center">
              <img src={tawikarnLogo} style={{height: '150px'}}/>
              <h1 className="white-color text-uppercase font-700">บริษัท ทวิกานต์2019 จำกัด</h1>
              <p className="text-center mt-30">
                
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroDemo;
