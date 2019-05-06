import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import FormField from "./FormField";

class CommonForm extends Component {

	mergeTwoObjArrs(arr1, arr2) {
		let newArr = [];
		for (let i = 0; i < arr1.length; i++) {
			newArr[i] = { ...arr1[i], agg: arr2[i].agg.pred, obs: arr2[i].obs.pred, spm: arr2[i].spm.pred };
		}
		return newArr;
	}

	renderFields(formFields, clfResult) {
		if (clfResult) {
			clfResult = Object.values(clfResult);
			clfResult.unshift(clfResult.pop()); // to correct index
			formFields = this.mergeTwoObjArrs(formFields, clfResult);
		}
		return formFields.map(({ label, name, type, required, agg, obs, spm }) => {
			return (
				<Field
					key={name}
					component={FormField}
					type={type}
					label={label}
					name={name}
					required={required}
					agg={agg}
					obs={obs}
					spm={spm}
				/>
			);
		});
	}

	render() {
		const { formField, onPostSubmit, clfResult } = this.props;
		return (
			<div className='container'>
				<div className='d-flex justify-content-center'>
					<div className='col-md-11 bg-grey1 p-2 border'>
						<form onSubmit={this.props.handleSubmit(onPostSubmit)}>
							<div className='text-white'>
								{this.renderFields(formField, clfResult)}
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
