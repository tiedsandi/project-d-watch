import { useEffect, useState } from "react";
import Dropdown from "../dropdown/dropdown.component";
import "./filter.style.scss";
import Button from "../button/button.component";
import { ReactComponent as FilterIcon } from "../../assets/icons/Filter.svg";

const Filter = ({
	selectedType,
	setSelectedType,
	selectedGenre,
	setSelectedGenre,
	selectedSort,
	setSelectedSort,
	applyFilter,
}) => {
	const types = ["movie", "tv"];
	const genresMV = [
		"All",
		"Action",
		"Adventure",
		"Animation",
		"Comedy",
		"Drama",
		"Family",
		"Fantasy",
		"Horror",
		"Mystery",
		"Romance",
		"Science Fiction",
	];
	const genresTV = [
		"All",
		"Action & Adventure",
		"Animation",
		"Crime",
		"Comedy",
		"Drama",
		"Family",
		"Kids",
		"Mystery",
		"Reality",
		"Sci-Fi & Fantasy",
		"War & Politic",
	];
	const sortMV = ["Popular", "Top rated", "Now Playing", "Upcoming"];
	const sortTV = ["Popular", "Top rated", "On The Air", "Airing Today"];

	const [sortOptions, setSortOptions] = useState(sortMV);
	const [genresOptions, setGenresOptions] = useState(genresMV);

	useEffect(() => {
		if (selectedType === "movie") {
			setSortOptions(sortMV);
			setGenresOptions(genresMV);
			setSelectedSort(sortMV[0]);
			setSelectedGenre(genresMV[0]);
		} else if (selectedType === "tv") {
			setSortOptions(sortTV);
			setGenresOptions(genresTV);
			setSelectedSort(sortTV[0]);
			setSelectedGenre(genresTV[0]);
		}
	}, [selectedType]);

	const handleTypeSelect = (type) => {
		setSelectedType(type);
	};

	const handleGenreSelect = (genre) => {
		setSelectedGenre(genre);
	};

	const handleSortSelect = (sort) => {
		setSelectedSort(sort);
	};

	return (
		<div className="filter">
			<h1>Filter Results</h1>
			<div className="filterList">
				<Dropdown
					label="Type"
					options={types}
					onSelect={handleTypeSelect}
					selectedOption={selectedType}
				/>

				<Dropdown
					label="Genre"
					options={genresOptions}
					onSelect={handleGenreSelect}
					selectedOption={selectedGenre}
				/>

				<Dropdown
					label="Sort"
					options={sortOptions}
					onSelect={handleSortSelect}
					selectedOption={selectedSort}
				/>

				<Button id="btnFilter" onClick={applyFilter}>
					<FilterIcon className="filterIcon" />
					Filter
				</Button>
			</div>
		</div>
	);
};

export default Filter;
