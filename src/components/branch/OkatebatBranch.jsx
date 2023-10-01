import React from 'react';
import { Link } from 'react-router-dom';

//Style
import styled from "./OkatebatBranch.module.scss";

//SVG
import notesSVG from "./svg/notes.svg";

//Components
import HomePageSearch from '../HomePageSearch';
import OkatebatBranchOffer from './OkatebatBranchOffer';
import OkatebatBranchPopuler from './OkatebatBranchPopuler';
import OkatebatBranchNonIranian from './OkatebatBranchNonIranian';
import OkatebatBranchBanner from './OkatebatBranchBanner';
import OkatebatBranchComment from './OkatebatBranchComment';

//Components
import Banner from "../../components/Banner";
import Footer from '../Footer';

const OkatebatBranch = () => {
    return (
        <div>
            <Banner />
            <HomePageSearch />
            <OkatebatBranchOffer />
            <OkatebatBranchPopuler />
            <OkatebatBranchNonIranian />

            <div className={ styled.okatebatBranchLink }>
                <Link to="/menu/main" >
                    <img src={notesSVG} alt="notes photo" />
                    مشاهده منوی کامل
                </Link>
            </div>
            
            <OkatebatBranchBanner />
            <OkatebatBranchComment />
            <Footer />
        </div>
    );
};

export default OkatebatBranch;