import React from "react"
import './ECommerce.css'
import { Header } from './Header/Header'
import { Homepage } from './Body/HomePage/Homepage'
import { Footer } from './Footer/Footer'
import { Cart } from './Body/Cart/Cart'
import { LoginPage } from "./Body/LoginPage/Loginpage"

export const ECommerce = () => {
    return (

        <div id="ECommerce">
            <Header />
            <Homepage />
            <Footer />
        </div>
    )

}