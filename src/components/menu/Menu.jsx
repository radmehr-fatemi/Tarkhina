import React from 'react';
import { Link, Outlet } from 'react-router-dom';

//Style
import styled from "./Menu.module.scss";

const Menu = () => {
    return (
        <div className={ styled.menu }>
            <div className={ styled.menuLinks }>
                <ul>
                    <li><Link to="main"> غذای اصلی </Link></li>
                    <li><Link to="main"> پیش غذا </Link></li>
                    <li><Link to="main"> دسر </Link></li>
                    <li><Link to="main"> نوشیدنی </Link></li>
                </ul>

            </div>

            <Outlet />
        </div>
    );
};

export default Menu;