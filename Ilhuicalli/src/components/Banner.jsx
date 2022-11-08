/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);

  const hadleChange = () => {
    setChecked((current) => !current);
  };

  return (
    <section className="Banner">
      <div className="Title">
        <div className="contLogo" onClick={() => navigate('/')}>
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
      <div className="User" />
      <div className="PARTS">
        <div className="ChLang">
          <h3>English</h3>
          <button
            type="button"
            className="contBall"
            onClick={() => dispatch(toChange())}
          //  style={lang ? { border: '3px solid rgb(216 132 146)' }
          //  : { border: '3px solid rgb(205 184 157)' }}
          >
            <div
              className="Ball"
              style={lang ? { left: '3px' } : { left: '71%' }}
            >
              .
            </div>
          </button>
          <h3>Español</h3>
        </div>
      </div>
      <div className="Menu">
        <div className="contHamb">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label type="button" className="BMenu" htmlFor="men">
            <div
              className="barra0"
              style={!checked ? { transform: 'rotate(0deg)' } : { transform: 'rotate(45deg) translateY(14px) translateX(14px) ' }}
            />
            <div
              className="barra1"
              style={!checked ? { transform: 'rotate(0deg)' } : { transform: 'rotate(45deg)' }}
            />
            <div
              className="barra2"
              style={!checked ? { transform: 'rotate(0deg)' } : { transform: 'rotate(-45deg) translateY(-14px) translateX(14px)  ' }}
            />
          </label>
          <input type="checkbox" id="men" className="nav-input" value={checked} onChange={hadleChange} />
          <div className="navApear">
            <a
              // rel="stylesheet"
              href="https://github.com/JoaPul/Ilhuicalli"
              className="menuOptions"
            >
              <h1>{lang ? 'Repository' : 'Repositorio'}</h1>
            </a>
            <Link
              rel="stylesheet"
              to="/FlightManifest"
              className="menuOptions"
            >
              <h1>{lang ? 'Itinerary' : 'Itinerario'}</h1>
            </Link>
            <Link
              rel="stylesheet"
              to="/Ready-To-Ignition"
              className="menuOptions"
            >
              <h1>{lang ? 'Book a flight' : 'Reserva un vuelo'}</h1>
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Banner;
