/**
 * @jest-environment jsdom
 */

import React from 'react';
import { shallow, configure } from 'enzyme';
import Dashboard from '../Dashboard';
import { defaultData } from '../../../../data/data';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Dashboard />', () => {
  describe('default', () => {
    it('renders', () => {
      const component = shallow(<Dashboard {...(defaultData as any)} />);
      expect(component).toMatchSnapshot();
    });
  });
});
