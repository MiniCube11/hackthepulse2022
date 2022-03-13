import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { user } from './database';

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState(user.is);
    
    console.log(user)

    const logout = () => {
        user.leave();
        setLoggedIn(false);
        navigate('/login');
    }

    useEffect(() => {
        setLoggedIn(user.is);
    }, [location.pathname])

    return (
        <Container>
            <h2>HospiTracker</h2>
            <UserInfo>
                {loggedIn ?
                    <>
                        <Name>{user.is.alias}</Name>
                        <AuthBtn onClick={logout}>Log Out</AuthBtn>
                    </>
                :
                    <p>Log In</p>
                }
            </UserInfo>
        </Container>
    )
};

const Container = styled.div`
    background-color: #F56E43;
    padding: 15px 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const UserInfo = styled.span`
    display: flex;
    align-items: center;
`

const Name = styled.p`
    margin-right: 20px;
`

const AuthBtn = styled.button`
    padding: 5px 10px;
    border: none;
    border-radius: 2px;
    font-size: 1em;

    &:hover {
        background-color: grey;
    }
`

export default Navbar;