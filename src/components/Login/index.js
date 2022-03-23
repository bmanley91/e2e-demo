import React from 'react';
import PropTypes from 'prop-types';
import { PASSWORD_FIELD, USERNAME_FIELD } from '../../constants/testIds';

import './Login.css';

export default function Login({ setLoggedIn, setUser }) {

    const handleSubmit = () => setLoggedIn(true);

    return (
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input data-testid={ USERNAME_FIELD } type="text" onChange={e => setUser(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input data-testid={ PASSWORD_FIELD } type="password" />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

Login.propTypes = {
    setLoggedIn: PropTypes.func.isRequired,
    setUser: PropTypes.func.isRequired
}
