import React, { useState } from 'react';
import { AddCollectionItemForm } from './Form';
import { CardWrapper } from '../MyCollection/MyCollection';
import { useDocumentTitle } from '../../Data/useDocumentTitle';

export const AddCollectible = () => {
	useDocumentTitle('Lisää kokoelmaan');
	// const [value, setValue] = useState('');

	return (
		<CardWrapper>
			<div>
				<h4>Lisää uusi kerättävä esine:</h4>
				DEPRECATED VAIHDA
				<div />
				<AddCollectionItemForm />
			</div>
		</CardWrapper>
	);
};
