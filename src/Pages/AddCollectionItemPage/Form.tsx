import React, { FC, useState } from 'react';
import { styled, IThemeInterface } from 'library';
import { ICollectionItem } from '../../Interfaces';
import { Formik } from 'formik';
import { TextField } from '../../Components/TextInput/Textinput';
import { Heading } from '../../Components/Text/Heading';

interface Theme {
	theme: IThemeInterface;
}

export const AddCollectionItemForm: FC = () => {
	return (
		<div>
			<Heading headingText="Lisää tuote" isUnderlined />

			<Formik onSubmit={() => {}} initialValues={initialValues}>
				{() => (
					<div>
						<TextField name="name" label="Nimi" />
						<TextField name="description" label="Kuvaus" />
						<TextField name="created" label="Luotu" type="number" />
						<TextField name="marketValue" label="Arvo" type="number" />
					</div>
				)}
			</Formik>
		</div>
	);
};

const initialValues: ICollectionItem = {
	id: undefined as any,
	name: 'Tuote',
	created: 1992,
	description: 'Kuvaus',
	marketValue: 9.99,
	images: []
};
