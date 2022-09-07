/* eslint-disable */
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';
import requireAuth from '../../hoc/Hoc';
import WelcomeBanner from '../components/welcomebaner';

import React, { useState } from 'react';

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
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

export default requireAuth(Dashboard);
/* eslint-disable */
