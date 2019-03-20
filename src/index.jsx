import React from 'react';
import AppRoute from './app/index';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { addArticle, addUser } from './app/redux-config/actions';

const mapPropsToState = state => {
    return { user: state.user, article: state.article }
}
class RootHtml extends React.Component {

    constructor(props) {
        super(props);
        this.user_storage = 'users';
        this.article_name = 'articles';
    }

    setArticleStateFromLocalStorage() {
        let data = localStorage.getItem(this.article_name);
        if (data) {
            this.props.dispatch(addArticle(JSON.parse(data)));
        }
    }

    setUserStateFromLocalStorage() {
        let data = localStorage.getItem(this.user_storage);
        if (data) {
            this.props.dispatch(addUser(JSON.parse(data)));
        }
    }

    render() {
        if (!this.props.user.length) {
            this.setUserStateFromLocalStorage();
        }
        if (!this.props.article.length) {
            this.setArticleStateFromLocalStorage();
        }
        return (
            <AppRoute {...this.props} />
        )
    }
}
export default connect(mapPropsToState)(RootHtml);