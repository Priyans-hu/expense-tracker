import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

const intialState = {
    transactions: [
        { id: 1, text: 'Flower', amount: -2000 },
        { id: 2, text: 'Salary', amount: 50000 },
        { id: 3, text: 'Book', amount: -1000 },
        { id: 4, text: 'Camera', amount: 15000 }
    ]
}

export const GlobalContext = createContext(intialState);

export const GlobalProvider = ({ children }) =>{
    const [state, dispatch] = useReducer(AppReducer, intialState);

    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return (
        <GlobalContext.Provider value={{transactions: state.transactions, deleteTransaction, addTransaction}}>
            {children}
        </GlobalContext.Provider>
    )
}