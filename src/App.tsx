/* eslint-disable */

import Loading from './assests/images/refresh.svg';

import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import React, { Suspense } from 'react';
import SignIn from './public/signIn/SignIn';

const loading = (
  <div className=" h-screen flex justify-center items-center">
    <img className="animate-spin w-16" src={Loading} alt="Loading Icon" />
  </div>
);
const DefaultLayout = React.lazy(() => import('./containers/layout/Dashboard'));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/page/*" element={<DefaultLayout />} />
            <Route
              path="*"
              element={
                <div className="text-center bg-gray-100 text-red-600 flex items-center justify-center text-4xl h-screen">
                  Page Not Found•••••🤔
                </div>
              }
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
/* eslint-disable */
