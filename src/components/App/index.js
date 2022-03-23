import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../Dashboard';
import Preferences from '../Preferences';
import Login from '../Login';

function App() {
    const [loggedIn, setLoggedIn] = useState();
    const [user, setUser] = useState();

    if(!loggedIn) {
      return <Login
        setLoggedIn={setLoggedIn}
        setUser={setUser}
      />
    }

    return (
        <div className="wrapper">
          <h1>Application</h1>
          <BrowserRouter>
            <Routes>
              <Route path="/dashboard" element={<Dashboard user={user} />} />
              <Route path="/preferences" element={<Preferences />} />
            </Routes>
          </BrowserRouter>
        </div>
      );
}

export default App;
