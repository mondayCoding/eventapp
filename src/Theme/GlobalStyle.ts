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

	*,
	*::after,
	*::before {
		box-sizing: border-box;
      margin: 0;
      padding: 0;
	}

   body {
      font-family: ${(props) => props.theme.body_font};
      font-size: ${(props) => props.theme.global_font_size};
      line-height: 1.3;
      overflow-anchor: auto;
      margin: 0;
      padding: 0;
   }
`;
