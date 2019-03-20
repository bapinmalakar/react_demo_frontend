import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'

import Home from './home'
import Admin from './admin';
import Analyze from './admin/component/analyze';
import Article from './admin/component/article';
import AdminUser from './admin/component/user';

import Login from './user/login';
import Frequency from './frequency/view';


import './style.css';

import { setRouteState } from './redux-config/actions';
import { connect } from 'react-redux';

const mapPropstoState = state => {
    return {
        currentRoute: state.currentRoute
    }
}

class AppRoute extends Component {

    constructor(props) {
        super(props);
        this.state = {
            admin_show: false
        }
    }

    componentDidMount() {
        if (window.location.href.includes('/admin')) {
            this.props.dispatch(setRouteState('admin'));
        }
    }
    render() {
        return (
            <Router>
                <Route exact path="/admin" {...this.props} component={Admin}>
                    {this.props.currentRoute == 'admin' ? <Admin {...this.props} /> : null}
                    <div className="container-div">
                        <Route exact path="/admin" {...this.props} component={Article} />
                        <Route path="/admin/analyze" {...this.props} component={Analyze} />
                        <Route path="/admin/article" {...this.props} component={Article} />
                        <Route path="/admin/user" {...this.props} component={AdminUser} />
                    </div>
                </Route>
                <Route exact path="/" component={Home} {...this.props} />
                <Route exact path='/user' {...this.props}>
                    <Route exact path='/user' component={Login}></Route>
                </Route>
                <Route path='/frequency' component={Frequency}{...this.props} />
            </Router>
        );
    }
}

export default connect(mapPropstoState)(AppRoute);