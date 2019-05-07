import React from "react";

export default ({ input, label, type, required, agg, obs, spm }) => {
	return (
		<div className="form-group">
			<label className="title" >{label}</label>
			{input.name !== 'content' ?
				(<input type={type} required={required} {...input} className="form-control" />) :
				(<textarea type={type} required={required} {...input} className="form-control" style={{ height: "200px" }} />)}
			{(agg === 1 || obs === 1 || spm === 1) &&
				(<div className="mt-2 text-danger title">ขออภัย ข้อความไม่เหมาะสม</div>)}
		</div>
	);
};
