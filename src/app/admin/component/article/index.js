import React, { Component } from 'react';
import { Input, Button } from 'antd';
import { connect, dis } from 'react-redux';
import { addArticle } from './../../../redux-config/actions';

import './../style.css'

class ArticleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            article_name: '',
            article_author: '',
            article_id: this.generateArticleId()
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
            } else {
                obj.article_author = event.target.value;
            }
            this.setState(obj);
        }
    }

    addArticle() {
        this.props.dispatch(addArticle(this.state));
    }

    render() {
        return (
            <div className="add-article-div">
                <div className="input-class">
                    <Input placeholder="article name" name="article_name" value={this.state.article_name} onChange={this.onChangeValueOfInputBox} />
                </div>
                <div className="input-class">
                    <Input placeholder="article author name" name="authoe_name" value={this.state.article_author} onChange={this.onChangeValueOfInputBox} />
                </div>
                <div className="input-class">
                    <Input placeholder="article_id" value={this.state.article_id} readOnly />
                </div>
                <div className="input-class">
                    <Button type="danger" onClick={this.addArticle}>Add</Button>
                </div>
            </div>
        );
    }
}

const ReduxArticle = connect()(ArticleComponent);
export default ReduxArticle;