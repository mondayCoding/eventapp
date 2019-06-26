import * as React from 'react';
import { useState } from 'react';
import styled, { defaultTheme, ThemeProvider, device } from './theme';
import { GlobalStyle } from './GlobalStyle';
import { IThemeInterface } from './theme';

interface ThemeManagerProps {
	theme?: IThemeInterface;
}

export const ThemeManager: React.SFC<ThemeManagerProps> = ({ children, theme }) => {
	// const [currentTheme, setCurrentTheme] = useState(defaultTheme);
	return (
		<ThemeProvider theme={theme || defaultTheme}>
			<>
				<GlobalStyle />
				{children}
			</>
		</ThemeProvider>
	);
};
