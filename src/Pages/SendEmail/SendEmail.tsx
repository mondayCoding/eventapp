import React from 'react';
import * as routes from '../../Constants/Routes';
import { CardWrapper } from '../Dashboard/CardWrapper';
import { Heading } from '../../Components/Text/Heading';

import Icons from '../../Components/Icons/icons';
import { Formik } from 'formik';
import { TextField } from '../../Components/TextInput/Textinput';
import { TextAreaField } from '../../Components/TextArea/TextArea';
import { useDocumentTitle } from '../../Data/useDocumentTitle';
import { TEXTEDITOR } from '../Dashboard/EDITOR';
import { TEXTEDITOR2 } from '../Dashboard/EDITOR2';
import { FieldContainer } from '../../Components/FieldContainer/FieldContainer';
import { TEXTEDITOR3 } from '../Dashboard/EDITOR3';

export const SendEmail = () => {
	useDocumentTitle('Email');

	return (
		<div>
			<CardWrapper>
				<Heading icon={Icons.envelope} text="Lähetä email" isUnderlined />
				<EmailForm></EmailForm>
			</CardWrapper>
			{/* <h2>Features</h2>
			<ul>
				<li>Auth</li>
				<li>PerfectScroll</li>
				<li>Routing</li>
				<li>SPA</li>
				<li>Style-Components</li>
				<li></li>
				<li></li>
			</ul> */}

			<TEXTEDITOR></TEXTEDITOR>

			<br></br>

			<TEXTEDITOR2></TEXTEDITOR2>

			<br></br>

			<TEXTEDITOR3></TEXTEDITOR3>
		</div>
	);
};

const EmailForm = () => {
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
		>
			<>
				<TextField name="sender" label="Lähettäjä" placeholder="From"></TextField>
				<TextField name="receiver" label="Vastaanottaja" placeholder="To"></TextField>
				<TextField name="title" label="Viestin otsikko" placeholder="Subject"></TextField>
				<TextAreaField
					name="content"
					label="sisältö"
					placeholder="Content"
				></TextAreaField>
			</>
		</Formik>
	);
};

const initialValues = {
	sender: '',
	title: '',
	content: '',
	receiver: ''
};
