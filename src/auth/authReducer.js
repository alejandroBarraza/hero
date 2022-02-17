import { types } from '../types/types';

// reducer for authentication

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...action.payload,
                isLoggedIn: true,
            };
        case types.logout:
            return {
                isLoggedIn: false,
            };

        default:
            return state;
    }
};
