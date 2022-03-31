import React, { createContext, useReducer } from 'react';
import UserReducer from './userReducer';

const initialState = {};

export const UserContext = createContext(initialState);

export const UserProvider = ({children}) => {
    const [ state, dispatch ] = useReducer(UserReducer, initialState);

    const updateUser = (newUser) => {
        dispatch({
            type: 'UPDATE_USER',
            payload: {
                user: newUser,
            },
        });
    }

    const loginUser = (newUser) => {
        dispatch({
            type: 'LOGIN_USER',
            payload: {
                user: newUser,
            },
        });
    }

    const logoutUser = () => {
        dispatch({
            type: 'LOGOUT_USER',
        })
    };

    return (
        <UserContext.Provider value={{
            globalUser: state,
            updateUser,
            loginUser,
            logoutUser,
        }}>
            {children}    
        </UserContext.Provider>
    )
}