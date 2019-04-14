import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Home extends Component {

    render() {
        return (
            <div>
                <Header />
                <div>Welcome to Home</div>
                <Footer />
            </div>
        )
    }
}

export default Home;