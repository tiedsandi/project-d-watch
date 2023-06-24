import "./footer.style.scss";
import { ReactComponent as Logo } from "../../assets/icons/Logo.svg";
import li from "../../assets/icons/linkedin_1.svg";
import gh from "../../assets/icons/code.svg";
import fg from "../../assets/icons/figma_1.svg";

const Footer = () => {
	return (
		<div className="footer">
			<div className="logoFooter">
				<Logo className="logo" />
				D'Reviews
			</div>
			<ul className="socialMediaLink">
				<a href="http://google.com" target="_blank" rel="noreferrer">
					<li className="linkedIn">
						<img
							src={li}
							alt=""
							className="socialMediaLogo"
							style={{ fill: "#FF0000" }}
						/>
					</li>
				</a>
				<a href="http://google.com" target="_blank" rel="noreferrer">
					<li className="sourceCode">
						<img
							src={gh}
							alt=""
							className="socialMediaLogo"
							style={{ fill: "#FF0000" }}
						/>
					</li>
				</a>
				<a href="http://google.com" target="_blank" rel="noreferrer">
					<li className="design">
						<img
							src={fg}
							alt=""
							className="socialMediaLogo"
							style={{ fill: "#404" }}
						/>
					</li>
				</a>
			</ul>
			<p>
				Made with Love by <a href="http://googe.com">Fachran Sandi</a>{" "}
			</p>
		</div>
	);
};

export default Footer;
