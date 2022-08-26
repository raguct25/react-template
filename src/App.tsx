/* eslint-disable */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
import SignIn from './public/signIn/SignIn';

const loading = (
  <div>
    <h1 className="text-center text-bold mt-40">••••••</h1>
  </div>
);
const DefaultLayout = React.lazy(() => import('./containers/layout/Dashboard'));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route path="*" element={<DefaultLayout />} />
            <Route path="/" element={<SignIn />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
/* eslint-disable */
