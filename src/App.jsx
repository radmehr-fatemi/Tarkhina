import React from 'react';
import "./App.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import { useCookies } from 'react-cookie';

//Components
import SignUp from './components/sign up/SignUp';
import Login from './components/sign up/Login';
import HomePage from './components/HomePage';
import Navbar from './components/navbar/Navbar';


const App = () => {

  const [cookies] = useCookies()
  console.log(cookies)
  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
};

export default App;