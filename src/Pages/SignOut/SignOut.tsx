import { useDocumentTitle } from '../../Hooks/useDocumentTitle';
import { auth } from '../../Firebase/index';

export const SignOutPage = () => {
	useDocumentTitle('Uloskirjautuminen');
	auth.signOut();
	return null;
};
