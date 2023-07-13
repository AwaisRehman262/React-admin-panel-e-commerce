import React from "react";

export const ProductsView = (props) => {
    return (
        <div className={props.class}>
            <h3>{props.title}</h3>
            {/* <img src={props.image}/> */}
            {/* <p>{props.description}</p> */}
            <button>Add to cart</button>
            <button>Buy Now</button>
        </div>
    )
}