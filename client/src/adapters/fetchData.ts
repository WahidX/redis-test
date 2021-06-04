import axios from "axios";
import urls from "../utils/urls";

// For testing connection with server
export let fetchDataAdapter = async (offset: number, total: number) => {
	try {
		let response = await axios.get(urls.fetchData(offset, total));
		console.log("DATA : ", response.data);
	} catch (err) {
		console.log("Error: ", err);
	}
};
