import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startAddExpense } from "../actions/expenses";

const AddExpensePage = (props) => (
  <div>
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Add Expense</h1>
      </div>
    </div>
    <div className="content-container">
      <ExpenseForm
        onSubmit={(expense) => {
          // grabs expense data from ExpenseForm.js
          props.dispatch(startAddExpense(expense)); // dispatches that data with the addExpense action generator
          props.history.push("/"); // sends you back to dashboard page using browser routing (so no page refresh)
        }}
      />
    </div>
  </div>
);

export default connect()(AddExpensePage);
