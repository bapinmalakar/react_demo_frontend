import React, { Component } from 'react';
import LeftOption from './dashboard-options.jsx';
import DashboardContainer from './dashboard-container';
import './../css/index.css';

class AdminDashboardView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="dashboard">
                <div> <LeftOption /> </div>
                <div> <DashboardContainer /> </div>
            </div>
        );
    }
}

export default AdminDashboardView;