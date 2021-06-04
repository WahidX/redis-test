import React from "react";
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, Button } from "@chakra-ui/react";
import { headers, indexesToInclude } from "../../utils/headers";

function TableContainer(props) {
	let rows: string[] = props.rows;

	return (
		<Table variant="simple">
			<Thead>
				<Tr>
					{headers.map((header) => (
						<Th>{header}</Th>
					))}
				</Tr>
			</Thead>

			<Tbody>
				{rows.map((row) => {
					let fields = row.split(",");
					return (
						<Tr>
							{fields.map((field, index) => {
								{
									indexesToInclude.includes(index) && <td>{field}</td>;
								}
							})}
						</Tr>
					);
				})}
			</Tbody>
		</Table>
	);
}

export default TableContainer;
