import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUser } from '../features/user/userSlice';

const Home = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

    useEffect(()=> {
        dispatch(fetchUser()) 
    },[])
    console.log("user object" ,user.userData)
    console.log("user object" ,user.userData)
  if (!user.userData) {
    return <h3>Please Login or Signup </h3>
  } else {
    return <div>Home</div>
  }
}

export default Home