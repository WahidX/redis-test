import { ColorModeProvider } from "@chakra-ui/color-mode";
import { Flex } from "@chakra-ui/layout";
import React from "react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import SearchBar from "../SearchBar";

function HeaderContainer(props) {
	return (
		<Flex p="2" direction="row" justifyContent="space-evenly">
			<SearchBar />
			<ColorModeSwitcher />
		</Flex>
	);
}

export default HeaderContainer;
