import { useState } from 'react'
import {Routes, Route} from 'react-router-dom';
import Signup from './routes/Signup';
import Signin from "./routes/Signin";
import Home from './routes/Home';
import Profile from './routes/Profile';

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
