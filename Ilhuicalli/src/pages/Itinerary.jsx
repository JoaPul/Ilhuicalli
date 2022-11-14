/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';

// Components
import Banner from '../components/Banner';
import Dragons from '../components/Dragons';
import Trajes from '../components/Trajes';

const Itinerary = () => {
  return (
    <section className="Ityne">
      <Banner />
      <div className="InfoDeAPI">
        <Dragons />
      </div>
      <div className="trajesEspaciales">
        <Trajes />
      </div>
      <div className="PlanDeVuelo">.</div>
      <div className="testimonios">.</div>
    </section>
  );
};

export default Itinerary;
