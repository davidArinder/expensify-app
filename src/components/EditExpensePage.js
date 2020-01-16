import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { editExpense, removeExpense } from '../actions/expenses'

const EditExpensePage = (props) => {
    return (
        <div>
            <ExpenseForm /* show the expense form to be edited */
                expense={props.expense}
                onSubmit={((expense) => {
                    props.dispatch(editExpense(props.expense.id, expense)) // dispatches that data with the editExpense action generator
                    props.history.push('/') // sends you back to dashboard page using browser routing (so no page refresh)
                    console.log('updated', expense)
                })}
            />
            <button onClick={() => {
                // run removeExpense
                props.dispatch(removeExpense({ id: props.expense.id })) // id as object because it's set as an object on the expense item
                props.history.push('/')
            }}>Remove</button>
        </div>
    )
}

// give this component access to the expense
// expenses array is on the state
const mapStateToProps = (state, props) => {
    return {
        // search through expenses array to find a matching id, then set that id as expense prop
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(EditExpensePage)
