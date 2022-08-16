import React from 'react';

const Dashboard = React.lazy(
  () => import('../components/renderings/Dashboard/Dashboard'),
);

const NewComponent = React.lazy(
  () => import('../components/renderings/NewComponent/NewComponent'),
);

const TestComponent = React.lazy(
  () => import('../components/renderings/TestComponent/TestComponent'),
);

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/newComponent', name: 'New Component', element: NewComponent },
  { path: '/testComponent', name: 'Test Component', element: TestComponent },
];

export default routes;
