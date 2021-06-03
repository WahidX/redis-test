import axios from "axios";
import urls from "../utils/urls";

// For testing connection with server
export let testServer = async () => {
	try {
		let response = await axios.get(urls.serverConnectionTest());
		console.log(response.data);
	} catch (err) {
		console.log("Error: ", err);
	}
};
