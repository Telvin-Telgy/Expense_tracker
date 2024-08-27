const express = require('express')
const {
    createExpense,
    getExpenses,
    deleteExpense,
    updateExpense
} = require('../Controllers/expenseController')

router = express.Router()

router.get('/', getExpenses)
router.post('/', createExpense)
router.delete('/:id', deleteExpense)
router.patch('/:id', updateExpense)


module.exports = router