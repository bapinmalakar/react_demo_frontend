import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'

import Admin from './../app/admin';
import User from './../app/user';
import Frequency from './../app/frequency/view';
import InvalidPath from './../app/inavlid-file';

export default class AppRoute extends Component {

    constructor() { super() }

    render() {
        const routing = (
            <Router>
                <div className="root-component">
                    <Switch>
                        <Route exact path='/' component={Admin} />
                        <Route path='/user' component={User} />
                        <Route path='/frequency' component={Frequency} />
                        <Route component={InvalidPath} />
                    </Switch>
                </div>
            </Router>
        )
        return (routing);
    }
}