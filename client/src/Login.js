import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

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
        <Page>
            <Form>
                <Input type="text" placeholder="username" value={username}  onChange={(e) => setUsername(e.target.value)}/>
                <Input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <LogInButton onClick={() => login(username, password)}>Log In</LogInButton>
            </Form>
        </Page>
    )
};

const Page = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
`

const Form = styled.div`
    width: 500px;

`

const Input = styled.input`
    padding: 7px 12px;
    font-size: 1em;
    width: 472px;
    margin-bottom: 20px;
`

const LogInButton = styled.button`
    padding: 7px 12px;
    font-size: 1em;
    width: 500px;
    margin-top: 10px;
`

export default Login;