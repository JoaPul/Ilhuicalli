import React from 'react';
import vidAstro from './assets/Astronaut.mp4';
import imgNave from './assets/NaveColor1.1.png';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <section className="Banner">
        <div className="Menu"> </div>
        <div className="Title">
          {/* <div className="Logo">Circulo</div>
          <img src={imgNave} alt="Nave espacial" className="NAVE" /> */}
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
      <video className="vidAstro" autoPlay muted loop>
        <source src={vidAstro} type="video/mp4" />
        {/* aqui va el source ogg */}
      </video>
    </div>
  );
}

export default App;
