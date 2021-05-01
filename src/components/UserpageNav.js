import React from "react";
import { NavLink } from "react-router-dom";
import  "../styles/NewNav.css"

export default function UserpageNav() {
    return (
        <nav className={'NewNav'}>
            <NavLink to="/personalpage"> Survey Page </NavLink>
            <NavLink className={"Logout"} exact to = "/" > Logout </NavLink>
        </nav>
    );
}
