import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import routes from '../../route/routes';
import '../layout.scss';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const AppContent = () => {
  return (
    <main className="section green test">
      <Suspense fallback={loading}>
        <Routes>
          {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  element={<route.element />}
                />
              )
            );
          })}
          <Route path="/" element={<Navigate to="dashboard" replace />} />
        </Routes>
      </Suspense>
    </main>
  );
};

export default React.memo(AppContent);
