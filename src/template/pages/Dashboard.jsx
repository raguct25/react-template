/* eslint-disable */
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import Sidebar from ""
import Header from '../Header';
import Sidebar from '../Sidebar';

import Analytics from '../components/Analytics';
import Champaigns from '../components/Champaigns';
import Ecommerce from '../components/Ecommerce';
import WelcomeBanner from '../dashboard/welcomebaner';

const routComponents = [
  {
    path: '/analytics',
    Component: Analytics,
  },
  {
    path: '/campaigns',
    Component: Champaigns,
  },
  {
    path: '/ecommerce',
    Component: Ecommerce,
  },
];

const routeMap = routComponents.map(({ path, Component }, key) => (
  <Route path={path} element={<Component />} key={key} />
));

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <WelcomeBanner />
            <Routes>
              {/* <Route path="/analytics" element={<Analytics />} />
              <Route path="/campaigns" element={<DashboardPage />} /> */}
              {routeMap}
            </Routes>

            {/* <Outlet /> */}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
/* eslint-disable */
