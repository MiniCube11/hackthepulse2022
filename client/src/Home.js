import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { user } from './database';

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!user.is) {
            navigate('/login');
        }
    });

    return (
        <div>
            <h1>Home</h1>
        </div>
    )
};

export default Home;