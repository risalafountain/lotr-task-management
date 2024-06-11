import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import Resources from './Components/Resources'
import FaveTasks from './Components/FaveTasks'

function App() {

  return (
    <>
      
      <NavBar />
      
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/resources/' element={<Resources />}  />
        <Route path= '/favorites' element={<FaveTasks />}  />
      </Routes>
    </div>
    </>
  )
}

export default App
