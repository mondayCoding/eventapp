import React, { useState, useContext } from 'react';
import { Heading } from '../../Components/Text/Heading';
import { Link } from 'react-router-dom';
import * as routes from '../../Constants/Routes_MODIF';
import { CardWrapper } from '../../Components/CardWrapper';
import { useCustomers } from '../../Queries/useCustomers';
import styled from '../../Theme/theme';
import { ICustomer } from '../../MockData/MockCustomers';
import { useDocumentTitle } from '../../Hooks/useDocumentTitle';
import { IconButton } from '../../Components/Button/IconButton';
import { useHistory } from 'react-router';
import {
	useSelectableReactTable,
	SelectTable
} from '../../Hooks/useSelectableReactTable';
import { AppContext } from '../../App';
import Notify from '../../Utils/Notification';
import { ButtonLink } from '../../Components/Button/ButtonLink';
import Icons from '../../Components/Icons/icons';

export const Customers = () => {
	useDocumentTitle('Asiakkaat');
	const { updateEmailingList } = useContext(AppContext);
	const { customers } = useCustomers();
	const [filter, setFilter] = useState('');
	const history = useHistory();
	const { dataWithGuid, getSelectTableProps, selected } = useSelectableReactTable(
		customers
	);

	const addToEmailingList = () => {
		const selectedCustomers = customers.filter((dat) => selected.includes(dat.id));
		updateEmailingList(
			selectedCustomers.map((cust) => ({
				name: `${cust.firstname} ${cust.lastname}`,
				email: cust.email,
				id: cust.id
			}))
		);
		Notify.success(
			'Valitut asiakkaat on lisätty postitoimiston postituslistalle. (klikkaa minua päästäksesi Postitoimistoon)',
			{
				onClick: () => history.push(routes.postOffice.path),
				hideProgressBar: false
			}
		);
	};

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

			<ButtonRow>
				<FilterInput
					type="text"
					value={filter}
					placeholder="Suodata asiakkaita..."
					onChange={(e) => setFilter(e.target.value)}
				></FilterInput>

				<ButtonLink
					text={`Lisää postituslistalle ${
						selected.length ? '(' + selected.length + ')' : ''
					}`}
					disabled={!selected.length}
					onClick={addToEmailingList}
					icon={Icons.envelope}
				></ButtonLink>
			</ButtonRow>

			<SelectTable
				data={createFilter(dataWithGuid as any)}
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
							<Link className="card__link" to={`${routes.customer.path}/${original.id}`}>
								{`${original.firstname} ${original.lastname}`}
							</Link>
						)
					},

					{
						Header: 'Email',
						accessor: 'email',
						Cell: ({ original }: RowOriginal) => (
							<Link className="card__link" to={`${routes.sendEmail.path}/${original.id}`}>
								{original.email}
							</Link>
						)
					},
					{
						Header: 'Paikkakunta',
						accessor: 'city'
					}
				]}
				{...getSelectTableProps}
			></SelectTable>
		</CardWrapper>
	);
};

interface RowOriginal {
	original: ICustomer;
}

const ButtonRow = styled.section`
	display: flex;
	justify-content: space-between;
	margin-bottom: 1.5rem;
	align-items: center;
`;

const FilterInput = styled.input`
	display: block;
	width: 100%;
	max-width: 20rem;
	border: 1px solid ${(p) => p.theme.border_color};
	color: ${(p) => p.theme.text_color};
	border-radius: 3px;
	padding: 0.2rem;
	background: ${(p) => p.theme.input_background};
`;
