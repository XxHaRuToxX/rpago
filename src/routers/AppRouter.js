import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { Admin } from '../components/admin/Admin';
import { LoginScreen } from '../components/auth/LoginScreen';
import { QuestionsScreen } from '../components/questions/QuestionsScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={LoginScreen} />
                    <Route exact path="/questions" component={QuestionsScreen} />
                    <Route exact path="/admin" component={Admin} />
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
