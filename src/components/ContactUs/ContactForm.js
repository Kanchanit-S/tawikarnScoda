import React, { useState } from "react";
import LineLogo from "../../assets/images/LINE_Brand_icon.png";
import facebookLogo from "../../assets/images/Facebook_Logo_2019.png"
const ContactForm = ({ title, tagline }) => {
  const [inputs, setInputs] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  return (
    <>
      {title && (
        <h2
          className="text-uppercase font-700"
          data-aos-delay={500}
          data-aos={"fade-up"}
          data-aos-easing={"ease-in-sine"}
        >
          {title}
        </h2>
      )}
      {tagline && (
        <h4
          className="text-uppercase"
          data-aos-delay={500}
          data-aos={"fade-up"}
          data-aos-easing={"ease-in-sine"}
        >
          - {tagline} -
        </h4>
      )}
      <div className="mt-5 row align-items-center">
        <div className="col-3">
          <img src={LineLogo} style={{ maxHeight: "100px" }} />
        </div>
        <div className="col-9">
          <h1><a href='https://lin.ee/95qRzxt' style={{color: '#000'}}>@tawi</a></h1>
        </div>
      </div>
      <div className="mt-5 row align-items-center">
        <div className="col-3">
          <img src={facebookLogo} style={{ maxHeight: "100px" }} />
        </div>
        <div className="col-9">
          <h2><a href='https://www.facebook.com/thawikarn1' style={{color: '#000'}}>ร้านป้ายลพบุรี บริษัท ทวิกานต์</a></h2>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
