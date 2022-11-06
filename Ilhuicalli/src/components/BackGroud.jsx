/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';

// video
import vidAstro from '../assets/Astronaut.mp4';

const BackGround = () => {
  return (
    <video className="vidAstro" autoPlay muted loop>
      <source src={vidAstro} type="video/mp4" />
      {/* aqui va el source ogg */}
    </video>
  );
};

export default BackGround;
