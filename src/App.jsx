import React, { useEffect } from 'react';
import "./App.scss";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';

//Components
import SignUp from './components/sign up/SignUp';
import Login from './components/sign up/Login';
import HomePage from './components/HomePage';
import Navbar from './components/navbar/Navbar';
import Banner from "./components/Banner";
import Footer from './components/Footer';
import OkatebatBranch from './components/branch/OkatebatBranch';
import HomePageSearch from './components/HomePageSearch';

const App = () => {

  const [cookies] = useCookies();
  const navigate = useNavigate();

  useEffect(() => {
    !Object.keys(cookies).length && navigate("/signup", { replace: true })

  }, [cookies])

  return (
    <>
      {
        !!Object.keys(cookies).length ?
          <div>
            <Navbar />
            <Banner />
            <HomePageSearch />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/okatebatbranch' element={<OkatebatBranch />} />
            </Routes>
            <Footer />
          </div> :

          <div>
            <Routes>
              <Route path='/signup' element={<SignUp />} />
              <Route path='/login' element={<Login />} />
            </Routes>
          </div>

      }
    </>
  );
};
export default App;
