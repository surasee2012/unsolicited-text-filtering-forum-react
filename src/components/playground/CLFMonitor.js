import React, { Component } from 'react';
import axios from "axios";
import PlaygroundForm from './PlaygroundForm'
import { playgroundFormField } from './playgroundFormField';
import { connect } from "react-redux";

const WAIT_INTERVAL = 1000

class CLFMonitor extends Component {

    constructor(props) {
        super(props);
        this.state = { clfResult: null };
    }

    handleChange = () => {
        clearTimeout(this.timer);
        this.timer = setTimeout(this.triggerChange, WAIT_INTERVAL);
    }

    triggerChange = () => {
        const { formValues } = this.props;
        formValues &&
            axios.post("http://127.0.0.1:8000/text_clf_api/", {
                clfs: ['*'],
                prob: 1,
                texts: [formValues.content]
            }).then(res => {
                this.setState({ clfResult: res.data });
            });
        !formValues &&
            this.setState({ clfResult: null });
    }

    resultMap() {
        if (this.state.clfResult) {
            const {agg, obs, spm} = this.state.clfResult.t0;
            return (
                <div className='mt-2'>
                    ข้อความก้าวร้าวหยาบคาย: {agg.pred ? 'ใช้' : 'ไม่ใช่'}<br />
                    อัตราความน่าจะเป็น {agg.prob_0} : {agg.prob_1}<br /><br />
                    ข้อความลามกอนาจาร: {obs.pred ? 'ใช้' : 'ไม่ใช่'}<br />
                    อัตราความน่าจะเป็น {obs.prob_0} : {obs.prob_1}<br /><br />
                    ข้อความที่เป็นสแปม: {spm.pred ? 'ใช้' : 'ไม่ใช่'}<br />
                    อัตราความน่าจะเป็น {spm.prob_0} : {spm.prob_1}<br /><br />
                </div>
            )
        }
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