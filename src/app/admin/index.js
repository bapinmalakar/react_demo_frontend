import React, {Component} from 'react';
import Dashboard from './dashboard';

import './css/index.css';

class AdminView extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<Dashboard />);
    }
}

export default AdminView;