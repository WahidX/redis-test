import axios from "axios";
import urls from "../utils/urls";

export let searchDataAdapter = async (key: string, total: number, setAppData: Function) => {
	try {
		let response = await axios.get(urls.searchData(key, total));
		console.log("RESULTS : ", response.data);

		setAppData((prev) => {
			return {
				...prev,
				results: response.data.rows,
			};
		});
	} catch (err) {
		setAppData((prev) => {
			return {
				...prev,
				error: err,
			};
		});
		console.log("Error: ", err);
	}
};
