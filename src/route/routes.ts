import React from 'react';

const NewComponent = React.lazy(
  () => import('../components/renderings/NewComponent/NewComponent'),
);
const TestComponent = React.lazy(
  () => import('../components/renderings/TestComponent/TestComponent'),
);

const routes = [
  { path: '/newcomponent', name: 'NewComponent', element: NewComponent },
  { path: '/testcomponent', name: 'TestComponent', element: TestComponent },
];

export default routes;
