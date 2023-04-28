import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signup } from '../redux/authSlice'
import user from '../db/db.json'
import Signin from './signin'


const UserDetails = () => {

    
    console.log(user)
    const users = user



  return (

    <div>
      <header>
      <h1 style = {{textAlign: 'center', marginTop: 10}}> User Details</h1>
      </header>

        <div style={{ marginTop: 20 }}>
        <div style={styles.container}>
        
        <div style={styles.content}>
            <div className='card col'>
                <img style={{ height: '20vw', display: 'block',objectFit:'cover',width:'100%' }} 
                src={'profileImage.jpeg'}  />
                </div>
            </div>
            
            <div style={styles.details}>
            <div style={{ marginTop: 5 }}>
        
        <div>

        <div style={{display:'flex'}}>
            <div> <label style={{fontSize:'20px'}}> Name : </label></div>
            <div style={{marginLeft:'30px',marginTop:'5px'}}>
            <span>{ "Vidya Sarkar" }</span></div> 
        </div>

        <div style={{display:'flex', marginTop:"10px"}}>
            <div> <label style={{fontSize:'20px'}}> Address : </label></div>
            <div style={{marginLeft:'30px',marginTop:'5px'}}>
            <span>{ "pune" }</span></div> 
        </div>

        <div style={{display:'flex'}}>
            <div> <label style={{fontSize:'20px'}}> Email : </label></div>
            <div style={{marginLeft:'30px',marginTop:'5px'}}>
            <span>{ "Vidya.Sarkar@wu.com" }</span></div> 
        </div>

        <div style={{display:'flex'}}>
            <div> <label style={{fontSize:'20px'}}>Date of Birth : </label></div>
            <div style={{marginLeft:'30px',marginTop:'5px'}}>
            <span>{ "25" }</span></div> 
        </div>

        <div style={{display:'flex'}}>
            <div> <label style={{fontSize:'20px'}}>Phone Number : </label></div>
            <div style={{marginLeft:'30px',marginTop:'5px'}}>
            <span>{ "1234567890" }</span></div> 
        </div>

        <div style={{display:'flex'}}>
            <div> <label style={{fontSize:'20px'}}>Gender : </label></div>
            <div style={{marginLeft:'30px',marginTop:'5px'}}>
            <span>{ "Female" }</span></div> 
        </div>

        <div style={{display:'flex'}}>
            <div> <label style={{fontSize:'20px'}}>ID details : </label></div>
            <div style={{marginLeft:'30px',marginTop:'5px'}}>
            <span>{ "Female" }</span></div> 
        </div>



        
    </div>
    </div>
    </div>

    <div>
        
    </div>
        </div>
        </div>

        <footer>
         &copy;2023 Western Union Holdings,
         <br/> 
         Inc. All Rights Reserved 
         </footer>
        </div>
    )
  
}

const styles={
    container: {
        width: 600,
        height: 700,
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
    content: {
        // marginTop: '30px',
        width: 150,
        height: 150,
        padding: 20,
        position: 'relative',
        borderRadius: 10,
        // backgroundColor:'grey'
        
    },
    details:{
        display:'block',
        margin:'60px 50px 0px 200px',
        padding: 20,
    position: 'absolute',
        top:0,
        left: 0,
        right: 0,
        bottom: 0,

    }


}



export default UserDetails
