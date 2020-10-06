import React from 'react';
import { shallow } from 'enzyme';
import { TypeCard } from '../app/components/TypeCard/index';
const type = 'companies';
const item = {
  name: 'carlos',
  score: 1
};
test('renders the component', () => {
  const component = shallow(<TypeCard type={type} item={item} />);
  expect(component).toMatchSnapshot();
});
