import React from 'react';
import PropTypes from 'prop-types';
import { useLocation, Route, Redirect } from 'react-router-dom';

export const PrivateRoutes = ({ isLoggedIn, component: Component, ...rest }) => {
    const location = useLocation();
    localStorage.setItem('Lastlocation', location.pathname);
    return (
        <Route
            {...rest}
            component={(props) =>
                isLoggedIn ? <Component {...props} /> : <Redirect to='/login' />
            }
        />
    );
};
PrivateRoutes.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
};
