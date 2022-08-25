import React from 'react';
import ButtonComponent from '../../../src/components/elements/ButtonComponent/ButtonComponent';
import { Section } from '../../enums/sections';
import { boolean, select } from '@storybook/addon-knobs';

export default {
  title: `${Section.Elements}/ButtonComponent`,
};

const Default = (args) => (
  <ButtonComponent
    {...args}
    color={select(
      'color',
      [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
        'link',
      ],
      'primary',
    )}
    variant={select('variant', ['outline', 'ghost'], 'outline')}
    size={select('size', ['sm', 'lg'], 'lg')}
    shape={select('shape', ['rounded-pill', 'rounded-0'], 'rounded-pill')}
    disabled={boolean('disabled', false)}
    className={select(
      'className',
      [
        'd-grid gap-2',
        'd-grid gap-2 d-md-block',
        'd-grid gap-2 col-6 mx-auto',
        'd-grid gap-2 d-md-flex justify-content-md-end',
      ],
      'd-grid gap-2 col-6 mx-auto',
    )}
  />
);

export const Button = Default.bind({});

Button.args = {
  name: 'button',
  label: 'Submit',
  type: 'submit',
};
