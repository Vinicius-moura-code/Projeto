import React from 'react';

import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';
import useAuth from '../contexts/auth';

const Routes = () => {
  const { signed } = useAuth();

  return signed ? <PublicRoutes /> : <PrivateRoutes />;
};

export default Routes;