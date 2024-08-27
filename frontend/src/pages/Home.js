import NavBar from "../components/NavBar"
import Form from "../components/Form"
import { useEffect } from 'react'
import Card from "../components/Card"
import { useExpenseContext } from "../hooks/UseExpenseContext"

const Home = () => {

    const {expenses, dispatch} = useExpenseContext()
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:5000/api/expense/')
            const json = await response.json()
            
            if (response.ok) {
                dispatch({ type: 'SET_EXPENSES', payload: json })
            }
        }
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <NavBar />
            <Form />
            <div className="container">
                {expenses && expenses.map((expense) => (
                    
                    <Card key={expense._id} expense={expense}/>
                    
                ))}
            </div>
            
        </>
    )
}
export default Home