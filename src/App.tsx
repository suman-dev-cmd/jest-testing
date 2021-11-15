import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./components/button/Button";
import Couter from "./components/counter/Couter";
import { useAppDispatch,useAppSelector } from "./hooks/hook";
import { getCount } from "./state/slice/countSlice";
const App:React.FC =()=> {
  const dispatch = useAppDispatch();
  const incrementCount = () => {
    dispatch(getCount());
  };
  const {count} = useAppSelector((state)=>state.counter);
  return (
    <div data-test="app-component">
      <Couter></Couter>
      {/* <span>{count}</span> */}
      <Button incrementCount={incrementCount}>Click Me</Button>
    </div>
  );
}

export default App;
