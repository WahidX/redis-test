import * as React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Home from "./Home";
import { AppDataProvider } from "../contexts/appDataContext";
import HeaderContainer from "./HeaderContainer";

export const App = () => (
	<ChakraProvider theme={theme}>
		<AppDataProvider>
			<Box textAlign="center" fontSize="sm" p="2">
				<HeaderContainer />
				<Home />
			</Box>
		</AppDataProvider>
	</ChakraProvider>
);
