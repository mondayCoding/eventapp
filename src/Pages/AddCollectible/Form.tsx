import React, { FC, useState } from 'react';
import { ICollectionItem } from '../../Interfaces';
import { Formik } from 'formik';
import { TextField } from '../../Components/TextInput/Textinput';
import { Heading } from '../../Components/Text/Heading';
import { database } from '../../Firebase';
import { Limiter } from '../../Components/Utility/ContentLimiter/Limiter';

export const AddCollectionItemForm: FC = () => {
	const handleSubmit = (item: ICollectionItem) => {
		database
			.collection('collection')
			.add(item)
			.then((result) => console.log(result), (fail) => console.log(fail));
	};

	return (
		<div>
			<Heading text="Lisää tuote" isUnderlined />

			<Formik onSubmit={handleSubmit} initialValues={initialValues}>
				{() => (
					<Limiter.Mobile>
						<TextField name="name" label="Nimi" />
						<TextField name="description" label="Kuvaus" />
						<div className="content">
							<div className="row">
								<div className="col-sm-6">
									<TextField name="created" label="Luotu" type="number" showMobileView />
								</div>
								<div className="col-sm-6">
									<TextField
										name="marketValue"
										label="Arvo"
										type="number"
										showMobileView
									/>
								</div>
							</div>
						</div>
					</Limiter.Mobile>
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
	images: [],
	tags: []
};
