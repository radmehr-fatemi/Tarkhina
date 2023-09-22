import React from 'react';
import "./App.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import { CookiesProvider } from 'react-cookie';

//Components
import SignUp from './components/SignUp';
import Login from './components/Login';


const App = () => {
  return (
    <Routes>
      <Route path='/signup' element={ <SignUp /> } />
      <Route path='/login' element={ <Login /> } />
      <Route path='/*' element={ <Navigate to='/signup' /> } />
    </Routes>
  );
};

export default App;