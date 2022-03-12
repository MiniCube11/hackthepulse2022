import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { user } from './database';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const login = (username, password) => {
        user.auth(username, password, (account) => {
            if (account.err) {
                console.log(account.err);
            } else {
                navigate('/');
            }
        });
    };

    useEffect(() => {
        if (user.is) {
            navigate('/');
        }
    });

    return (
        <div>
            <input type="text" placeholder="username" value={username}  onChange={(e) => setUsername(e.target.value)}/>
            <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={() => login(username, password)}>Log In</button>
        </div>
    )
};

export default Login;