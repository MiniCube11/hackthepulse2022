import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

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
        <div>
            <h2>App name</h2>
            {loggedIn &&
                <>
                    {user.is.alias}
                    <button onClick={logout}>Log Out</button>
                </>
            }
        </div>
    )
};

export default Navbar;