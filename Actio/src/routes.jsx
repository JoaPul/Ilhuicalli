import React from 'react';
// components

// funciones de librerias
import { Navigate, useRoutes } from 'react-router-dom';

// pages
import App from './pages/App';

const Path = () => {
  const element = useRoutes([
    {
      path: '/',
      element: <Navigate to="/home" replace />,
    },
    {
      path: '/home',
      element: <App />,
      children: [
        {
          path: ':lan',
          index: true,
        },
      ],
    },
    // componente "page not found"
    {
      path: '/404',
      element: <p style={{ fontFamily: 'Fredoka', fontSize: '20px', textAlign: 'center' }}>Page not found</p>,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return element;
};

export default Path;
