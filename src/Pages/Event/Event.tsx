import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router';
import styled from '../../Theme/theme';
import { Formik } from 'formik';
import { Heading } from '../../Components/Text/Heading';
import Icons from '../../Components/Icons/icons';
import { TextField } from '../../Components/TextInput/Textinput';
import { SelectField } from 'library';
import { useEvents } from '../../Queries/useEvents';
import { IEvent } from '../../MockData/MockEvents';
import { StatCard } from '../Dashboard/StatusCard';
import { CardWrapper } from '../MyCollection/MyCollection';
import { EventTagType, EventTag } from '../../MockData/EventTags';
import { TextAreaField } from '../../Components/TextArea/TextArea';
import { BadgeTag } from '../Events/BadgeTag';
import { useTabState, TabList, Tab, TabPanel } from 'reakit/Tab';
import { CustomerItem } from '../Customers/Customers';
import { MockCustomers } from '../../MockData/MockCustomers';
import * as routes from '../../Constants/routes';
import ReactTimeago from 'react-timeago';

interface routeprops {
	id: string;
}

export const Event: FC<RouteComponentProps<routeprops>> = ({ match }) => {
	const { events } = useEvents();
	const event = events.find((event) => event.id === match.params.id);

	return (
		<>
			<EventSettings event={event}></EventSettings>
		</>
	);
};

