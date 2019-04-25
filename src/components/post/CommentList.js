import React, { Component } from 'react';
import CommentItem from './CommentItem';
import _ from 'lodash';

class CommentList extends Component {

    getData(value) {
        let commentsVal = value;
        let comments = _(commentsVal)
            .keys()
            .map(commentKey => {
                let cloned = _.clone(commentsVal[commentKey]);
                cloned.key = commentKey;
                return cloned;
            }).value();
        return comments;
    }

    showPosts() {
        const comments = this.getData(this.props.comments);
        const post = this.props.post;
        let num = 0;
        return (
            comments &&
            comments.map(comment => (
                num > 0 ?
                    (<CommentItem key={comment.key}
                        num={num++}
                        author={comment.author}
                        content={comment.content}
                        dateTime={comment.dateTime} />) :
                    (<CommentItem key={comment.key}
                        num={num++}
                        topic={post.topic}
                        author={comment.author}
                        content={comment.content}
                        dateTime={comment.dateTime} />)
            ))
        );
    }

    render() {
        return (
            <div>
                <div className='container'>
                    {this.showPosts()}
                </div>
            </div>
        )
    }
}

export default CommentList;