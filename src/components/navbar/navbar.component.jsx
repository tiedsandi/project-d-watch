import "./navbar.style.scss";
import { ReactComponent as Logo } from "../../assets/icons/Logo.svg";
import { ReactComponent as Lup } from "../../assets/icons/Search.svg";
import Button from "../button/button.component";

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="navigation">
				<Logo className="logo" />
				<Button buttonType="search" onClick={""}>
					<Lup className="searchIcon " />
					Search
				</Button>
			</div>
		</div>
	);
};

export default Navbar;
