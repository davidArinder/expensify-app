import uuid from 'uuid'
import database from '../firebase/firebase'

// Add Expense action generator
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
})

// dispatch ADD_EXPENSE to firebase
export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '', 
            note = '', 
            amount = 0, 
            createdAt = 0 
        } = expenseData
        const expense = { description, note, amount, createdAt }
        database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        })
    }
}

// Remove Expense action generator
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

// dispatch REMOVE_EXPENSE to firebase
export const startRemoveExpense = ({ id } = {}) => {
    return (dispatch) => {
        return database.ref(`expenses/${id}`).remove().then(() => {
            dispatch(removeExpense({ id }))
        })
    }
}

// Edit Expense action generator
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

// Set Expenses action generator
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
})

// dispatch SET_EXPENSES to firebase
export const startSetExpenses = () => {
    return (dispatch) => {
        return database.ref('expenses').once('value').then((snapshot) => {
            const expenses = []
            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            
            dispatch(setExpenses(expenses))
        })
    }
}