import React from "react";
import Loader from "./../components/Loader/Loader";
import dataCreative from "../data/Slider/creative-portfolio-data.json";
import dataPortfolio from "../data/Portfolio/portfolio-masonry.json";
import HeaderOne from "../components/Header/HeaderOne";
import HeroSliderCreative from "../components/Hero/HeroSliderCreative";
import PortfolioMasonry from "../components/Portfolio/PortfolioMasonry";
import CTAOne from "../components/CTA/CTAOne";
import FooterOne from "../components/Footer/FooterOne";
import WhoWeAreTwo from "../components/WhoWeAre/WhoWeAreOne";
import ContactUs from "../components/ContactUs/ContactUs";

const   CreativePortfolio = ({ ref }) => (
  <Loader>
    <HeaderOne />
    <HeroSliderCreative data={dataCreative} />
    <WhoWeAreTwo title="Who we are" tagline="The world at your fingertips"/>
    <PortfolioMasonry
      filter="true"
      columns="3"
      data={dataPortfolio}
      type="masonry"
    />
    <ContactUs />
    <FooterOne />
  </Loader>
);

export default CreativePortfolio;
