import * as React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Home from "./Home";
import { AppDataProvider } from "../contexts/appDataContext";

export const App = () => (
	<ChakraProvider theme={theme}>
		<AppDataProvider>
			<Box textAlign="center" fontSize="xl">
				<ColorModeSwitcher justifySelf="flex-end" />
				<Home />
			</Box>
		</AppDataProvider>
	</ChakraProvider>
);
