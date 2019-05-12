import React from "react";

export default ({ input, label, type, required, agg, obs, spm }) => {
	let warning = '';
	let stack_warning = false;
	if (agg === 1 || obs === 1 || spm === 1) {
		warning += 'ขออภัย ข้อความนี้โอกาสเป็น';
		if (agg === 1) {
			warning += (stack_warning ? ' หรือ ข้อความก้าวร้าวหยาบคาย': 'ข้อความก้าวร้าวหยาบคาย');
			stack_warning = true;
		}
		if (obs === 1) {
			warning += (stack_warning ? ' หรือ ข้อความลามกอนาจาร': 'ข้อความลามกอนาจาร');
			stack_warning = true;
		}
		if (spm === 1) {
			warning += (stack_warning ? ' หรือ ข้อความที่เป็นสแปม': 'ข้อความที่เป็นสแปม');
			stack_warning = true;
		}
	}
	return (
		<div className="form-group">
			<label className="title" >{label}</label>
			{input.name !== 'content' ?
				(<input type={type} required={required} {...input} className="form-control" />) :
				(<textarea type={type} required={required} {...input} className="form-control" style={{ height: "200px" }} />)}
			{(warning !== '') &&
				(<div className="mt-2 text-danger title">{warning}</div>)}
		</div>
	);
};
