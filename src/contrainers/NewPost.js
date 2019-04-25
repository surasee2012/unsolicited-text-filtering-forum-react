import React, { Component } from 'react';
import { connect } from "react-redux";
import { postCreate, commentCreate } from "../actions";
import Header from '../components/Header';
import CommonForm from '../components/common/CommonForm'
import { postFormField } from "../components/new_post/postFormField";

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
                <CommonForm formField={postFormField} onPostSubmit={() => this.mapValuesToFirebase(formValues)} />
            </div>
        );
    }
}

function mapStateToProps({ form }) {
    return { formValues: form.commonForm ? form.commonForm.values : null };
}

export default connect(mapStateToProps, { postCreate, commentCreate })(NewPost);