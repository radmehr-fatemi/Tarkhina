import React, { useState } from 'react';

//Style
import style from "./HomePageSearch.module.scss";

//SVG
import searchSVG from "../assets/svg/searchHome.svg";
import crossSVG from "../assets/svg/cross2.svg";

//Gif
import searchNonGIF from "../assets/gif/research-non.gif";

//URL
import { foodsData } from '../data/foodsData';

//Components
import CardMenu from './shared/CardMenu';

const HomePageSearch = () => {

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
    
    const searchProducts = overallData.filter(food => food.name.split(" ")[0].includes(input) ?? food.name.includes(input))

    return (
        <div>
            <div className={style.homePageSearch}  style={touched ? { position: "fixed" } : { position: "static" }} >

                <div className={style.homePageInputSearch} >
                    <img src={ crossSVG } alt="cross photo"  onClick={ crossHandler } style={touched ? { display: "block" } : { display: "none" }} />
                    <input type="text" placeholder=' جست و جو ' value={input} onChange={changeHandler} />
                    <img src={searchSVG} alt="search photo" />
                </div>

                <div className={style.homePageInputSearchProducts} style={touched ? { display: "block" } : { display: "none" }} >
                    {
                        searchProducts.length ?
                            searchProducts.map(food => <CardMenu key={food.id} foodData={food} />) :
                            <div className={ style.homePageInputSearchNon } >
                                <p> محصول مورد نظر یافت نشد </p>
                                <img src={ searchNonGIF } alt="search photo" />
                            </div>
                    }
                </div>
            </div>

        </div>
    );
};

export default HomePageSearch;