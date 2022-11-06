import React from 'react';
// components

// funciones de librerias
import { Navigate, useRoutes } from 'react-router-dom';

// pages
import App from './pages/App';
import Travel from './pages/Travel';
import Register from './pages/Register';
import Login from './pages/Login';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import Profile from './pages/Profile';

const Path = () => {
  // TODO: necesito routear a las primeras hijas por defecto sin quitar la
  // opcion de poder acceder a las demas rutas hijas, (index: true) no sirve
  const element = useRoutes([
    {
      path: '/',
      element: <Navigate to="/Home" replace />,
    },
    {
      path: '/Home',
      element: <App />,
    },
    {
      path: '/FlightManifest',
    },
    {
      path: '/Ignition',
      element: <Travel />,
    },
    {
      path: '/User/Register',
      element: <Register />,
    },
    {
      path: '/User/Login',
      element: <Login />,
    },
    {
      path: '/User/Profile',
      element: <Profile />,
    },
    {
      path: '/User/WishList',
      element: <Wishlist />,
    },
    {
      path: '/User/Cart',
      element: <Cart />,
    },
    // componente "page not found"
    {
      path: '/404',
      // eslint-disable-next-line object-curly-newline
      element: <p style={{ fontFamily: 'Fredoka', fontSize: '20px', textAlign: 'center', color: '#CAD0D6' }}>Page not found</p>,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return element;
};

export default Path;
