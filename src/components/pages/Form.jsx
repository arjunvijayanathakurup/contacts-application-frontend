import React, { useState } from 'react';
import useTokenManager from '../../useTokenManager';


function Form(props) {
    const { token } = useTokenManager();

    const [ data, setData ] = useState([]);
    const [ name, setName ] = useState();
    const [ email, setEmail ] = useState();
    const [ phoneNumber, setPhoneNumber ] = useState();
    const [ dataLoaded, setDataLoaded ] = useState(false);


    const handleSubmit = async (e) => {
        // e.preventDefault();
        const response = await fetch(`${process.env.REACT_APP_API_URL}contacts/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                name: name,
                email: email,
                phone_number: phoneNumber
            }),
        });
        const data = await response.json();
        console.log(data);
        setData(data);
        setDataLoaded(true);
    }
    return(
        <>
            <h4>Add Contacts</h4>
            
            <form className='col s12' onSubmit={handleSubmit}>
                <div className='input-field col offset-s4 s4'>
                    <label htmlFor="Name">Name</label>
                    <input id='name' type="text" onChange={e => setName(e.target.value)} />
                </div>
                <div className='input-field  col offset-s4 s4'>
                    <label htmlFor="Phone number">Phone number</label>
                    <input id='phone' type="text" onChange={e => setPhoneNumber(e.target.value)}/>
                </div>
                <div className='input-field  col offset-s4 s4'>
                    <label htmlFor="Email">Email</label>
                    <input id='email' type="email"onChange={e => setEmail(e.target.value)} />
                </div>
                <div className='input-field col offset-s4 s4'>
                        <button className="btn waves-effect waves-light blue lighten-1" type="submit" name="action">Save 
                        <i className="material-icons right">save</i>
                    </button>
                </div>
            </form>
        </>
    );
}

export default Form;