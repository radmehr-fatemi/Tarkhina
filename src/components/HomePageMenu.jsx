import React from 'react';
import { Link } from 'react-router-dom';

//Style
import styled from "./HomePageMenu.module.scss";

//Image
import mainCourseImage from "../assets/image/menu/mainCourse.png";
import appetizerImage from "../assets/image/menu/appetizer.png";
import dessertImage from "../assets/image/menu/dessert.png";
import drinkImage from "../assets/image/menu/drink.png";

const HomePageMenu = () => {
    return (
        <div className={styled.homePageMenu} >

            <div>
                <h1>منوی رستوران</h1>
            </div>

            <ul>
                <li>
                    <Link to="/menu/main" >
                        <img src={mainCourseImage} alt="food photo" />
                        <p>غذای اصلی</p>
                    </Link>
                </li>

                <li>
                    <Link to="/menu/main" >
                        <img src={appetizerImage} alt="food photo" />
                        <p> پیش غذا </p>
                    </Link>
                </li>

                <li>
                    <Link to="/menu/main" >
                        <img src={dessertImage} alt="food photo" />
                        <p> دسر </p>
                    </Link>
                </li>

                <li>
                    <Link to="/menu/main" >
                        <img src={drinkImage} alt="food photo" />
                        <p> نوشیدنی </p>
                    </Link>
                </li>
            </ul>
        </div>

    );
};

export default HomePageMenu;