import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
<<<<<<< Updated upstream
import "swiper/css";
import "swiper/css/navigation";
=======
import "swiper/swiper-bundle.css";
>>>>>>> Stashed changes
import ReactTextRotator from "react-text-rotator";
import logoTawi from "../../assets/images/Tawikarn/Logo.webp";

const heroImageUrl = `${process.env.PUBLIC_URL}/images/LandingPage.webp`;

const HeroSliderCreative = ({ data }) => (
  <section className="pt-0 pb-0">
    <div className="slider-bg flexslider">
      <ul className="slides">
        <Swiper>
          {
            <SwiperSlide key={data.id} style={{ width: "100%" }}>
              <div className="slide-img">
                <img
                  src={heroImageUrl}
                  alt="ทวิกานต์ ร้านป้ายลพบุรี"
                  fetchpriority="high"
                  width="1920"
                  height="1111"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div
                className={
                  "hero-text-wrap " + (data.bg ? "gradient-overlay-bg" : "")
                }
              >
                <div className="hero-text white-color">
                  <div style={{ background: "rgba(0,0,0,0.5)" }}>
                    <div className="container text-left">
                      <img src={logoTawi} style={{ maxHeight: "150px" }} alt="ทวิกานต์" />
                      <h3 className="white-color font-400 letter-spacing-5">
                        {data.tagline}
                      </h3>
                      <h2 className="white-color font-700">
                        {data.title}
                        <div className="tags-slider animate-caption capitalize row justify-content-center mt-5">
                          <h2 className="slider-tag white-color mt-20 text-left">
                            <ReactTextRotator
                              content={data.tags}
                              time={3000}
                              startDelay={2000}
                            />
                          </h2>
                        </div>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          }
        </Swiper>
      </ul>
    </div>
  </section>
);

export default HeroSliderCreative;
