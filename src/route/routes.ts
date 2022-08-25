import React, { Component } from 'react';

const Dashboard = React.lazy(
  () => import('../components/renderings/NewComponent/NewComponent'),
);

const Champaigns = React.lazy(
  () => import('../components/renderings/TestComponent/TestComponent'),
);

const Ecommerce = React.lazy(
  () => import('../components/renderings/Dashbord/Dashbord'),
);

const List = React.lazy(
  () => import('../components/renderings/ListComponent/ListComponent'),
);

const routes = [
  {
    path: '/analytics',
    Component: Dashboard,
  },
  {
    path: '/campaigns',
    Component: Champaigns,
  },
  {
    path: '/',
    Component: Ecommerce,
  },
  {
    path: '/list',
    Component: List,
  },
];

export default routes;
