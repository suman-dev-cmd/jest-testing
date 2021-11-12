import React from 'react';
import {shallow,mount} from 'enzyme';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './state/store';
import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore()
const stores =mockStore(store);
test('renders learn react link', () => {
  const wrapper = mount(<Provider store={stores}><App /></Provider>);
  // console.log(wrapper.debug())
  const appcomponet = wrapper.find('[data-test="app-component"]');
  expect(appcomponet.length).toBe(1);
});
