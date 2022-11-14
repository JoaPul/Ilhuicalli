/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React, { useEffect } from 'react';

// Slides
import { useSelector } from 'react-redux';
import { selectInfo, getInfo } from '../features/SpaceX/infoSlice';
import store from '../app/Store';

// styles
import '../styles/Dragons.css';

const Dragons = () => {
  const aux = useSelector(selectInfo);

  useEffect(() => {
    if (aux == null) {
      store.dispatch(getInfo);
      console.log(aux);
    }
  }, []);

  const info = useSelector(selectInfo);

  return (
    <section className="Capsules">
      <h1 className="h1Cap">Capsules we will use</h1>
      <section className="contDrag">
        <div className="Dragon1" key={info[0].id}>
          <div className="contInfo">
            <h2>{info[0].name}</h2>
            <br />
            <p className="info">{info[0].description}</p>
          </div>
          <img src={info[0].flickr_images[1]} alt={info[0].name} />
        </div>
        <div className="Dragon2" key={info[1].id}>
          <img src={info[1].flickr_images[0]} alt={info[1].name} />
          <div className="contInfo">
            <h2>{info[1].name}</h2>
            <br />
            <p className="info">{info[1].description}</p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Dragons;
