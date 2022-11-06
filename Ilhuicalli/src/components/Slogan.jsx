/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
// hooks
import { useSelector } from 'react-redux';
// from Slice
import { selectLang } from '../features/Language/langSlice';

// styles
import '../styles/Slogan.css';

const Slogan = () => {
  const lang = useSelector(selectLang);

  return (
    <section className="contSlo">
      {lang
        ? (
          <div className="slo">
            <h2>Making traveling an</h2>
            <h1>out of the world</h1>
            <h2>experience</h2>
          </div>
        )
        : (
          <div className="slo">
            <h2>Creando experiencias</h2>
            <h1>fuera de este mundo</h1>
            <h2>con los viajes</h2>
          </div>
        )}
      <button type="button" className="startBTN">
        {lang
          ? (
            <div>
              <h1>Join the</h1>
              <h1>Adventure</h1>
            </div>
          )
          : (
            <div>
              <h1>Inicia la</h1>
              <h1>Aventura</h1>
            </div>
          )}
      </button>
    </section>
  );
};

export default Slogan;
