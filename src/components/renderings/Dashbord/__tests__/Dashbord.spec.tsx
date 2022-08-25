/**
 * @jest-environment jsdom
 */

import React from 'react';
import { shallow, configure } from 'enzyme';
import Dashbord from '../Dashbord';
import { defaultData } from '../../../../data/data';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Dashbord />', () => {
  describe('default', () => {
    it('renders', () => {
      const component = shallow(<Dashbord {...(defaultData as any)} />);
      expect(component).toMatchSnapshot();
    });
  });
});
