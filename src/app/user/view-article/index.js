import React, { Component } from 'react';
import { connect } from 'react-redux';

const matchProps = state => {
    return { article: state.article, user: state.user }
};

class ViewArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: '',
            article_index: -1
        }
    }

    componentDidMount() {
        const { user_id, article_index } = this.props.match.params;
        console.log('Params are: ', user_id, article_index);
        this.setState({ user_id: user_id, article_index: article_index });
    }

    render() {
        const userIs = this.props.user.findIndex(d => d.user_id == this.state.user_id);
        let articleDetails;
        if (userIs >= 0 && this.props.article[this.state.article_index]) {
            articleDetails = <div className="detail-div">
                <h4>{this.props.article[this.state.article_index].article_name}</h4>
                <h4>Author Name: {this.props.article[this.state.article_index].article_author}</h4>
                <div>
                    <code>
                        {this.props.article[this.state.article_index].article_details}
                    </code>
                </div>
            </div>
        }
        const viewDiv = <div className="view-div">
            {!this.props.article[this.state.article_index] ? <div className="invalid"><p>Invalid Article</p></div> : null}
            {userIs < 0 ? <div className="invalid"><a href="http://localhost:3555/user" title="Click to login">Login Again, Please</a></div> : null}
            {articleDetails}
        </div>
        return (viewDiv);
    }
}


export default connect(matchProps)(ViewArticle);