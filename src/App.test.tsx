import React from 'react';
import {shallow,mount} from 'enzyme';
import App from './App';
import { Provider } from 'react-redux';
// import { store } from './state/store';
import configureMockStore from 'redux-mock-store';
import {configureStore} from '@reduxjs/toolkit';
import countReducer from './state/slice/countSlice';
const store = configureStore({
  reducer:{
    counter:countReducer
  }
});
const mockStore = configureMockStore()

test('renders learn react link', () => {
  const wrapper = mount(<Provider store={store}><App /></Provider>);
  const appcomponet = wrapper.find('[data-test="app-component"]');
  expect(appcomponet.length).toBe(1);
});
