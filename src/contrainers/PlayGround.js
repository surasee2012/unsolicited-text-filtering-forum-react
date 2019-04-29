import React, { Component } from 'react';
import Header from '../components/Header';
import CLFMonitor from '../components/playground/CLFMonitor';
import { connect } from "react-redux";

class Playground extends Component {

    render() {
        return (
            <div>
                <Header />
                <CLFMonitor />
            </div>
        );
    }
}

export default Playground;