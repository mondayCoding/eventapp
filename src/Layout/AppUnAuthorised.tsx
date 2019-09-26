import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import { SignInPage } from '../Pages/SignIn/SingIn';
import * as routes from '../Constants/Routes_MODIF';
import { SignUpPage } from '../Pages/SignUp/SingUp';

export const UnAuthorisedApp = () => (
	<Switch>
		<Route exact={true} path={routes.signIn.path} component={SignInPage} />
		<Route exact={true} path={routes.signUp.path} component={SignUpPage} />
		<Redirect to={routes.signIn.path} />
	</Switch>
);
