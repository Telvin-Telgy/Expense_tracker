const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ExpenseShema = new Schema(
    {
        title: {
            type: String,
            required: true,   
        },
        amt: {
            type: String,
            required: true,
        },
        dis: {
            type: String,
            required:true
        },
        
    }, { timestamps: true }
    
) 

module.exports = mongoose.model('Expense', ExpenseShema)