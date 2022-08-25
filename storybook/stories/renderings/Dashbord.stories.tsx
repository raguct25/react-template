import React from 'react';
  import Dashbord, {
  DashbordProps,
  } from '../../../src/components/renderings/Dashbord/Dashbord';
  import { defaultData } from '../../../src/data/data';
  import { Section } from '../../enums/sections';

  export default {
    title: `${Section.Renderings}/Dashbord`,
  };

  export const Default = () => (
  <Dashbord {...((defaultData as unknown) as DashbordProps)} />
  );
  