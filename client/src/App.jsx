import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'
import Signup from "./Signup";
import Login from "./Login";
import Home from "./pages/Home";
import { useDispatch } from 'react-redux'
import { fetchUser } from './features/user/userSlice';

function App() {
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(fetchUser())
  },[dispatch])

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
        <Route exact path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
