import React, { FC } from 'react';
import { Heading } from '../../Components/Text/Heading';
import Icons from '../../Components/Icons/icons';
import { IEvent } from '../../MockData/MockEvents';
import { CardWrapper } from '../Dashboard/CardWrapper';
import { MockCustomers } from '../../MockData/MockCustomers';
import * as routes from '../../Constants/Routes_MODIF';
import styled from '../../Theme/theme';
import { Link } from 'react-router-dom';

export const CustomerLists: FC<{ event?: IEvent }> = ({ event }) => {
	return (
		<>
			<Participants></Participants>
			<Invitees></Invitees>
		</>
	);
};

const Participants = () => (
	<CardWrapper>
		<Heading
			text="Osallistujat"
			ingress="Asiakkat jotka ovat ilmoittaneet osallistuvansa tapahtumaan"
			isUnderlined
		></Heading>

		{MockCustomers.map((customer) => (
			<CustomerItem key={customer.id} to={`${routes.customer.path}/${customer.id}`}>
				<span className="customer__icon">{Icons.user}</span>
				<span className="customer__name">{`${customer.firstname} ${customer.lastname}`}</span>
				<span className="customer__email">{`${customer.email}`}</span>
				<span className="customer__city">{`${customer.city}`}</span>
			</CustomerItem>
		))}
	</CardWrapper>
);

const Invitees = () => (
	<CardWrapper>
		<Heading
			text="Kutsutut"
			ingress="Asiakkat joille on lähetetty kutsu tapahtumaan"
			isUnderlined
		></Heading>

		{MockCustomers.map((customer) => (
			<CustomerItem key={customer.id} to={`${routes.customer.path}/${customer.id}`}>
				<span className="customer__icon">{Icons.user}</span>
				<span className="customer__name">{`${customer.firstname} ${customer.lastname}`}</span>
				<span className="customer__email">{`${customer.email}`}</span>
				<span className="customer__city">{`${customer.city}`}</span>
			</CustomerItem>
		))}
	</CardWrapper>
);

export const CustomerItem = styled(Link)`
	display: flex;
	justify-content: space-between;
	color: ${(p) => p.theme.primary_color};
	align-items: center;
	border: none;
	padding: 0.25rem 0.5rem;
	cursor: pointer;
	font-size: 0.85rem;
	width: 100%;
	background: none;
	text-align: left;
	text-decoration: none;

	&&:hover {
		color: ${(p) => p.theme.secondary_color};
		background: #ccc;
	}

	&:nth-child(odd) {
		background: ${(p) => p.theme.body_background_color};
	}

	& + & {
		/* border-top: 1px solid #ccc; */
	}

	&:focus {
		border: none;
		box-shadow: 0 0 0 2px ${(p) => p.theme.primary_color};
	}

	.customer__icon {
		flex: 0 0 22px;
		height: 22px;
		display: flex;
		justify-content: center;
		align-items: center;
		background: grey;
		border-radius: 100%;
		color: #fff;
	}
	.customer__mail {
		flex: 0 0 22px;
		height: 22px;
		margin-left: 0.5rem;
		display: flex;
		justify-content: center;
		align-items: center;
		background: grey;
		border-radius: 100%;
		color: #fff;
	}
	.customer__name {
		flex: 1 1 auto;
		padding-left: 1rem;
		color: ${(p) => p.theme.text_color};
	}
	.customer__email {
		flex: 0 0 35%;
		padding-left: 1rem;
		text-align: left;
	}
	.customer__city {
		flex: 0 0 20%;
		padding-left: 1rem;
	}
`;
