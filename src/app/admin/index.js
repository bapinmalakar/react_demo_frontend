import React, { Component } from 'react';
import DashBoardOptions from './dashboard-options';
import { Route, Switch } from 'react-router-dom';

import Analyze from './component/analyze';
import Article from './component/article';
import User from './component/user';

export default class DashBoard extends Component {
    constructor(props) { super(props); }

    render() {
        console.log(this.props);
        return (<div className="dashboard">
            <div className="option-div"> <DashBoardOptions {...this.props} /> </div>
        </div>);
    }
}