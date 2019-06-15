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
			<BaseTheme>
				<GlobalStyle />
				{children}
			</BaseTheme>
		</ThemeProvider>
	);
};

// TODO: Pitäisikä globalstyle siirtää osaksi tätä?
export const BaseTheme = styled.div`
	font-family: ${(props) => props.theme.body_font};
	font-size: ${(props) => props.theme.global_font_size};
	line-height: 1.3;
	overflow-anchor: auto;

	*,
	*::after,
	*::before {
		box-sizing: border-box;
	}

	/* Utils */

	.hide-at-xs {
		@media ${device.below.xs} {
			display: none !important;
		}
	}
	.hide-at-sm {
		@media ${device.below.sm} {
			display: none !important;
		}
	}
	.hide-at-md {
		@media ${device.below.md} {
			display: none !important;
		}
	}
	.hide-at-lg {
		@media ${device.below.lg} {
			display: none !important;
		}
	}
	.hide-at-xl {
		@media ${device.below.xl} {
			display: none !important;
		}
	}
	.hide-at-xxl {
		@media ${device.below.xxl} {
			display: none !important;
		}
	}
`;
