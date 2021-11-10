import React from 'react';
import {shallow} from 'enzyme';
import Button from '../Button';

test('renders learn react link', () => {
  const incrementCount = jest.fn()
  const wrbuttoner = shallow(<Button incrementCount={incrementCount}>click</Button>);
  const buttoncomponet = wrbuttoner.find('[data-test="button-component"]');
  expect(buttoncomponet.length).toBe(1);
});