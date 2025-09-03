import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Agence from './Pages/Agence.jsx'
import Projects from './Pages/Projects.jsx'
import Navbar from './components/Navigation/Navbar.jsx'
import FullScreenNav from './components/Navigation/FullScreenNav.jsx'

const App = () => {
  return (
    <div className='overflow-x-hidden'>
     <Navbar />
      <FullScreenNav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agence' element={<Agence />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </div>
  )
}

export default App
