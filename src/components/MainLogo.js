import React from "react";
import logoTawi from "../assets/images/Tawikarn/Logo.png";

const MainLogo = ({ collapse, showMenu }) => {
  return (
    <div className="navbar-header">
      <div className="logo">
        <a href={process.env.PUBLIC_URL}>
          <img className="logo logo-display" style={{maxHeight: '50px'}} src={logoTawi} alt="" />
          <img className="logo logo-scrolled" style={{maxHeight: '50px'}} src={logoTawi} alt="" />
        </a>
      </div>
    </div>
  );
};

export default MainLogo;
