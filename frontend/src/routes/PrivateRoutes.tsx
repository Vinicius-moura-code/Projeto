import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../screens/login';


const PrivateRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
export default PrivateRoutes;
