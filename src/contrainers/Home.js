import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PostList from '../components/post/PostList'

class Home extends Component {

    render() {
        return (
            <div>
                <Header />
                <PostList />
                <Footer />
            </div>
        );
    }
}

export default Home;