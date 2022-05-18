import React from 'react';
import {NavLink} from "react-router-dom";

 function TopMenu() {
    return (
        <>
            <nav>
                <ul>
                    <li><NavLink exact to="/" activeClassName="active-link">Home</NavLink></li>
                    <li><NavLink exact to="/Blogspots" activeClassName="active-link">Blogspots</NavLink></li>
                    <li><NavLink exact to="/Login" activeClassName="active-link">login</NavLink></li>
                </ul>
            </nav>

        </>
    );
}

export default TopMenu;