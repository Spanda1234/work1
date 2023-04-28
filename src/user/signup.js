import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signup } from '../redux/authSlice'
import user from '../db/db.json' 
import * as fs from 'fs';
import { saveAs } from 'file-saver';
import axios from 'axios'
// import {writeJsonFile} from 'write-json-file';

// const fs = require('fs')


const Signup = () => {
  // get user inputs
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [handle, sethandle] = useState(false)

  // this function is used to navigate from one component to another programmatically
  // userNavigate() returns a function reference
  const navigate = useNavigate()
  const dispatch = useDispatch()
 

  const signuphsndle =async () =>  {
    
    console.log(email, password)
    const users = user.user
    console.log(user.user)
      
    // check if user has really entered any value
    if (firstName.length === 0) {
      toast.error('please enter first name')
    } else if (lastName.length === 0) {
      toast.error('please enter last name')
    } else if (email.length === 0) {
      toast.error('please enter email')
    } else if (phone.length === 0) {
      toast.error('please enter phone number')
    } else if (password.length === 0) {
      toast.error('please enter password')
    }  else {
      axios.post('http://localhost:3500/user',{
                  id:Date.now(),
                  name:firstName,
        email:email,
        password: password,
        address: lastName,
        dob: "19/01/96",
        phone: phone,
        id_no: "2345",
        issue_date: "01/18",
        exp_date: "01/28",
          image: "img/id_img1.jpg"
            }).then((response)=>{
              users = response.data
            })
    }
    //  users.push(user)
    //  console.log(users)
    //  //writeJsonFile('../db/db.json', users);

    //  var file = new File([users], "../db/db.json");
    // saveAs("../db/db.json");

    // await fs.writeFileSync('../db/db.json', JSON.stringify(users), (err) => {
    //   if (err) console.log('Error writing file:', err);})

      // dispatch(signup({
      //   firstName,
      //   lastName,
      //   email, 
      //   phone,
      //   password}))
     
        toast.success('successfully registered a new user')

        // navigate to the singin page
        navigate('/signin')
    }
    
  

  return (
    

    <div>
      
       <h1 style = {{textAlign: 'center', marginTop: 10}}> Signup</h1>
    
    <div style={{ marginTop: 10 }}>
    
      <div style={styles.container}>
        <div className='mb-3' style={{ marginTop: 5 }}>
          <label>Name : </label>
          <input
            onChange={(event) => {
              setFirstName(event.target.value)
            }}
            className='form-control'
            type='text'
            placeholder='Enter Your Name'
            required 
          />
        </div>

        <div className='mb-3'>
          <label>Address : </label>
          <input
            onChange={(event) => {
              setLastName(event.target.value)
            }}
            className='form-control'
            type='text'
            placeholder='Enter Full Address'
            required 
          />
          </div>

<div className='mb-3'>
       
          <label>Email: </label>
          <input
            onChange={(event) => {
              setEmail(event.target.value)
            }}
            className='form-control'
            type='email'
            placeholder='Enter Email'
            required 
          />
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

        <div className='mb-3'>
          <label>Date of Birth : </label>
          <input
            className='form-control'
            type='date'
          />
        </div>

        <div className='mb-3'>
          <label>Phone Number : </label>
          <input
            onChange={(event) => {
              setPhone(event.target.value)
            }}
            className='form-control'
            type='tel'
            placeholder='Enter Phone Number'
            required 
          />
        </div>

        <div className='mb-3'>
          <label> Gender :  </label>
        <input style = {{marginRight:5}} type="radio" id="defaultRadio" name="example2"/>  
    <label for="defaultRadio"> Male </label>  
    
     <input style = {{marginRight:5}} type="radio" id="defaultRadio" name="example2"/>  
    <label for="defaultRadio"> Female </label>  
    <br/>  
</div>

<div className='mb-3'>
          <label>ID details : </label>
  <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">ID No.</span>
  <input type="text" class="form-control" placeholder="Your vaild ID Number" 
  aria-label="Your vaild ID Number" aria-describedby="basic-addon1"/></div>
 <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">Issue Date</span>
  <input type="text" class="form-control" placeholder="Your vaild ID Issue Date" 
  aria-label="Your vaild ID Issue Date" aria-describedby="basic-addon1"/></div>
  <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">Expiry Date</span>
  <input type="text" class="form-control" placeholder="Your vaild ID Expiry Date" 
  aria-label="Your vaild ID Expiry Date" aria-describedby="basic-addon1"/>
</div>
        </div>

        <div className='mb-3'>
        <input
          className='form-control'
          type='file'
        />
        <button  className="btn btn-primary" 
        style={{marginTop: 5, position: 'relative', borderRadius: 5,
        width: '30', height: 30,}}>
           Upload Your ID</button>
      </div>


        <button  style={styles.submitButton}
        className ='btn btn'
          onClick={signuphsndle} >
            Submit
          </button>

        <div className='mb-3' style={{ marginTop: 5 }}>
          <div>
            Already have an account? <Link to='/signin'>Login here</Link>
          </div>
       
        </div>
      </div>
    </div>
    </div>
  )
}




const styles = {
    container: {
      width: 400,
      height: 800,
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
    submitButton: {
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



export default Signup
