
import React, { useReducer, useEffect, useState, createContext, useMemo } from 'react';
import { initialState, reducer } from './reduser';

export const ThemeContext = createContext({
    state: initialState,
    dispatch: () => null
})

export const UserProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, initialState)

    return (
        <ThemeContext.Provider value={[state, dispatch]}>
            {children}
        </ThemeContext.Provider>
    )
}