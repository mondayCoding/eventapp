import React, { FC, useState, useEffect } from 'react';
import { ThemeManager } from './Theme/ThemeManager';
// import { database } from './Firebase';
import { themes } from './Theme/theme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthState } from './Hooks/useAuthorization';
import { UnAuthorisedApp } from './Layout/AppUnAuthorised';
import { AuthorisedApp } from './Layout/AppAuthorised';
import { BrowserRouter } from 'react-router-dom';

interface IAppDataContext {
	isDarkTheme: boolean;
	authorization?: firebase.User | null;
	toggleTheme: () => void;
}

export const AppContext = React.createContext({} as IAppDataContext);

const Application: FC = () => {
	//remove
	const [isDarkTheme, setIsDarkTheme] = useState(nightModeIsOn());
	const { auth } = useAuthState();

	const toggleNightMode = () => {
		setIsDarkTheme(!isDarkTheme);
		localStorage.setItem('APPLICATION_THEME_NIGHTMODE', (!isDarkTheme).toString());
	};

	const applicationContext = {
		toggleTheme: toggleNightMode,
		authorization: auth,
		isDarkTheme: isDarkTheme
	};

	const theme = isDarkTheme ? themes.dark : themes.default;

	return (
		<ThemeManager theme={theme}>
			<BrowserRouter>
				<AppContext.Provider value={applicationContext}>
					{/* Visual App */}
					{auth ? <AuthorisedApp /> : <UnAuthorisedApp />}
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

export default Application;
