import React, {Component} from 'react';
import DashboardView from './dashboard';

class AdminView extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<DashboardView />);
    }
}

export default AdminView;