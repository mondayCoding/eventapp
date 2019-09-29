import React, { FC, useContext } from 'react';
import { CardWrapper } from '../../Components/CardWrapper';
import { Heading } from '../../Components/Text/Heading';
import Icons from '../../Components/Icons/icons';
import { Formik } from 'formik';
import { TextField } from '../../Components/TextInput/Textinput';
import { TextAreaField } from '../../Components/TextArea/TextArea';
import { useDocumentTitle } from '../../Hooks/useDocumentTitle';
import { TEXTEDITOR } from '../Dashboard/EDITOR';
import { TEXTEDITOR2 } from '../Dashboard/EDITOR2';
import { FieldContainer } from '../../Components/FieldContainer/FieldContainer';
import { useParams } from 'react-router';
import { useCustomer } from '../../Queries/useCustomer';
import { AppContext } from '../../App';
import { Button } from '../../Components/Button/Button';
import { SelectField, SelectFieldBase } from '../../Components/Select/Select';

export const SendEmail = () => {
	const { authorization } = useContext(AppContext);
	const { id } = useParams();
	const { customer } = useCustomer(id);
	useDocumentTitle(
		customer
			? `Lähetä viesti | ${customer.firstname} ${customer.lastname}`
			: 'Lähetä Viesti'
	);

	return (
		<CardWrapper>
			<Heading icon={Icons.envelope} text="Lähetä email" isUnderlined />
			<EmailForm
				receiver={customer ? customer.email : ''}
				sender={authorization ? authorization.email || '' : ''}
			></EmailForm>
		</CardWrapper>
	);
};

interface IEmailForProps {
	receiver: string;
	sender: string;
}

const EmailForm: FC<IEmailForProps> = ({ receiver, sender }) => {
	return (
		<Formik
			initialValues={{ ...initialValues, receiver, sender }}
			onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
			enableReinitialize={true}
		>
			<>
				<TextField
					required
					name="sender"
					label="Lähettäjä"
					placeholder="From"
				></TextField>

				<TextField
					required
					name="receiver"
					label="Vastaanottaja"
					placeholder="To"
				></TextField>

				<TextField
					required
					name="title"
					label="Viestin otsikko"
					placeholder="Subject"
				></TextField>

				<FieldContainer label="Viesti" required>
					<div style={{ flex: '1 1 auto' }}>
						{/* <TEXTEDITOR2></TEXTEDITOR2> */}
						<TEXTEDITOR></TEXTEDITOR>
					</div>
				</FieldContainer>

				<FieldContainer label="">
					<div
						style={{ flex: '1 1 auto', display: 'flex', justifyContent: 'space-between' }}
					>
						<div>
							<Button text="Lähetä viesti" icon={Icons.paperplane}></Button>
							<Button text="Tallenna luonnoksena" icon={Icons.save}></Button>
						</div>

						<div style={{ width: '260px' }}>
							<SelectFieldBase
								placeholder="Valitse esitallennettu pohja"
								options={[
									{
										label: 'Kutsukirje',
										value: '1'
									},
									{
										label: 'Peruutusilmoitus',
										value: '2'
									},
									{
										label: 'Todistuspohja',
										value: '3'
									}
								]}
							></SelectFieldBase>
						</div>
					</div>
				</FieldContainer>
			</>
		</Formik>
	);
};

const initialValues = {
	sender: '',
	receiver: '',
	title: '',
	content: ''
};
