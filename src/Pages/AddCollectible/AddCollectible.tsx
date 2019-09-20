import React, { useState } from 'react';
import { AddCollectionItemForm } from './Form';
import { CardWrapper } from '../MyCollection/MyCollection';

export const AddCollectible = () => {
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
