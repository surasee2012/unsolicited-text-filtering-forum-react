import React, { Component } from 'react';
import PlaygroundForm from './PlaygroundForm'
import { playgroundFormField } from './playgroundFormField';
import { connect } from "react-redux";
import axios from "axios";

const WAIT_INTERVAL = 1000

class CLFMonitor extends Component {

    constructor(props) {
        super(props);
        this.state = { clfResult: "" };
    }

    handleChange = () => {
        clearTimeout(this.timer);
        this.timer = setTimeout(this.triggerChange, WAIT_INTERVAL);
    }

    triggerChange = () => {
        axios.get("http://localhost:3001/clf").then(res => {
            this.setState({ clfResult: res.data });
        });
    }

    resultMap() {
        const { agg, obs, spm } = this.state.clfResult;
        return (
            <div className='mt-2'>
                เป็นข้อความก้าวร้าวหยาบคาย: {agg ? 'ใช้' : 'ไม่ใช่'}<br />
                เป็นข้อความลามกอนาจาร: {obs ? 'ใช้' : 'ไม่ใช่'}<br />
                เป็นข้อความที่เป็นสแปม: {spm ? 'ใช้' : 'ไม่ใช่'}<br />
            </div>
        )
    }

    render() {
        return (
            <div className='container'>
                <div className='container bg-grey1 text-white'>
                    <div className='row'>
                        <div className='col-md-6 border'>
                            <div className='mt-2' />
                            <PlaygroundForm formField={playgroundFormField} onType={() => this.handleChange()} />
                        </div>
                        <div className='col-md-6 border'>
                            <div className='title mt-2'>ผลการจำแนกข้อความ</div>
                            {this.resultMap()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ form }) {
    return { formValues: form.playgroundForm ? form.playgroundForm.values : null };
}

export default connect(mapStateToProps)(CLFMonitor);