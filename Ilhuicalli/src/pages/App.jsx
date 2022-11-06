import React from 'react';
import { Outlet } from 'react-router-dom';

// Background
import BackGround from '../components/BackGroud';

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
      <BackGround />
      {/* <div className="ship">
        <div className="ship-rotate">
        <div className="pod">.</div>
        <div className="fuselage">.</div>
        </div>
      </div> */}
      <Outlet />
    </div>
  );
}

export default App;
