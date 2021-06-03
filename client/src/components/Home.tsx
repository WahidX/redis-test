import React, { useEffect } from "react";
import { testServer } from "../adapters/testConn";

function Home(props) {
	useEffect(() => {
		testServer();
	}, []);

	return <div>Home Component</div>;
}

export default Home;
