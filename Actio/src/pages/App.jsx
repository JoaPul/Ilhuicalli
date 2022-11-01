import React from 'react';
import { Outlet } from 'react-router-dom';

// video
import vidAstro from '../assets/Astronaut.mp4';

// Components
import Banner from '../components/Banner';
import Slogan from '../components/Slogan';

// styles
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <Banner />
      <Slogan />
      {/* <div className="ship">
        <div className="ship-rotate">
        <div className="pod">.</div>
        <div className="fuselage">.</div>
        </div>
      </div> */}

      <video className="vidAstro" autoPlay muted loop>
        <source src={vidAstro} type="video/mp4" />
        {/* aqui va el source ogg */}
      </video>
      {/* demas paginas en Path */}
      <Outlet />
    </div>
  );
}

export default App;
