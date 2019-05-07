import React, { Component } from 'react';
import axios from "axios";
import { connect } from "react-redux";
import { postCreate, commentCreate } from "../actions";
import Header from '../components/Header';
import CommonForm from '../components/common/CommonForm'
import { postFormField } from "../components/new_post/postFormField";
import { canSubmit } from '../components/common/commonFunc'

class NewPost extends Component {

    constructor(props) {
        super(props);
        this.state = { clfResult: null };
    }

    mapValuesToFirebase(formValues) {
        const { postCreate, commentCreate } = this.props;
        const { author, topic, content } = formValues;
        const timestamp = +new Date();
        const newPost = {
            author,
            topic,
            lastUpdate: timestamp
        };
        postCreate(newPost).then((key) => {
            const newComment = {
                author,
                content,
                timestamp
            };
            commentCreate(key, newComment);
            this.props.history.push('post/' + key);
        });
    }

    textFilter(formValues) {
        const { author, topic, content } = formValues;
        axios.post("http://127.0.0.1:8000/text_clf_api/", {
            clfs: ['*'],
            prob: 0,
            texts: [author, topic, content]
        }).then(res => {
            this.setState({ clfResult: res.data });
            if (canSubmit(res.data)) {
                this.mapValuesToFirebase(formValues);
            }
        });
    }

    render() {
        const { formValues } = this.props;
        const { clfResult } = this.state;
        return (
            <div className='mb-3'>
                <Header />
                <CommonForm formField={postFormField} clfResult={clfResult} onPostSubmit={() => this.textFilter(formValues)} />
            </div>
        );
    }
}

function mapStateToProps({ form }) {
    return { formValues: form.commonForm ? form.commonForm.values : null };
}

export default connect(mapStateToProps, { postCreate, commentCreate })(NewPost);