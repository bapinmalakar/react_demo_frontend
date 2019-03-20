import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from './../../../redux-config/actions';

import { Input, Button, Table } from 'antd'

const mapStateToProps = state => {
    return { user: state.user }
}

class UserManageComponent extends Component {
    constructor(props) {
        super(props);
        this.user_storage = 'users';

        this.state = {
            name: '',
            user_id: '',
            password: ''
        };
        this.textValueChange = this.textValueChange.bind(this);
        this.addUser = this.addUser.bind(this);
    }

    textValueChange(event) {
        if (event) {
            const obj = Object.assign({}, this.state);
            if (event.target.name == 'user_name') {
                obj.name = event.target.value;
            } else if (event.target.name == 'user_id') {
                obj.user_id = event.target.value;
            } else {
                obj.password = event.target.value
            }
            this.setState(obj);
        }
    }

    addUser() {
        this.props.dispatch(addUser(this.state));
        this.setValueToStorageForLongTime();
        const obj = {
            name: '',
            user_id: '',
            password: ''
        };
        this.setState(obj);
    }

    setValueToStorageForLongTime() {
        let data = localStorage.getItem(this.user_storage);
        if (!data) {
            localStorage.setItem(this.user_storage, JSON.stringify([this.state]));
        } else {
            data = JSON.parse(data);
            data.push(this.state);
            localStorage.setItem(this.user_storage, data);
        }
    }

    

    render() {
        const userEntry = <div className="add-div">
            <div className="input-class">
                <Input type="text" placeholder="user name (biplab)" name="user_name" value={this.state.name} onChange={this.textValueChange} />
            </div>
            <div className="input-class">
                <Input type="text" placeholder="user id (biplab123)" name="user_id" value={this.state.user_id} onChange={this.textValueChange} />
            </div>
            <div className="input-class">
                <Input type="password" placeholder="password for login" name="password" value={this.state.password} onChange={this.textValueChange} />
            </div>
            <div className="input-class">
                <Button type="danger" onClick={this.addUser}>Add User</Button>
            </div>
        </div>;

        let userList;

        const columnList = [{
            title: 'User Name',
            dataIndex: 'user_name',
            key: 'user_name'
        }, {
            title: 'User ID',
            dataIndex: 'user_id',
            key: 'user_id'
        }, {
            title: 'Login Password',
            dataIndex: 'user_password',
            key: 'user_password'
        }];

        const dataList = [];
        if (this.props.user.length) {
            this.props.user.map((d, i) => {
                const obj = {
                    key: i,
                    user_name: d.name,
                    user_id: d.user_id,
                    user_password: d.password
                };
                dataList.push(obj);
            })
        };
        userList = <div className="list-div">
            <p>Number Of Users {this.props.user.length}</p>
            <Table columns={columnList} dataSource={dataList} />
        </div>
        return (<div>
            {userEntry}
            {userList}
        </div>)
    }
}

export default connect(mapStateToProps)(UserManageComponent);