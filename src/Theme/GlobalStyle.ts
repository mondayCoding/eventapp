import { createGlobalStyle } from './theme';
import {
	ReactDatepickerCSS,
	RCTooltipCSS,
	ReactTableOriginalCSS,
	ReactTableOverrideCSS,
	ReactSelect
} from './PluginCSS';
import { GridSystem } from './Grid System';

export const GlobalStyle = createGlobalStyle`
   @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap');

   /* PLUGIN | React-Select */
   ${ReactSelect}

   /* PLUGIN | RC-Tooltip */
   ${RCTooltipCSS}

   /* PLUGIN | React-Datepicker */
   ${ReactDatepickerCSS}

   /* PLUGIN | ReactTable */
   ${ReactTableOriginalCSS}
   ${ReactTableOverrideCSS}

   /* UTILITY | Grid System */
   ${GridSystem}


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
      color: ${(p) => p.theme.text_color};
      line-height: 1.3;
      overflow-anchor: auto;
      margin: 0;
      padding: 0;
   }

   /* TODO: USE INLINE STYLE INSTEAD */
   .panel__themebutton__tooltip {
      color: ${(p) => p.theme.text_color_nav};
      background: ${(p) => p.theme.menu_background_color};
      padding: .25rem .5rem;
      border-radius: .5rem;
   }

   h1,h2,h3,h4,h5,h6 {
      font-family: ${(p) => p.theme.heading_font};
      font-weight: 900;
   }
`;
