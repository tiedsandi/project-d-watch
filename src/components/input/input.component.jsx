import "./input.style.scss";

import React, { useState } from "react";
import { ReactComponent as LupIcon } from "../../assets/icons/Search.svg";

const InputComponent = ({ label, value, onChange }) => {
	const [isFocused, setIsFocused] = useState(false);

	const handleInputChange = (event) => {
		onChange(event.target.value);
	};

	// const handleInputFocus = () => {
	// 	setIsFocused(true);
	// };

	// const handleInputBlur = () => {
	// 	setIsFocused(false);
	// };

	return (
		<div
			// className={`input-component  ${
			// 	isFocused ? "input-component--focused" : ""
			// }`}
			className={`input-component `}
		>
			<div className="input-component__wrapper">
				<LupIcon className="input-component__icon" />
				<input
					type="text"
					value={value}
					onChange={handleInputChange}
					// onFocus={handleInputFocus}
					// onBlur={handleInputBlur}
					className="input-component__input"
					placeholder={label}
					// placeholder={isFocused ? label : ""}
				/>
			</div>
		</div>
	);
};

// ...

export default InputComponent;
