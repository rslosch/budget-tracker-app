import React, { useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createUser } from '../features/user/userSlice'

const Login = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword]= useState("")
  const [error, setError] = useState("")

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
      e.preventDefault()
      fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: username, 
          password: password
        })
      })
       .then(res => res.json())
       .then(data => {
          if(!!data.error) {
            setUsername("")
            setPassword("")
            let str = data.error
            const errorLi = <h3 className='text-white m-2'> {str.toUpperCase()} </h3>
            setError(errorLi)
          } else {
            navigate('/')
            dispatch(createUser(data))
          }
       })
  }

  return (
    <div className="bg-gradient-to-r from-teal-400 to-blue-500 h-screen flex flex-col justify-center items-center">
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-12 pt-6 pb-8 mb-4 lg:w-1/3 w-1/2">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
          Username
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="**************"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Log In
        </button>
        <NavLink to="/signup" className="items-end text-sm hover:text-blue-500">
            Create an account here
        </NavLink>
      </div>
    </form>
    <div className='flex items-center justify-center bg-red-500 rounded mt-2'>
      {error}
    </div>
  </div>
  )
}

export default Login