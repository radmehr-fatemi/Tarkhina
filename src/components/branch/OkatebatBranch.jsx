import React from 'react';

import { foosdata } from '../../data/foodData';

const OkatebatBranch = () => {
    return (
        <>
            <div>
                {
                    foosdata.iranian.map(item =>
                        <div style={{ width: "100vw", height: "180px" }}>
                            <img style={{ width: "100px", height: "100px" }} src={item.image} alt="p" />
                            <h3> {item.name} </h3>
                            <p> {item.title} </p>
                            <span> {item.price} </span>
                            <span> {item.stars} * </span>
                            <span> {item.discount} </span>
                        </div>
                    )
                }
            </div>
            <div>
                {
                    foosdata.non_Iranian.map(item =>
                        <div style={{ width: "100vw", height: "180px" }}>
                            <img style={{ width: "100px", height: "100px" }} src={item.image} alt="p" />
                            <h3> {item.name} </h3>
                            <p> {item.title} </p>
                            <span> {item.price} </span>
                            <span> {item.stars} * </span>
                            <span> {item.discount} </span>
                        </div>
                    )
                }
            </div>
            <div>
                {
                    foosdata.pizzas.map(item =>
                        <div style={{ width: "100vw", height: "180px" }}>
                            <img style={{ width: "100px", height: "100px" }} src={item.image} alt="p" />
                            <h3> {item.name} </h3>
                            <p> {item.title} </p>
                            <span> {item.price} </span>
                            <span> {item.stars} * </span>
                            <span> {item.discount} </span>
                        </div>
                    )
                }
            </div>
        </>
    );
};

export default OkatebatBranch;