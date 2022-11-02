import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

import Login from '../screens/login';

const PublicRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PublicRoutes;
