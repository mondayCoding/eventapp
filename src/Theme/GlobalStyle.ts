import styled, { createGlobalStyle, device } from './theme';
import {
	ReactDatepickerCSS,
	RCTooltipCSS,
	ReactTableOriginalCSS,
	ReactTableOverrideCSS,
	ReactSelect
} from './PluginCSS';

export const GlobalStyle = createGlobalStyle`
   /* PLUGIN | React-Select */
   ${ReactSelect}

   /* PLUGIN | RC-Tooltip */
   ${RCTooltipCSS}

   /* PLUGIN | React-Datepicker */
   ${ReactDatepickerCSS}

   /* PLUGIN | ReactTable */
   ${ReactTableOriginalCSS}
   ${ReactTableOverrideCSS}
`;
