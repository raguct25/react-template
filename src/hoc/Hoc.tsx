import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useLocation, useNavigate } from 'react-router-dom';

const requireAuth = (ComposedComponent: React.FC) => {
  const Authentication = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const state = useSelector((state: any) => state.login);

    useEffect(() => {
      if (state.isAuth) {
        navigate(location.pathname);
      } else {
        navigate('/login');
      }
    }, []);

    return <div>{state.isAuth && <ComposedComponent />}</div>;
  };
  return Authentication;
};
export default requireAuth;
