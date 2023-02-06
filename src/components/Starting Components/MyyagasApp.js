import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/MainPage';
import '../../styles/styles.css';

const MyyagasApp = () => {
  return (
    <Routes>
      <Route path="/*" element={<MainPage />} />
    </Routes>
  );
};

export default MyyagasApp;
