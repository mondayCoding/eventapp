import React, { FC } from 'react';
import { Heading } from '../../Components/Text/Heading';
import Icons from '../../Components/Icons/icons';
import { IEvent } from '../../MockData/MockEvents';
import { CardWrapper } from '../Dashboard/CardWrapper';
import { CustomerItem } from '../Customers/Customers';
import { MockCustomers } from '../../MockData/MockCustomers';
import * as routes from '../../Constants/Routes';

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
