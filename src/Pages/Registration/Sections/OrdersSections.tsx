import React, { FC } from 'react';
import { Heading } from '../../../Components/Text/Heading';
import ReactTable from 'react-table';
import { IOrdersContent, ISectionHelpers } from '../RenderSection';
import { EditSectionBar } from '../Components/EditSectionBar';

//************************************************** */
// Tilauslohko
//************************************************** */

interface IOrdersSectionProps {
	section: IOrdersContent;
	helpers: ISectionHelpers;
}

export const OrdersSection: FC<IOrdersSectionProps> = (props) => (
	<section className="registration__content__section">
		<Heading
			isUnderlined
			text={props.section.content.title || 'Tilauslohko'}
			ingress="Tässä lohkossa voi varata majoituksia"
		></Heading>

		<ReactTable
			pageSize={props.section.content.products.length}
			showPagination={false}
			data={props.section.content.products}
			columns={[
				{
					Header: 'Tuote',
					accessor: 'name'
				},
				{
					Header: 'Saatavuus',
					accessor: 'avaibility'
				},
				{
					Header: 'Hinta',
					accessor: 'value',
					Cell: ({ original }: { original: any }) => {
						return new Intl.NumberFormat('fi-FI', {
							style: 'currency',
							currency: 'EUR'
						}).format(original.value);
					}
				}
			]}
		></ReactTable>
		<EditSectionBar isInEditMode={props.helpers.isInEditMode} helpers={props.helpers} />
	</section>
);
