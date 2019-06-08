import { useState, useEffect } from 'react';
import axios from 'axios';
import { ICollectionItem } from '../Interfaces';

const route = '/collections';

const useCollection = () => {
	const [collection, setCollection] = useState([] as ICollectionItem[]);
	const [isLoading, setIsloading] = useState(true);

	useEffect(() => {
		axios.get(route).then(
			(response) => {
				setCollection(response.data);
				setIsloading(false);
			},
			(fail) => {
				setCollection(MOCKDATA);
				setIsloading(false);
			}
		);
	}, []);

	return { collection, isLoading };
};

const MOCKDATA: ICollectionItem[] = [];

export { useCollection };
