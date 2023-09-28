import React from 'react';
import { Link } from 'react-router-dom';

//Style
import styled from "./OkatebatBranch.module.scss";

//SVG
import notesSVG from "./svg/notes.svg";

//Components
import OkatebatBranchOffer from './OkatebatBranchOffer';
import OkatebatBranchPopuler from './OkatebatBranchPopuler';
import OkatebatBranchNonIranian from './OkatebatBranchNonIranian';
import OkatebatBranchBanner from './OkatebatBranchBanner';
import OkatebatBranchComment from './OkatebatBranchComment';

const OkatebatBranch = () => {
    return (
        <div>
            <OkatebatBranchOffer />
            <OkatebatBranchPopuler />
            <OkatebatBranchNonIranian />

            <div className={ styled.okatebatBranchLink }>
                <Link>
                    <img src={notesSVG} alt="notes photo" />
                    مشاهده منوی کامل
                </Link>
            </div>
            
            <OkatebatBranchBanner />
            <OkatebatBranchComment />
        </div>
    );
};

export default OkatebatBranch;