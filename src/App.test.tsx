import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './state/store';

test('renders learn react link', () => {
  const wrapper = shallow(<Provider store={store}><App /></Provider>);
  console.log(wrapper.debug())
  const appcomponet = wrapper.find(Provider).dive().find('[data-test="app-component"]');
  expect(appcomponet.length).toBe(1);
});
