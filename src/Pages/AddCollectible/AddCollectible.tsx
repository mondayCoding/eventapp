import React, { useState } from 'react';
import { AddCollectionItemForm } from './Form';
import { Card } from '../MyCollection/MyCollection';

export const AddCollectible = () => {
	// const [value, setValue] = useState('');

	return (
		<Card>
			<div>
				<h4>Lisää uusi kerättävä esine:</h4>
				DEPRECATED VAIHDA
				<div />
				<AddCollectionItemForm />
			</div>
		</Card>
	);
};
