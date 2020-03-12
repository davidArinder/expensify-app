import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { startEditExpense, startRemoveExpense } from '../actions/expenses'

const EditExpensePage = (props) => {
    return (
        <div>
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Edit Expense</h1>
                </div>
            </div>
            <div className="content-container">
                <ExpenseForm /* show the expense form to be edited */
                    expense={props.expense}
                    onSubmit={((expense) => {
                        props.dispatch(startEditExpense(props.expense.id, expense)) // dispatches that data with the editExpense action generator
                        props.history.push('/') // sends you back to dashboard page using browser routing (so no page refresh)
                        console.log('updated', expense)
                    })}
                />
                <button className="button button--secondary" onClick={() => {
                    // run startRemoveExpense
                    props.dispatch(startRemoveExpense({ id: props.expense.id })) // id as object because it's set as an object on the expense item
                    props.history.push('/')
                }}>Remove Expense</button>
            </div>
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
