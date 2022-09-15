import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useLocation, useNavigate } from 'react-router-dom';

const requireAuth = (ComposedComponent: any) => {
  const Authentication = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const state = useSelector((state: any) => state.login);

    useEffect(() => {
      if (state.authorization) {
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
