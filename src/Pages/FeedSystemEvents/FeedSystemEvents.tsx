import React from 'react';
import { Heading } from '../../Components/Text/Heading';
import { useEvents } from '../../Queries/useEvents';
import { FeedItem, FeedFooter } from '../FeedCustomers/FeedCustomers';
import { Icons } from 'library';
import * as routes from '../../Constants/routes';

import Timeago from 'react-timeago';
import { Link } from 'react-router-dom';

export const FeedSystemEvents = () => {
	const { systemEvents } = useEvents();
	return (
		<div>
			<Heading headingText="System Event Feed" isUnderlined></Heading>

			{systemEvents.map((event, index) => (
				<FeedItem type="button" key={index}>
					<span className="icon">{Icons.spinner}</span>
					<span className="message">{event.message}</span>
					<span className="stamp">
						<Timeago date={event.timestamp || ''}></Timeago>
					</span>
				</FeedItem>
			))}
			<FeedFooter>
				<Link className="footer__link" to={routes.dashboard.path}>
					Katso vanhempia tapahtumia {Icons.arrowRight}
				</Link>
			</FeedFooter>
		</div>
	);
};
