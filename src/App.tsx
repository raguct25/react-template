/* eslint-disable */

import routes from './route/routes';
import SignIn from './public/signIn/SignIn';
import Loading from './assests/images/refresh.svg';

import React, { Suspense } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Book from './containers/components/Book';

const loading = (
  <div className=" h-screen flex justify-center items-center">
    <img className="animate-spin w-16" src={Loading} alt="Loading Icon" />
  </div>
);

const routeMap = routes.map(({ path, Component }: any, key) => (
  <Route path={path} element={<Component />} key={key} />
));

const DefaultLayout = React.lazy(() => import('./containers/layout/Dashboard'));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route path="/" element={<DefaultLayout />}>
              {routeMap}
            </Route>
            <Route path="/login" element={<SignIn />} />
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
      {/* <Book /> */}
    </div>
  );
}

export default App;
/* eslint-disable */
