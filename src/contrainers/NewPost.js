import React, { Component } from 'react';
import { connect } from "react-redux";
import { postCreate, commentCreate } from "../actions";
import Header from '../components/Header';
import PostForm from '../components/new_post/PostForm'

class NewPost extends Component {

    mapValuesToFirebase(formValues) {
        const { postCreate, commentCreate } = this.props;
        let dateTime = this.getLocalDateTime();
        let newPost = { author: formValues.author, topic: formValues.topic, lastUpdate: dateTime };
        postCreate(newPost).then((key) => {
            let newComment = { author: formValues.author, content: formValues.content, dateTime: dateTime };
            commentCreate(key, newComment);
        });
        this.props.history.push('');
    }

    getLocalDateTime() {
        let date = new Date();
        return date.toLocaleDateString() + " " + date.toLocaleTimeString();
    }

    render() {
        const { formValues } = this.props;
        return (
            <div className='mb-3'>
                <Header />
                <PostForm onPostSubmit={() => this.mapValuesToFirebase(formValues)} />
            </div>
        );
    }
}

function mapStateToProps({ form }) {
    return { formValues: form.postForm ? form.postForm.values : null };
}

export default connect(mapStateToProps, { postCreate, commentCreate })(NewPost);