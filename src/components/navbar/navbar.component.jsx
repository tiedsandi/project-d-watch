import "./navbar.style.scss";
import { ReactComponent as Logo } from "../../assets/icons/Logo.svg";
import { ReactComponent as Lup } from "../../assets/icons/Search.svg";
import Button from "../button/button.component";
import { Link } from "react-router-dom";

const Navbar = ({ center }) => {
	return (
		<div
			className="navbar"
			style={center ? { margin: "0 auto" } : { margin: 0 }}
		>
			<div className="navigation">
				<Link to={"/"}>
					<Logo className="logo" />
				</Link>
				<Button buttonType="search" onClick={""}>
					<Lup className="searchIcon " />
					Search
				</Button>
			</div>
		</div>
	);
};

export default Navbar;
