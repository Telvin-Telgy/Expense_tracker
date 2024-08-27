import { useState } from "react"
import { useExpenseContext } from "../hooks/UseExpenseContext"

const Form = () => {
    const {dispatch}  = useExpenseContext()

    const [title, setTitle] = useState('')
    const [amt, setAmt] = useState()
    const [dis, setDis] = useState('')
    const [error, setError] = useState(null)
    
    const submitHandler = async (e) => {

        e.preventDefault()

        const expense = { title, amt, dis }
        const response = await fetch("http://localhost:5000/api/expense", {
            method: "POST",
            body: JSON.stringify(expense),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const json = await response.json()
        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setError(null)
            console.log("new expense added")
            setTitle('')
            setAmt('')
            setDis('')
            dispatch({type: 'CREATE_EXPENSES', payload: json})
        }

    }

    return ( 
        <form onSubmit={submitHandler}>
            <label>Title</label>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)} />
            <br/>
            <label>Amount</label>
            <input
                type="text"
                value={amt}
                onChange={(e) => setAmt(e.target.value)} />
            <br/>
            <label>Date</label>
            <input
                type="text"
                value={dis}
                onChange={(e) => setDis(e.target.value)} />
            <br/>
            <input type="submit" id="submit"/>
            
            {error && <div>{error}</div>}
            
        </form>
       
    )
}

export default Form