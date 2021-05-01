import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Helmet } from 'react-helmet';

import Nav from "./components/Nav";
import UserpageNav from "./components/UserpageNav";

import './styles/App.css';
import './styles/styles.css'

import Home from "./pages/Home";
import Users from "./pages/Users";
import Receipts from "./pages/Receipts";
import UserPage from "./pages/PersonalReceipts"
import Login from "./components/Login"
import ExpenseCalculator from "./pages/ExpenseCalculator";
import MonthlySpending from "./pages/MonthlySpending";
import Register from "./components/Register";

export default function App(){

    const title = "Animal Shapes";

    return (
        <Router>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <div className="App">
                <Switch>
                    <Route exact path = "/">
                        <Nav />
                        <Home />
                    </Route>
                    {<Route path = "/users">
                        <Nav />
                        <Users />
                    </Route>}
                    {<Route path = "/receipts">
                        <Nav />
                        <Receipts />
                    </Route>}
                    {<Route path = "/spending">
                        <UserpageNav />
                        <MonthlySpending />
                    </Route>}
                    {<Route path = "/personalpage">
                        <UserpageNav />
                        <UserPage />
                    </Route>}
                    {<Route path = "/finish">
                        <UserpageNav />
                        <ExpenseCalculator />
                    </Route>}
                    {<Route path = "/signin">
                        <Nav/>
                        <Login />
                    </Route>}
                    {<Route path = "/register">
                        <Nav/>
                        <Register />
                    </Route>}
                </Switch>
            </div>
        </Router>
    );

};

