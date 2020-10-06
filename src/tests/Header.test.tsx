import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../app/components/Header/index';
test('renders the component', () => {
  const component = shallow(<Header />);
  expect(component).toMatchSnapshot();
});
