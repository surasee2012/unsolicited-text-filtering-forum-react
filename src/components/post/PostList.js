import React, { Component } from 'react'
import PostHeader from './PostHeader';
import PostItem from './PostItem'

class PostList extends Component {

    showPosts() {
        return (
            this.props.posts &&
            this.props.posts.map(post => (
                <PostItem key={post.id}
                title={post.title}
                author={post.comments[0].author} 
                dateTime={post.comments[post.comments.length-1].dateTime}/>
            ))
        );
    }

    render() {
        console.log(this.props.posts);
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