import "./navbar.style.scss";
import { ReactComponent as Logo } from "../../assets/icons/Logo.svg";
import Banner from "../../assets/imgs/img-hero.jpg";
import { ReactComponent as Lup } from "../../assets/icons/Search.svg";
import Button from "../button/button.component";

const Navbar = () => {
	return (
		<div className="navbar">
			<Logo className="logo" />
			<Button buttonType="search" onClick={""}>
				<Lup className="searchIcon " />
				Search
			</Button>
			<img src={Banner} alt="banner" className="banner" />
		</div>
	);
};

export default Navbar;
