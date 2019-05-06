import React, { Component } from 'react';
import CommentItem from './CommentItem';
import { getFirebaseData } from '../common/commonFunc'

class CommentList extends Component {

    showPosts() {
        const comments = getFirebaseData(this.props.comments);
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
                        timestamp={comment.timestamp} />) :
                    (<CommentItem key={comment.key}
                        num={num++}
                        topic={post.topic}
                        author={comment.author}
                        content={comment.content}
                        timestamp={comment.timestamp} />)
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