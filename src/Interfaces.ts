export interface ICollectionItem {
	id: string;
	name: string;
	created: number;
	description: string;
	marketValue: number;
	images: string[];
	tags: ITag[];
}

export interface ITag {
	name: string;
	id: string;
}
