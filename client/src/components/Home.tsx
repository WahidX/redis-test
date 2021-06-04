import { Button } from "@chakra-ui/button";
import { Flex, Heading } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { fetchDataAdapter } from "../adapters/fetchData";
import TableContainer from "./TableContainer";
import { AppDataContext } from "../contexts/appDataContext";

function Home(props) {
	const [appData, setAppData] = useContext(AppDataContext);

	console.log("STATE::", appData);

	useEffect(() => {
		fetchDataAdapter((appData.page - 1) * appData.total, appData.total, setAppData);
	}, [appData.page]);

	return (
		<div>
			<Heading>Table Data</Heading>
			<TableContainer rows={appData.rows} />

			<Flex direction="row" align="center" justifyContent="center" m="2">
				<Button m="4">{"<"}</Button>
				<Text fontSize="md">{appData.page}</Text>
				<Button m="4">{">"}</Button>
			</Flex>
		</div>
	);
}

export default Home;
