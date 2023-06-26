import React from "react";
import "./dropdown.style.scss";

const Dropdown = ({ label, options, onSelect }) => {
	const handleSelect = (event) => {
		const selectedOption = event.target.value;
		onSelect(selectedOption);
	};

	return (
		<div className="dropdown">
			<label>{label}</label>
			<select onChange={handleSelect}>
				<option value="">Select {label}</option>
				{options.map((option) => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>
		</div>
	);
};

export default Dropdown;
