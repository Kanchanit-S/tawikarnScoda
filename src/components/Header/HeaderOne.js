import React, { useState, useEffect, useCallback } from "react";
import Icofont from "react-icofont";
import DropdownMenu from "../Navs/DropdownMenu";
import AttributeNav from "../Navs/AttributeNav";
import MainLogo from "../MainLogo";
import { Button } from "react-bootstrap";
import "./HeaderOne.css";
import logoLine from "../../assets/images/LINE_Brand_icon.png";

const HeaderOne = ({ type }) => {
  const [show, setShow] = useState(false);
  const [fixed, setFixed] = useState(false);
  const [collapse, setCollapse] = useState(false);
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  const showMenu = () => {
    setCollapse(!collapse);
    const menu = document.getElementById("navbar-menu");
    collapse ? menu.classList.remove("in") : menu.classList.add("in");
  };

  const handleScroll = useCallback(() => {
    if (window.pageYOffset > 34) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  }, []);

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);
    console.log("screenSize", screenSize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize, handleScroll]);

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
          {/* <DropdownMenu /> */}

          {screenSize.width < 992 ? (
            <>
              <a href="https://lin.ee/95qRzxt">
                <img src={logoLine} style={{ maxHeight: "40px" }} />
              </a>
            </>
          ) : (
            <>
              <AttributeNav>
                <a href="https://lin.ee/95qRzxt">
                  <Button
                    className="btn btn-success line-id-btn"
                    style={{ background: "#00B900", border: "0px" }}
                  >
                    Line ID : @tawi
                  </Button>
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
