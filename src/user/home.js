import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { signin } from '../redux/authSlice'
import { useSelector, useDispatch } from 'react-redux'


const Home = () => {


  const dispatch = useDispatch()

  const signinStatus = useSelector((state) => state.authSlice.status)

  // load the homes as soon as the component gets loaded successfully
  useEffect(() => {
    // check if user is already logged in by reading the token from session storage
    if (sessionStorage['token'] && sessionStorage['token'].length > 0) {
      // reading the information from sesssionstorage and manually signing in user
      const user = {
        token: sessionStorage['token'],
        name: sessionStorage['username'],
      }
      dispatch(signin(user))
    } 
  })


  return (
    
      <div >
          <style>{'body { background-color: yellow; }'}</style>
          <h1 style = {{textAlign: 'center', marginTop: 200}}>
             Welcome Western Union 
             </h1>
      </div>

  )
}

export default Home
