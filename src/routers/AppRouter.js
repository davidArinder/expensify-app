import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import LoginPage from '../components/LoginPage'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'
import PrivateRoute from './PrivateRoute'

export const history = createHistory()

// create a route: at path, show component
// put in div/Switch so you can create more than one Route
// exact=true only run when path matches exactly
// path optional---if no path, will render if no matching route found
// Switch will stop app from running as soon as a matching path found
// Header outside of Switch will put the Header on every page.
// history variable above lets me define my own history to use in other files
const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
                <PrivateRoute path="/create" component={AddExpensePage} />
                <PrivateRoute path="/edit/:id" component={EditExpensePage} />
                <PrivateRoute path="/help" component={HelpPage} />
                <PrivateRoute component={NotFoundPage} />
            </Switch> 
        </div> 
    </Router>
)

export default AppRouter