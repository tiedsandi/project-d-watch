import React from "react";
import "./dropdown.style.scss";

const Dropdown = ({ label, options, onSelect, selectedOption }) => {
	const handleSelect = (event) => {
		const selectedValue = event.target.value;
		onSelect(selectedValue);
	};

	return (
		<div className="dropdown">
			<label>{label}</label>
			<select onChange={handleSelect} value={selectedOption}>
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
