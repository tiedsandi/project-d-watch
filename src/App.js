import {
	createBrowserRouter,
	Route,
	RouterProvider,
	Routes
} from "react-router-dom";

import Home from "./pages/Home/home.component";
import List from "./pages/List/List.component";
import Detail from "./pages/Detail/detail.component";

import "./App.scss";

const router = createBrowserRouter([{ path: "*", Component: Root }]);

const App = () => {
	return <RouterProvider router={router} />;
};

function Root() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/list" element={<List />} />
			<Route path="/list/:id" element={<Detail />} />
		</Routes>
	);
}

export default App;
