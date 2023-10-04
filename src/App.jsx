import React, { useEffect } from 'react';
import "./App.scss";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';

//Context
import CartContextProvider from './components/context/CartContextProvider';

//Components
import SignUp from './components/sign up/SignUp';
import Login from './components/sign up/Login';
import HomePage from './components/HomePage';
import Navbar from './components/navbar/Navbar';
import OkatebatBranch from './components/branch/OkatebatBranch';
import Menu from './components/menu/Menu';
import MenuMain from './components/menu/MenuMain';
import Cart from './components/cart/Cart';
import LikedItems from './components/profile/LikedItems';
import ProductDetails from './components/details/ProductDetails';
import AboutUs from './components/about us/AboutUs';

const App = () => {

  const [cookies] = useCookies();
  const navigate = useNavigate();

  useEffect(() => {
    !Object.keys(cookies).length && navigate("/signup", { replace: true })

  }, [cookies])

  return (
    <CartContextProvider>
      {
        !!Object.keys(cookies).length ?
          <div>
            <Navbar />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/okatebatbranch' element={<OkatebatBranch />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/likeditems' element={<LikedItems />} />
              <Route path='/details/:id' element={<ProductDetails />} />
              <Route path='/aboutus' element={<AboutUs />} />
              <Route path='/menu/*' element={<Menu />} >
                <Route path='main' element={<MenuMain />} />
              </Route>
            </Routes>
          </div> :

          <div>
            <Routes>
              <Route path='/signup' element={<SignUp />} />
              <Route path='/login' element={<Login />} />
            </Routes>
          </div>
      }

    </CartContextProvider>
  );
};
export default App;
