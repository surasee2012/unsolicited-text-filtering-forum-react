import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { postFormField } from "./postFormField";
import FormField from "../common/FormField";

class PostForm extends Component {

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
		const { onPostSubmit } = this.props;
		return (
			<div className='container'>
				<div className='d-flex justify-content-center'>
					<div className='col-md-11 bg-grey1 p-2 border'>
					<form onSubmit={this.props.handleSubmit(onPostSubmit)}>
						<div className='title text-white'>
							{this.renderFields(postFormField)}
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

PostForm = reduxForm({ form: "postForm" })(PostForm);

export default connect()(PostForm);
