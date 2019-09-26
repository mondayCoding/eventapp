import React, { FC } from 'react';
import { Formik } from 'formik';
import { TextField } from '../../Components/TextInput/Textinput';
import { ICustomer } from '../../MockData/MockCustomers';
import { SelectField } from '../../Components/Select/Select';

export const CustomerForm: FC<{ customer: ICustomer }> = (props) => (
	<Formik onSubmit={() => {}} initialValues={props.customer} enableReinitialize>
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

			<div className="row">
				<div className="col-lg-4">
					<SelectField
						name="day"
						placeholder="Päivä"
						label="Syntymäaika"
						options={[
							{ label: '1', value: '1' },
							{ label: '2', value: '2' },
							{ label: '3', value: '3' },
							{ label: '4', value: '4' }
						]}
						showMobileView
					/>
				</div>
				<div className="col-lg-4">
					<SelectField
						name="month"
						label="_"
						placeholder="Kuukausi"
						options={[
							{ label: 'Tammikuu', value: '1' },
							{ label: 'Helmikuu', value: '2' },
							{ label: 'Maaliskuu', value: '3' },
							{ label: 'Huhtikuu', value: '4' }
						]}
						showMobileView
					/>
				</div>
				<div className="col-lg-4">
					<SelectField
						name="year"
						label="_"
						placeholder="Vuosi"
						options={[
							{ label: '2016', value: '1' },
							{ label: '2017', value: '2' },
							{ label: '2018', value: '3' },
							{ label: '2019', value: '4' }
						]}
						showMobileView
					/>
				</div>
			</div>

			<TextField name="department" label="Osasto" showMobileView />
		</>
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
