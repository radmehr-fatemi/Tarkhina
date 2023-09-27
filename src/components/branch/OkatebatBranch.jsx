import React from 'react';

//Components
import OkatebatBranchOffer from './OkatebatBranchOffer';
import OkatebatBranchPopuler from './OkatebatBranchPopuler';
import OkatebatBranchNonIranian from './OkatebatBranchNonIranian';

const OkatebatBranch = () => {
    return (
        <>
         <OkatebatBranchOffer />
         <OkatebatBranchPopuler />
         <OkatebatBranchNonIranian />
        </>
    );
};

export default OkatebatBranch;