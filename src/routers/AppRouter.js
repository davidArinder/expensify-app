import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LoginPage from '../components/LoginPage'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'
import Header from '../components/Header'

// create a route: at path, show component
// put in div/Switch so you can create more than one Route
// exact=true only run when path matches exactly
// path optional---if no path, will render if no matching route found
// Switch will stop app from running as soon as a matching path found
// Header outside of Switch will put the Header on every page.
const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header /> 
            <Switch>
            <Route path="/" component={LoginPage} exact={true} />
            <Route path="/dashboard" component={ExpenseDashboardPage} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit/:id" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch> 
        </div> 
    </BrowserRouter>
)

export default AppRouter