const EventSettings: FC<{ event?: IEvent }> = ({ event }) => {
	const tab = useTabState({ selectedId: 'tab2' });

	return (
		<>
			<TabList as={TabTheme} {...tab} aria-label="My tabs">
				<Tab {...tab} stopId="tab2" className="tab-button">
					Etusivu
				</Tab>
				<Tab {...tab} stopId="tab1" className="tab-button">
					Perustiedot
				</Tab>
				<Tab {...tab} stopId="tab3" className="tab-button">
					Osallistujat / Kutsutut
				</Tab>
				<Tab {...tab} stopId="tab4" className="tab-button">
					Ilmoittautuminen
				</Tab>
			</TabList>

			<TabPanel {...tab} stopId="tab1">
				<EventCard>
					<div className="card__heading">
						<Heading text="Tapahtuman tiedot" isUnderlined></Heading>
					</div>
					<div className="row">
						<div className="col-md-8">
							<EventForm event={event!} />
						</div>
						<div className="col-md-4">
							<img
								className="card__body__avatar__img"
								src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
							/>
						</div>
					</div>
				</EventCard>
			</TabPanel>

			<TabPanel {...tab} stopId="tab2">
				<EventCard>
					<Heading
						text={event ? `${event.name}` : ''}
						ingress={event && event.description}
						isUnderlined
					></Heading>
					<div>{event && event.tags && renderTags(event.tags)}</div>

					<div className="card__footer">
						<span className="card__footer__tag">
							{Icons.calendar} Created:{' '}
							{new Date(2017, 3, 2, 10, 8).toLocaleString('fi-FI')}
						</span>
						<span className="card__footer__tag">
							{Icons.calendar} Last Modified:{' '}
							{new Date(2019, 8, 12, 12, 12).toLocaleString('fi-FI')}
						</span>
					</div>
				</EventCard>

				<div className="row">
					<div className="col-lg-4">
						<StatCard
							value={'12 930, 90 €'}
							icon={Icons.dollar}
							text="Tulot"
							footer="Päivitä nyt"
							footerIcon={Icons.undo}
						></StatCard>
					</div>
					<div className="col-lg-4">
						<StatCard
							value={'10013'}
							icon={<span style={{ color: 'lightsalmon' }}>{Icons.users}</span>}
							text="Ilmoittautuneita"
							footer="Päivitä nyt"
							footerIcon={Icons.undo}
						></StatCard>
					</div>
					<div className="col-lg-4">
						<StatCard
							value={'428'}
							icon={<span style={{ color: 'lightseagreen' }}>{Icons.envelope}</span>}
							text="Avattuja viestejä"
							footer="Päivitä nyt"
							footerIcon={Icons.undo}
						></StatCard>
					</div>
				</div>

				<div className="row">
					<div className="col-lg-4">
						<StatCard
							value={'12 930, 90 €'}
							icon={Icons.dollar}
							text="Menot"
							footer="Päivitä nyt"
							footerIcon={Icons.undo}
						></StatCard>
					</div>
					<div className="col-lg-4">
						<StatCard
							value={'10013'}
							icon={<span style={{ color: 'lightsalmon' }}>{Icons.users}</span>}
							text="Kutsuttuja"
							footer="Päivitä nyt"
							footerIcon={Icons.undo}
						></StatCard>
					</div>
					<div className="col-lg-4">
						<StatCard
							value={'796'}
							icon={<span style={{ color: 'lightseagreen' }}>{Icons.envelope}</span>}
							text="Kutsuttuja"
							footer="Päivitä nyt"
							footerIcon={Icons.undo}
						></StatCard>
					</div>
				</div>

				<div className="row">
					<div className="col-lg-4">
						<StatCard
							value={'12 930, 90 €'}
							icon={Icons.dollar}
							text="Saatavat"
							footer="Päivitä nyt"
							footerIcon={Icons.undo}
						></StatCard>
					</div>
					<div className="col-lg-4">
						<StatCard
							value={'10013'}
							icon={<span style={{ color: 'lightsalmon' }}>{Icons.users}</span>}
							text="Ilmoittautuneita"
							footer="Päivitä nyt"
							footerIcon={Icons.undo}
						></StatCard>
					</div>
					<div className="col-lg-4">
						<StatCard
							value={'796'}
							icon={<span style={{ color: 'lightseagreen' }}>{Icons.envelope}</span>}
							text="Läheteettyjä viestejä"
							footer="Päivitä nyt"
							footerIcon={Icons.undo}
						></StatCard>
					</div>
				</div>
			</TabPanel>

			<TabPanel {...tab} stopId="tab3">
				<Participants></Participants>
				<Invitees></Invitees>
			</TabPanel>

			<TabPanel {...tab} stopId="tab4">
				<Registrations></Registrations>
			</TabPanel>
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

const Registrations = () => {
	const registrationsList = [
		{
			name: 'Ilmoittautumislomake Syyskuu 2019',
			start: new Date(2019, 8, 1),
			end: new Date(2019, 9, 1),
			id: 1
		},
		{
			name: 'Ilmoittautumislomake Lokakuu 2019',
			start: new Date(2019, 9, 1),
			end: new Date(2019, 10, 1),
			id: 2
		},
		{
			name: 'Ilmoittautumislomake Marraskuu 2019',
			start: new Date(2019, 10, 1),
			end: new Date(2019, 11, 1),
			id: 3
		},
		{
			name: 'Ilmoittautumislomake Joulukuu 2019',
			start: new Date(2019, 11, 1),
			end: new Date(2020, 1, 1),
			id: 4
		}
	];
	return (
		<>
			<CardWrapper>
				<Heading
					text="Ilmoittautumiset"
					ingress="Täällä voit tarkastella ja muokata tapahtuman ilmoittautumislomakkeita ja niiden aikatauluja"
					isUnderlined
				></Heading>

				{registrationsList.map((reg) => (
					<CustomerItem key={reg.id} to={`${routes.customer.path}/${reg.id}`}>
						<span className="customer__icon">{Icons.clipboard_list}</span>
						<span className="customer__name">{reg.name}</span>
						<span className="customer__city">
							<ReactTimeago date={reg.start} />
						</span>
						<span className="customer__city">
							<ReactTimeago date={reg.end} />
						</span>
					</CustomerItem>
				))}
			</CardWrapper>

			<div className="row">
				<div className="col-lg-4">
					<StatCard
						value={'3'}
						icon={Icons.clipboard_list}
						text="Avoimia lomakkeita"
						footer="Päivitä nyt"
						footerIcon={Icons.undo}
					></StatCard>
				</div>
				<div className="col-lg-4">
					<StatCard
						value={'5'}
						icon={<span style={{ color: 'lightsalmon' }}>{Icons.check_circle}</span>}
						text="Sulkeutuneita lomakkeita"
						footer="Päivitä nyt"
						footerIcon={Icons.undo}
					></StatCard>
				</div>
				<div className="col-lg-4">
					<StatCard
						value={'6'}
						icon={<span style={{ color: 'lightseagreen' }}>{Icons.info_circle}</span>}
						text="Aukeavia lomakkeita"
						footer="Päivitä nyt"
						footerIcon={Icons.undo}
					></StatCard>
				</div>
			</div>
		</>
	);
};

const TabTheme = styled.div`
	display: flex;

	.tab-button {
		flex: 1 1 33.33333%;
		border: none;
		padding: 0.25rem 0.5rem;
		color: #fff;
		transition: background-color 0.2s ease-in-out;
		background: ${(p) => p.theme.menu_background_color};
		margin-bottom: 1rem;

		&[aria-selected='true'] {
			background: ${(p) => p.theme.primary_color};
			color: #fff;
		}

		&:not(last-child) {
			border-right: 1px solid gray;
		}

		&:last-child {
			border-radius: 0 0.5rem 0.5rem 0;
		}

		&:first-child {
			border-radius: 0.5rem 0 0 0.5rem;
		}
	}
`;

const EventForm: FC<{ event?: IEvent }> = (props) => (
	<Formik
		onSubmit={() => {}}
		initialValues={props.event || initialValues}
		enableReinitialize
	>
		{() => (
			<>
				<TextField name="name" label="Nimi" />
				<TextAreaField name="description" label="Kuvaus" />
				<TextField name="location" label="Sijainti" />

				<SelectField
					name="city"
					label="Kaupunki"
					options={[
						{ label: 'Turku', value: '62000' },
						{ label: 'Muuninka', value: '41002' },
						{ label: 'Helsinki', value: '79100' },
						{ label: 'Sipoo', value: '84200' }
					]}
				/>

				<TextField name="address" label="Osoite" />
				<TextField name="city" label="Postinumero" />
				<TextField name="department" label="Osasto" />
			</>
		)}
	</Formik>
);

const renderTags = (tags: EventTagType[]) =>
	tags.map((tag) => {
		const current = EventTag[tag];
		return current ? (
			<BadgeTag
				name={current.name}
				icon={current.icon}
				description={current.description}
			/>
		) : (
			new Error(`Uknown Event Tag Type: ${tag}`)
		);
	});

const initialValues: IEvent = {
	id: '123',
	description: '',
	name: '',
	created: new Date(),
	location: '',
	start: new Date(),
	end: new Date(),
	tags: []
};

const EventCard = styled.section`
	padding: 1.5rem;
	display: flex;
	flex-direction: column;
	background-color: ${(p) => p.theme.card_background_color};
	font-family: ${(p) => p.theme.body_font};
	box-shadow: 2px 7px 10px -4px rgba(0, 0, 0, 0.15);
	margin-bottom: 1.5rem;

	.card__body__avatar__img {
		max-width: 100%;
		display: block;
	}

	.card__footer {
		margin-top: 1rem;
		padding-top: 1rem;
		border-top: 1px solid lightgray;

		&__tag {
			padding-right: 1rem;
			color: gray;
		}
	}
`;
