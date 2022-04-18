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

    const updateUnit = (unit) => {
        dispatch({
            type: 'UPDATE_UNIT',
            payload: {
                unit: unit,
            },
        });
    }

    const updateRoom = (room) => {
        dispatch({
            type: 'UPDATE_ROOM',
            payload: {
                room: room,
            },
        });
    }

    const updateAuditType = (auditType) => {
        dispatch({
            type: 'UPDATE_AUDIT_TYPE',
            payload: {
                auditType: auditType,
            },
        });
    }

    return (
        <UserContext.Provider value={{
            globalUser: state,
            updateUser,
            loginUser,
            logoutUser,
            updateUnit,
            updateRoom,
            updateAuditType,
        }}>
            {children}    
        </UserContext.Provider>
    )
}