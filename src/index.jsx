import React from 'react';
import AppRoute from './route-config';
import { connect } from "react-redux";

const mapStateToProps = state=> {return {baseHttpClass: state.baseHttpClass}}
class RootHtml extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<AppRoute />)
    }
}

const ReduxApp = connect(mapStateToProps)(RootHtml);
export default ReduxApp;