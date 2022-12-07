import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'


const Home = () => {
    const {userData } = useSelector(store => store.user)

  if (!userData || userData.error) {
    return <h2> Please {<NavLink to={'/login'}>Login</NavLink>} or {<NavLink to={'/signup'}>Signup</NavLink>} </h2>
  } else {
    return <div>{userData.username}'s Home</div>
  }
}

export default Home