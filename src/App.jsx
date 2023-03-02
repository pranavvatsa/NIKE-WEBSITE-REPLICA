import { useState } from 'react'
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Analytics from './components/Analytics'
import Contact from './components/Contact'
import Footer from './components/Footer'
import {Routes, Route} from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
        <Navbar/>
        <Hero/>
        <Analytics />
        <Contact />
        <Footer /> 
    </div>
  )
}

export default App
