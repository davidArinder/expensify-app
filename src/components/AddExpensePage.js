import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { addExpense } from '../actions/expenses'

const AddExpensePage = (props) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm 
            onSubmit={(expense) => { // grabs expense data from ExpenseForm.js
                props.dispatch(addExpense(expense)) // dispatches that data with the addExpense action generator
                props.history.push('/') // sends you back to dashboard page using browser routing (so no page refresh)
            }}
        />
    </div>
)

export default connect()(AddExpensePage)