import { useState } from "react";
import Dropdown from "../dropdown/dropdown.component";
import "./filter.style.scss";
import Button from "../button/button.component";
import { ReactComponent as FilterIcon } from "../../assets/icons/Filter.svg";

const Filter = () => {
	const types = ["Movie", "TV Serial"];
	const genres = ["Action", "Adventure", "Comedy", "Drama", "Fantasy"];
	const sort = ["Popular", "Top rated", "Now Playing", "Upcoming"];

	const [selectedType, setSelectedType] = useState("");
	const [selectedGenre, setSelectedGenre] = useState("");
	const [selectedSort, setSelectedSort] = useState("");

	const handleTypeSelect = (type) => {
		setSelectedType(type);
	};

	const handleGenreSelect = (genre) => {
		setSelectedGenre(genre);
	};

	const handleSortSelect = (sort) => {
		setSelectedSort(sort);
	};

	const handelFilterResult = (filter) => {
		//api
	};

	return (
		<div className="filter">
			<h1>Filter Results</h1>
			<div className="filterList">
				<Dropdown label="Type" options={types} onSelect={handleTypeSelect} />

				<Dropdown
					label="Genre"
					options={genres}
					onSelect={handleGenreSelect}
					isNull
				/>

				<Dropdown label="Sort" options={sort} onSelect={handleSortSelect} />

				<Button id="btnFilter" onClick={handelFilterResult}>
					<FilterIcon className="filterIcon" />
					Filter
				</Button>
			</div>
		</div>
	);
};

export default Filter;
