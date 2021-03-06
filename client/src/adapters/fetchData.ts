import axios from "axios";
import urls from "../utils/urls";

export let fetchDataAdapter = async (offset: number, total: number, setAppData: Function) => {
	try {
		let response = await axios.get(urls.fetchData(offset, total));

		setAppData((prev) => {
			return {
				...prev,
				rows: response.data.rows,
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
