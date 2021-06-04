import { Input, InputGroup } from "@chakra-ui/input";
import { Button, FormControl, IconButton, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { debounce } from "lodash";

import React, { useState } from "react";

function SearchBar(props) {
	const [searchkey, setSearchKey] = useState("");

	let searchHandle = () => {
		console.log(searchkey);
	};

	let debouncedSearch = debounce(searchHandle, 300);

	return (
		<FormControl width="100%">
			<InputGroup>
				<Input
					placeholder="Search Symbols here"
					variant="filled"
					value={searchkey}
					onKeyUp={debouncedSearch}
					onChange={(e) => setSearchKey(e.target.value)}
				/>
				<InputLeftElement children={<SearchIcon />} />
				<IconButton aria-label="search-btn" onClick={debouncedSearch}>
					<SearchIcon />
				</IconButton>
			</InputGroup>
		</FormControl>
	);
}

export default SearchBar;
