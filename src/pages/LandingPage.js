import React, { useRef, useEffect } from "react";
import Loader from "../components/Loader/Loader";
import HeaderThree from "../components/Header/HeaderThree";
import CreativePortfolio from "./CreativePortfolio";
import WhoWeAreTwo from "../components/WhoWeAre/WhoWeAreOne";
const LandingPage = () => {

  const home = useRef();
  const about = useRef();
  const service = useRef();
  const team = useRef();
  const project = useRef();
  const contact = useRef();

  const scrollToSection = (e, content) => {
    e.preventDefault();
    switch (content) {
      case "home":
        home.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "about":
        about.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "service":
        service.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "team":
        team.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "project":
        project.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        contact.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
    }
  };

  return (
    <Loader>
      <CreativePortfolio/>
    </Loader>
  );
};

export default LandingPage;
