import './App.css'
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
// import Dashboard from './pages/Dashboard';
import {AppContextProvider} from '../context/appContext';

axios.defaults.baseURL = 'http://127.0.0.1:8000';
axios.defaults.withCredentials = true

function App() {
  return (
    <AppContextProvider>
      <Navbar/>
      <Toaster position='bottom-right' toastOptions={{ duration: 2000 }} />
      <Routes className='router'>
        <Route path="/login" element= {<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path="/" element={<Home/>} />
      </Routes>
    </AppContextProvider>
  )
}

export default App
