import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Signin from '../pages/Signin';
import useTokenManager from '../../useTokenManager';

function Navbar(props){
    const { token, setToken, clearToken } = useTokenManager();

    const handleLogout = () => {
        clearToken();
        setToken(null);
    }
    return(
        <nav>
            <div className="nav-wrapper grey darken-2">
                <a href='/' className="center brand-logo ">Contacts Manager</a>
                    <ul id="nav-mobile" className="hide-on-med-and-down right">
                    {token ? <li><a href='/signin' onClick={handleLogout}>Logout</a></li> :
                    <>
                        <li><a href='/signin'>Sign In</a></li>
                        <li><a href='/signup'>Sign Up</a></li>
                    </>
                    
                    }
                    </ul>
                
            </div>
        </nav>
    )
}

export default Navbar;