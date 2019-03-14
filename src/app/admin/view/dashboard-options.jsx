import React, {Component} from 'react';

class DashboardOptionView extends Component {
    constructor(props) {super(props)}

    render() {
        return(
        <ul>
            <li>Article Analytics</li>
            <li>Article Manage</li>
            <li>User Manage</li>
        </ul>)
    }
}

export default DashboardOptionView;