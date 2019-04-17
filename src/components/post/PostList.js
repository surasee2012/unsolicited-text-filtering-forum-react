import React, { Component } from 'react'
import PostItem from './PostItem'

class PostList extends Component {

    render() {
        return (
            <div>
                <div className='container bg-grey1'>
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