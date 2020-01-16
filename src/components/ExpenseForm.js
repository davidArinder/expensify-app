// to be used on both Add and Edit pages
// creates forms for user to submit data, captures the data and sends to Add/Edit page components
import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

const now = moment()
console.log(now.format('MMM, Do, YYYY'))

export default class ExpenseForm extends React.Component {
    // give component access to props
    constructor(props) {
        super(props)

        // check if props exist--if so use them (for Edit page), it not set as blank (for Add page)
        this.state = {
            description: props.expense ? props.expense.description : '',
            noteDescription: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '', // converts from cents to dollars, then makes into string
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        }
    }
    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({ description }))
    }
    onNoteChange = (e) => {
        const note = e.target.value 
        this.setState(() => ({ note }))
    }
    onAmountChange = (e) => {
        const amount = e.target.value
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }

    }
    onDateChange = (createdAt) => {
        if (createdAt) { // if there is a createdAt value run this.setState, else do nothing; prevents user from deleting the date
            this.setState(() => ({ createdAt }))
        }

    }
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }))
    }
    onSubmit = (e) => {
        e.preventDefault()

        if(!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: 'Please provide description and amount.' })) // if no description or amount, show error
        } else {
            this.setState(() => ({ error: '' })) // if description and amount present, remove error 
            this.props.onSubmit({ // this onSubmit prop created on AddExpensePage.js
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100, // convert amount string to decimal then multiply from cents to dollars
                createAt: this.state.createdAt.valueOf(), // converts timestamp
                note: this.state.note
            })
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>} 
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus /* Lets you start typing as soon as page loads by focusing on input field */ 
                        value={this.state.description}
                        onChange={this.onDescriptionChange}    
                    />
                    <input 
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                        <SingleDatePicker /* settings determined by react-dates */
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea
                        placeholder="Add a note for your expense (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    >
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}