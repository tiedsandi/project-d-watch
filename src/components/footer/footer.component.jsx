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
				D'Watch
			</div>
			<ul className="socialMediaLink">
				<a
					href="https://www.linkedin.com/in/fachran-s-77b450114/"
					target="_blank"
					rel="noreferrer"
				>
					<li className="linkedIn">
						<img
							src={li}
							alt=""
							className="socialMediaLogo"
							style={{ fill: "#FF0000" }}
						/>
					</li>
				</a>
				<a
					href="https://github.com/tiedsandi/d-watch"
					target="_blank"
					rel="noreferrer"
				>
					<li className="sourceCode">
						<img
							src={gh}
							alt=""
							className="socialMediaLogo"
							style={{ fill: "#FF0000" }}
						/>
					</li>
				</a>
				<a
					href="https://www.figma.com/file/4CAuFdQyfWRGAojPScFsto/D'Watch?type=design&node-id=314-5014&mode=design&t=aJPWJrazC0GvHLz0-0"
					target="_blank"
					rel="noreferrer"
				>
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
				Made with Love by{" "}
				<a href="https://fachran-sandi.netlify.app/">Fachran Sandi</a>{" "}
			</p>
		</div>
	);
};

export default Footer;
