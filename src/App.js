import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Footer from './Components/Footer'
import About from './Components/About'
import './App.css'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Resume from './Components/Resume'


const App = () => {
  return (
    <div> 
      <Navbar />
      <Home />
      <About /  >
      <Projects />
      <Contact />
      <Footer />
      <Resume />
    </div>
  )
}

export default App