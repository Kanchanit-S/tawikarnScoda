import React, { forwardRef } from "react";
import { useLax } from "../../helpers/use-lax";
import img1 from "../../assets/images/food-img-5.png";
import img2 from "../../assets/images/food-img-3.png";
import img3 from "../../assets/images/food-img-4.png";
import img4 from "../../assets/images/Tawikarn/abus_2.jpg";
import img5 from "../../assets/images/Tawikarn/abus_1.jpg";

const AboutRestaurant = forwardRef((props, ref) => {
  useLax();
  return (
    <section className="main-section dark-bg" id="about" ref={ref}>
      <div className="left_parallax">
        {/* <div className="lax parallax_img left_one" data-lax-preset="lazy-250">
          <p style={{ rotate: "-90deg", fontSize: "40px" }}>
            ประสบการณ์ 15 ปี
          </p>
        </div> */}

        {/* <div
          className="lax parallax_img left_three"
          style={{
            backgroundImage: `url(${img2})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "130pt 130pt",
            marginLeft: "80pt",
          }}
          data-lax-preset="lazy-100"
        ></div> */}

        {/* <div
          className="lax parallax_img left_two"
          style={{
            backgroundImage: `url(${img3})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "50pt 50pt",
            marginLeft: "85pt",
          }}
          data-lax-preset="lazy-300"
        ></div> */}
      </div>
      <div className="right_parallax">
        <h3
          data-lax-preset="driftLeft"
          data-lax-optimize={true}
          className="lax chunkyText font-700 mb-4"
          style={{ fontSize: "40px", color: "#F06421" }}
        >
          อะไรที่คุณคิดได้ เราก็ทำได้
        </h3>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-8 section-heading">
            {/* <h1 className="upper-case font-700 white-color">About Us</h1> */}
          </div>
        </div>
        <div className="row mt-50">
          <div className="col-md-6 text-left mb-20">
            <h2
              className="font-700 white-color"
              data-aos={"fade-up"}
              data-aos-delay={100}
              data-aos-duration={700}
            >
              บริษัท ทวิกานต์2019 จำกัด
            </h2>
            <p
              className="mt-20"
              data-aos={"fade-up"}
              data-aos-delay={100}
              data-aos-duration={700}
              style={{ fontSize: "18px", color: "#fff" }}
            >
              เราคือผู้เชี่ยวชาญในด้านการทำป้ายโฆษณา ไวนิล สติ๊กเกอร์ทั้งงาน
              Indoor และ Outdoor ทางเรามีทีมงานออกแบบ
              ฝ่ายผลิต และทีมช่างติดตั้งงมากประสบการณ์ พร้อมให้คำปรึกษากับลูกค้าทุกท่าน
            </p>
            <p
              className="mt-20"
              data-aos={"fade-up"}
              data-aos-delay={100}
              data-aos-duration={700}
              style={{ fontSize: "18px", color: "#fff", fontWeight: '700' }}
            >

            </p>
            {/* <p className="mt-30">
              <a
                href="!#"
                className="btn btn-red btn-square"
                data-aos={"fade-up"}
                data-aos-delay={100}
                data-aos-duration={700}
              >
                BOOK A TABLE
              </a>
            </p> */}
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6 mb-20 col-sm-6">
                <img
                  className="img-fluid"
                  src={img4}
                  alt="food-img"
                  data-aos={"fade-right"}
                  data-aos-delay={200}
                  data-aos-duration={700}
                />
              </div>
              <div className="col-md-6 col-sm-6">
                <img
                  className="img-fluid"
                  src={img5}
                  alt="food-img"
                  data-aos={"fade-left"}
                  data-aos-delay={200}
                  data-aos-duration={700}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default AboutRestaurant;
