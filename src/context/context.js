import React, { useReducer, createContext } from 'react';

import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [{"type":"Income","category":"Investments","amount":500,"date":"12-30-2021","id":"ad24f902-7bd3-4a4f-8fdf-29fd5db564e4"},{"type":"Expense","category":"Travel","amount":700,"date":"12-30-2021","id":"991400e3-e466-4a60-ab25-dbffdc3f3616"},{"type":"Expense","category":"Pets","amount":400,"date":"12-30-2021","id":"89c0f44f-9861-4b1f-8054-b3e8a3b00d83"},{"type":"Expense","category":"Clothes","amount":300,"date":"02-05-2022","id":"6f343c41-c07a-44c7-95e9-49144245f851"},{"type":"Income","category":"Gifts","amount":700,"date":"12-30-2021","id":"d24daa9e-fe39-4ead-999c-4ccbd8129de4"},{"type":"Income","category":"Extra income","amount":500,"date":"12-28-2021","id":"210f00dc-4437-4bed-942a-5ec33f532678"}]

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({children}) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState);


    const deleteTransactions = (id) => {
        dispatch({ type: 'DELETE_TRANSACTION', payload: id });
    }

    const addTransactions = (transaction) => {
        dispatch({ type: 'ADD_TRANSACTION', payload: transaction})
    }

    const balance = transactions.reduce((acc, crrVlue) => crrVlue.type === 'Expense' ? acc - crrVlue.amount : acc + crrVlue.amount, 0 )

    return (
        <ExpenseTrackerContext.Provider value={{ 
            deleteTransactions,
            addTransactions,
            transactions,
            balance
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    );
}