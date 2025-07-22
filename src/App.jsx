import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import Home from "./pages/Home";
import Course from "./pages/Course";
import About from "./pages/About";

function App() {

  return (
    <div className='h-screen '>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
