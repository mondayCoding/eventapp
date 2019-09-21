import React from 'react';
import { Heading } from '../Text/Heading';
import { useSystemEvents } from '../../Queries/useSystemEvents';
import { FeedItem, FeedFooter } from '../FeedCustomers/FeedCustomers';
import * as routes from '../../Constants/routes';
import Timeago from 'react-timeago';
import { Link } from 'react-router-dom';
import Icons from '../Icons/icons';

export const FeedSystemEvents = () => {
	const { systemEvents } = useSystemEvents();
	return (
		<div>
			<Heading headingText="Järjestelmätapahtumat Feed" isUnderlined>
				<div style={{ display: 'flex', flex: '1 1 auto', justifyContent: 'flex-end' }}>
					{Icons.computer}
				</div>
			</Heading>

			{systemEvents.map((event, index) => (
				<FeedItem to={`${routes.event.path}/${event.id}`} key={index}>
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
