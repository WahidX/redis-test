export interface environmentInterface {
	name: string;
	file_path: string;
	hashkey: string;
	expire_time: number;
	should_flush_redis: boolean;
}
