import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Signup from './components/pages/Signup';
import Signin from './components/pages/Signin';
import useTokenManager from './useTokenManager';

import './App.css';

function App() {
  const { token } = useTokenManager()
  return (
    <BrowserRouter>
      <div className="App">
          <Navbar token={token}/>
          <Routes>
            <Route exact path="/" element={<Home />} />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
          </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
