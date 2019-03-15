import React from 'react';
import AdminView from './app/admin/view';
import FrequencyComponent from './app/frequency/view';

export default class RootHtml extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<FrequencyComponent />)
    }
}