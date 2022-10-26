import React from 'react';
import vidAstro from './assets/Astronaut.mp4';
import './styles/App.css';
import Banner from './components/Banner';

function App() {
  return (
    <div className="App">
      <Banner />
      <video className="vidAstro" autoPlay muted loop>
        <source src={vidAstro} type="video/mp4" />
        {/* aqui va el source ogg */}
      </video>
    </div>
  );
}

export default App;
