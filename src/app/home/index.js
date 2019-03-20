import React, { Component } from 'react';
import { Button } from 'antd';

import {connect} from 'react-redux';
import {setRouteState} from './../redux-config/actions';

class HomePage extends Component {
    constructor(props) { super(props); }

    navigate(navigateTo) {
        this.props.dispatch(setRouteState(navigateTo));
        this.props.history.push(`/${navigateTo}`);
    }

    componentDidMount() {
        if(window.location.href.includes('/admin')) {
            this.props.dispatch(setRouteState('admin'));
        } else {
            this.props.dispatch(setRouteState('home'))
        }
    }

    render() {
        return (
            <div className="home-button">
                <Button className="btn" type="danger" onClick={() => this.navigate('admin')}>Admin Interface</Button>
                <Button className="btn" type="danger" onClick={() => this.navigate('user')}>User Interface</Button>
                <Button className="btn"  type="danger" onClick={() => this.navigate('frequency')}>Word Frequency</Button>
            </div>
        )
    }
}

export default connect()(HomePage);