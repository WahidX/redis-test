// const base_url = "";
// const base_frontend = "";

const base_url = "http://localhost:8000/api/v1";
const base_frontend = "http://localhost:3000";

let urls = {
	serverConnectionTest: () => `${base_url}/`,
	fetchData: (offset: number, total: number) => `${base_url}/data?offset=${offset}&total=${total}`,
};

export default urls;
