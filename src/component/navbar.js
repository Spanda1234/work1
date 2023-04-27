import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { signout } from '../redux/authSlice'
import Signup from './../user/signup';



const Navbar = () => {
    // get the current status
    
    const signinStatus = useSelector((state) => state.authSlice.status)
  
    // get the dispatcher
    const dispatch = useDispatch()
  
    // used to navigate
    const navigate = useNavigate()


    return(
      
      <nav className='navbar navbar-expand-lg container-fullwidth bg-dark'>
      <div class="container-fluid">
      <Link className='navbar-brand' 
       style={{color : '#ffff00'}}>
          <h2>Western Union</h2>
        </Link>
        {/* <a class="navbar-brand" href="#">Western Union</a> */}

        

        {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" 
        aria-expanded="false" aria-label="Toggle navigation">

          <span class="navbar-toggler-icon"></span>
        </button> */}
        {/* <div id="navbarNavAltMarkup"> */}
          <div class="navbar-nav">
            
          <div class="dropdown">
          <svg xmlns="http://www.w3.org/2000/svg" 
          width="40" height="40" fill="currentColor" class="bi bi-list" 
          type="button" data-bs-toggle="dropdown" 
          aria-expanded="false"
          style={{color : '#ffff00'}}
          viewBox="0 0 16 16">
          <path fill-rule="evenodd" 
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
  {/* <i class="dropdown-toggle bi bi-list" 
  type="button" data-bs-toggle="dropdown" aria-expanded="false">
    
  </i> */}
  <ul class="dropdown-menu dropdown-menu-lg-end">
    <li><Link to="/signup" class="dropdown-item">Signup</Link></li>
    {/* <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li> */}
  </ul>
</div>

            
          </div>
        </div>
      {/* </div> */}
    </nav>
    //     <nav 
    //     className='navbar navbar-expand-lg navbar-dark bg-dark'>
    //    <div className='container-fluid' >
    //    <Link className='navbar-brand' 
    //    style={{color : '#ffff00'}} 
    //    to='/home'>
    //       <h2>Western Union</h2>
    //     </Link>

    //     {/* <button
    //       className='navbar-toggler'
    //       type='button'
    //       data-bs-toggle='collapse'
    //       data-bs-target='#navbarSupportedContent'
    //       aria-controls='navbarSupportedContent'
    //       aria-expanded='false'
    //       aria-label='Toggle navigation'>
    //       <span className='navbar-toggler-icon'></span>
    //     </button> */}
        
    //     <div className='collapse navbar-collapse'>
    //     <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
    //         <li className='nav-item'>
    //           <Link
    //             className='nav-link active'
    //             aria-current='page'
    //             style={{color : '#ffff00'}} 
    //             to='/signup'>
    //             Signup
    //           </Link>
    //         </li>
    //         </ul>

    //         <ul className='navbar-nav navbar-right'>
    //         <li className='nav-item'>
    //           {/* if user is not signed then render signin link */}
    //           {!signinStatus && (
    //             <Link
    //               className='nav-link active'
    //               aria-current='page'
    //               style={{color : '#ffff00'}} 
    //               to='/signin'>
    //               Signin
    //             </Link>
    //           )}

    //           {/* if user is signed in then render signout button */}
    //           {signinStatus && (
    //             <button
    //               style={{ textDecoration: 'none', color: 'yellow' }}
    //               onClick={() => {
    //                 // go to signin page
    //                 navigate('/signin')

    //                 // send the action to let the user signout
    //                 dispatch(signout())
    //               }}
    //               className='btn btn-link'
    //               aria-current='page'>
    //               Signout
    //             </button>
    //           )}
    //         </li>
    //       </ul>
    //   </div>
    //   </div>
    // </nav>
    ) 
}

export default Navbar