import React, { Component } from 'react';
import { connect } from "react-redux";
import axios from "axios";
import { postFetch, commentsFetch, commentCreate, postUpdateTimestamp } from "../actions";
import Header from '../components/Header';
import CommentList from '../components/post/CommentList'
import CommonForm from '../components/common/CommonForm'
import { commentFormField } from "../components/post/commentFormField";
import { canSubmit } from '../components/common/commonFunc'

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { clfResult: null };
    }

    componentDidMount() {
        const { key } = this.props.match.params;
        this.props.postFetch(key);
        if (key) {
            this.props.commentsFetch(key);
        }
    }

    mapValuesToFirebase(formValues) {
        const { commentCreate, postUpdateTimestamp } = this.props;
        const { author, content } = formValues;
        const { key } = this.props.match.params;
        const timestamp = +new Date();
        const newComment = {
            author,
            content,
            timestamp
        };
        commentCreate(key, newComment);
        postUpdateTimestamp(key, timestamp)
    }

    textFilter(formValues) {
        const { author, content } = formValues;
        axios.post("http://127.0.0.1:8000/text_clf_api/", {
            clfs: ['*'],
            prob: 0,
            texts: [author, content]
        }).then(res => {
            this.setState({ clfResult: res.data });
            if (canSubmit(res.data)) {
                this.mapValuesToFirebase(formValues);
            }
        });
    }

    render() {
        const { posts, comments, formValues } = this.props;
        const { clfResult } = this.state;
        return (
            <div className='mb-3'>
                <Header />
                <CommentList post={posts.post} comments={comments} />
                <CommonForm formField={commentFormField} clfResult={clfResult} onPostSubmit={() => this.textFilter(formValues)} />
            </div>
        );
    }
}

function mapStateToProps({ posts, comments, form }) {
    return { posts, comments, formValues: form.commonForm ? form.commonForm.values : null };
}

export default connect(mapStateToProps, { postFetch, commentsFetch, commentCreate, postUpdateTimestamp })(Home);