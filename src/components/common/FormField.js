import React from "react";

export default ({ input, label, type, required, }) => {
	return (
		<div className="form-group">
			<label className="title" >{label}</label>
			{input.name != 'content' ?
				(<input type={type} required={required} {...input} className="form-control" />) :
				(<textarea type={type} required={required} {...input} className="form-control" style={{height: "150px"}} />)}
		</div>
	);
};
