import { useState } from 'react'
import {Routes, Route} from 'react-router-dom';
import Signup from './components/Signup';
import Signin from "./components/Signin";
import Home from './components/Home';
import Profile from './components/Profile';

function App() {

  return (
    <div>
       <Routes>
         <Route exact path='/' element={<Home/>}/>
         <Route path='/signup' element={<Signup/>}/>
         <Route path='/signin' element={<Signin/>}/>
         <Route path='/profile' element={<Profile/>}/>
       </Routes>
    </div>
  )
}

export default App
