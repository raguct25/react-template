import React from 'react';
  import Dashboard, {
  DashboardProps,
  } from '../../../src/components/renderings/Dashboard/Dashboard';
  import { defaultData } from '../../../src/data/data';
  import { Section } from '../../enums/sections';

  export default {
    title: `${Section.Renderings}/Dashboard`,
  };

  export const Default = () => (
  <Dashboard {...((defaultData as unknown) as DashboardProps)} />
  );
  