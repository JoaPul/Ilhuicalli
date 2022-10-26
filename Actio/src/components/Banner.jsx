/* eslint-disable arrow-body-style */
import React from 'react';
import imgNave from '../assets/NaveColor1.1.png';
import '../styles/Banner.css';

// eslint-disable-next-line react/function-component-definition
const Banner = () => {
  return (
    <section className="Banner">
      <div className="Menu">
        <div className="BMenu">
          <div className="barra">.</div>
          <div className="barra">.</div>
          <div className="barra">.</div>
        </div>
      </div>
      <div className="Title">
        <div className="contLogo">
          <div className="rombo">
            <h1>rombo</h1>
          </div>
          <img className="Logo" src={imgNave} alt="LOGO" />
          <div className="tiText">
            <h3>ILHUICALLI</h3>
            <h1>SPACE TRAVEL</h1>
          </div>
        </div>
      </div>
      <div className="PARTS"> </div>
    </section>
  );
};

export default Banner;