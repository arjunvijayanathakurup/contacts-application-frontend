import React, { Component } from 'react';

class Home extends Component {
    render () {
        return (
            <div className='container'>
                <h4>Add Contacts</h4>
                <div className='row'>
                    <form className='col s12'>
                        <div className='input-field col offset-s4 s4'>
                            <label htmlFor="Name">Name</label>
                            <input id='name' type="text" />
                        </div>
                        <div className='input-field  col offset-s4 s4'>
                            <label htmlFor="Phone number">Phone number</label>
                            <input id='phone' type="text" />
                        </div>
                        <div className='input-field  col offset-s4 s4'>
                            <label htmlFor="Email">Email</label>
                            <input id='email' type="email" />
                        </div>
                        <div className='input-field col offset-s4 s4'>
                             <button class="btn waves-effect waves-light blue lighten-1" type="submit" name="action">Save 
                                <i class="material-icons right">save</i>
                            </button>
                        </div>
                    </form>

                    <h4>My Contacts</h4>
                    <div className="col s6">
                    <table className='centered highlight col offset-s6 s12'>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone number</th>
                            <th>Email</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td>Alvin</td>
                            <td>Eclair</td>
                            <td>$0.87</td>
                        </tr>
                        <tr>
                            <td>Alan</td>
                            <td>Jellybean</td>
                            <td>$3.76</td>
                        </tr>
                        <tr>
                            <td>Jonathan</td>
                            <td>Lollipop</td>
                            <td>$7.00</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Home;