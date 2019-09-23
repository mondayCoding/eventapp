import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';

const {
	default: styled,
	css,
	createGlobalStyle,
	keyframes,
	ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<IThemeInterface>;

const DefaultTheme = {
	// Main colors
	primary_color: '#9538bf',
	secondary_color: '#88bf38',

	body_background_color: '#f4f3ef',
	menu_background_color: '#1b1f2d',
	card_background_color: '#fff',

	focus_color: '#81e979',
	link_color: '#81e979',
	border_color: '#dadada',

	input_border: '1px solid #dadada',
	input_background: '#f9f9f9',

	// Validation/Notification colors
	error_color: '#a94442',
	warning_color: '#bb8d0e',
	success_color: '#16a30e',
	info_color: '#38c',

	// Neutral colors
	text_color: '#222222',
	text_color_nav: '#dadada',

	// Main fonts
	body_font: "'Montserrat', sans-serif",
	body_font_alternative: 'Arial, Segoe UI, Verdana, Helvetica, sans-serif',
	heading_font: "'Montserrat', sans-serif",

	// Globals
	global_border_radius: '4px',
	global_shadow: '0px 0px 4px rgba(0, 0, 0, 0.15)',
	global_shadow_inset: '0px 0px 4px inset rgba(0, 0, 0, 0.19)',
	global_font_size: '.9rem',

	//misc
	navbar_width: '15rem',

	// fonts: {
	// 	heading: '',
	// 	body: '',
	// 	mono: ''
	// },

	shadow: {
		card: '0 6px 10px -4px rgba(0, 0, 0, 0.22)',
		inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
		focus: '0 0 0 3px #9538bf'
	}

	// color: {
	//    primary: '#9538bf',
	//    accent: '#88bf38',
	//    support_1: '#88bf38',
	//    support_2: '#88bf38',
	//    support_3: '#88bf38',
	//    support_4: '#88bf38',
	// },
};

// TODO test
const shadows = {
	sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
	md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
	lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
	xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
	'2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
	outline: '0 0 0 3px rgba(66, 153, 225, 0.6)',
	inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
	none: 'none'
};

const DarkTheme: typeof DefaultTheme = {
	// Main colors
	primary_color: '#e9799e',
	secondary_color: '#6e0d25',

	body_background_color: '#333',
	menu_background_color: '#201e20',
	card_background_color: '#1a2026',

	focus_color: 'skyblue',
	link_color: '#e9799e',
	border_color: '#4d4d4d',

	input_border: 'none',
	input_background: '#0000002e',

	// Validation/Notification colors
	error_color: '#a94442',
	warning_color: '#bb8d0e',
	success_color: '#16a30e',
	info_color: '#38c',

	// Neutral colors
	text_color: '#dadada',
	text_color_nav: '#dadada',

	// Main fonts
	body_font: "'Montserrat', sans-serif",
	body_font_alternative: 'Arial, Segoe UI, Verdana, Helvetica, sans-serif',
	heading_font: "'Montserrat', sans-serif",

	// Globals
	global_border_radius: '4px',
	global_shadow: '0px 0px 4px rgba(0, 0, 0, 0.15)',
	global_shadow_inset: '0px 0px 4px inset rgba(0, 0, 0, 0.19)',
	global_font_size: '.9rem',

	// misc
	navbar_width: '15rem',

	shadow: {
		card: '0 6px 10px -4px rgba(0, 0, 0, 0.55)',
		inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
		focus: '0 0 0 3px #e9799e'
	}
};

const themes = {
	default: DefaultTheme,
	dark: DarkTheme
};

export type IThemeInterface = typeof DefaultTheme;

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

export { css, createGlobalStyle, keyframes, ThemeProvider, themes, device };
export default styled;
