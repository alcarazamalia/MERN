import React from "react";
import Image from 'react-bootstrap/Image';

import "./hero.css";
const Hero = () => {
  return (
    <>
      <section className="heroContainer">
        <h2>Mytinerary</h2>
        <aside className="pContainer mx-auto d-flex justify-content-center">
          <p className="heroText">Find your perfect trip, designed by insiders who know and love their cities!</p>
        </aside></section>
    </>
  );
};

export default Hero;