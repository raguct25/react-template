import React from 'react';
import AppContent from '../layout/components/AppContent';
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import AppSidebar from './components/AppSidebar';
import './layout.scss';

const DefaultLayout = () => {
  return (
    <div className="parent">
      <AppHeader />
      <AppSidebar />
      <AppContent />
      <AppFooter />
    </div>
  );
};

export default DefaultLayout;
