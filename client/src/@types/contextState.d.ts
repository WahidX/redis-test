export interface contextStateInterface {
	rows: string[];
	page: number;
	total: number;
	loading: boolean;
	error: string;

	// dispatch: ({ type }: { type: string }) => void;
}
