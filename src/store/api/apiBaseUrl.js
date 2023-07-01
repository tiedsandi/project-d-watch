import axios from "axios";

export default axios.create({
	baseURL: "https://api.themoviedb.org/3/",
	timeout: 5000,
	headers: {
		"Content-Type": "application/json",
		// Authorization: "Bearer your_token",
	},
});
