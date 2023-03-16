import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import MyyagasApp from './components/Starting Components/MyyagasApp';
import { Provider } from 'react-redux';
import store from './store';

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <MyyagasApp />
    </Provider>
  </BrowserRouter>
);
