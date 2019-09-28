import React, { useState } from 'react';
import { Heading } from '../../Components/Text/Heading';
import { Link } from 'react-router-dom';
import * as routes from '../../Constants/Routes_MODIF';
import { CardWrapper } from '../Dashboard/CardWrapper';
import { useCustomers } from '../../Queries/useCustomers';
import styled from '../../Theme/theme';
import { Icons } from 'library';
import { ICustomer } from '../../MockData/MockCustomers';
import { useDocumentTitle } from '../../Hooks/useDocumentTitle';
import ReactTable from 'react-table';
import { IconButton } from '../../Components/Button/IconButton';
import { useHistory } from 'react-router';

export const Customers = () => {
	useDocumentTitle('Asiakkaat');
	const { customers } = useCustomers();
	const [filter, setFilter] = useState('');
	const history = useHistory();

	const createFilter = (customers: ICustomer[]) => {
		const filt = filter.toLowerCase();

		return customers.filter((cust) => {
			return filt
				? cust.firstname.toLowerCase().indexOf(filt) > -1 ||
						cust.lastname.toLowerCase().indexOf(filt) > -1 ||
						cust.city.toLowerCase().indexOf(filt) > -1 ||
						cust.email.toLowerCase().indexOf(filt) > -1
				: true;
		});
	};

	return (
		<CardWrapper>
			<Heading
				text="Asiakkaat"
				icon={Icons.users}
				ingress="Valitse käsiteltävä asiakaskortti"
				isUnderlined
			></Heading>

			<FilterInput
				type="text"
				value={filter}
				onChange={(e) => setFilter(e.target.value)}
			></FilterInput>

			<ReactTable
				data={createFilter(customers)}
				showPagination={false}
				minRows={0}
				columns={[
					{
						Header: '',
						accessor: 'id',
						width: 38,
						resizable: false,
						Cell: ({ original }: RowOriginal) => (
							<IconButton
								icon={Icons.envelope}
								onClick={() => history.push(routes.sendEmail.path + '/' + original.id)}
							></IconButton>
						)
					},
					{
						Header: 'Nimi',
						accessor: 'firstname',
						Cell: ({ original }: RowOriginal) => (
							<Link to={`${routes.customer.path}/${original.id}`}>
								{`${original.firstname} ${original.lastname}`}
							</Link>
						)
					},

					{
						Header: 'Email',
						accessor: 'email',
						Cell: ({ original }: RowOriginal) => (
							<Link to={`${routes.sendEmail.path}/${original.id}`}>{original.email}</Link>
						)
					},
					{
						Header: 'Paikkakunta',
						accessor: 'city'
					}
				]}
			></ReactTable>
		</CardWrapper>
	);
};

interface RowOriginal {
	original: ICustomer;
}

const FilterInput = styled.input`
	display: block;
	width: 100%;
	max-width: 20rem;
	border: 1px solid ${(p) => p.theme.border_color};
	color: ${(p) => p.theme.text_color};
	margin-bottom: 1rem;
	border-radius: 3px;
	padding: 0.2rem;
	background: ${(p) => p.theme.input_background};
`;
