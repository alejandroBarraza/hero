import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import { authContext } from '../../auth/authContext';
import { types } from '../../types/types';

//get user context

const useStyle = makeStyles({
    btn: {
        borderRadius: '50px',
        '&:hover': {
            backgroundColor: '#f5f5f5',
        },
    },
});

export const LoginView = () => {
    const { dispatch } = useContext(authContext);

    const classes = useStyle();

    let history = useHistory();

    const onHandleLogin = (e) => {
        const lastLocation = localStorage.getItem('Lastlocation') || '/';

        dispatch({
            type: types.login,
            payload: {
                username: 'alejandro',
            },
        });
        history.replace(lastLocation);
    };

    return (
        <div className='container mt-5'>
            <h1>login view</h1>
            <hr />
            <Button
                variant='contained'
                color='primary'
                onClick={onHandleLogin}
                className={classes.btn}>
                Login
            </Button>
        </div>
    );
};
