import React from 'react'

// react-redux makes component reactive. it will re-run when updates occur
const ExpenseListItem = ({ description, amount, createdAt }) => (
    <div>
        <h3>{description}</h3>
        <p>{amount} - {createdAt}</p>
    </div>
)



export default ExpenseListItem