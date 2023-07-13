import React from "react";

export const Header = () => {
    const loginAnchor = () => {
        
    }
    return(
        <header>
            <nav>
                <a href="#home">Home</a>
                <a href="#FeaturedProductWrapper">Featured Product</a>
                <a href="#OurProductsWrapper">Our Products</a>
                <a href="#Cart">Cart</a>
                <a href="#AdminPanel">Admin Panel</a>
                <a href="#" onClick={loginAnchor}>Login</a>
            </nav>
         </header>
    )
}