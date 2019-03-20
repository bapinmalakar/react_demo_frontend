import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Button } from 'antd'
import './../style.css';
import { setLoggedUser, setRouteState } from '../../redux-config/actions';

const mapPropsToState = state => {
    return { user: state.user, loggedUser: state.loggedUser }
}

class UserLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: '',
            password: '',
            errMessage: ''
        }
        this.textValueChnage = this.textValueChnage.bind(this);
        this.login = this.login.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(setRouteState('user'));
    }

    textValueChnage(e) {
        if (e) {
            const obj = Object.assign({}, this.state);
            if (e.target.name == 'user_id') {
                obj.user_id = e.target.value;
            } else {
                obj.password = e.target.value;
            }
            this.setState(obj);
        }
    }

    login() {
        const obj = this.state;
        if (!this.props.user.length) {
            obj.errMessage = 'Your not registered, go to admin portal and register yourself';
            this.setState(obj);
        } else {
            const userIndex = this.props.user.findIndex(d => d.user_id == this.state.user_id);
            if (userIndex >= 0 && this.props.user[userIndex].password == this.state.password) {
                this.props.dispatch(setLoggedUser({ user_name: this.props.user[userIndex].name, user_id: this.props.user[userIndex].user_id }));
                this.props.history.push('/user/dashboard');
            } else {
                obj.errMessage = 'Wrong cradential, try again';
                this.setState(obj);
            }
        }
    }

    render() {
        let errMessge;
        if (this.state.errMessage) {
            errMessge = <div>
                <p>{this.state.errMessage}</p>
            </div>
        }
        const userLogin = <div className="inner-div">
            <div className="input-div">
                <Input type="text" placeholder="login id" name="user_id" value={this.state.user_id} onChange={this.textValueChnage} />
            </div>
            <div className="input-div">
                <Input type="password" placeholder="login password" name="password" value={this.state.password} onChange={this.textValueChnage} />
            </div>
            <div className="input-div">
                <Button type="danger" onClick={this.login}>Login</Button>
            </div>
        </div>
        return (
            <div className="container">
                {errMessge}
                {userLogin}
            </div>
        )
    }
}

export default connect(mapPropsToState)(UserLogin)