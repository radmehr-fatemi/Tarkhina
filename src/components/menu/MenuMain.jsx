import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './MenuMain.scss';
import { v4 } from 'uuid';

//SVG
import arrowLeftSVG from "./svg/arrow-left-home.svg";
import searchSVG from "./svg/search.svg";
import cartSVG from "../../assets/svg/cart.svg";
import crossSVG from "../../assets/svg/cross2.svg";

//Gif
import searchNonGIF from "../../assets/gif/research-non.gif";

//Components
import HomePageSearch from '../HomePageSearch';
import CardMenu from '../shared/CardMenu';

//data
import { foodsData } from '../../data/foodsData';
import ScrollToTop from '../shared/ScrollToTop';

const MenuMain = () => {

    const { iranian, non_Iranian, pizzas, sandwiches } = foodsData
    const inputSearch = useRef(null);
    const overallData = [...foodsData.iranian, ...foodsData.non_Iranian, ...foodsData.pizzas, ...foodsData.sandwiches];
    const [input, seInput] = useState("");
    const [touched, setTouched] = useState(false);

    const changeHandler = ({ target }) => {
        seInput(target.value)
        target.value.length ? setTouched(true) : setTouched(false)
    }

    const crossHandler = () => {
        setTouched( false )
        seInput("")
    }
    
    useEffect(() => {
        inputSearch.current.focus()
    }, [])

    const searchProducts = overallData.filter(food => food.name.split(" ")[0].includes(input) ?? food.name.includes(input))

    return (
        <div className='MenuMain'>

            <div className='MenuMainItems'>
                <div className='MenuMainSwiper'>
                    <Swiper
                        pagination={true}
                        className="mySwiper"
                        slidesPerView={3}
                        // centeredSlides={true}
                        spaceBetween={8}
                        breakpoints={{
                            0: {
                                width: 350,
                                slidesPerView: 3,
                            },
                            768: {
                                width: 800,
                                slidesPerView: 5,
                            },
                            1180: {
                                width: 1350,
                                slidesPerView: 6,
                            },
                        }}
                    >

                        <SwiperSlide>
                            <Link > غذا های ایرانی <img src={arrowLeftSVG} alt="arrow left photo" /> </Link>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Link> غذا های غیر ایرانی <img src={arrowLeftSVG} alt="arrow left photo" /> </Link>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Link> پیتزا ها <img src={arrowLeftSVG} alt="arrow left photo" /> </Link>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Link> ساندویچ ها <img src={arrowLeftSVG} alt="arrow left photo" /> </Link>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Link> پرفروش ترین  <img src={arrowLeftSVG} alt="arrow left photo" /> </Link>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Link> اقتصادی ترین <img src={arrowLeftSVG} alt="arrow left photo" /> </Link>
                        </SwiperSlide>

                    </Swiper>
                </div>

                <div className={"MenuMainSearch"} >
                    <img src={crossSVG} alt="cross photo" onClick={crossHandler} style={touched ? { display: "block" } : { display: "none" }} />
                    <input ref={inputSearch} type="text" placeholder=' جست و جو ' value={input} onChange={changeHandler} />
                    <img src={searchSVG} alt="search photo" />

                    <div className='MenuMainSearchProducts' style={touched ? { display: "flex" } : { display: "none" }}  >
                        {
                            searchProducts.length ?
                                searchProducts.map(food => <CardMenu key={food.id} foodData={food} />) :

                                <div className='MenuMainSearchNon' >
                                    <p> محصول یافت نشد </p>
                                    <img src={searchNonGIF} alt="search photo" />
                                </div>
                        }
                    </div>
                </div>
            </div>
            <HomePageSearch />

            <div className='MenuMainFields'>

                <div id="MenuMainFieldFilter1">
                    <div className='MenuMainField1'>
                        <h3> غذا های ایرانی </h3>
                        <Link to="/cart" >
                            <img src={cartSVG} alt="cart photo" style={{ width: "20px" }} />
                            تکمیل خرید
                        </Link>
                    </div>

                    <div className="MenuMainFieldCArds">
                        {
                            iranian.map(food => <CardMenu key={food.id} foodData={food} />)
                        }
                    </div>
                </div>

                <div id="MenuMainFieldFilter2" className='MenuMainField2'>
                    <h3> غذاهای غیر ایرانی </h3>

                    <div className="MenuMainFieldCArds">
                        {
                            non_Iranian.map(food => <CardMenu key={food.id} foodData={food} />)
                        }
                    </div>
                </div>

                <div id="MenuMainFieldFilter3" className='MenuMainField3'>
                    <h3> پیتزا </h3>

                    <div className="MenuMainFieldCArds">
                        {
                            pizzas.map(food => <CardMenu key={food.id} foodData={food} />)
                        }
                    </div>
                </div>

                <div id="MenuMainFieldFilter4" className='MenuMainField4'>
                    <h3> ساندویچ </h3>

                    <div className="MenuMainFieldCArds">
                        {
                            sandwiches.map(food => <CardMenu key={food.id} foodData={food} />)
                        }
                    </div>
                </div>

            </div>
            <ScrollToTop />
        </div>
    );
};

export default MenuMain;