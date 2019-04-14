import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

class PlayGround extends Component {

    render() {
        return (
            <div>
                <Header />
                <div>Welcome to Playground</div>
                <Footer />
            </div>
        )
    }
}

export default PlayGround;