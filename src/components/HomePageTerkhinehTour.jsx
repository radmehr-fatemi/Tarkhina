import React from 'react';
import { Link } from 'react-router-dom';

import styled from "./HomePageTerkhinehTour.module.scss";

//Image
import okatebatImg from "../assets/image/branch/okatbat-branch.png";
import charloosImg from "../assets/image/branch/charloos-branch.png";
import aghdasieImg from "../assets/image/branch/aghdasie-branch.png";
import vanakImg from "../assets/image/branch/vanak-branch.png";

const HomePageTerkhinehTour = () => {
    return (
        <div className={styled.homePageTerkhinehTour}>
            <h1> ترخینه گردی </h1>

            <div className={styled.homePageTerkhinehTourItems}>
                <Link to="/okatebatbranch" className={ styled.homePageTerkhinehCard }>
                    <div>
                        <img src={okatebatImg} alt="branch photo" />
                    </div>

                    <div>
                        <h2> شعبه اکباتان </h2>
                        <span> شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم </span>
                    </div>
                </Link>

                <Link className={ styled.homePageTerkhinehCard }>
                    <div>
                        <img src={charloosImg} alt="branch photo" />
                    </div>

                    <div>
                        <h2> شعبه چالوس </h2>
                        <span> چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی </span>
                    </div>
                </Link>

                <Link className={ styled.homePageTerkhinehCard }>
                    <div>
                        <img src={aghdasieImg} alt="branch photo" />
                    </div>

                    <div>
                        <h2> شعبه اقدسیه</h2>
                        <span> خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸ </span>
                    </div>
                </Link>

                <Link className={ styled.homePageTerkhinehCard }>
                    <div>
                        <img src={vanakImg} alt="branch photo" />
                    </div>

                    <div>
                        <h2> شعبه شعبه ونک </h2>
                        <span> میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶ </span>
                    </div>
                </Link>

            </div>
        </div>
    );
};

export default HomePageTerkhinehTour;