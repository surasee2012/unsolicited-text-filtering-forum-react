import React, { Component } from 'react';
import { connect } from "react-redux";
import { postFetch, commentsFetch, commentCreate } from "../actions";
import Header from '../components/Header';
import CommentList from '../components/post/CommentList'
import CommonForm from '../components/common/CommonForm'
import { commentFormField } from "../components/post/commentFormField";

class Home extends Component {

    componentDidMount() {
        const { key } = this.props.match.params;
        this.props.postFetch(key);
        if (key) {
            this.props.commentsFetch(key);
        }
    }

    mapValuesToFirebase(formValues) {
        const { commentCreate } = this.props;
        const { key } = this.props.match.params;
        const dateTime = this.getLocalDateTime();
        const newComment = { author: formValues.author, content: formValues.content, dateTime: dateTime };
        commentCreate(key, newComment);
    }

    getLocalDateTime() {
        let date = new Date();
        return date.toLocaleDateString() + " " + date.toLocaleTimeString();
    }

    render() {
        const { posts, comments, formValues } = this.props;
        return (
            <div className='mb-3'>
                <Header />
                <CommentList post={posts} comments={comments} />
                <CommonForm formField={commentFormField} onPostSubmit={() => this.mapValuesToFirebase(formValues)} />
            </div>
        );
    }
}

function mapStateToProps({ posts, comments, form }) {
    return { posts, comments, formValues: form.commonForm ? form.commonForm.values : null };
}

export default connect(mapStateToProps, { postFetch, commentsFetch, commentCreate })(Home);