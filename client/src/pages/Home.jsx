import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'

import { RotatingLines } from 'react-loader-spinner'

const Home = () => {
    const {userData, loading } = useSelector(store => store.user)


    if(loading) {
        return (
            <div className='grid place-items-center h-screen'>
                < RotatingLines
                    strokeColor="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="96"
                    visible={true}
                />
            </div>
        )
    }
    else if (!userData || userData.error) {
        return <h2> Please {<NavLink to={'/login'}>Login</NavLink>} or {<NavLink to={'/signup'}>Signup</NavLink>} </h2>
    } else {
        return (
        <div>
            <h2>{userData.username}'s Home</h2>
        </div>
        )
    }
}

export default Home