import React from "react";
import office from "../Images/office.png";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to the"
        imgSrc={office}
        visit="/contact"
        btnName="Contact Now"
      />
    </>
  );
};
export default About;
