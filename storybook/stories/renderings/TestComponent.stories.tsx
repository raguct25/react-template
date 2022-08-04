import React from 'react';
  import TestComponent, {
  TestComponentProps,
  } from '../../../src/components/renderings/TestComponent/TestComponent';
  import { defaultData } from '../../../src/data/data';
  import { Section } from '../../enums/sections';

  export default {
    title: `${Section.Renderings}/TestComponent`,
  };

  export const Default = () => (
  <TestComponent {...((defaultData as unknown) as TestComponentProps)} />
  );
  