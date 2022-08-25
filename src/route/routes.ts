import React from 'react';

const Dashboard = React.lazy(
  () => import('../components/renderings/NewComponent/NewComponent'),
);

const Champaigns = React.lazy(
  () => import('../components/renderings/TestComponent/TestComponent'),
);

const Ecommerce = React.lazy(
  () => import('../components/renderings/Dashbord/Dashbord'),
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
];

export default routes;
