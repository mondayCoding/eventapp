import React from 'react';
import { Heading } from '../../Components/Text/Heading';
import { useCustomerEvents } from '../../Queries/useCustomerEvents';
import styled from '../../Theme/theme';
import { CustomerEventType } from '../../MockData/CustomerEventsMockFeed';
import { Icons } from 'library';
import TimeAgo from 'react-timeago';
import { Link } from 'react-router-dom';
import * as routes from '../../Constants/routes';

export const FeedCustomers = () => {
	const { customerEvents } = useCustomerEvents();

	return (
		<div>
			<Heading headingText="CustomerFeed" isUnderlined></Heading>

			{customerEvents.map((event, index) => (
				<FeedItem type="button" key={index}>
					<span className="icon">{eventIcons[event.eventType]}</span>
					<span className="message">{event.message}</span>
					<span className="stamp">
						<TimeAgo date={event.timestamp || ''}></TimeAgo>
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

export const FeedItem = styled.button`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border: none;
	padding: 0.4rem 0;
	cursor: pointer;
	font-size: 0.85rem;
	width: 100%;
	background: none;
	text-align: left;

	& + & {
		border-top: 1px solid #ccc;
	}

	&:focus {
		border: none;
		box-shadow: 0 0 0 2px ${(p) => p.theme.primary_color};
	}

	.icon {
		flex: 0 0 35px;
		display: flex;
		justify-content: center;
		align-items: center;
		/* background: grey; */
		border-radius: 100%;
	}
	.message {
		flex: 1 1 auto;
		color: ${(p) => p.theme.text_color};
	}

	.stamp {
		flex: 0 0 110px;
		text-align: right;
		color: gray;
		font-size: 0.8rem;
	}
`;

export const FeedFooter = styled.footer`
	display: flex;
	justify-content: flex-end;
	padding: 1rem;
	margin-top: 1rem;
	border-top: 1px solid ${(p) => p.theme.separator_color};

	.footer__link {
		color: ${(p) => p.theme.primary_color};
		text-decoration: none;
	}
`;

const Green = styled.span`
	color: ${(p) => p.theme.success_color};
`;

const Blue = styled.span`
	color: ${(p) => p.theme.info_color};
`;

const Orange = styled.span`
	color: ${(p) => p.theme.warning_color};
`;

const Red = styled.span`
	color: ${(p) => p.theme.error_color};
`;

const eventIcons = {
	[CustomerEventType.CancelledRegistrationToEvent]: <Red>{Icons.trashcan}</Red>,
	[CustomerEventType.DataModifiedManually]: <Blue>{Icons.edit}</Blue>,
	[CustomerEventType.ModifiedRegistrationData]: <Blue>{Icons.edit}</Blue>,
	[CustomerEventType.RegisteredToEvent]: <Green>{Icons.plus}</Green>
};
