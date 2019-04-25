import React, { Component } from 'react'
import PostHeader from './PostHeader';
import PostItem from './PostItem'
import _ from 'lodash';

class PostList extends Component {

    getData(value) {
        let postsVal = value;
        let posts = _(postsVal)
            .keys()
            .map(postKey => {
                let cloned = _.clone(postsVal[postKey]);
                cloned.key = postKey;
                return cloned;
            }).value();
        return posts;
    }

    showPosts() {
        let posts = this.getData(this.props.posts);
        console.log(posts);
        return (
            posts &&
            posts.map(post => (
                <PostItem key={post.key}
                    topic={post.topic}
                    author={post.author}
                    lastUpdate={post.lastUpdate} />
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