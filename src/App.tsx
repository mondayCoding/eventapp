import React, { FC, useState } from 'react';
import { ThemeManager } from './Theme/ThemeManager';
// import { database } from './Firebase';
import { themes } from './Theme/theme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthState } from './Hooks/useAuthorization';
import { BrowserRouter } from 'react-router-dom';
import { Routing } from './Routing';
import { AppLoader } from './Layout/AppLoader';

interface IAppDataContext {
	isDarkTheme: boolean;
	authorization?: firebase.User | null;
	emailingList: EmailTarget[];
	updateEmailingList: (x: EmailTarget[]) => void;
	toggleTheme: () => void;
}

export interface EmailTarget {
	name: string;
	email: string;
	id: string;
}

export const AppContext = React.createContext({} as IAppDataContext);

const Application: FC = () => {
	const [isDarkTheme, setIsDarkTheme] = useState(nightModeIsOn());
	const { auth, isLoading } = useAuthState();
	const [emailingList, setEmailingList] = useState([] as EmailTarget[]);

	const toggleNightMode = () => {
		setIsDarkTheme(!isDarkTheme);
		saveNightModeIsOn(!isDarkTheme);
	};

	const updateEmailingList = (list: EmailTarget[]) => setEmailingList(list);

	const applicationContext = {
		toggleTheme: toggleNightMode,
		authorization: auth,
		isDarkTheme: isDarkTheme,
		updateEmailingList: updateEmailingList,
		emailingList: emailingList
	};

	const theme = isDarkTheme ? themes.dark : themes.default;
	const isAuthorised = auth !== null;

	return isLoading ? (
		<AppLoader />
	) : (
		<ThemeManager theme={theme}>
			<BrowserRouter>
				<AppContext.Provider value={applicationContext}>
					{/* Visual App */}
					<Routing authorised={isAuthorised} />
					<ToastContainer
						draggablePercent={40}
						hideProgressBar={true}
						toastClassName={'TOAST'}
					/>
				</AppContext.Provider>
			</BrowserRouter>
		</ThemeManager>
	);
};

const nightModeIsOn = () =>
	localStorage.getItem('APPLICATION_THEME_NIGHTMODE') === 'true';

const saveNightModeIsOn = (isOn: boolean) =>
	localStorage.setItem('APPLICATION_THEME_NIGHTMODE', isOn.toString());

export default Application;
