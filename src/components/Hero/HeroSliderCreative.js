import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import ReactTextRotator from "react-text-rotator";
import logoTawi from "../../assets/images/Tawikarn/Logo.png";
import styled from 'styled-components'

const OverlayBG = styled.div`
  background: rgba(0, 0, 0, 0.5);
`

const HeroSliderCreative = ({ data }) => (
  <section className="pt-0 pb-0">
    <div className="slider-bg flexslider">
      <ul className="slides">
        <Swiper>
          {
            <SwiperSlide key={data.id}>
              <div
                className="slide-img"
                style={{
                  background: `url(${require("../../assets/images/" +
                    data.image)}) center center / cover scroll no-repeat`,
                }}
              ></div>
              <div
                className={
                  "hero-text-wrap " + (data.bg ? "gradient-overlay-bg" : "")
                }
              >
                <div className="hero-text white-color">
                  <OverlayBG>
                    <div className="container text-left">
                      <img src={logoTawi} style={{ maxHeight: "150px" }} />
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
                    </OverlayBG>
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
