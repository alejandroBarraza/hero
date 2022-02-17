import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { authContext } from '../auth/authContext';
import { LoginView } from '../components/login/LoginView';
import { DashboardRouter } from './DashboardRouter';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

//AppRouter is given to main router component.
export const AppRouter = () => {
    const {
        user: { isLoggedIn },
    } = useContext(authContext);

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoutes
                        exact
                        isLoggedIn={isLoggedIn}
                        path='/login'
                        component={LoginView}
                    />
                    <PrivateRoutes isLoggedIn={isLoggedIn} path='/' component={DashboardRouter} />
                </Switch>
            </div>
        </Router>
    );
};
