import React, { createContext, useState, FC } from "react";
import { contextStateInterface } from "../@types/contextState";

const defaultContextState: contextStateInterface = {
	rows: [],
	page: 1,
	total: 10,
	loading: false,
	error: "",
	// dispatch:
};

export const AppDataContext = React.createContext<contextStateInterface>(defaultContextState);

export const AppDataProvider = ({ children }) => {
	const [appData, setAppData] = useState({ ...defaultContextState });

	return (
		<AppDataContext.Provider value={[appData, setAppData]}>{children}</AppDataContext.Provider>
	);
};
