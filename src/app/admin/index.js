import React, { Component } from 'react';
import DashBoardOptions from './dashboard-options';

export default class DashBoard extends Component {
    constructor(props) { super(props); }

    render() {
        return (<div className="dashboard">
            <div className="option-div"> <DashBoardOptions {...this.props}/> </div>
        </div>); 

    }
}