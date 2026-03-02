import React from "react";
import logoTawi from "../assets/images/Tawikarn/Logo.webp";

const MainLogo = ({ collapse, showMenu }) => {
  return (
    <div className="navbar-header">
      <div className="logo">
        <a href={process.env.PUBLIC_URL}>
          <img className="logo logo-display" style={{maxHeight: '50px'}} src={logoTawi} alt="ทวิกานต์" />
          <img className="logo logo-scrolled" style={{maxHeight: '50px'}} src={logoTawi} alt="ทวิกานต์" />
        </a>
      </div>
    </div>
  );
};

export default MainLogo;
