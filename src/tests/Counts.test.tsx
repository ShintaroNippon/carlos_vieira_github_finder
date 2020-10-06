import React from 'react';
import { shallow } from 'enzyme';
import { Counts } from '../app/components/Counts/index';
test('renders the component', () => {
  const component = shallow(<Counts type={'USERS'} counts={10} nameone={'USER'} nametwo={'CONTRIBUTIONS'}/>);
  expect(component).toMatchSnapshot();
});
