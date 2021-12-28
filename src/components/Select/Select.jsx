import React from "react";

//css
import "./select.css";

const Select = ({ options, defaultValue, onSelect }) => {
	return (
		<div className="select">
			<select id="standard-select" onChange={(e) => onSelect(e)}>
				<option value="">{defaultValue}</option>
				{options.map((option) => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>
		</div>
	);
};

export default Select;
