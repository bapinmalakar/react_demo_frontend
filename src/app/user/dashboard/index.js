import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import './../style.css';



const mapPropsToState = state => {
    return { article: state.article, loggedUser: state.loggedUser }
}
class UserDashboard extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (!this.props.loggedUser) {
            this.props.history.push('/user');
        }
    }

    viewArticle(link) {
        window.open(link, '_blank');
    }

    render() {
        let noArticle;
        const articleList = [];
        for (let i = 0; i < this.props.article.length; i++) {
            const val = this.props.article[i].article_name;
            articleList.push(<Button key={i} className="articles" onClick={()=>this.viewArticle(`http://localhost:3555/user/${this.props.loggedUser.user_id}/view_details/${i}`)} type="danger">{val}</Button>)
        }
        return (<div>
            { this.props.loggedUser? <div className="user-details">
                <h1>{this.props.loggedUser.user_name}</h1>
                <h1>{this.props.loggedUser.user_id}</h1>
            </div> : null}
            {!this.props.article.length ? <div>
                <p>No article there, Please go to admin and create some article</p>
            </div> : null}
            {this.props.article.length ? <div className="article-list">{articleList}</div> : null}
        </div>)
    }
}

export default connect(mapPropsToState)(UserDashboard);