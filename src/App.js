import {
	createBrowserRouter,
	Route,
	RouterProvider,
	Routes,
	useParams,
} from "react-router-dom";

import Home from "./pages/Home/home.component";
import List from "./pages/List/List.component";
import Detail from "./pages/Detail/detail.component";

import "./App.scss";

const router = createBrowserRouter([
	{ path: "*", Component: Root },
	{ path: "/list/:filter", Component: FilteredList },
]);

const App = () => {
	return <RouterProvider router={router} />;
};

function Root() {
	/* @audit-info :
		- search kaya shinigami.id
		- detail
	*/
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/list/:filter?" element={<List />} />
			<Route path="/:id" element={<Detail />} />
		</Routes>
	);
}

function FilteredList() {
	const { filter } = useParams();

	// Extract filter options from the dynamic path
	const [selectedType, selectedGenre, selectedSort, page] = filter.split("-");

	return (
		<List
			selectedType={selectedType}
			selectedGenre={selectedGenre}
			selectedSort={selectedSort}
			currentPage={Number(page)}
		/>
	);
}

export default App;
