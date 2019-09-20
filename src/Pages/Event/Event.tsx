import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router';

interface routeprops {
	id: string;
}

export const Event: FC<RouteComponentProps<routeprops>> = ({ match }) => {
	return <div>Event with Id of {match.params.id}</div>;
};
