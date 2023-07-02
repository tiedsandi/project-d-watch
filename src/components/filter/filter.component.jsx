import { useEffect, useState } from "react";
import Dropdown from "../dropdown/dropdown.component";
import "./filter.style.scss";
import Button from "../button/button.component";
import { ReactComponent as FilterIcon } from "../../assets/icons/Filter.svg";
import { useDispatch } from "react-redux";
import { fetchDataStartAsync } from "../../store/dataApi/dataApi.action";

const Filter = () => {
	const dispatch = useDispatch();

	const types = ["movie", "tv"];
	const genres = ["Action", "Adventure", "Comedy", "Drama", "Fantasy"];
	const sortMV = ["Popular", "Top rated", "Now Playing", "Upcoming"];
	const sortTV = ["Popular", "Top rated", "On The Air", "Airing Today"];

	const [selectedType, setSelectedType] = useState("movie");
	const [selectedGenre, setSelectedGenre] = useState("");
	const [selectedSort, setSelectedSort] = useState("Popular");
	const [sortOptions, setSortOptions] = useState(sortMV);

	useEffect(() => {
		// Update opsi pada label "Sort" berdasarkan nilai jenis yang dipilih
		if (selectedType === "movie") {
			setSortOptions(sortMV);
		} else if (selectedType === "tv") {
			setSortOptions(sortTV);
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

	const handelFilterResult = () => {
		console.log(selectedGenre);
		dispatch(fetchDataStartAsync(selectedType, 1, selectedSort));
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

				<Dropdown
					label="Sort"
					options={sortOptions}
					onSelect={handleSortSelect}
				/>

				<Button id="btnFilter" onClick={handelFilterResult}>
					<FilterIcon className="filterIcon" />
					Filter
				</Button>
			</div>
		</div>
	);
};

export default Filter;
