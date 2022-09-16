import { useSelector } from 'react-redux';

import React, { useEffect } from 'react';
import { LoginReducerState } from '../redux/model/login.model';
import { useLocation, useNavigate } from 'react-router-dom';

const requireAuth = (ComposedComponent: React.FunctionComponent) => {
  const Authentication = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const state = useSelector((states: LoginReducerState) => {
      return states.login;
    });

    useEffect(() => {
      console.log('render----------');

      if (state.authorization) {
        navigate(location.pathname);
      } else {
        navigate('/login');
      }
    }, []);

    return state.authorization ? <ComposedComponent /> : null;
  };
  return Authentication;
};
export default requireAuth;
