import React, { Component } from 'react';
import { Input, Button, Table } from 'antd';
import { connect, dis } from 'react-redux';
import { addArticle } from './../../../redux-config/actions';

import './../style.css'

const { TextArea } = Input;

const mapStateToProps = state => {
    return { article: state.article };
};
class ArticleComponent extends Component {
    constructor(props) {
        super(props);
        this.storage_name = 'articles';
        this.state = {
            article_name: '',
            article_author: '',
            article_details: '',
            article_id: this.generateArticleId(),
            total_time_viewed: 0,
            view_by_user: {}
        }
        this.addArticle = this.addArticle.bind(this);
        this.onChangeValueOfInputBox = this.onChangeValueOfInputBox.bind(this);
    }

    generateArticleId() {
        return new Date().getTime() + '';
    }

    onChangeValueOfInputBox(event) {
        if (event) {
            const obj = Object.assign({}, this.state);
            if (event.target.name == 'article_name') {
                obj.article_name = event.target.value;
            } else if (event.target.name == 'article_details') {
                obj.article_details = event.target.value;
            } else {
                obj.article_author = event.target.value;
            }
            this.setState(obj);
        }
    }

    addArticle() {
        const newState = this.props.dispatch(addArticle(this.state));
        console.log('New state is: ', newState);
        let obj = {
            article_name: '',
            article_author: '',
            article_details: '',
            article_id: this.generateArticleId(),
        }
        this.setArticleForLongTime();
        this.setState(obj);
    }

    setArticleForLongTime() {
        let data = localStorage.getItem(this.storage_name);
        if (data) {
            data = JSON.parse(data);
            data.push(this.state);
            localStorage.setItem(this.storage_name, JSON.stringify(data))
        } else {
            localStorage.setItem(this.storage_name, JSON.stringify([this.state]))
        }
    }


    render() {
        let article_list;
        const columnsList = [{
            title: 'Article ID',
            dataIndex: 'id',
            key: 'id'
        }, {
            title: 'Article Name',
            dataIndex: 'name',
            key: 'name'
        }, {
            title: 'Author Name',
            dataIndex: 'author',
            key: 'author'
        }];

        const dataList = [];

        if (this.props.article) {
            this.props.article.map((item, i) => {
                const obj = {
                    key: i,
                    name: item.article_name,
                    author: item.article_author,
                    id: item.article_id
                };
                dataList.push(obj);
            });
        }

        article_list = <div className="list-div">
            <p>Number Of Articles {this.props.article.length}</p>
            <Table columns={columnsList} dataSource={dataList} />
        </div>
        return (
            <div>
                <div className="add-div">
                    <div className="input-class">
                        <Input placeholder="article name" name="article_name" value={this.state.article_name} onChange={this.onChangeValueOfInputBox} />
                    </div>
                    <div className="input-class">
                        <Input placeholder="article author name" name="authoe_name" value={this.state.article_author} onChange={this.onChangeValueOfInputBox} />
                    </div>
                    <div className="input-class">
                        <TextArea placeholder="enter details" rows={4} name="article_details" value={this.state.article_details} onChange={this.onChangeValueOfInputBox} />
                    </div>
                    <div className="input-class">
                        <Input placeholder="article_id" value={this.state.article_id} readOnly />
                    </div>
                    <div className="input-class">
                        <Button type="danger" onClick={this.addArticle} disabled={!this.state.article_author || !this.state.article_details || !this.state.article_name}>Add</Button>
                    </div>
                </div>
                {article_list}
            </div>
        );
    }
}

const ReduxArticle = connect(mapStateToProps)(ArticleComponent);
export default ReduxArticle;