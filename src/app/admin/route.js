import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'

import Analyze from './component/analyze';
import InvalidPath from './../inavlid-file';

class AdminRoute extends Component {
    constructor(props) { super(props); }

    render() {
        const routing = (
            <Router>
                <Switch>
                    <Route exact path='/' component={Analyze} />
                    <Route component={InvalidPath} />
                </Switch>
            </Router>
        )
        return (routing);
    }
}

export default AdminRoute;