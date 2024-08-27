import { useExpenseContext } from "../hooks/UseExpenseContext"


const Card = ({ expense }) => {
    const {dispatch} = useExpenseContext()
    const clickHandler = async() => {

        const response = await fetch("http://localhost:5000/api/expense/"+expense._id, {
            method: "DELETE"
        })
        const json = await response.json()
        
        if (response.ok) {
            dispatch({type: 'DELETE_EXPENSE', payload: json})
        }  
        
    }

    return (
        <div className="card">
            <button onClick={clickHandler} className='d-button'><strong>X</strong></button>
            <h3>{expense.title}</h3>
            <p><strong>Amount: $</strong>{expense.amt}</p>
            <p><strong>Date :</strong>{expense.dis}</p>
            
        </div>
    )
}
    
export default Card