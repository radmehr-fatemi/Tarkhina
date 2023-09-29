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
import Menu from './components/menu/Menu';
import MenuMain from './components/menu/MenuMain';

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
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/okatebatbranch' element={<OkatebatBranch />} />

              <Route path='/menu/*' element={<Menu />} >
                <Route path='main' element={<MenuMain />} />
              </Route>

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
