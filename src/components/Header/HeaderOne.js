import React, { useState, useEffect, useCallback } from "react";
import Icofont from "../Icofont";
import AttributeNav from "../Navs/AttributeNav";
import MainLogo from "../MainLogo";
import "./HeaderOne.css";
import logoLine from "../../assets/images/LINE_Brand_icon.webp";

const HeaderOne = ({ type }) => {
  const [fixed, setFixed] = useState(false);
  const [collapse, setCollapse] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  const showMenu = () => {
    setCollapse(!collapse);
    const menu = document.getElementById("navbar-menu");
    collapse ? menu.classList.remove("in") : menu.classList.add("in");
  };

  const handleScroll = useCallback(() => {
    setFixed(window.pageYOffset > 34);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleScroll]);

  return (
    <>
      <nav
        className={
          "navbar navbar-expand-lg navbar-light navbar-fixed white bootsnav on no-full " +
          (fixed || type === "white" ? "" : "navbar-transparent")
        }
      >
        <div className="container" style={{ width: "100%" }}>
          <button
            type="button"
            className={"navbar-toggler " + (collapse ? "collapsed" : "")}
            data-toggle="dropdown"
            data-target="#navbar-menu"
            onClick={showMenu}
          >
            <Icofont icon="navigation-menu" />
          </button>
          <MainLogo showMenu={showMenu} />
          {isMobile ? (
            <>
              <a href="https://lin.ee/95qRzxt">
                <img src={logoLine} style={{ maxHeight: "40px" }} alt="LINE" loading="lazy" />
              </a>
            </>
          ) : (
            <>
              <AttributeNav>
                <a href="https://lin.ee/95qRzxt">
                  <button
                    className="btn btn-success line-id-btn"
                    style={{ background: "#00B900", border: "0px", color: "#fff", padding: "8px 16px", borderRadius: "4px", cursor: "pointer" }}
                  >
                    Line ID : @tawi
                  </button>
                </a>
              </AttributeNav>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default HeaderOne;
