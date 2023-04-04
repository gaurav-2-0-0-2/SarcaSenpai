import { useState } from 'react'
import {Routes, Route} from 'react-router-dom';
import Signup from './components/Signup';
import Home from './components/Home';

function App() {

  return (
    <div>
       <Routes>
         <Route exact path='/' element={<Home/>}/>
       </Routes>
    </div>
  )
}

export default App
