import React, { useReducer, useEffect } from 'react';
import { AppRouter } from '../src/routers/AppRouter';
import { authContext } from './auth/authContext';
import { authReducer } from './auth/authReducer';

const init = () => {
    return JSON.parse(localStorage.getItem('user')) || { isLoggedIn: false };
};

export const HeroesApp = () => {
    const [user, dispatch] = useReducer(authReducer, {}, init);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    return (
        <authContext.Provider value={{ user, dispatch }}>
            <AppRouter />;
        </authContext.Provider>
    );
};
