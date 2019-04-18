import React, { Component } from 'react'
import PostHeader from './PostHeader';
import PostItem from './PostItem'

class PostList extends Component {

    render() {
        return (
            <div>
                <div className='container'>
                    <PostHeader />
                    <PostItem />
                    <PostItem />
                    <PostItem />
                    <PostItem />
                </div>
            </div>
        )
    }
}

export default PostList;