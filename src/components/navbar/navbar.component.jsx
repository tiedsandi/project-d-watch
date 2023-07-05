import "./navbar.style.scss";
import { ReactComponent as Logo } from "../../assets/icons/Logo.svg";
import Lup from "../../assets/icons/Search.svg";
import InputComponent from "../input/input.component";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchStartAsyncs } from "../../store/dataApi/dataApi.action";
import {
	loadingSearch,
	resultSearchArr,
} from "../../store/dataApi/dataApi.selector";

const Navbar = ({ center }) => {
	const [search, setSearch] = useState("");

	const dispatch = useDispatch();
	const searchResults = useSelector(resultSearchArr);
	const isLoadingSearch = useSelector(loadingSearch);
	const handleSearchQuery = (quarey) => {
		setSearch(quarey);
		dispatch(fetchSearchStartAsyncs(search));
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
					{searchResults.map((data) => (
						<a href={`/${data.media_type}/${data.id}`} key={data.id}>
							<li>{data.title || data.name}</li>
						</a>
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
					<ul>
						{isLoadingSearch ? (
							<p className="no-results">Loading...</p>
						) : (
							renderSearchResults()
						)}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
