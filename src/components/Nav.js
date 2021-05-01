import React from "react";
import { NavLink } from "react-router-dom";
import  "../styles/NewNav.css"

/* 1 */

export default function Nav() {
    if (window.location.pathname.split("/").pop() === 'users' || window.location.pathname.split("/").pop() === 'receipts'){
        return (
            <nav className={'NewNav'}>
                <NavLink to="/users"> Users </NavLink>
                <NavLink to="/receipts"> Surveys </NavLink>
                <NavLink className={"Logout"} exact to = "/" > Logout </NavLink>
            </nav>
        );
    }else if(window.location.pathname.split("/").pop() === 'signin' || window.location.pathname.split("/").pop() === 'register') {
        return (
            <nav className={'NewNav'}>

                <NavLink className={"AnimalShapes"} exact to = "/" > Home </NavLink>
            </nav>
        );
    }else
    {
        return (
            <nav className={'NewNav'}>
                <NavLink className={"AnimalShapes"} exact to="/"> Animal Shapes </NavLink>
                <NavLink className={"Signin"} exact to = "/signin">Sign in</NavLink>
                <NavLink className={"Signup"} exact to = "/register">Sign up for free</NavLink>
            </nav>
        );
    }
}
