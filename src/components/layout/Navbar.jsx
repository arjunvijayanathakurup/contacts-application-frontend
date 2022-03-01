import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    const { auth, profile } = props;
    return(
        <nav>
            <div className="nav-wrapper grey darken-2">
                <a href='/' className="center brand-logo">Contacts Manager</a>
                <ul id="nav-mobile" className="hide-on-med-and-down right">
                    <li><a href="#">Sign In</a></li>
                    <li><a href="#">Sign Up</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;