import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';
import useTokenManager from '../../useTokenManager';
import useAuthentication from '../../api/Authentication';
import Signin from './Signin';



function Signup (props){
    const { token, setToken } = useTokenManager();
    const { signUp } = useAuthentication();

    const [ email, setEmail ] = useState();
    const [ password, setPassword ] = useState();
    const [ secret_code, setSecret ] = useState();
    const [ signedUp , setSignedUp ] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await signUp({
            email,
            password,
            secret_code
        });
        console.log(response.uid);
        if (!response.uid) {
            window.M.toast({html: 'User couldn\'t be registered, please check the entered values!', classes: 'rounded red'});
        }
        else {
            setSignedUp(true);
            window.M.toast({html: 'User registered successfully, Please Login!', classes: 'rounded green'});
        }
    }

    if (token || signedUp) {
        return (<Home token={token} />)
    }
    return (
        <div className="container">
            <div className='row'>
                <form className='col s12' onSubmit={handleSubmit}>
                    <h4>Sign Up</h4>
                    <div className="col offset-s4 s4">
                        <p>Already have an account? <Link to={'/signin'}>Sign In</Link></p>
                    </div>
                    <div className='input-field  col offset-s4 s4'>
                        <label htmlFor="Email">Email</label>
                        <input id='email' type="email" onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className='input-field  col offset-s4 s4'>
                        <label htmlFor="Password">Password</label>
                        <input id='password' type="password" onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className='input-field  col offset-s4 s4'>
                        <label htmlFor="Secret">Secret</label>
                        <input id='secret' type="password" onChange={e => setSecret(e.target.value)} />
                    </div>

                    <div className='input-field col offset-s4 s4'>
                        <button className="btn waves-effect waves-light blue lighten-1" type="submit" name="action" >Sign Up 
                            <i className="material-icons left">lock</i>
                        </button>
                    </div>
                    <div className="col offset-s4 s4">
                        <p>By clicking the 'Sign Up' button, you are creating an account, and you agree to the Terms of Use.</p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;