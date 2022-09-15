import React, { Component } from 'react';

const Analytics = React.lazy(
  () => import('../components/renderings/NewComponent/NewComponent'),
);

const Champaigns = React.lazy(
  () => import('../components/renderings/TestComponent/TestComponent'),
);

const Dashbord = React.lazy(
  () => import('../components/renderings/Dashbord/Dashbord'),
);

const List = React.lazy(
  () => import('../components/renderings/ListComponent/ListComponent'),
);

const Book = React.lazy(() => import('../containers/components/Book'));

const routes = [
  {
    path: 'analytics',
    Component: Analytics,
  },
  {
    path: 'campaigns',
    Component: Champaigns,
  },
  {
    path: 'dashbord',
    Component: Dashbord,
  },
  {
    path: '/page/list',
    Component: List,
  },
  {
    path: '/book',
    Component: Book,
  },
];

export default routes;
