// import React from "react"
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Register from "./pages/Register"
import Login from "./pages/Login"
import {Pizza} from "./pages/Pizza"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import PageNotFound from "./components/NotFound"
import Profile from "./components/Profile"
import Cart from './pages/Cart'






const App = () => {


 
  return (

    <div className="container-fluid p-0">

    

        <Navbar />
       
    
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />    
          <Route path="/register" element={<Register />} />
          <Route path="/pizza/p001" element={<Pizza />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/card" element={<Cart />} />
          <Route path="*" element={<PageNotFound />} />

         
        </Routes>

        {/* <Card></Card> */}
        {/* <Pizza /> */}

 

        
        <div className="mt-5">
         <Footer />
        </div>

     
    </div>
  )
}

export default App;
