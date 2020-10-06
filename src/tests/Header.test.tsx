import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../app/components/Header/index';
test('renders the component', () => {
  const component = shallow(<Header />);
  expect(component).toMatchSnapshot();
});

test('renders the component header', () => {
  const wrapper = shallow(<Header />);
  const welcome = <h1>Search for GitHub users</h1>;
  expect(wrapper.contains(welcome)).toEqual(true);
});
