import { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'
import {signin, signout} from '../redux/authSlice'
import { useDispatch } from 'react-redux'
import ReCAPTCHA from "react-google-recaptcha";
import { logIn } from '../redux/action'
import user from '../db/db.json' 

const Signin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [handleerror, sethandleerror] = useState(0)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    // const user ={
    //   name:'abc',
    //   psw: 'abc',
    //   id: 2
    // }
    
    const signinhandle = () =>{
        console.log(user)
        const users = user
        

        if (email.length === 0) {
          toast.error('please enter email')
        } else if (password.length === 0) {
          toast.error('please enter password')
        } else {
          for (let i =0; i<users.length;i++){
            if(users[i].email===email && users[i].password===password){
              toast.success('welcome to wulife')
              navigate('/userDetails')
              break
            } else {
              toast.error('invalid email id or password')
              sethandleerror(pre=> pre+1)
              break
            }
          }
          console.log (handleerror)
          // dispatch(signin({
          //   email, 
          //   password}))

        }   
    }

function onChange(value) {
      console.log("Captcha value:", value);
    }
   
  return (
    <div> <h1 style = {{textAlign: 'center', marginTop: 30}}> Login </h1>
    
    <div style={{ marginTop: 10 }}>
      
        <div style={styles.container}>

        <div className='mb-3'>
          <label> Username : </label>
          <input
          onChange={(event) => {
              setEmail(event.target.value)}}
              className='form-control'
              type='text'
              placeholder='Enter Username'
              required />
        </div>

        <div className='mb-3'>
          <label>Password : </label>
          <input
          onChange={(event) => {
            setPassword(event.target.value)}}
          className='form-control' 
          type='password'
          placeholder='Enter Password'
          required 
          />
        </div>
        

     {handleerror>2? ( <ReCAPTCHA
    sitekey="6LcDYb4lAAAAABHaIbKU0T4LWT9--SSPSfHTsqwZ"
    onChange={onChange}/>) : null}

<div style={{ marginTop:20 }}>
    <label>
        <input type="checkbox" name="remember"/> Remember me
      </label>
      </div>

      
      <button style={styles.loginButton}
      className ='btn btn'
      onClick = {signinhandle}>
            Login
      </button>
            

        <div className='mb-3' style={{ marginTop: 5 }}>
          <div>
            Dont have an account? <Link 
            to='/signup'>Signup here</Link>
          </div>
          <div>

          
          </div>
         
        </div>
      </div>
      </div>
      </div>

  )
}
const styles = {
    container: {
      width: 325,
      height: 400,
      padding: 10,
      position: 'relative',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      margin: 'auto',
      borderRadius: 10,
      broderWidth: 1,
      borderStyle: 'solid',
      boxShadow: '1px 1px 20px 5px #C9C9C9'
    },
    loginButton: {
      position: 'relative',
      width: '100%',
      height: 40,
      backgroundColor: '#000',
      color: 'yellow',
      borderRadius: 5,
      border: 'none',
      marginTop: 5, 
    },
}

export default Signin
