import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

//Style
import styled from "./LikedItems.module.scss";

//Context
import { CartContext } from '../context/CartContextProvider';

//SVG
import backSVG from "./svg/arrow-back.svg";
import trashBlackSVG from "./svg/trashBlack.svg";

//GIF
import ghostGif from "./gif/ghost.gif"

//Components
import CardMenu from '../shared/CardMenu';

const LikedItems = () => {

    const { state, dispatch } = useContext(CartContext);
    const navigate = useNavigate();

    return (
        <div className={styled.likedItems} >

            <div className={styled.likedItemsHeader}>
                <img src={backSVG} alt="back photo" onClick={() => navigate(-1)} />
                <h3> علاقه مندی ها </h3>
                <img src={trashBlackSVG} alt="trash photo" onClick={() => dispatch({ type: "CLEAR_LIKEDITEMS" })} />
            </div>

            <div className={styled.likedItemsProducts}>
                {
                    !state.likedItems.length ?
                        <div className={ styled.likedItemsProductsEmpty } >
                            <p> شما هنوز غذای مورد علاقه خود را انتخاب نکردید </p>
                            <img src={ghostGif} alt="ghost photo" />
                            <Link to="/menu/main" > رفتن به منو </Link>
                        </div> :

                        state.likedItems.map(food => <CardMenu key={food.id} foodData={food} />)
                }
            </div>
        </div>
    );
};

export default LikedItems;