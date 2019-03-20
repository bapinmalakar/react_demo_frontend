import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DashboardOptionView extends Component {
    constructor(props) { super(props) }

    render() {
        return (
            <ul>
                <li> <Link to="/admin/analyze">Article Analytics</Link></li>
                <li> <Link to="/admin/article">Article Manage</Link></li>
                <li> <Link to="/admin/user">User Manage</Link></li>
            </ul>)
    }
}

export default DashboardOptionView;