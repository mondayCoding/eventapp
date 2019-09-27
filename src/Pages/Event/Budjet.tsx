import React, { FC } from 'react';
import { Heading } from '../../Components/Text/Heading';
import { CardWrapper } from '../Dashboard/CardWrapper';
import { useDocumentTitle } from '../../Data/useDocumentTitle';
import { BudjetProgressionGrap } from '../../Graphs/BudjetProgressionGrap';
import ReactTable from 'react-table';
import { Button } from '../../Components/Button/Button';
import Icons from '../../Components/Icons/icons';

export const Budget: FC = () => {
	useDocumentTitle('Budjetti');
	return (
		<>
			<CardWrapper>
				<div className="card__heading">
					<Heading text="Budjetti" isUnderlined></Heading>
				</div>
			</CardWrapper>

			<CardWrapper>
				<h2>Budjetointi</h2>
				<div style={{ marginLeft: '1.25rem' }}>
					<ol>
						<li>Menot (per item lista menoja)</li>
						<li>
							Tulot (toteutuneet saamingit) (ilmoittautumisen tulot + manuaaliset
							lisäykset)
						</li>
						<li>saatavat(lähetetyt, mutta toteutumattomat laskut)</li>
						<li>Kehityskäyrä</li>
					</ol>
				</div>
				<Heading text="Budjettikehitys" isUnderlined></Heading>
				<BudjetProgressionGrap></BudjetProgressionGrap>
			</CardWrapper>

			<CardWrapper>
				<Heading text="Tulot" isUnderlined></Heading>
				<ReactTable
					showPagination={false}
					minRows={5}
					data={[
						{
							editable: false,
							name: 'Ilmoittautumistulot',
							value: 12034
						},
						{
							editable: true,
							name: 'Tuet',
							value: 7034
						}
					]}
					columns={[
						{
							accessor: 'name',
							Header: 'Lähde'
						},
						{
							accessor: 'value',
							Header: 'Arvo'
						},
						{
							accessor: 'value',
							Header: '',
							Cell: ({ original }: any) =>
								original.editable && <Button text="Muokkaa" icon={Icons.edit}></Button>
						}
					]}
				></ReactTable>
			</CardWrapper>
			<CardWrapper>
				<Heading text="Menot" isUnderlined></Heading>
				<ReactTable
					showPagination={false}
					minRows={5}
					data={[
						{
							editable: true,
							name: 'Palkat',
							value: 21034
						},
						{
							editable: true,
							name: 'Kiinteistön vuokra',
							value: 5034
						}
					]}
					columns={[
						{
							accessor: 'name',
							Header: 'Lähde'
						},
						{
							accessor: 'value',
							Header: 'Arvo'
						},
						{
							accessor: 'value',
							Header: '',
							Cell: ({ original }: any) =>
								original.editable && <Button text="Muokkaa" icon={Icons.edit}></Button>
						}
					]}
				></ReactTable>
			</CardWrapper>
		</>
	);
};
