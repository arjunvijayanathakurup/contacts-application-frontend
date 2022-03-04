import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom'
import useTokenManager from '../../useTokenManager';
import Form from './Form.jsx';

function Home(props) {
    const { token } = useTokenManager();
    const [ data, setData ] = useState([]);
    const [ dataLoaded, setDataLoaded ] = useState(false);
    
    useEffect(() => {
        // calls api on component mount
        fetchData();
        }, []);

    const fetchData = async () => {
        // function for fetching data from api
        if (token) {
            const response = await fetch(`${process.env.REACT_APP_API_URL}contacts/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            const data = await response.json();
            setData(data);
            setDataLoaded(true);
        }
    }

    const handleDeleteAction = async (event, id) => {
        // function to handle delete action
        const response = await fetch(`${process.env.REACT_APP_API_URL}contacts/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: null
        })
        .then((data) => {
            if (data.status === 204) {
                window.M.toast({html: 'Contact deleted successfully!', classes: 'rounded green'});
                fetchData();
            }
        })
        .catch((error) => {
            window.M.toast({html: 'Contact was unable to delete!', classes: 'rounded red'});
        });
    };


    if (!token){
        return (<Navigate to={'/signin'} />)
    }
        
    return (
        <div className='container'>
            <div className='row'>
                <Form />
                <h4>My Contacts</h4>
                <div className='col s6'>
                <table className='centered highlight col offset-s6 s12'>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone number</th>
                        <th>Email</th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {data.map(contact => (
                            <tr key={contact.uid}>
                                <td>{contact.name}</td>
                                <td>{contact.phone_number}</td>
                                <td>{contact.email}</td>
                                <td></td>
                                <td>
                                    <i className='material-icons center' id='customButton' onClick={(e) => {handleDeleteAction(e, contact.uid)}}>delete</i>
                                </td>
                            </tr>
                        ), this)}
                    </tbody>
                </table>
                </div>
            </div>
        </div>
        )
}

export default Home;