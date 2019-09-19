import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router';

export const Collectable: FC<RouteComponentProps<{ id: string }>> = ({ match }) => {
	console.log(match);
	return <div>CollectionItemPage for item with Id of {match.params.id}</div>;
};
