import React, { useState } from 'react';
import { CardWrapper } from '../../Components/CardWrapper';
import { Heading } from '../../Components/Text/Heading';
import Icons from '../../Components/Icons/icons';
import { useDocumentTitle } from '../../Hooks/useDocumentTitle';
import styled, { device } from '../../Theme/theme';
import { Button } from '../../Components/Button/Button';
import { Formik, Form } from 'formik';
import { TextFieldBase } from '../../Components/TextInput/TextinputBase';
import { ImageBox } from './ImageBox';

export const ImageBank = () => {
	useDocumentTitle('Mediapankki');
	const [images, setImages] = useState(MockImages);

	const handleAddImage = (values: typeof initialValues) => {
		setImages([...images, values.url]);
	};

	const handleRemoveImage = (index: number) => {
		setImages(images.filter((img, i) => index !== i));
	};

	return (
		<>
			<div className="row">
				<div className="col-lg-8">
					<CardWrapper>
						<Heading icon={Icons.image} text="Mediapankki" isUnderlined />

						<ImageBankWrapper>
							{images.map((image, index) => (
								<ImageBox
									source={image}
									index={index}
									onRemove={handleRemoveImage}
								></ImageBox>
							))}
						</ImageBankWrapper>
					</CardWrapper>
				</div>
				<div className="col-lg-4">
					<CardWrapper>
						<Heading icon={Icons.image} text="Lisää kuva (web)" isUnderlined />
						<Formik initialValues={initialValues} onSubmit={handleAddImage}>
							<Form>
								<TextFieldBase placeholder="https://...." name="url"></TextFieldBase>
								<br></br>
								<Button
									text="Lisää kuva"
									className="card__button--large"
									icon={Icons.plus}
									type="submit"
								></Button>
							</Form>
						</Formik>
					</CardWrapper>
					<CardWrapper>
						<Heading icon={Icons.media} text="Lisää mediatiedosto" isUnderlined />
						<Formik initialValues={initialValues} onSubmit={handleAddImage}>
							<Form>
								<Button
									text="Lisää tiedosto"
									className="card__button--large"
									icon={Icons.plus}
									type="submit"
								></Button>
							</Form>
						</Formik>
					</CardWrapper>
				</div>
			</div>
		</>
	);
};

const initialValues = { file: '', url: '' };

const MockImages = [
	'https://picsum.photos/326/250',
	'https://picsum.photos/326/250',
	'https://picsum.photos/326/250',
	'https://picsum.photos/326/250',
	'https://picsum.photos/326/250',
	'https://picsum.photos/326/250',
	'https://picsum.photos/326/250',
	'https://thisOneFailsIntentionally.fi.fi/image.jpg'
];

const ImageBankWrapper = styled.section`
	display: flex;
	width: 100%;
	flex-wrap: wrap;
	justify-content: flex-start;
	cursor: pointer;

	.bank__imagebox {
		position: relative;
		flex: 0 0 99%;
		display: block;
		width: 100%;
		max-width: 100%;
		margin: 0 0.5% 0.5rem 0.5%;

		&__shadow {
			z-index: 10;
			position: absolute;
			display: block;
			width: 100%;
			height: 100%;
			box-shadow: inset 0px 0px 0px 5px rgba(0, 0, 0, 0.25);
		}

		&__remove-btn {
			z-index: 15;
			position: absolute;
			top: 0.25rem;
			right: 0.25rem;
			width: 2rem;
			height: 2rem;
			opacity: 0;
		}

		&__image {
			position: relative;
			display: block;
			max-width: 100%;
			height: 100%;
			object-fit: cover;
			transition: opacity 0.2s ease-in-out;
		}

		&:hover {
			.bank__imagebox__remove-btn {
				opacity: 1;
			}

			.bank__imagebox__image {
				opacity: 0.5;
			}
		}

		@media ${device.above.sm} {
			flex: 0 0 49%;
		}
		@media ${device.above.md} {
			flex: 0 0 32.33333%;
		}
		@media ${device.above.lg} {
			flex: 0 0 24%;
		}
		@media ${device.above.xl} {
			flex: 0 0 19%;
		}
		@media ${device.above.xxl} {
			flex: 0 0 15.666666%;
		}
	}
`;
