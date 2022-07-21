/**
 * @jest-environment jsdom
 */

import React from 'react';
import { shallow, configure } from 'enzyme';
import NewComponent from '../NewComponent';
import { defaultData } from '../../../../types/types';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<NewComponent />', () => {
  describe('default', () => {
    it('renders', () => {
      const component = shallow(<NewComponent {...(defaultData as any)} />);
      expect(component).toMatchSnapshot();
    });
  });
});
