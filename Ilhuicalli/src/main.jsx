import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

// router
import { BrowserRouter } from 'react-router-dom';
import store from './app/Store';

// path
import Path from './routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Path />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
