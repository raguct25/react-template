/**
 * @jest-environment jsdom
 */

import React from 'react';
import { shallow, configure } from 'enzyme';
import FormComponent from '../FormComponent';
import { defaultData } from '../../../../data/data';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<FormComponent />', () => {
  describe('default', () => {
    it('renders', () => {
      const component = shallow(<FormComponent {...(defaultData as any)} />);
      expect(component).toMatchSnapshot();
    });
  });
});
