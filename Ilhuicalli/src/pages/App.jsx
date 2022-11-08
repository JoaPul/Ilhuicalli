import React from 'react';
import { Outlet } from 'react-router-dom';

// hooks
// import { useDispatch, useSelector } from 'react-redux';

// Background
import BackGround from '../components/BackGroud';

// Components
import Banner from '../components/Banner';
import Slogan from '../components/Slogan';

// Slice
// import { toApear, selectMenu } from '../features/Menu/menuSlice';

// styles
import '../styles/App.css';

function App() {
  // const dispatch = useDispatch();
  // const menu = useSelector(selectMenu);

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
