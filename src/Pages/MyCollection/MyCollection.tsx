import React, { useContext } from 'react';
import { Heading } from '../../Components/Text/Heading';
import { AppContext } from '../../App';
import styled from '../../Theme/theme';
import { Limiter } from '../../Components/Utility/ContentLimiter/Limiter';

import ReactTable from 'react-table';

export const MyCollectionPage = () => {
	const { collection, collected } = useContext(AppContext);
	const CollectionCount = collected.length;
	const CollectedItems = collection.filter((item) => collected.includes(item.id));
	const collectedItemsValue = CollectedItems.reduce(
		(prev, curr) => curr.marketValue + prev,
		0
	);

	return (
		<div>
			<CardWrapper>
				<Heading headingText="Kokoelma" />
				<p>{`items in collection ${CollectionCount}`}</p>
				<p>{`Collected items total value is ${collectedItemsValue} euros`}</p>
			</CardWrapper>
			<CardWrapper>
				{CollectedItems.map((item, index) => (
					<Limiter.Mobile>
						<ItemRow key={index}>
							<div>{item.name}</div>
							<div>{item.created}</div>
							<div>{item.marketValue}</div>
						</ItemRow>
					</Limiter.Mobile>
				))}
			</CardWrapper>
			<CardWrapper></CardWrapper>
			<CardWrapper>
				<ReactTable
					data={CollectedItems}
					columns={[
						{ Header: 'Name', accessor: 'name' },
						{ Header: 'Created', accessor: 'created' },
						{ Header: 'Value', accessor: 'marketValue' }
					]}
				></ReactTable>
			</CardWrapper>
		</div>
	);
};

export const CardWrapper = styled.div`
	padding: 1rem;
	border-radius: ${(p) => p.theme.global_border_radius};
	background: ${(p) => p.theme.card_background_color};
	box-shadow: ${(p) => p.theme.shadow.card};
	color: ${(p) => p.theme.text_color};
	margin-bottom: 1rem;

	& + & {
		margin-top: 1.5rem;
	}
`;

const ItemRow = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 0.5rem 0 0 0.5rem;
	padding: 0.25rem 0;
	border-top: 1px solid ${(p) => p.theme.border_color};
`;
