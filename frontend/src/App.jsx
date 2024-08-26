import React from "react"
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Register from "./components/Register"
import Login from "./components/Login"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Pizza from "./components/Pizza"




const App = () => {

 
  return (

    <div className="container-fluid p-0">

      <BrowserRouter>

        <Navbar />
        <Home></Home>
    
        <Routes>

          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/login" element={<Login />} />    
          <Route path="/register" element={<Register />} />

         
        </Routes>

        {/* <Pizza></Pizza> */}

 

        
        <div className="mt-5">
         <Footer />
        </div>

      </BrowserRouter>
    </div>
  )
}

export default App;
