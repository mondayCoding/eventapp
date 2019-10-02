import React from 'react';
import { Heading } from '../Text/Heading';
import { useCustomerEvents } from '../../Queries/useCustomerEvents';
import styled from '../../Theme/theme';
import { CustomerEventType } from '../../MockData/MockCustomerEventFeed';
import TimeAgo from 'react-timeago';
import { Link } from 'react-router-dom';
import * as routes from '../../Constants/Routes';
import Icons from '../Icons/icons';
import { transparentize } from 'polished';

export const FeedCustomers = () => {
	const { customerEvents } = useCustomerEvents();

	return (
		<div>
			<Heading text="Asiakastapahtumat Feed" isUnderlined>
				<div style={{ display: 'flex', flex: '1 1 auto', justifyContent: 'flex-end' }}>
					{Icons.users}
				</div>
			</Heading>

			{customerEvents.map((customer, index) => (
				<FeedItem key={index} to={`${routes.customer.path}/${customer.id}`}>
					<span className="icon">{eventIcons[customer.eventType]}</span>
					<span className="message">{customer.message}</span>
					<span className="stamp">
						<TimeAgo date={customer.timestamp || ''}></TimeAgo>
					</span>
				</FeedItem>
			))}
			<FeedFooter>
				<Link className="footer__link" to={routes.customers.path}>
					Katso vanhempia tapahtumia {Icons.arrowRight}
				</Link>
			</FeedFooter>
		</div>
	);
};

export const FeedItem = styled(Link)`
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
	text-decoration: none;

	& + & {
		border-top: 1px solid ${(p) => transparentize(0.33, p.theme.border_color)};
	}

	&:hover {
		text-decoration: none;
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
		border-radius: 100%;
	}
	.message {
		flex: 1 1 auto;
		color: ${(p) => p.theme.text_color};
	}

	.stamp {
		flex: 0 0 118px;
		text-align: right;
		color: gray;
		font-size: 0.8rem;
	}

	&:hover {
		.message {
			flex: 1 1 auto;
			color: ${(p) => p.theme.primary_color};
		}
	}
`;

export const FeedFooter = styled.footer`
	display: flex;
	justify-content: flex-end;
	padding: 1rem;
	margin-top: 1rem;
	border-top: 1px solid ${(p) => p.theme.border_color};

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

const Red = styled.span`
	color: ${(p) => p.theme.error_color};
`;

const eventIcons = {
	[CustomerEventType.CancelledRegistrationToEvent]: <Red>{Icons.trashcan}</Red>,
	[CustomerEventType.DataModifiedManually]: <Blue>{Icons.edit}</Blue>,
	[CustomerEventType.ModifiedRegistrationData]: <Blue>{Icons.edit}</Blue>,
	[CustomerEventType.RegisteredToEvent]: <Green>{Icons.plus}</Green>
};
