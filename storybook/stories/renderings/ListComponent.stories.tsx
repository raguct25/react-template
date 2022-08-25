import React from 'react';
  import ListComponent, {
  ListComponentProps,
  } from '../../../src/components/renderings/ListComponent/ListComponent';
  import { defaultData } from '../../../src/data/data';
  import { Section } from '../../enums/sections';

  export default {
    title: `${Section.Renderings}/ListComponent`,
  };

  export const Default = () => (
  <ListComponent {...((defaultData as unknown) as ListComponentProps)} />
  );
  