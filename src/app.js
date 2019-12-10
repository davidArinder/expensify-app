import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        This is from my dashboard component
    </div>
)

const AddExpensePage = () => (
    <div>
        This is from my add expense component
    </div>
)

const EditExpensePage = () => (
    <div>
        This is from my edit expense component
    </div>
)

const HelpPage = () => (
    <div>
        This is from my help component
    </div>
)

const NotFoundPage = () => (
    <div>
        404
    </div>
)

// create a route: at path, show component
// put in div/Switch so you can create more than one Route
// exact=true only run when path matches exactly
// path optional---if no path, will render if no matching route found
// Switch will stop app from running as soon as a matching path found
const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>  
    </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'));
