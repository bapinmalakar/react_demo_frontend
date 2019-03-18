import React, { Component } from 'react';

import DashBoardOptions from './dashboard-options';
import DashboardRoute from './route';

export default class DashBoard extends Component {
    constructor(props) { super(props); }

    render() {
        return (<div className="dashboard">
            <div className="option-div"> <DashBoardOptions /> </div>
            <div className="container-div"> <DashboardRoute /> </div>
        </div>);

    }
}