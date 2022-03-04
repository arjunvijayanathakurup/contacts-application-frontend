import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import Navbar from '../layout/Navbar';
import useTokenManager from '../../useTokenManager';
import useAuthentication from '../../api/Authentication';
import Home from './Home';

function Signin(props)  {
    const { token, setToken } = useTokenManager();
    const { signIn } = useAuthentication();
    const [ email, setEmail ] = useState();
    const [ password, setPassword ] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const auth = await signIn({
            email, 
            password
        });
        if (auth.token) {
            setToken(auth);
            window.M.toast({html: 'Login Successfull!', classes: 'rounded green'});
        }
        else {
            window.M.toast({html: 'Invalid email or password', classes: 'rounded red'});
        }
    }
    if (token) {
        return (<Home token={token} />)
    }
    else {
        return (
            <div className="container">
                <div className='row'>
                    <form className='col s12' onSubmit={handleSubmit}>
                        <h4 className='center'>Sign In</h4>
                        <div className="col offset-s4 s4">
                            <p className='center'>Don't have an account? <a href='/signup'>Sign Up</a></p>
                        </div>
                        <div className='input-field  col offset-s4 s4'>
                            <label htmlFor="Email">Email</label>
                            <input id='email' type="email" onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className='input-field  col offset-s4 s4'>
                            <label htmlFor="Password">Password</label>
                            <input id='password' type="password" onChange={e=> setPassword(e.target.value)} />
                        </div>
                        <div className="col offset-s4 s4 center">
                            <a href='#' >Forgot password?</a>
                        </div>
                        <div className='input-field col offset-s4 s4 center'>
                            <button className="btn waves-effect waves-light blue lighten-1" type="submit" name="action">Sign In 
                                <i className="material-icons left">lock</i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Signin;

Signin.prototype = {
    setToken: PropTypes.func.isRequired
}