import React from 'react';
import ReactDOM from 'react-dom/client';

// router
import { BrowserRouter } from 'react-router-dom';

// path
import Path from './routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Path />
    </BrowserRouter>
  </React.StrictMode>,
);
