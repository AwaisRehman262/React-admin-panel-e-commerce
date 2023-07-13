import React, { Fragment } from "react"

export const LoginPage = () => {
    const checkrequired = () => {
        console.log(checkrequired)
    }

    const saveLoginToLocal = () => {
        console.log("check")
    }
    return (
        <Fragment>
            <input type="email" name="email" id="inputMail" className="input" required placeholder="Enter your email address." onBlur={checkrequired} />
            <input type="password" name="password" id="inputPass" className="input" required placeholder="Enter your password."onBlur={checkrequired} />
            <p>Please fill all the required fields.</p>
            <button type="submit" className="login-btn" onClick={saveLoginToLocal}>Login to e-commerce</button>
        </Fragment>
    )
}