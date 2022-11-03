/* eslint-disable arrow-body-style */
import React from 'react';

// hooks
import { useDispatch, useSelector } from 'react-redux';

// Slice
import { toChange, selectLang } from '../features/Language/langSlice';

// img y styles
import imgNave from '../assets/NaveColor1.1.png';
import '../styles/Banner.css';

// eslint-disable-next-line react/function-component-definition
const Banner = () => {
  const dispatch = useDispatch();
  const lang = useSelector(selectLang);

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
            {/* espacio exterior: iluikali */}
            <h3>ILHUICALLI</h3>
            <h1>SPACE TRAVEL</h1>
          </div>
        </div>
      </div>
      <div className="PARTS">
        <div className="ChLang">
          <h3>English</h3>
          <button
            type="button"
            className="contBall"
            onClick={() => dispatch(toChange())}
            style={lang ? { border: '3px solid rgb(216 132 146)' } : { border: '3px solid rgb(205 184 157)' }}
          >
            <div
              className="Ball"
              style={lang ? { left: '3px', backgroundColor: 'rgb(216 132 146)' } : { left: '71%', backgroundColor: 'rgb(205 184 157)' }}
            >
              .
            </div>
          </button>
          <h3>Español</h3>
        </div>
      </div>
    </section>
  );
};

export default Banner;
