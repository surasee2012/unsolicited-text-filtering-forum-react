import React, { Component } from 'react';
import Header from '../components/Header';
import PostList from '../components/post/PostList'
import { connect } from "react-redux";
import { postsFetch } from "../actions";

class Home extends Component {

    constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.postsFetch();
	}

    render() {
        return (
            <div>
                <Header />
                <PostList posts={this.props.posts}/>
            </div>
        );
    }
}

function mapStateToProps({ posts }) {
	return { posts };
}

export default connect(mapStateToProps, { postsFetch })(Home);