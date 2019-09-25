import { useDocumentTitle } from '../../Data/useDocumentTitle';
import { auth } from '../../Firebase/index';

export const SignOutPage = () => {
	useDocumentTitle('Uloskirjautuminen');
	auth.signOut();
	return null;
};
