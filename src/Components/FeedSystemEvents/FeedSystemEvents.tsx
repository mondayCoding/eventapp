import React from 'react';
import { Heading } from '../Text/Heading';
import { useSystemEvents } from '../../Queries/useSystemEvents';
import { FeedItem, FeedFooter } from '../FeedCustomers/FeedCustomers';
import * as routes from '../../Constants/Routes';
import Timeago from 'react-timeago';
import { Link } from 'react-router-dom';
import Icons from '../Icons/icons';
import styled from '../../Theme/theme';
import { SystemEventType } from '../../MockData/MockSystemEventFeed';

export const FeedSystemEvents = () => {
	const { systemEvents } = useSystemEvents();
	return (
		<div>
			<Heading text="Järjestelmätapahtumat Feed" isUnderlined>
				<div style={{ display: 'flex', flex: '1 1 auto', justifyContent: 'flex-end' }}>
					{Icons.computer}
				</div>
			</Heading>

			{systemEvents.map((event, index) => (
				<FeedItem to={`${routes.event.path}/${event.id}/frontpage`} key={index}>
					<span className="icon">{eventIcons[event.eventType]}</span>
					<span className="message">{event.message}</span>
					<span className="stamp">
						<Timeago date={event.timestamp || ''}></Timeago>
					</span>
				</FeedItem>
			))}
			<FeedFooter>
				<Link className="footer__link" to={routes.events.path}>
					Katso vanhempia tapahtumia {Icons.arrowRight}
				</Link>
			</FeedFooter>
		</div>
	);
};

const Green = styled.span`
	color: ${(p) => p.theme.success_color};
`;

const Blue = styled.span`
	color: ${(p) => p.theme.info_color};
`;

const Orange = styled.span`
	color: ${(p) => p.theme.warning_color};
`;

// const Red = styled.span`
// 	color: ${(p) => p.theme.error_color};
// `;

const eventIcons = {
	[SystemEventType.AddedCustomer]: <Blue>{Icons.user}</Blue>,
	[SystemEventType.AddedEvent]: <Green>{Icons.clipboard_list}</Green>,
	[SystemEventType.EventStarted]: <Green>{Icons.calendar}</Green>,
	[SystemEventType.EventEnded]: <Orange>{Icons.calendar}</Orange>,
	[SystemEventType.ModifiedCustomer]: <Green>{Icons.pen}</Green>,
	[SystemEventType.ModifiedEvent]: <Green>{Icons.pen}</Green>,
	[SystemEventType.RegistrationEnded]: <Orange>{Icons.calendar}</Orange>,
	[SystemEventType.RegistrationStarted]: <Green>{Icons.calendar}</Green>,
	[SystemEventType.RemovedCustomer]: <Orange>{Icons.user}</Orange>,
	[SystemEventType.RemovedEvent]: <Orange>{Icons.clipboard_list}</Orange>,
	[SystemEventType.SendCertificates]: <Blue>{Icons.file}</Blue>
};
