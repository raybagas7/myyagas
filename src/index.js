import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import MyyagasApp from './components/Starting Components/MyyagasApp';

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <MyyagasApp />
  </BrowserRouter>
);
