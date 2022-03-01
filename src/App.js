import React, { Component } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
// import SignUp from './components/SignUp';
// import SignIn from './components/SignIn';

import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            {/* <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signin" component={SignIn} /> */}
            <Route render={
              () => <h1 className="font-weight-bold text-center pagenotfound">
                404 Page Not Found!
                </h1>}/>
          </Routes>
        </div>
      </HashRouter>
    );
  }
}

export default App;
