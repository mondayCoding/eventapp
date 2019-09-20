import { ICollectionItem } from '../../Interfaces';

export enum sortCondition {
	NAME = 1,
	MARKETVALUE = 2,
	CREATED = 3
}

export enum sortDirection {
	ASCENDING = 1,
	DESCENDING = 2
}

export const sortCollectionBy = (
	collection: ICollectionItem[],
	condition: sortCondition,
	direction: sortDirection
): ICollectionItem[] => {
	switch (condition) {
		case sortCondition.NAME:
			return collection.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));

		case sortCondition.MARKETVALUE:
			return collection.sort((a, b) =>
				a.marketValue > b.marketValue ? 1 : b.marketValue > a.marketValue ? -1 : 0
			);

		case sortCondition.CREATED:
			return collection.sort((a, b) =>
				a.created > b.created ? 1 : b.created > a.created ? -1 : 0
			);

		default:
			return collection;
	}
};
