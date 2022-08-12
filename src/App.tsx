import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './coreui/scss/style.scss';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const DefaultLayout = React.lazy(() => import('./coreui/layout/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./coreui/views/pages/login/Login'));
const Register = React.lazy(
  () => import('./coreui/views/pages/register/Register'),
);
const Page404 = React.lazy(
  () => import('./coreui/views/pages/page404/Page404'),
);
const Page500 = React.lazy(
  () => import('./coreui/views/pages/page500/Page500'),
);

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={loading}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/404" element={<Page404 />} />
          <Route path="/500" element={<Page500 />} />
          <Route path="*" element={<DefaultLayout />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
