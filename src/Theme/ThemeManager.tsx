import * as React from 'react';
import { themes, ThemeProvider } from './theme';
import { GlobalStyle } from './GlobalStyle';
import { IThemeInterface } from './theme';

interface ThemeManagerProps {
	theme?: IThemeInterface;
}

export const ThemeManager: React.SFC<ThemeManagerProps> = ({ children, theme }) => {
	// const [currentTheme, setCurrentTheme] = useState(defaultTheme);
	return (
		<ThemeProvider theme={theme || themes.default}>
			<>
				<GlobalStyle />
				{children}
			</>
		</ThemeProvider>
	);
};
