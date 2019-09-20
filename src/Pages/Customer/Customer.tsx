import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router';
import styled from '../../Theme/theme';
import { Formik } from 'formik';
import { Heading } from '../../Components/Text/Heading';
import Icons from '../../Components/Icons/icons';
import { TextField } from '../../Components/TextInput/Textinput';
import { useCustomers } from '../../Queries/useCustomers';
import { ICustomer } from '../../MockData/CustomersMock';
import { SelectField } from 'library';

interface routeprops {
	id: string;
}

export const Customer: FC<RouteComponentProps<routeprops>> = ({ match }) => {
	const { customers } = useCustomers();
	const customer = customers.find((cust) => cust.id === match.params.id);

	return (
		<CustomerCard>
			<div className="card__heading">
				<Heading
					headingText={`Customer with id of ${match.params.id}`}
					isUnderlined
				></Heading>
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

			<Heading headingText="Osallistumiset" isUnderlined></Heading>
			<div>Osallistuminen 1</div>
			<div>Osallistuminen 2</div>
			<div>Osallistuminen 3</div>
			<div>Osallistuminen 4</div>
			<div>Osallistuminen 5</div>
			<div>Osallistuminen 6</div>

			<div className="card__footer">
				<span className="card__footer__tag">
					{Icons.calendar} Created: {new Date(2017, 3, 2, 10, 8).toLocaleString('fi-FI')}
				</span>
				<span className="card__footer__tag">
					{Icons.calendar} Last Modified:{' '}
					{new Date(2019, 8, 12, 12, 12).toLocaleString('fi-FI')}
				</span>
			</div>
		</CustomerCard>
	);
};

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
	margin: 1rem;
	padding: 1.5rem;
	display: flex;
	flex-direction: column;
	background-color: ${(p) => p.theme.card_background_color};
	font-family: ${(p) => p.theme.body_font};
	box-shadow: 2px 7px 10px -4px rgba(0, 0, 0, 0.15);
	min-height: 35rem;

	.card__heading {
		display: block;
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
