import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

// router
import { BrowserRouter } from 'react-router-dom';

// path
import Path from './routes';

// Slices
import store from './app/Store';
import { getInfo } from './features/SpaceX/infoSlice';

store.dispatch(getInfo());

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Path />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
