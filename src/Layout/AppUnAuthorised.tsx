import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import { SignInPage } from '../Pages/SignIn/SingIn';
import * as routes from '../Constants/Routes_MODIF';
import { SignUpPage } from '../Pages/SignUp/SingUp';
import { Registration } from '../Pages/Registration/Registration';

export const UnAuthorisedApp = () => (
	<Switch>
		<Route exact path={routes.signIn.path} component={SignInPage} />
		<Route exact path={routes.signUp.path} component={SignUpPage} />
		<Route exact path={routes.registration.path + '/:id'} component={Registration} />
		<Redirect to={routes.signIn.path} />
	</Switch>
);
