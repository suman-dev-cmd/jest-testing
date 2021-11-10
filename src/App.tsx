import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/button/Button';
import Couter from './components/counter/Couter';
import {useAppDispatch} from './hooks/hook';
import {getCount} from './state/slice/countSlice';
function App() {
  const dispatch = useAppDispatch();
  const incrementCount=()=>{
    dispatch(getCount());
  }
  return (
    <div data-test="app-component">
    <Couter></Couter>
    <Button incrementCount={incrementCount}>Click Me</Button>
    </div>
  );
}

export default App;
