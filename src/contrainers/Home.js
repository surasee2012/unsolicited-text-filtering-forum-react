import React, { Component } from 'react';
import Header from '../components/Header';
import PostList from '../components/home/PostList'
import { connect } from "react-redux";
import { postsFetch } from "../actions";

class Home extends Component {

    componentDidMount() {
        this.props.postsFetch();
    }

    render() {
        return (
            <div className='mb-3'>
                <Header />
                <PostList posts={this.props.posts} />
            </div>
        );
    }
}

function mapStateToProps({ posts }) {
    return { posts };
}

export default connect(mapStateToProps, { postsFetch })(Home);