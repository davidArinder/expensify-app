import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeExpense } from '../actions/expenses'

// react-redux makes component reactive. it will re-run when updates occur
const ExpenseListItem = ({ description, amount, createdAt, id }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>{amount} - {createdAt}</p>
    </div>
)



export default ExpenseListItem // connect gives access to dispatch