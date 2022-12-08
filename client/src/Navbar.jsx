import React from 'react'
import { NavLink } from 'react-router-dom'
import { logoutUser } from './features/user/userSlice'
import { useDispatch } from 'react-redux';

const Navbar = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        fetch('/logout',{
            method: 'DELETE',
        })
        .then(() => dispatch(logoutUser()))
    }
  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-8">
        <div className=" flex-shrink-0 text-white mr-6">
            <span className="font-semibold text-xl tracking-tight">Expennies</span>
        </div>
        <div className="w-full block flex-grow md:flex md:items-center md:w-auto">
            <div className="text-sm md:flex-grow grid-row-end-1">
                <NavLink to={'/'} className="block mt-2 md:inline-block md:mt-0 text-teal-200 hover:text-white mr-4">
                    Home
                </NavLink>
                <NavLink className="block mt-2 md:inline-block md:mt-0 text-teal-200 hover:text-white">
                    <button onClick={handleLogout}> Logout</button>
                </NavLink>
            </div>
        </div>
    </nav>

  )
}

export default Navbar