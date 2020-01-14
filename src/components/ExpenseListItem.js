import React from 'react'
import { connect } from 'react-redux'
import { removeExpense } from '../actions/expenses'

// react-redux makes component reactive. it will re-run when updates occur
const ExpenseListItem = ({ description, amount, createdAt, id, dispatch }) => (
    <div>
        <h3>{description}</h3>
        <p>{amount} - {createdAt}</p>
        <button onClick={() => {
            // run removeExpense
            dispatch(removeExpense({ id })) // id as object because it's set as an object on the expense item
        }}>Remove</button>
    </div>
)



export default connect()(ExpenseListItem) // connect gives access to dispatch