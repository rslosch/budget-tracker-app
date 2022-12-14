import React, { useState } from 'react'
import { SignupIcon } from '../icons';
import { createUser } from '../features/user/userSlice'
import { useDispatch } from 'react-redux'
import { useNavigate, NavLink } from 'react-router-dom'

const Signup = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [errorsList, setErrorsList] = useState([])

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,
        password_confirmation: passwordConfirmation,
      })
    })
    .then(res => res.json())
    .then(user => {
      if (!user.errors) {
        console.log("user item returned from backend", user)
        dispatch(createUser(user))
        navigate('/')
      }
      else {
        setUsername('')
        setPassword('')
        setPasswordConfirmation('')
        const errorLis = user.errors.map(error => {
          let str = error.toString()
          return <li key={error} className='text-white py-1'>{str.toUpperCase()}</li>
        })
        setErrorsList(errorLis)
      }
    })
  } 

  return (
    <div className='bg-gradient-to-r from-teal-400 to-blue-500 h-screen flex flex-col justify-center items-center'>
      <div className="max-w-lg mx-auto mt-12 bg-white shadow-md rounded px-8 pt-6 pb-8 lg:w-1/3 w-1/2 ">
      <SignupIcon />
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
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
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="passwordConfirmation"
          >
            Confirm Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="passwordConfirmation"
            type="password"
            placeholder="********"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
          <NavLink to="/login" className="items-end text-sm hover:text-blue-500">
            Have an account?
            Login here
          </NavLink>
        </div>
      </form>
      </div>
      <div className='flex items-center justify-center bg-red-500 rounded m-4'>
        <ul>
          {errorsList}
        </ul>
    </div>
  </div>
  )
}

export default Signup