import React from 'react';
import FormComponent, {
  FormComponentProps,
} from '../../../src/components/renderings/FormComponent/FormComponent';
import { defaultData } from '../../../src/data/data';
import { Section } from '../../enums/sections';

export default {
  title: `${Section.Renderings}/FormComponent`,
};

export const Default = () => (
  <FormComponent {...(defaultData as unknown as FormComponentProps)} />
);
