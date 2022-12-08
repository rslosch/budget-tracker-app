import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import Login from './Login'

import { RotatingLines } from 'react-loader-spinner'

const Home = () => {
    const {userData, loading, loggedIn } = useSelector(store => store.user)
    const navigate = useNavigate()

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
    else if (!loggedIn || !userData) {
        navigate('/login')
        return (
            <Login />
        )
    } else {
        return (
        <div>
            <h2>{userData.username}'s Home</h2>
        </div>
        )
    }
}

export default Home