import { createContext, useReducer } from "react";

export const ExpenseContext = createContext()

export const expensesReduser = (state, action) => {
    switch (action.type) {
        case 'SET_EXPENSES':
            return {
                expenses: action.payload
            }
        case 'CREATE_EXPENSES':
            return {
                expenses: [action.payload, ...state.expenses]
            }
        case 'DELETE_EXPENSE':
            return {
                expenses: state.expenses.filter((ex) => ex._id !== action.payload._id)
            }
        default:
            return state
            
    }
}

export const ExpenseContextProvider = ({ children }) => {
    
    const [state, dispatch] = useReducer(
        expensesReduser, {
            expenses: null
        }
    )

    return (
        <ExpenseContext.Provider value={{...state,dispatch}}>
            {children}
        </ExpenseContext.Provider>
    )
}