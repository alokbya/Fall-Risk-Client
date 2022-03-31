import React, { createContext, useReducer } from "react";
import PasswordReducer from './passwordReducer';

// Initial state
const initialState = {}

// Create context
export const PasswordContext = createContext(initialState);

// Provider component
export const PasswordProvider = ({children}) => {
    const [ state, dispatch ] = useReducer(PasswordReducer, initialState);
    return (
        <PasswordContext.Provider value={{
            password: state,
        }}>
            {children}    
        </PasswordContext.Provider>
    );
}
