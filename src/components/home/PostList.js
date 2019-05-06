import React, { Component } from 'react'
import PostHeader from './PostHeader';
import PostItem from './PostItem'
import { getFirebaseData } from '../common/commonFunc'
import { orderBy } from 'lodash';

class PostList extends Component {

    showPosts() {
        let posts = getFirebaseData(this.props.posts);
        posts = orderBy(posts, ['lastUpdate'], ['desc']);
        return (
            posts &&
            posts.map(post => (
                <PostItem key={post.key}
                    topic={post.topic}
                    author={post.author}
                    lastUpdate={post.lastUpdate}
                    postKey={post.key} />
            ))
        );
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <PostHeader />
                    {this.showPosts()}
                </div>
            </div>
        )
    }
}

export default PostList;