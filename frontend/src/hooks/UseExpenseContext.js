import { ExpenseContext } from "../context/ExpenseContextProvider";
import { useContext } from "react";

export const useExpenseContext = () => {
    const context = useContext(ExpenseContext)

    if (!context) {
        throw Error("error")
    }

    return context
}
