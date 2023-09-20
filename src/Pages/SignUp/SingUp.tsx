import React, { useContext } from 'react';
import * as routes from '../../Constants/Routes';
import { Formik, Form, FormikActions } from 'formik';
import { useDocumentTitle } from '../../Hooks/useDocumentTitle';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { LoginWrapper } from '../SignIn/LoginWrapper';
import { Button } from '../../Components/Button/Button';
// import { auth } from '../../Firebase/index';
import Notify from '../../Utils/Notification';
import { AppContext } from '../../App';
import { IconButton } from '../../Components/Button/IconButton';
import Icons from '../../Components/Icons/icons';
import { TextFieldBase } from '../../Components/TextInput/TextinputBase';

const initialValues = {
	email: '',
	password: '',
	passwordRepeat: ''
};

export const SignUpPage = () => {
	useDocumentTitle('Luo tili');
	const { isDarkTheme, toggleTheme } = useContext(AppContext);

	const handleSignUp = (values: form, actions: FormikActions<form>) => {};
	// auth
	// 	.createUserWithEmailAndPassword(values.email, values.password)
	// 	.then(() => {
	// 		Notify.success('Kirjauduit sisään');
	// 	})
	// 	.catch((error) => {
	// 		console.exception(error);
	// 		Notify.warn(error.message);
	// 		actions.resetForm();
	// 	});

	return (
		<LoginWrapper>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={handleSignUp}
			>
				<section className="loginbox">
					<Form>
						<h2 className="loginbox__heading">
							<span className="loginbox__heading__text">MumuApp</span>
						</h2>
						<span className="loginbox__ingress">
							Tiliä varten tarvitset vain käyttäjänimen ja salasanan
						</span>

						<TextFieldBase
							name="email"
							className="loginbox__inputs__input"
							placeholder="Email"
							autoFocus={true}
						></TextFieldBase>

						<TextFieldBase
							name="password"
							type="password"
							className="loginbox__inputs__input"
							placeholder="Salasana"
						></TextFieldBase>
						<TextFieldBase
							name="passwordRepeat"
							className="loginbox__inputs__input"
							type="password"
							placeholder="Salasana uudestaan"
						></TextFieldBase>

						<div className="loginbox__buttonfooter">
							<Button
								text="Luo tili"
								className="loginbox__buttonfooter__btn"
								icon={Icons.user}
								type="submit"
							></Button>

							<Link to={routes.signIn.path} className="loginbox__buttonfooter__linkbtn">
								Kirjaudu
							</Link>
						</div>

						<IconButton
							size="large"
							icon={isDarkTheme ? Icons.moon : Icons.sun}
							className="loginbox__nightmode"
							onClick={toggleTheme}
						></IconButton>
					</Form>
				</section>
			</Formik>
		</LoginWrapper>
	);
};

const validationSchema = Yup.object().shape({
	email: Yup.string().email().required(),
	password: Yup.string().required(),
	passwordRepeat: Yup.string().test('password', 'Passwords must match', function (value) {
		return this.parent.password === value;
	})
});

type form = typeof initialValues;
