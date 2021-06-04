import axios from "axios";
import React from "react";
import urls from "../utils/urls";

// For testing connection with server
export let fetchDataAdapter = async (offset: number, total: number, setAppData: Function) => {
	try {
		let response = await axios.get(urls.fetchData(offset, total));
		console.log("DATA : ", response.data);

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
