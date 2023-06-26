import "./button.style.scss";

const BUTTON_TYPE_CLASSES = {
	search: "search",
	inverted: "inverted",
};

const Button = ({ children, buttonType, ...otherProps }) => (
	<button
		className={`buttonContainer ${BUTTON_TYPE_CLASSES[buttonType]}`}
		{...otherProps}
	>
		{children}
	</button>
);
export default Button;
