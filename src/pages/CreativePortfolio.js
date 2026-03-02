import React from "react";
import dataCreative from "../data/Slider/creative-portfolio-data.json";
import dataPortfolio from "../data/Portfolio/portfolio-masonry.json";
import HeaderOne from "../components/Header/HeaderOne";
import HeroSliderCreative from "../components/Hero/HeroSliderCreative";
import PortfolioMasonry from "../components/Portfolio/PortfolioMasonry";
import FooterOne from "../components/Footer/FooterOne";
import ContactUs from "../components/ContactUs/ContactUs";
import AboutRestaurant from "../components/AboutUs/AboutRestaurant";

const CreativePortfolio = () => (
  <>
    <HeaderOne />
    <HeroSliderCreative data={dataCreative} />
    <AboutRestaurant />
    <PortfolioMasonry
      filter="true"
      columns="3"
      data={dataPortfolio}
      type="masonry"
    />
    <ContactUs />
    <FooterOne />
  </>
);

export default CreativePortfolio;
