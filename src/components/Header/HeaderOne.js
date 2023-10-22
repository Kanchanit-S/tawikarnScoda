import React, { useState, useEffect, useCallback } from "react";
import Icofont from "react-icofont";
import Scrollspy from "react-scrollspy";
import dataNav from "../../data/Navbar/nav-construction.json";
import DropdownMenu from "../Navs/DropdownMenu";
import MainLogo from "../MainLogo";

const HeaderOne = ({ type, scrollToSection }) => {
  const [show, setShow] = useState(false);
  const [fixed, setFixed] = useState(false);
  const [collapse, setCollapse] = useState(false);

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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
        <div className="container">
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
        </div>
      </nav>
    </>
  );
};

export default HeaderOne;
