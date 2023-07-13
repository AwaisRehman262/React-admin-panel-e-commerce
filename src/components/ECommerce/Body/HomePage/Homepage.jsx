import React, { Fragment } from "react";
import { Products } from "/src/Data/Products.jsx"
import { ProductsView } from "./ProductsView";
import { LoginPage } from "../LoginPage/Loginpage";

export const Homepage = () => {
    
    return (
        <Fragment>
            <div id="login-page">
                <LoginPage />
            </div>

            <div className="Products" id="Products">
                <h2>Featured Products</h2>
                <hr/>
            <div id="FeaturedProductWrapper" className="ProductWrapper">
                    {Products.map(product => <ProductsView title={product.title} description={product.description} image={product.image} class={ "FeaturedProduct"} />)}
                </div>
                <h2>Our Products</h2>
                <hr/>
                <div id="OurProductsWrapper" className="ProductsWrapper">
                    {Products.map(product => <ProductsView class={"OurProduct"} />)}
            </div>
            </div>
        </Fragment>
    )
}