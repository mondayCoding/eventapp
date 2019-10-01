import React, { useState, FC } from 'react';
import { Heading } from '../../Components/Text/Heading';
import { CardWrapper } from '../../Components/CardWrapper';
import { useDocumentTitle } from '../../Hooks/useDocumentTitle';
import ReactTable from 'react-table';
import { Button } from '../../Components/Button/Button';
import { ButtonLink } from '../../Components/Button/ButtonLink';
import { Formik, Form } from 'formik';
import { TextField } from '../../Components/TextInput/Textinput';
import { SelectField } from '../../Components/Select/Select';
import Icons from '../../Components/Icons/icons';

interface Product {
	name: string;
	price: number;
	priceWithVat?: number;
	type: ProductType;
	id: string;
}
enum ProductType {
	static,
	default,
	vip,
	accommodation,
	ticket
}

interface RowOriginal {
	original: Product;
}

const MockProducts: Product[] = [
	{
		name: 'Normaali tuote',
		price: 29.99,
		type: 1,
		id: '1'
	},
	{
		name: 'Supertuote',
		price: 249.99,
		type: 1,
		id: '2'
	},
	{
		name: 'Tehokäyttäjän tarjoustuote',
		price: 9.99,
		type: 2,
		id: '3'
	},
	{
		name: 'VIP-Poistotuote',
		price: 529.99,
		type: 4,
		id: '4'
	},
	{
		name: 'Aamiaine',
		price: 529.99,
		type: 3,
		id: '4'
	}
];

export const ProductManagement = () => {
	useDocumentTitle('Tuotehallinta');
	const [products, setProducts] = useState(MockProducts);
	const [selected, setSelected] = useState(null as null | Product);

	const handleRemoveFromList = (id: string) =>
		setProducts(products.filter((item) => id !== item.id));

	return (
		<>
			<div className="row">
				<div className="col-lg-8">
					<CardWrapper>
						<Heading
							text="Tuotehallinta"
							icon={Icons.box}
							isUnderlined
							ingress="Voit luoda ja hallita tuotteita, jotka ovat liitettävissä tapahtumiin maksullisina tai maksuttomina lisukkeina."
						></Heading>
						<ReactTable
							data={MockProducts}
							showPagination={false}
							minRows={0}
							columns={[
								{
									Header: 'Nimi',
									accessor: 'name',
									Cell: ({ original }: RowOriginal) => (
										<ButtonLink
											onClick={() => setSelected(original)}
											text={original.name}
										/>
									)
								},
								{
									width: 140,
									Header: 'Hinta',
									accessor: 'price',
									Cell: ({ original }: RowOriginal) =>
										localisedMarkedValue(original.price)
								},
								{
									width: 100,
									Header: 'Poista',
									accessor: 'email',
									Cell: ({ original }: RowOriginal) => (
										<ButtonLink
											text="Poista"
											onClick={() => handleRemoveFromList(original.id)}
											icon={Icons.trashcan}
										/>
									)
								}
							]}
						></ReactTable>
					</CardWrapper>
				</div>
				<div className="col-lg-4">
					<CardWrapper>
						<Heading
							text="Muokkaa tuotetta"
							icon={Icons.box}
							isUnderlined
							ingress={selected ? selected.name : 'Valitse tuote'}
						></Heading>
						{selected ? (
							<ProductForm product={selected}></ProductForm>
						) : (
							<span>Valitse tuote</span>
						)}
					</CardWrapper>
				</div>
			</div>
		</>
	);
};

const ProductForm: FC<{ product: Product }> = (props) => (
	<Formik
		enableReinitialize
		initialValues={props.product || { name: '', price: 0, id: '' }}
		onSubmit={() => {}}
	>
		{(formik) => (
			<section>
				<Form>
					<TextField label="Nimi" name="name" placeholder="Nimi" showMobileView />
					<TextField
						label="Hinta"
						name="priceWithVat"
						type="number"
						placeholder="Veroton"
						showMobileView
					/>
					<TextField
						label="Hinta"
						name="price"
						type="number"
						placeholder="Verollinen"
						showMobileView
					/>

					<SelectField
						name="type"
						showMobileView
						label="Tyyppi"
						options={[
							{ label: 'Staattinen', value: 0 },
							{ label: 'Perustuote', value: 1 },
							{ label: 'VIP-tuote', value: 2 },
							{ label: 'Majoitustuote', value: 3 },
							{ label: 'Lipputuote', value: 4 }
						]}
					/>

					<Button
						text="Tallenna muutokset"
						disabled={!formik.dirty}
						style={{ marginTop: '1rem' }}
						type="submit"
						onClick={() => alert('Tässä ei ole kyllä mitään käsittelyä')}
					/>
				</Form>
			</section>
		)}
	</Formik>
);

const localisedMarkedValue = (value: number) =>
	new Intl.NumberFormat('fi-FI', {
		style: 'currency',
		currency: 'EUR'
	}).format(value);
