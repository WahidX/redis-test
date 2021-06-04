import { Button } from "@chakra-ui/button";
import { Flex, Heading } from "@chakra-ui/layout";
import { Box, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { testServer } from "../adapters/testConn";
import TableContainer from "./TableContainer";

function Home(props) {
	useEffect(() => {
		testServer();
	}, []);

	return (
		<div>
			<Heading>Table Datas</Heading>
			<TableContainer rows={[]} />

			<Flex direction="row" align="center" justifyContent="center">
				<Button>{"< "}</Button>
				<Text>Page Number</Text>
				<Button>{" >"}</Button>
			</Flex>
		</div>
	);
}

export default Home;
