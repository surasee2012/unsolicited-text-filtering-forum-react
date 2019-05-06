import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import FormField from "../common/FormField";

class PlaygroundForm extends Component {

    renderFields(formFields) {
        return formFields.map(({ label, name, type, required }) => {
            return (
                <Field
                    key={name}
                    component={FormField}
                    type={type}
                    label={label}
                    name={name}
                    required={required}
                />
            );
        });
    }

    render() {
        const { formField, onType } = this.props;
        return (
            <form onChange={onType}>
                <div className='text-white'>
                    {this.renderFields(formField)}
                </div>
            </form>
        );
    }
}

PlaygroundForm = reduxForm({ form: "playgroundForm" })(PlaygroundForm);

export default connect()(PlaygroundForm);
