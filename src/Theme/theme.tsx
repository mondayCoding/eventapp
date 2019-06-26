import * as React from 'react';
import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';

const {
	default: styled,
	css,
	createGlobalStyle,
	keyframes,
	ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<IThemeInterface>;

export interface IThemeInterface {
	//** Primary theming color for library, most colors are derived from this */
	primary_color: string;
	secondary_color: string;

	body_bg_color: string;
	menu_background_color: string;

	focus_color: string;
	link_color: string;

	error_color: string;
	warning_color: string;
	success_color: string;
	info_color: string;

	gray_black: string;
	gray_light: string;

	body_font: string;
	body_font_alternative: string;
	heading_font: string;

	global_border_radius: string;
	global_shadow: string;
	global_shadow_inset: string;
	global_font_size: string;
}

const defaultTheme: IThemeInterface = {
	// Main colors
	primary_color: '#5b9943',
	secondary_color: '#75AB35',

	body_bg_color: '#222',
	menu_background_color: '#233',

	focus_color: 'skyblue',
	link_color: '#38c',

	// Validation/Notification colors
	error_color: '#a94442',
	warning_color: '#bb8d0e',
	success_color: '#16a30e',
	info_color: '#38c',

	// Neutral colors
	gray_black: '#222222',
	gray_light: '#dadada',

	// Main fonts
	body_font: 'Sans Serif, Arial, Segoe UI, Verdana, Helvetica, sans-serif',
	body_font_alternative: 'Arial, Segoe UI, Verdana, Helvetica, sans-serif',
	heading_font: 'Calibri, Futura, Helvetica, Arial, Sans',

	// Globals
	global_border_radius: '4px',
	global_shadow: '0px 0px 4px rgba(0, 0, 0, 0.15)',
	global_shadow_inset: '0px 0px 4px inset rgba(0, 0, 0, 0.19)',
	global_font_size: '.9rem'
};

const size = {
	xs: '576px',
	sm: '768px',
	md: '994px',
	lg: '1140px',
	xl: '1600px',
	xxl: '1900px',
	mobileS: '320px',
	mobileM: '375px',
	mobileL: '425px',
	tablet: '768px',
	laptop: '1024px',
	laptopL: '1440px',
	desktop: '2560px'
};

const device = {
	below: {
		xs: `(max-width: ${size.xs})`,
		sm: `(max-width: ${size.sm})`,
		md: `(max-width: ${size.md})`,
		lg: `(max-width: ${size.lg})`,
		xl: `(max-width: ${size.xl})`,
		xxl: `(max-width: ${size.xxl})`
	},
	above: {
		xs: `(min-width: ${size.xs})`,
		sm: `(min-width: ${size.sm})`,
		md: `(min-width: ${size.md})`,
		lg: `(min-width: ${size.lg})`,
		xl: `(min-width: ${size.xl})`,
		xxl: `(min-width: ${size.xxl})`
	}
};

export { css, createGlobalStyle, keyframes, ThemeProvider, defaultTheme, device };
export default styled;
