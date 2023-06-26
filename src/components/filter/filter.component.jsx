import { useState } from "react";
import Dropdown from "../dropdown/dropdown.component";
import "./filter.style.scss";
import Button from "../button/button.component";
import { ReactComponent as FilterIcon } from "../../assets/icons/Filter.svg";

const Filter = () => {
	const genres = ["Action", "Adventure", "Comedy", "Drama", "Fantasy"];
	const types = ["Movie", "TV Serial"];
	const sort = ["Latest Update", "Most Watched", "A - Z"];

	const [selectedGenre, setSelectedGenre] = useState("");
	const [selectedType, setSelectedType] = useState("");
	const [selectedSort, setSelectedSort] = useState("");

	const handleGenreSelect = (genre) => {
		setSelectedGenre(genre);
	};

	const handleTypeSelect = (type) => {
		setSelectedType(type);
	};

	const handleSortSelect = (type) => {
		setSelectedSort(type);
	};

	return (
		<div className="filter">
			<h1>Filter Results</h1>
			<div className="filterList">
				<Dropdown label="Genre" options={genres} onSelect={handleGenreSelect} />

				<Dropdown label="Type" options={types} onSelect={handleTypeSelect} />

				<Dropdown label="Sort" options={sort} onSelect={handleSortSelect} />

				<Button id="btnFilter">
					<FilterIcon className="filterIcon" />
					Filter
				</Button>
			</div>
		</div>
	);
};

export default Filter;
