import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Main from './components/Main'
import Signup from './components/Signup'
import Login from './components/Login'

function App() {
  return (
    <div>
        <Routes>
         <Route path='/main' element={<Main/>}></Route>
         <Route path='/signup' element={<Signup/>}></Route>
         <Route path='/' element={<Login/>}></Route>
        </Routes>

    </div>
  )
}

export default App