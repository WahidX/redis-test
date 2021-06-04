import React from "react";
import { Table, Thead, Tbody, Tr, Td, Th } from "@chakra-ui/react";
import { headers } from "../../utils/headers";

function TableContainer(props) {
	let rows: string[] = props.rows;

	console.log("ROWS::", rows);
	let processedRows = rows.map((row) => {
		let fields = row.split(",");
		fields.splice(6, 6);
		return fields;
	});

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
				{processedRows.map((row) => (
					<Tr>
						{row.map((field) => (
							<Td>{field}</Td>
						))}
					</Tr>
				))}
			</Tbody>
		</Table>
	);
}

export default TableContainer;
