/**
 * @jest-environment jsdom
 */

import React from 'react';
import { shallow, configure } from 'enzyme';
import TestComponent from '../TestComponent';
import { defaultData } from '../../../../data/data';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<TestComponent />', () => {
  describe('default', () => {
    it('renders', () => {
      const component = shallow(<TestComponent {...(defaultData as any)} />);
      expect(component).toMatchSnapshot();
    });
  });
});
