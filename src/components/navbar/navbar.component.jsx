import "./navbar.style.scss";
import { ReactComponent as Logo } from "../../assets/icons/Logo.svg";
import Lup from "../../assets/icons/Search.svg";
import InputComponent from "../input/input.component";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = ({ center }) => {
	const [search, setSearch] = useState("");

	const [searchResults, setSearchResults] = useState([]);
	const dummyData = ["Apple", "Banana", "Orange", "Pear"];

	const handleSearchQuery = (quarey) => {
		setSearch(quarey);
		const results = dummyData.filter((item) =>
			item.toLowerCase().includes(quarey.toLowerCase())
		);
		setSearchResults(results);
	};

	const renderSearchResults = () => {
		if (search === "") {
			return "";
		}

		if (searchResults.length === 0) {
			return <p className="no-results">Data tidak ditemukan</p>;
		}

		return (
			<div className="search-results">
				<ul>
					{searchResults.map((result) => (
						<li key={result}>{result}</li>
					))}
				</ul>
			</div>
		);
	};

	return (
		<div
			className="navbar"
			style={center ? { margin: "0 auto" } : { margin: 0 }}
		>
			<div className="navigation">
				<Link to={"/"}>
					<Logo className="logo" />
				</Link>
				<div className="searchSection">
					<InputComponent
						label="Search"
						value={search}
						onChange={handleSearchQuery}
						icon={Lup}
					/>
					<ul>{renderSearchResults()}</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
