/**
 * @jest-environment jsdom
 */

import React from 'react';
import { shallow, configure } from 'enzyme';
import ListComponent from '../ListComponent';
import { defaultData } from '../../../../data/data';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<ListComponent />', () => {
  describe('default', () => {
    it('renders', () => {
      const component = shallow(<ListComponent {...(defaultData as any)} />);
      expect(component).toMatchSnapshot();
    });
  });
});
