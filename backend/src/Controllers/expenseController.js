const mongoose = require('mongoose')
const Expense = require('../Models/expenseModel')

const getExpenses = async(req,res) => {
    const expense = await Expense.find({}).sort({ createdAt:-1})
    res.json(expense)
}

const createExpense = async (req, res) => {
    const { title, amt, dis } = req.body

    try {  
        const expense = await Expense.create({title, amt, dis})
        res.json(expense)
    } catch (error) {
        res.status(400).json({error: "Please fill all fields"});
    }
}

const deleteExpense = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.json('Error: not found')
    }
    
    const expense = await Expense.findOneAndDelete({_id: id})

    if (!expense) {
        return res.json('Error:not found')
    }
    res.json(expense)
}

const updateExpense = async(req,res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.json('Error: not found')
    }
    const expense = await Expense.findOneAndUpdate({ _id: id }, {
        ...req.body
    })
    if (!expense) {
        return res.json('Error:not found')
    }
    res.json(expense)
}
    
module.exports = {
    createExpense,
    getExpenses,
    deleteExpense,
    updateExpense
}