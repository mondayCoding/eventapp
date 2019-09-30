import React from 'react';
import { useDocumentTitle } from '../../Hooks/useDocumentTitle';
import { auth } from '../../Firebase/index';
import { Redirect } from 'react-router';
import * as routes from '../../Constants/Routes_MODIF';

export const SignOutPage = () => {
	useDocumentTitle('Uloskirjautuminen');
	auth.signOut();
	return <Redirect to={routes.signIn.path} />;
};
