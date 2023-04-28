import Signin from './user/signin'
import Signup from './user/signup'
import Home from './user/home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './component/navbar'
import UserDetails from './user/userDetails'



function App() {
  return (
    
    <BrowserRouter>
    
       <Navbar/>

      <Routes>
        <Route path='/' element={<Signin/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/userDetails' element={<UserDetails/>}/>
      </Routes>

      <ToastContainer position='top-center' autoClose={1000} />
    </BrowserRouter>
    
  )
}

export default App
