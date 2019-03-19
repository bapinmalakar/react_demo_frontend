import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'

import Admin from './../app/admin';
import User from './../app/user';
import Frequency from './../app/frequency/view';

import Analyze from './../app/admin/component/analyze';
import Article from './../app/admin/component/article';
import './../css/index.css';
export default class AppRoute extends Component {

    constructor() { super() }

    render() {
        return (
            <Router>
                <Route exact path="/admin">
                    <Admin {...this.props} />
                    <div className="container-div">
                        <Route exact path="/admin" {...this.props} component={Analyze} />
                        <Route path="/admin/analyze" {...this.props} component={Analyze} />
                        <Route path="/admin/article" {...this.props} component={Article} />
                    </div>
                </Route>
                <Route path='/user' component={User} {...this.props} />
                <Route path='/frequency' component={Frequency}{...this.props} />
            </Router>);
    }
}