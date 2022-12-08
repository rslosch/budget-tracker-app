import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from './features/user/userSlice';
import Navbar from './Navbar';

function App() {
  const dispatch = useDispatch()
  const { loggedIn } = useSelector(store => store.user)

  useEffect(()=> {
    dispatch(fetchUser())
  },[dispatch])

  const displayNav = (!loggedIn) ? null : <Navbar/>

  return (
    <div>
      {displayNav}
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
        <Route exact path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
  }


export default App;
