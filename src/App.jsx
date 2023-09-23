import React from 'react';
import "./App.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import { useCookies } from 'react-cookie';

//Components
import SignUp from './components/SignUp';
import Login from './components/Login';
import HomePage from './components/HomePage';


const App = () => {

  const [cookies] = useCookies()
  console.log(cookies)
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
};

export default App;