import React from 'react';
import { Link } from 'react-router-dom';

//Components
import HomePageSlider from './HomePageSlider';

//Style
import style from "./HomePage.module.scss";

//Image
import mainCourseImage from "../assets/image/menu/mainCourse.png";
import appetizerImage from "../assets/image/menu/appetizer.png";
import dessertImage from "../assets/image/menu/dessert.png";
import drinkImage from "../assets/image/menu/drink.png";

//SVG
import searchSVG from "../assets/svg/search.svg";

const HomePage = () => {
    return (
        <div className={ style.homePage } >
            <HomePageSlider />

            <div className={ style.homePageInputSearch } >
                <input type="text" placeholder=' جست و جو ' />
                <img src={ searchSVG } alt="" />
            </div>

            <div className={ style.homePageMenu } >

                <div>
                    <h1>منوی رستوران</h1>
                </div>
                
                <ul>
                    <li>
                        <Link>
                            <img src={mainCourseImage} alt="food photo" />
                            <p>غذای اصلی</p>
                        </Link>
                    </li>

                    <li>
                        <Link>
                            <img src={appetizerImage} alt="food photo" />
                            <p> پیش غذا </p>
                        </Link>
                    </li>

                    <li>
                        <Link>
                            <img src={dessertImage} alt="food photo" />
                            <p> دسر </p>
                        </Link>
                    </li>

                    <li>
                        <Link>
                            <img src={drinkImage} alt="food photo" />
                            <p> نوشیدنی </p>
                        </Link>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default HomePage;