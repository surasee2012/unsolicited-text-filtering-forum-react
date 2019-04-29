import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import FormField from "./FormField";

class CommonForm extends Component {

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
		const { formField, onPostSubmit } = this.props;
		return (
			<div className='container'>
				<div className='d-flex justify-content-center'>
					<div className='col-md-11 bg-grey1 p-2 border'>
						<form onSubmit={this.props.handleSubmit(onPostSubmit)}>
							<div className='title text-white'>
								{this.renderFields(formField)}
							</div>
							<div className='d-flex justify-content-end'>
								<button className="btn btn-orange title text-white mr-1" type="submit">
									บันทึก
						</button>
							</div>
						</form>
					</div>
				</div>
			</div >
		);
	}
}

CommonForm = reduxForm({ form: "commonForm" })(CommonForm);

export default connect()(CommonForm);
