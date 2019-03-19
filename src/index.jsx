import React from 'react';
import AppRoute from './route-config';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { connect } from "react-redux";

const mapStateToProps = state => { return { baseHttpClass: state.baseHttpClass , article: state.article} }
class RootHtml extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AppRoute {...this.props} />
        )
    }
}

const ReduxApp = connect(mapStateToProps)(RootHtml);
export default RootHtml;