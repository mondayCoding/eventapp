import React, { useContext } from 'react';
import { Heading } from '../../Components/Text/Heading';
import { Link } from 'react-router-dom';
import * as routes from '../../Constants/Routes';
import { CardWrapper } from '../../Components/CardWrapper';
import { useDocumentTitle } from '../../Hooks/useDocumentTitle';
import ReactTable from 'react-table';
import { useHistory } from 'react-router';
import { AppContext, EmailTarget } from '../../App';
import { ButtonLink } from '../../Components/Button/ButtonLink';
import { PostOfficeActionsMenu } from './PostOfficeActionsMenu';
import { useSelectableReactTable } from '../../Hooks/useSelectableReactTable';
import CALENDERDEMO from '../Dashboard/ReactCalendar';
import CALENDERDEMO2 from '../Dashboard/ReactCalendar';
import CALENDERDEMO3 from '../Dashboard/ReactCalendar';
import Icons from '../../Components/Icons/icons';

export const PostOffice = () => {
	useDocumentTitle('Postitoimisto');
	const history = useHistory();
	const { emailingList, updateEmailingList } = useContext(AppContext);
	const { dataWithGuid, getSelectTableProps, selected } = useSelectableReactTable(
		emailingList
	);

	const handleRemoveFromList = (ids: string[]) =>
		updateEmailingList(emailingList.filter((item) => !ids.includes(item.id)));

	return (
		<CardWrapper>
			<div style={{ marginBottom: '.5rem' }}>
				<PostOfficeActionsMenu
					sendEmails={() => history.push(routes.sendEmail.path)}
					removeSelectedFromList={() => handleRemoveFromList(selected as string[])}
				></PostOfficeActionsMenu>
			</div>

			<Heading text="Postituslista" icon={Icons.envelope} isUnderlined></Heading>

			<CALENDERDEMO></CALENDERDEMO>
			<CALENDERDEMO2></CALENDERDEMO2>
			<CALENDERDEMO3></CALENDERDEMO3>

			<ReactTable
				data={dataWithGuid}
				showPagination={false}
				minRows={10}
				noDataText={'Postituslistalle ei ole tällä hetkellä valittuna asiakkaita'}
				columns={[
					{
						Header: 'Nimi',
						accessor: 'name',
						Cell: ({ original }: RowOriginal) => (
							<Link className="card__link" to={`${routes.customer.path}/${original.id}`}>
								{`${original.name}`}
							</Link>
						)
					},
					{
						Header: 'Email',
						accessor: 'email',
						Cell: ({ original }: RowOriginal) => (
							<Link className="card__link" to={`${routes.sendEmail.path}/${original.id}`}>
								{`${original.email}`}
							</Link>
						)
					},
					{
						width: 152,
						Header: 'Poista',
						accessor: 'id',
						Cell: ({ original }: RowOriginal) => (
							<ButtonLink
								text="Poista listalta"
								onClick={() => handleRemoveFromList([original.id])}
								icon={Icons.close}
							/>
						)
					}
				]}
				{...getSelectTableProps}
			></ReactTable>
		</CardWrapper>
	);
};

interface RowOriginal {
	original: EmailTarget;
}
