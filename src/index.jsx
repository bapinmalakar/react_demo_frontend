import React from 'react';
import AdminView from './app/admin/view';

export default class RootHtml extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<AdminView />)
    }
}