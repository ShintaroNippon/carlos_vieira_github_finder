import React from 'react';
import { shallow } from 'enzyme';
import { Searching } from '../app/components/Searching/index';
test('renders the component', () => {
  const component = shallow(<Searching />);
  expect(component).toMatchSnapshot();
});
