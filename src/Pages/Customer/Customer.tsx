import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router';
import styled from '../../Theme/theme';
import { Formik } from 'formik';
import { Heading } from '../../Components/Text/Heading';
import Icons from '../../Components/Icons/icons';
import { TextField } from '../../Components/TextInput/Textinput';
import { useCustomers } from '../../Queries/useCustomers';
import { ICustomer } from '../../MockData/MockCustomers';
import { SelectField } from 'library';

import { CustomerTagType, CustomerTag } from '../../Constants/CustomerTags';
import ReactTimeago from 'react-timeago';
import 'bootstrap/dist/css/bootstrap.css';
import { BadgeTag } from '../Dashboard/BadgeTag';
import { PageFooter } from '../../Layout/MainFooter';
import { useDocumentTitle } from '../../Data/useDocumentTitle';

interface routeprops {
	id: string;
}

export const Customer: FC<RouteComponentProps<routeprops>> = ({ match }) => {
	useDocumentTitle('Asiakas');
	const { customers } = useCustomers();
	const customer = customers.find((cust) => cust.id === match.params.id);

	return (
		<>
			<CustomerCard>
				<div className="card__heading">
					<Heading
						text={customer ? `${customer.firstname} ${customer.lastname}` : ''}
						isUnderlined
					></Heading>
					{customer && customer.tags && renderTags(customer.tags)}
				</div>
				<div className="card__body">
					<div className="card__body__avatar">
						<img
							className="card__body__avatar__img"
							src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
						/>
					</div>
					<div className="card__body__content">
						<CustomerForm customer={customer!} />
					</div>
				</div>

				<Heading text="Osallistumiset" isUnderlined></Heading>
				<Participations
					date={new Date(2017, 8, 11)}
					name="Ensiapu koulutus 101"
				></Participations>
				<Participations
					date={new Date(2018, 1, 19)}
					name="Markkinoinnin perusteet"
				></Participations>
				<Participations
					date={new Date(2019, 7, 24)}
					name="Osastokoulutus 2019 - Markkinoinnin tehokurssi"
				></Participations>
			</CustomerCard>
			<PageFooter showDates></PageFooter>
		</>
	);
};

interface IParticipationProps {
	date: Date;
	name: string;
	icon?: React.ReactNode;
	id?: string;
}

const Participations: FC<IParticipationProps> = (props) => (
	<Participated>
		<div className="icon">{Icons.check_circle}</div>
		<div className="name">{props.name}</div>
		<div className="date__ago">
			<ReactTimeago date={props.date}></ReactTimeago>
		</div>
		<div className="date__icon">{Icons.calendar}</div>
	</Participated>
);

const Participated = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.25rem 0.5rem;
	border-radius: 0.8rem;
	border-bottom: 1px solid ${(p) => p.theme.border_color};
	color: ${(p) => p.theme.text_color};

	.icon {
		flex: 0 0 2rem;
		font-size: 1.2rem;
	}
	.name {
		flex: 1 1 auto;
	}
	.date__ago {
		display: flex;
		justify-content: flex-end;
		flex: 0 0 20%;
		padding-right: 0.5rem;
	}
	.date__icon {
		flex: 0 0 1.25rem;
		display: flex;
		justify-content: center;
	}
`;

const CustomerForm: FC<{ customer: ICustomer }> = (props) => (
	<Formik onSubmit={() => {}} initialValues={props.customer} enableReinitialize>
		{() => (
			<>
				<div className="row">
					<div className="col-lg-6">
						<TextField name="firstname" label="Etunimi" showMobileView />
					</div>
					<div className="col-lg-6">
						<TextField name="lastname" label="Sukunimi" showMobileView />
					</div>
				</div>
				<TextField name="email" label="Email" showMobileView />
				<TextField name="phone" label="Puhelin" showMobileView />

				<div className="row">
					<div className="col-lg-4">
						<SelectField
							name="city"
							label="Kaupunki"
							options={[
								{ label: 'Turku', value: '62000' },
								{ label: 'Muuninka', value: '41002' },
								{ label: 'Helsinki', value: '79100' },
								{ label: 'Sipoo', value: '84200' }
							]}
							showMobileView
						/>
					</div>
					<div className="col-lg-4">
						<TextField name="address" label="Osoite" showMobileView />
					</div>
					<div className="col-lg-4">
						<TextField name="city" label="Postinumero" showMobileView />
					</div>
				</div>
				<TextField name="department" label="Osasto" showMobileView />
			</>
		)}
	</Formik>
);

const renderTags = (tags: CustomerTagType[]) =>
	tags.map((tag) => {
		const current = CustomerTag[tag];
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

const initialValues: ICustomer = {
	id: '123',
	firstname: '',
	lastname: '',
	city: '',
	address: '',
	email: '',
	phone: '',
	country: '',
	department: '',
	created: new Date(),
	tags: []
};

const CustomerCard = styled.section`
	padding: 1.5rem;
	display: flex;
	flex-direction: column;
	background-color: ${(p) => p.theme.card_background_color};
	font-family: ${(p) => p.theme.body_font};
	box-shadow: 2px 7px 10px -4px rgba(0, 0, 0, 0.15);
	min-height: 35rem;

	.card__heading {
		display: block;
		margin-bottom: 1rem;
	}

	.card__body {
		display: flex;
		flex: 1 1 auto;

		&__avatar {
			flex: 0 0 30%;

			&__img {
				max-width: 100%;
				object-fit: cover;
			}
		}

		&__content {
			flex: 0 0 70%;
			padding: 0 0 0 1.5rem;
		}
	}
`;
