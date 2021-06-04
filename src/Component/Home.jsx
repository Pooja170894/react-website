import React from "react";
import web from '../Images/web.jpg';
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common 
      name="Grow your business with"
      imgSrc={web}
      visit="/service"
      btnName="Get Started"/>
    </>
  );
};
export default Home;
