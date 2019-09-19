import { css, keyframes } from './theme';
import { mix } from 'polished';

const tooltipFadeIn = keyframes`
 0% {
      opacity: 0;
      transform-origin: 50% 50%;
      transform: scale(0, 0);
   }
   100% {
      opacity: 1;
      transform-origin: 50% 50%;
      transform: scale(1, 1);
   }
`;
const tooltipFadeOut = keyframes`
   0% {
      opacity: 1;
      transform-origin: 50% 50%;
      transform: scale(1, 1);
   }
   100% {
      opacity: 0;
      transform-origin: 50% 50%;
      transform: scale(0, 0);
   }
`;

export const RCTooltipCSS = css`
	.rc-tooltip.rc-tooltip-zoom-enter,
	.rc-tooltip.rc-tooltip-zoom-leave {
		display: block;
	}
	.rc-tooltip-zoom-enter,
	.rc-tooltip-zoom-appear {
		opacity: 0;
		animation-duration: 0.3s;
		animation-fill-mode: both;
		animation-timing-function: cubic-bezier(0.18, 0.89, 0.32, 1.28);
		animation-play-state: paused;
	}
	.rc-tooltip-zoom-leave {
		animation-duration: 0.3s;
		animation-fill-mode: both;
		animation-timing-function: cubic-bezier(0.6, -0.3, 0.74, 0.05);
		animation-play-state: paused;
	}

	.rc-tooltip {
		position: absolute;
		z-index: 1070;
		display: block;
		visibility: visible;
		line-height: 1.5;
		font-size: 12px;
		background-color: rgba(0, 0, 0, 0.05);
		padding: 1px;
		opacity: 0.9;
	}
	.rc-tooltip-hidden {
		display: none;
	}
	.rc-tooltip-inner {
		padding: 8px 10px;
		color: #333333;
		text-align: left;
		text-decoration: none;
		background-color: #ffffff;
		border-radius: 3px;
		min-height: 34px;
		border: 1px solid #b1b1b1;
	}
	.rc-tooltip-arrow,
	.rc-tooltip-arrow-inner {
		position: absolute;
		width: 0;
		height: 0;
		border-color: transparent;
		border-style: solid;
	}
	.rc-tooltip-placement-top .rc-tooltip-arrow,
	.rc-tooltip-placement-topLeft .rc-tooltip-arrow,
	.rc-tooltip-placement-topRight .rc-tooltip-arrow {
		bottom: -5px;
		margin-left: -6px;
		border-width: 6px 6px 0;
		border-top-color: #b1b1b1;
	}
	.rc-tooltip-placement-top .rc-tooltip-arrow-inner,
	.rc-tooltip-placement-topLeft .rc-tooltip-arrow-inner,
	.rc-tooltip-placement-topRight .rc-tooltip-arrow-inner {
		bottom: 1px;
		margin-left: -6px;
		border-width: 6px 6px 0;
		border-top-color: #ffffff;
	}
	.rc-tooltip-placement-top .rc-tooltip-arrow {
		left: 50%;
	}
	.rc-tooltip-placement-topLeft .rc-tooltip-arrow {
		left: 15%;
	}
	.rc-tooltip-placement-topRight .rc-tooltip-arrow {
		right: 15%;
	}
	.rc-tooltip-placement-right .rc-tooltip-arrow,
	.rc-tooltip-placement-rightTop .rc-tooltip-arrow,
	.rc-tooltip-placement-rightBottom .rc-tooltip-arrow {
		left: -5px;
		margin-top: -6px;
		border-width: 6px 6px 6px 0;
		border-right-color: #b1b1b1;
	}
	.rc-tooltip-placement-right .rc-tooltip-arrow-inner,
	.rc-tooltip-placement-rightTop .rc-tooltip-arrow-inner,
	.rc-tooltip-placement-rightBottom .rc-tooltip-arrow-inner {
		left: 1px;
		margin-top: -6px;
		border-width: 6px 6px 6px 0;
		border-right-color: #ffffff;
	}
	.rc-tooltip-placement-right .rc-tooltip-arrow {
		top: 50%;
	}
	.rc-tooltip-placement-rightTop .rc-tooltip-arrow {
		top: 15%;
		margin-top: 0;
	}
	.rc-tooltip-placement-rightBottom .rc-tooltip-arrow {
		bottom: 15%;
	}
	.rc-tooltip-placement-left .rc-tooltip-arrow,
	.rc-tooltip-placement-leftTop .rc-tooltip-arrow,
	.rc-tooltip-placement-leftBottom .rc-tooltip-arrow {
		right: -5px;
		margin-top: -6px;
		border-width: 6px 0 6px 6px;
		border-left-color: #b1b1b1;
	}
	.rc-tooltip-placement-left .rc-tooltip-arrow-inner,
	.rc-tooltip-placement-leftTop .rc-tooltip-arrow-inner,
	.rc-tooltip-placement-leftBottom .rc-tooltip-arrow-inner {
		right: 1px;
		margin-top: -6px;
		border-width: 6px 0 6px 6px;
		border-left-color: #ffffff;
	}
	.rc-tooltip-placement-left .rc-tooltip-arrow {
		top: 50%;
	}
	.rc-tooltip-placement-leftTop .rc-tooltip-arrow {
		top: 15%;
		margin-top: 0;
	}
	.rc-tooltip-placement-leftBottom .rc-tooltip-arrow {
		bottom: 15%;
	}
	.rc-tooltip-placement-bottom .rc-tooltip-arrow,
	.rc-tooltip-placement-bottomLeft .rc-tooltip-arrow,
	.rc-tooltip-placement-bottomRight .rc-tooltip-arrow {
		top: -5px;
		margin-left: -6px;
		border-width: 0 6px 6px;
		border-bottom-color: #b1b1b1;
	}
	.rc-tooltip-placement-bottom .rc-tooltip-arrow-inner,
	.rc-tooltip-placement-bottomLeft .rc-tooltip-arrow-inner,
	.rc-tooltip-placement-bottomRight .rc-tooltip-arrow-inner {
		top: 1px;
		margin-left: -6px;
		border-width: 0 6px 6px;
		border-bottom-color: #ffffff;
	}
	.rc-tooltip-placement-bottom .rc-tooltip-arrow {
		left: 50%;
	}
	.rc-tooltip-placement-bottomLeft .rc-tooltip-arrow {
		left: 15%;
	}
	.rc-tooltip-placement-bottomRight .rc-tooltip-arrow {
		right: 15%;
	}

	/* CUSTOM ANIMATION */
	.rc-tooltip {
		/* box-shadow: 0 0 5px black; */
		color: gray;
		opacity: 1;
		max-width: 14rem;
	}

	.rc-tooltip.rc-tooltip-animate-enter,
	.rc-tooltip.rc-tooltip-animate-leave {
		display: block;
	}
	.rc-tooltip-animate-enter,
	.rc-tooltip-animate-appear {
		opacity: 0;
		animation-duration: 0.2s;
		animation-fill-mode: both;
		animation-timing-function: cubic-bezier(0.18, 0.89, 0.32, 1.28);
		animation-play-state: paused;
	}
	.rc-tooltip-animate-leave {
		animation-duration: 0.2s;
		animation-fill-mode: both;
		animation-timing-function: cubic-bezier(0.6, -0.3, 0.74, 0.05);
		animation-play-state: paused;
	}
	.rc-tooltip-animate-enter.rc-tooltip-animate-enter-active,
	.rc-tooltip-animate-appear.rc-tooltip-animate-appear-active {
		animation-name: ${tooltipFadeIn};
		animation-play-state: running;
	}
	.rc-tooltip-animate-leave.rc-tooltip-animate-leave-active {
		animation-name: ${tooltipFadeOut};
		animation-play-state: running;
	}
`;

export const ReactSelect = css`
	.reactselect {
		width: 100%;
		line-height: 1;

		&.clean {
			.reactselect__control {
				border: 1px solid transparent;
				background-color: transparent;
			}
			.reactselect__indicators {
				.reactselect__indicator.reactselect__dropdown-indicator,
				.reactselect__clear-indicator {
					padding: 0 5px;
				}
				.reactselect__indicator-separator {
					display: none;
				}
			}
			.reactselect__control--is-focused {
				border-color: transparent;
			}
		}

		.reactselect__control {
			min-height: 24px;
			border: 1px solid ${(p) => p.theme.separator_color};

			&:hover {
				border-color: ${(p) => p.theme.primary_color};
			}
			.reactselect__value-container {
				padding: 0 5px;

				.reactselect__single-value {
					min-height: 15px;
				}
			}
			.reactselect__indicators {
				.reactselect__indicator.reactselect__dropdown-indicator,
				.reactselect__clear-indicator {
					padding: 2px;
				}
			}
		}

		.reactselect__control--is-focused {
			box-shadow: 0 0 5px skyblue;
			border-color: ${(p) => p.theme.primary_color};
		}

		.reactselect__menu {
			.reactselect__menu-list {
				.reactselect__option:hover {
					background: ${(p) => mix(0.7, '#FFF', p.theme.primary_color)};
				}
				.reactselect__option--is-focused {
					background: ${(p) => mix(0.7, '#FFF', p.theme.primary_color)};
				}
				.reactselect__option--is-selected {
					background: ${(p) => p.theme.primary_color};
				}
			}
		}
	}

	.hasError .reactselect .reactselect__control {
		border-color: ${(p) => p.theme.error_color};
		background-color: ${(p) => mix(0.8, '#FFF', p.theme.error_color)};

		&:hover {
			border-color: ${(p) => p.theme.error_color};
		}
	}
`;

export const ReactTableOverrideCSS = css`
	.ReactTable {
		border-radius: ${(p) => p.theme.global_border_radius};
		font-size: ${(p) => p.theme.global_font_size};

		.rt-thead .rt-th.-sort-desc,
		.ReactTable .rt-thead .rt-td .-sort-desc {
			box-shadow: inset 0 -3px 0 0 ${(p) => p.theme.primary_color};
		}
		.rt-thead .rt-th.-sort-asc,
		.ReactTable .rt-thead .rt-td.-sort-asc {
			box-shadow: inset 0 3px 0 0 ${(p) => p.theme.primary_color};
		}

		.rt-th,
		.rt-td {
			padding: 2px 5px;
			display: flex;
			align-items: center;
		}

		.rt-tbody {
			.rt-tr.row--selected {
				background-color: ${(p) => mix(0.8, '#fff', p.theme.link_color)};
				background-image: linear-gradient(
					to right,
					${(p) => mix(0.7, '#fff', p.theme.link_color)},
					${(p) => mix(0.86, '#fff', p.theme.link_color)}
				);
			}

			.rt-tr-group {
				position: relative;
				transition: background-color 0.2s ease-in-out;

				&:hover,
				&:nth-child(even):hover {
					background-color: ${(p) => mix(0.75, '#fff', p.theme.primary_color)};
					border: none;
					/* color: white; */
				}

				&:nth-child(odd) {
					border: none;
				}

				&:nth-child(even) {
					background-color: ${(p) => mix(0.91, '#fff', p.theme.primary_color)};
					border: none;
				}
			}
		}
	}
`;

export const ReactTableOriginalCSS = css`
	.ReactTable {
		position: relative;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-ms-flex-direction: column;
		flex-direction: column;
		border: 1px solid rgba(0, 0, 0, 0.1);
	}
	.ReactTable * {
		box-sizing: border-box;
	}
	.ReactTable .rt-table {
		-webkit-box-flex: 1;
		-ms-flex: auto 1;
		flex: auto 1;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-ms-flex-direction: column;
		flex-direction: column;
		-webkit-box-align: stretch;
		-ms-flex-align: stretch;
		align-items: stretch;
		width: 100%;
		border-collapse: collapse;
		overflow: auto;
	}
	.ReactTable .rt-thead {
		-webkit-box-flex: 1;
		-ms-flex: 1 0 auto;
		flex: 1 0 auto;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-ms-flex-direction: column;
		flex-direction: column;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}
	.ReactTable .rt-thead.-headerGroups {
		background: rgba(0, 0, 0, 0.03);
		border-bottom: 1px solid rgba(0, 0, 0, 0.05);
	}
	.ReactTable .rt-thead.-filters {
		border-bottom: 1px solid rgba(0, 0, 0, 0.05);
	}
	.ReactTable .rt-thead.-filters input,
	.ReactTable .rt-thead.-filters select {
		border: 1px solid rgba(0, 0, 0, 0.1);
		background: #fff;
		padding: 5px 7px;
		font-size: inherit;
		border-radius: 3px;
		font-weight: normal;
		outline: none;
	}
	.ReactTable .rt-thead.-filters .rt-th {
		border-right: 1px solid rgba(0, 0, 0, 0.02);
	}
	.ReactTable .rt-thead.-header {
		box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.15);
	}
	.ReactTable .rt-thead .rt-tr {
		text-align: center;
	}
	.ReactTable .rt-thead .rt-th,
	.ReactTable .rt-thead .rt-td {
		padding: 5px 5px;
		line-height: normal;
		position: relative;
		border-right: 1px solid rgba(0, 0, 0, 0.05);
		transition: box-shadow 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
		box-shadow: inset 0 0 0 0 transparent;
	}
	.ReactTable .rt-thead .rt-th.-sort-asc,
	.ReactTable .rt-thead .rt-td.-sort-asc {
		box-shadow: inset 0 3px 0 0 rgba(0, 0, 0, 0.6);
	}
	.ReactTable .rt-thead .rt-th.-sort-desc,
	.ReactTable .rt-thead .rt-td.-sort-desc {
		box-shadow: inset 0 -3px 0 0 rgba(0, 0, 0, 0.6);
	}
	.ReactTable .rt-thead .rt-th.-cursor-pointer,
	.ReactTable .rt-thead .rt-td.-cursor-pointer {
		cursor: pointer;
	}
	.ReactTable .rt-thead .rt-th:last-child,
	.ReactTable .rt-thead .rt-td:last-child {
		border-right: 0;
	}
	.ReactTable .rt-thead .rt-resizable-header {
		overflow: visible;
	}
	.ReactTable .rt-thead .rt-resizable-header:last-child {
		overflow: hidden;
	}
	.ReactTable .rt-thead .rt-resizable-header-content {
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.ReactTable .rt-thead .rt-header-pivot {
		border-right-color: #f7f7f7;
	}
	.ReactTable .rt-thead .rt-header-pivot:after,
	.ReactTable .rt-thead .rt-header-pivot:before {
		left: 100%;
		top: 50%;
		border: solid transparent;
		content: ' ';
		height: 0;
		width: 0;
		position: absolute;
		pointer-events: none;
	}
	.ReactTable .rt-thead .rt-header-pivot:after {
		border-color: rgba(255, 255, 255, 0);
		border-left-color: #fff;
		border-width: 8px;
		margin-top: -8px;
	}
	.ReactTable .rt-thead .rt-header-pivot:before {
		border-color: rgba(102, 102, 102, 0);
		border-left-color: #f7f7f7;
		border-width: 10px;
		margin-top: -10px;
	}
	.ReactTable .rt-tbody {
		-webkit-box-flex: 99999;
		-ms-flex: 99999 1 auto;
		flex: 99999 1 auto;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-ms-flex-direction: column;
		flex-direction: column;
		overflow: auto;
	}
	.ReactTable .rt-tbody .rt-tr-group {
		border-bottom: solid 1px rgba(0, 0, 0, 0.05);
	}
	.ReactTable .rt-tbody .rt-tr-group:last-child {
		border-bottom: 0;
	}
	.ReactTable .rt-tbody .rt-td {
		border-right: 1px solid rgba(0, 0, 0, 0.02);
	}
	.ReactTable .rt-tbody .rt-td:last-child {
		border-right: 0;
	}
	.ReactTable .rt-tbody .rt-expandable {
		cursor: pointer;
		text-overflow: clip;
	}
	.ReactTable .rt-tr-group {
		-webkit-box-flex: 1;
		-ms-flex: 1 0 auto;
		flex: 1 0 auto;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-ms-flex-direction: column;
		flex-direction: column;
		-webkit-box-align: stretch;
		-ms-flex-align: stretch;
		align-items: stretch;
	}
	.ReactTable .rt-tr {
		-webkit-box-flex: 1;
		-ms-flex: 1 0 auto;
		flex: 1 0 auto;
		display: -webkit-inline-box;
		display: -ms-inline-flexbox;
		display: inline-flex;
	}
	.ReactTable .rt-th,
	.ReactTable .rt-td {
		-webkit-box-flex: 1;
		-ms-flex: 1 0 0px;
		flex: 1 0 0;
		white-space: nowrap;
		text-overflow: ellipsis;
		padding: 7px 5px;
		overflow: hidden;
		transition: 0.3s ease;
		transition-property: width, min-width, padding, opacity;
	}
	.ReactTable .rt-th.-hidden,
	.ReactTable .rt-td.-hidden {
		width: 0 !important;
		min-width: 0 !important;
		padding: 0 !important;
		border: 0 !important;
		opacity: 0 !important;
	}
	.ReactTable .rt-expander {
		display: inline-block;
		position: relative;
		margin: 0;
		color: transparent;
		margin: 0 10px;
	}
	.ReactTable .rt-expander:after {
		content: '';
		position: absolute;
		width: 0;
		height: 0;
		top: 50%;
		left: 50%;
		-webkit-transform: translate(-50%, -50%) rotate(-90deg);
		transform: translate(-50%, -50%) rotate(-90deg);
		border-left: 5.04px solid transparent;
		border-right: 5.04px solid transparent;
		border-top: 7px solid rgba(0, 0, 0, 0.8);
		transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
		cursor: pointer;
	}
	.ReactTable .rt-expander.-open:after {
		-webkit-transform: translate(-50%, -50%) rotate(0);
		transform: translate(-50%, -50%) rotate(0);
	}
	.ReactTable .rt-resizer {
		display: inline-block;
		position: absolute;
		width: 36px;
		top: 0;
		bottom: 0;
		right: -18px;
		cursor: col-resize;
		z-index: 10;
	}
	.ReactTable .rt-tfoot {
		-webkit-box-flex: 1;
		-ms-flex: 1 0 auto;
		flex: 1 0 auto;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-ms-flex-direction: column;
		flex-direction: column;
		box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.15);
	}
	.ReactTable .rt-tfoot .rt-td {
		border-right: 1px solid rgba(0, 0, 0, 0.05);
	}
	.ReactTable .rt-tfoot .rt-td:last-child {
		border-right: 0;
	}
	.ReactTable.-striped .rt-tr.-odd {
		background: rgba(0, 0, 0, 0.03);
	}
	.ReactTable.-highlight .rt-tbody .rt-tr:not(.-padRow):hover {
		background: rgba(0, 0, 0, 0.05);
	}
	.ReactTable .-pagination {
		z-index: 1;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: justify;
		-ms-flex-pack: justify;
		justify-content: space-between;
		-webkit-box-align: stretch;
		-ms-flex-align: stretch;
		align-items: stretch;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		padding: 3px;
		box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.1);
		border-top: 2px solid rgba(0, 0, 0, 0.1);
	}
	.ReactTable .-pagination input,
	.ReactTable .-pagination select {
		border: 1px solid rgba(0, 0, 0, 0.1);
		background: #fff;
		padding: 5px 7px;
		font-size: inherit;
		border-radius: 3px;
		font-weight: normal;
		outline: none;
	}
	.ReactTable .-pagination .-btn {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		display: block;
		width: 100%;
		height: 100%;
		border: 0;
		border-radius: 3px;
		padding: 6px;
		font-size: 1em;
		color: rgba(0, 0, 0, 0.6);
		background: rgba(0, 0, 0, 0.1);
		transition: all 0.1s ease;
		cursor: pointer;
		outline: none;
	}
	.ReactTable .-pagination .-btn[disabled] {
		opacity: 0.5;
		cursor: default;
	}
	.ReactTable .-pagination .-btn:not([disabled]):hover {
		background: rgba(0, 0, 0, 0.3);
		color: #fff;
	}
	.ReactTable .-pagination .-previous,
	.ReactTable .-pagination .-next {
		-webkit-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
		text-align: center;
	}
	.ReactTable .-pagination .-center {
		-webkit-box-flex: 1.5;
		-ms-flex: 1.5;
		flex: 1.5;
		text-align: center;
		margin-bottom: 0;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: horizontal;
		-webkit-box-direction: normal;
		-ms-flex-direction: row;
		flex-direction: row;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		-ms-flex-pack: distribute;
		justify-content: space-around;
	}
	.ReactTable .-pagination .-pageInfo {
		display: inline-block;
		margin: 3px 10px;
		white-space: nowrap;
	}
	.ReactTable .-pagination .-pageJump {
		display: inline-block;
	}
	.ReactTable .-pagination .-pageJump input {
		width: 70px;
		text-align: center;
	}
	.ReactTable .-pagination .-pageSizeOptions {
		margin: 3px 10px;
	}
	.ReactTable .rt-noData {
		display: block;
		position: absolute;
		left: 50%;
		top: 50%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		background: rgba(255, 255, 255, 0.8);
		transition: all 0.3s ease;
		z-index: 1;
		pointer-events: none;
		padding: 20px;
		color: rgba(0, 0, 0, 0.5);
	}
	.ReactTable .-loading {
		display: block;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background: rgba(255, 255, 255, 0.8);
		transition: all 0.3s ease;
		z-index: -1;
		opacity: 0;
		pointer-events: none;
	}
	.ReactTable .-loading > div {
		position: absolute;
		display: block;
		text-align: center;
		width: 100%;
		top: 50%;
		left: 0;
		font-size: 15px;
		color: rgba(0, 0, 0, 0.6);
		-webkit-transform: translateY(-52%);
		transform: translateY(-52%);
		transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
	}
	.ReactTable .-loading.-active {
		opacity: 1;
		z-index: 2;
		pointer-events: all;
	}
	.ReactTable .-loading.-active > div {
		-webkit-transform: translateY(50%);
		transform: translateY(50%);
	}
	.ReactTable .rt-resizing .rt-th,
	.ReactTable .rt-resizing .rt-td {
		transition: none !important;
		cursor: col-resize;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}
`;

// ********************************************************** */
// React Datepicker
// ********************************************************** */

export const ReactDatepickerCSS = css`
	.react-datepicker-popper[data-placement^='bottom'] .react-datepicker__triangle,
	.react-datepicker-popper[data-placement^='top'] .react-datepicker__triangle,
	.react-datepicker__year-read-view--down-arrow,
	.react-datepicker__month-read-view--down-arrow,
	.react-datepicker__month-year-read-view--down-arrow {
		margin-left: -8px;
		position: absolute;
	}

	.react-datepicker-popper[data-placement^='bottom'] .react-datepicker__triangle,
	.react-datepicker-popper[data-placement^='top'] .react-datepicker__triangle,
	.react-datepicker__year-read-view--down-arrow,
	.react-datepicker__month-read-view--down-arrow,
	.react-datepicker__month-year-read-view--down-arrow,
	.react-datepicker-popper[data-placement^='bottom'] .react-datepicker__triangle::before,
	.react-datepicker-popper[data-placement^='top'] .react-datepicker__triangle::before,
	.react-datepicker__year-read-view--down-arrow::before,
	.react-datepicker__month-read-view--down-arrow::before,
	.react-datepicker__month-year-read-view--down-arrow::before {
		box-sizing: content-box;
		position: absolute;
		border: 8px solid transparent;
		height: 0;
		width: 1px;
	}

	.react-datepicker-popper[data-placement^='bottom'] .react-datepicker__triangle::before,
	.react-datepicker-popper[data-placement^='top'] .react-datepicker__triangle::before,
	.react-datepicker__year-read-view--down-arrow::before,
	.react-datepicker__month-read-view--down-arrow::before,
	.react-datepicker__month-year-read-view--down-arrow::before {
		content: '';
		z-index: -1;
		border-width: 8px;
		left: -8px;
		border-bottom-color: #aeaeae;
	}

	.react-datepicker-popper[data-placement^='bottom'] .react-datepicker__triangle {
		top: 0;
		margin-top: -8px;
	}

	.react-datepicker-popper[data-placement^='bottom'] .react-datepicker__triangle,
	.react-datepicker-popper[data-placement^='bottom'] .react-datepicker__triangle::before {
		border-top: none;
		border-bottom-color: #f0f0f0;
	}

	.react-datepicker-popper[data-placement^='bottom'] .react-datepicker__triangle::before {
		top: -1px;
		border-bottom-color: #aeaeae;
	}

	.react-datepicker-popper[data-placement^='top'] .react-datepicker__triangle,
	.react-datepicker__year-read-view--down-arrow,
	.react-datepicker__month-read-view--down-arrow,
	.react-datepicker__month-year-read-view--down-arrow {
		bottom: 0;
		margin-bottom: -8px;
	}

	.react-datepicker-popper[data-placement^='top'] .react-datepicker__triangle,
	.react-datepicker__year-read-view--down-arrow,
	.react-datepicker__month-read-view--down-arrow,
	.react-datepicker__month-year-read-view--down-arrow,
	.react-datepicker-popper[data-placement^='top'] .react-datepicker__triangle::before,
	.react-datepicker__year-read-view--down-arrow::before,
	.react-datepicker__month-read-view--down-arrow::before,
	.react-datepicker__month-year-read-view--down-arrow::before {
		border-bottom: none;
		border-top-color: #fff;
	}

	.react-datepicker-popper[data-placement^='top'] .react-datepicker__triangle::before,
	.react-datepicker__year-read-view--down-arrow::before,
	.react-datepicker__month-read-view--down-arrow::before,
	.react-datepicker__month-year-read-view--down-arrow::before {
		bottom: -1px;
		border-top-color: #aeaeae;
	}

	.react-datepicker-wrapper {
		display: inline-block;
	}

	.react-datepicker {
		font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
		font-size: 0.8rem;
		background-color: #fff;
		color: #000;
		border: 1px solid #aeaeae;
		border-radius: 0.3rem;
		display: inline-block;
		position: relative;
	}

	.react-datepicker--time-only .react-datepicker__triangle {
		left: 35px;
	}

	.react-datepicker--time-only .react-datepicker__time-container {
		border-left: 0;
	}

	.react-datepicker--time-only .react-datepicker__time {
		border-radius: 0.3rem;
	}

	.react-datepicker--time-only .react-datepicker__time-box {
		border-radius: 0.3rem;
	}

	.react-datepicker__triangle {
		position: absolute;
		left: 50px;
	}

	.react-datepicker-popper {
		z-index: 1;
	}

	.react-datepicker-popper[data-placement^='bottom'] {
		margin-top: 10px;
	}

	.react-datepicker-popper[data-placement^='top'] {
		margin-bottom: 10px;
	}

	.react-datepicker-popper[data-placement^='right'] {
		margin-left: 8px;
	}

	.react-datepicker-popper[data-placement^='right'] .react-datepicker__triangle {
		left: auto;
		right: 42px;
	}

	.react-datepicker-popper[data-placement^='left'] {
		margin-right: 8px;
	}

	.react-datepicker-popper[data-placement^='left'] .react-datepicker__triangle {
		left: 42px;
		right: auto;
	}

	.react-datepicker__header {
		text-align: center;
		background-color: #f0f0f0;
		border-bottom: 1px solid #aeaeae;
		border-top-left-radius: 0.3rem;
		border-top-right-radius: 0.3rem;
		padding-top: 8px;
		position: relative;
	}

	.react-datepicker__header--time {
		padding-bottom: 8px;
		padding-left: 5px;
		padding-right: 5px;
	}

	.react-datepicker__year-dropdown-container--select,
	.react-datepicker__month-dropdown-container--select,
	.react-datepicker__month-year-dropdown-container--select,
	.react-datepicker__year-dropdown-container--scroll,
	.react-datepicker__month-dropdown-container--scroll,
	.react-datepicker__month-year-dropdown-container--scroll {
		display: inline-block;
		margin: 0 2px;
	}

	.react-datepicker__current-month,
	.react-datepicker-time__header {
		margin-top: 0;
		color: #000;
		font-weight: bold;
		font-size: 0.944rem;
	}

	.react-datepicker-time__header {
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}

	.react-datepicker__navigation {
		background: none;
		line-height: 1.7rem;
		text-align: center;
		cursor: pointer;
		position: absolute;
		top: 10px;
		width: 0;
		padding: 0;
		border: 0.45rem solid transparent;
		z-index: 1;
		height: 10px;
		width: 10px;
		text-indent: -999em;
		overflow: hidden;
	}

	.react-datepicker__navigation--previous {
		left: 10px;
		border-right-color: #ccc;
	}

	.react-datepicker__navigation--previous:hover {
		border-right-color: #b3b3b3;
	}

	.react-datepicker__navigation--previous--disabled,
	.react-datepicker__navigation--previous--disabled:hover {
		border-right-color: #e6e6e6;
		cursor: default;
	}

	.react-datepicker__navigation--next {
		right: 10px;
		border-left-color: #ccc;
	}

	.react-datepicker__navigation--next--with-time:not(.react-datepicker__navigation--next--with-today-button) {
		right: 80px;
	}

	.react-datepicker__navigation--next:hover {
		border-left-color: #b3b3b3;
	}

	.react-datepicker__navigation--next--disabled,
	.react-datepicker__navigation--next--disabled:hover {
		border-left-color: #e6e6e6;
		cursor: default;
	}

	.react-datepicker__navigation--years {
		position: relative;
		top: 0;
		display: block;
		margin-left: auto;
		margin-right: auto;
	}

	.react-datepicker__navigation--years-previous {
		top: 4px;
		border-top-color: #ccc;
	}

	.react-datepicker__navigation--years-previous:hover {
		border-top-color: #b3b3b3;
	}

	.react-datepicker__navigation--years-upcoming {
		top: -4px;
		border-bottom-color: #ccc;
	}

	.react-datepicker__navigation--years-upcoming:hover {
		border-bottom-color: #b3b3b3;
	}

	.react-datepicker__month-container {
		float: left;
	}

	.react-datepicker__month {
		margin: 0.4rem;
		text-align: center;
	}

	.react-datepicker__time-container {
		float: right;
		border-left: 1px solid #aeaeae;
		width: 70px;
	}

	.react-datepicker__time-container--with-today-button {
		display: inline;
		border: 1px solid #aeaeae;
		border-radius: 0.3rem;
		position: absolute;
		right: -72px;
		top: 0;
	}

	.react-datepicker__time-container .react-datepicker__time {
		position: relative;
		background: white;
	}

	.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box {
		width: 70px;
		overflow-x: hidden;
		margin: 0 auto;
		text-align: center;
	}

	.react-datepicker__time-container
		.react-datepicker__time
		.react-datepicker__time-box
		ul.react-datepicker__time-list {
		list-style: none;
		margin: 0;
		height: calc(195px + (1.7rem / 2));
		overflow-y: scroll;
		padding-right: 0px;
		padding-left: 0px;
		width: 100%;
		box-sizing: content-box;
	}

	.react-datepicker__time-container
		.react-datepicker__time
		.react-datepicker__time-box
		ul.react-datepicker__time-list
		li.react-datepicker__time-list-item {
		height: 30px;
		padding: 5px 10px;
	}

	.react-datepicker__time-container
		.react-datepicker__time
		.react-datepicker__time-box
		ul.react-datepicker__time-list
		li.react-datepicker__time-list-item:hover {
		cursor: pointer;
		background-color: #f0f0f0;
	}

	.react-datepicker__time-container
		.react-datepicker__time
		.react-datepicker__time-box
		ul.react-datepicker__time-list
		li.react-datepicker__time-list-item--selected {
		background-color: #216ba5;
		color: white;
		font-weight: bold;
	}

	.react-datepicker__time-container
		.react-datepicker__time
		.react-datepicker__time-box
		ul.react-datepicker__time-list
		li.react-datepicker__time-list-item--selected:hover {
		background-color: #216ba5;
	}

	.react-datepicker__time-container
		.react-datepicker__time
		.react-datepicker__time-box
		ul.react-datepicker__time-list
		li.react-datepicker__time-list-item--disabled {
		color: #ccc;
	}

	.react-datepicker__time-container
		.react-datepicker__time
		.react-datepicker__time-box
		ul.react-datepicker__time-list
		li.react-datepicker__time-list-item--disabled:hover {
		cursor: default;
		background-color: transparent;
	}

	.react-datepicker__week-number {
		color: #ccc;
		display: inline-block;
		width: 1.7rem;
		line-height: 1.7rem;
		text-align: center;
		margin: 0.166rem;
	}

	.react-datepicker__week-number.react-datepicker__week-number--clickable {
		cursor: pointer;
	}

	.react-datepicker__week-number.react-datepicker__week-number--clickable:hover {
		border-radius: 0.3rem;
		background-color: #f0f0f0;
	}

	.react-datepicker__day-names,
	.react-datepicker__week {
		white-space: nowrap;
	}

	.react-datepicker__day-name,
	.react-datepicker__day,
	.react-datepicker__time-name {
		color: #000;
		display: inline-block;
		width: 1.7rem;
		line-height: 1.7rem;
		text-align: center;
		margin: 0.166rem;
	}

	.react-datepicker__day {
		cursor: pointer;
	}

	.react-datepicker__day:hover {
		border-radius: 0.3rem;
		background-color: #f0f0f0;
	}

	.react-datepicker__day--today {
		font-weight: bold;
	}

	.react-datepicker__day--highlighted {
		border-radius: 0.3rem;
		background-color: #3dcc4a;
		color: #fff;
	}

	.react-datepicker__day--highlighted:hover {
		background-color: #32be3f;
	}

	.react-datepicker__day--highlighted-custom-1 {
		color: magenta;
	}

	.react-datepicker__day--highlighted-custom-2 {
		color: green;
	}

	.react-datepicker__day--selected,
	.react-datepicker__day--in-selecting-range,
	.react-datepicker__day--in-range {
		border-radius: 0.3rem;
		background-color: #216ba5;
		color: #fff;
	}

	.react-datepicker__day--selected:hover,
	.react-datepicker__day--in-selecting-range:hover,
	.react-datepicker__day--in-range:hover {
		background-color: #1d5d90;
	}

	.react-datepicker__day--keyboard-selected {
		border-radius: 0.3rem;
		background-color: #2a87d0;
		color: #fff;
	}

	.react-datepicker__day--keyboard-selected:hover {
		background-color: #1d5d90;
	}

	.react-datepicker__day--in-selecting-range:not(.react-datepicker__day--in-range) {
		background-color: rgba(33, 107, 165, 0.5);
	}

	.react-datepicker__month--selecting-range
		.react-datepicker__day--in-range:not(.react-datepicker__day--in-selecting-range) {
		background-color: #f0f0f0;
		color: #000;
	}

	.react-datepicker__day--disabled {
		cursor: default;
		color: #ccc;
	}

	.react-datepicker__day--disabled:hover {
		background-color: transparent;
	}

	.react-datepicker__input-container {
		position: relative;
		display: inline-block;
	}

	.react-datepicker__year-read-view,
	.react-datepicker__month-read-view,
	.react-datepicker__month-year-read-view {
		border: 1px solid transparent;
		border-radius: 0.3rem;
	}

	.react-datepicker__year-read-view:hover,
	.react-datepicker__month-read-view:hover,
	.react-datepicker__month-year-read-view:hover {
		cursor: pointer;
	}

	.react-datepicker__year-read-view:hover .react-datepicker__year-read-view--down-arrow,
	.react-datepicker__year-read-view:hover .react-datepicker__month-read-view--down-arrow,
	.react-datepicker__month-read-view:hover .react-datepicker__year-read-view--down-arrow,
	.react-datepicker__month-read-view:hover .react-datepicker__month-read-view--down-arrow,
	.react-datepicker__month-year-read-view:hover
		.react-datepicker__year-read-view--down-arrow,
	.react-datepicker__month-year-read-view:hover
		.react-datepicker__month-read-view--down-arrow {
		border-top-color: #b3b3b3;
	}

	.react-datepicker__year-read-view--down-arrow,
	.react-datepicker__month-read-view--down-arrow,
	.react-datepicker__month-year-read-view--down-arrow {
		border-top-color: #ccc;
		float: right;
		margin-left: 20px;
		top: 8px;
		position: relative;
		border-width: 0.45rem;
	}

	.react-datepicker__year-dropdown,
	.react-datepicker__month-dropdown,
	.react-datepicker__month-year-dropdown {
		background-color: #f0f0f0;
		position: absolute;
		width: 50%;
		left: 25%;
		top: 30px;
		z-index: 1;
		text-align: center;
		border-radius: 0.3rem;
		border: 1px solid #aeaeae;
	}

	.react-datepicker__year-dropdown:hover,
	.react-datepicker__month-dropdown:hover,
	.react-datepicker__month-year-dropdown:hover {
		cursor: pointer;
	}

	.react-datepicker__year-dropdown--scrollable,
	.react-datepicker__month-dropdown--scrollable,
	.react-datepicker__month-year-dropdown--scrollable {
		height: 150px;
		overflow-y: scroll;
	}

	.react-datepicker__year-option,
	.react-datepicker__month-option,
	.react-datepicker__month-year-option {
		line-height: 20px;
		width: 100%;
		display: block;
		margin-left: auto;
		margin-right: auto;
	}

	.react-datepicker__year-option:first-of-type,
	.react-datepicker__month-option:first-of-type,
	.react-datepicker__month-year-option:first-of-type {
		border-top-left-radius: 0.3rem;
		border-top-right-radius: 0.3rem;
	}

	.react-datepicker__year-option:last-of-type,
	.react-datepicker__month-option:last-of-type,
	.react-datepicker__month-year-option:last-of-type {
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		border-bottom-left-radius: 0.3rem;
		border-bottom-right-radius: 0.3rem;
	}

	.react-datepicker__year-option:hover,
	.react-datepicker__month-option:hover,
	.react-datepicker__month-year-option:hover {
		background-color: #ccc;
	}

	.react-datepicker__year-option:hover .react-datepicker__navigation--years-upcoming,
	.react-datepicker__month-option:hover .react-datepicker__navigation--years-upcoming,
	.react-datepicker__month-year-option:hover
		.react-datepicker__navigation--years-upcoming {
		border-bottom-color: #b3b3b3;
	}

	.react-datepicker__year-option:hover .react-datepicker__navigation--years-previous,
	.react-datepicker__month-option:hover .react-datepicker__navigation--years-previous,
	.react-datepicker__month-year-option:hover
		.react-datepicker__navigation--years-previous {
		border-top-color: #b3b3b3;
	}

	.react-datepicker__year-option--selected,
	.react-datepicker__month-option--selected,
	.react-datepicker__month-year-option--selected {
		position: absolute;
		left: 15px;
	}

	.react-datepicker__close-icon {
		background-color: transparent;
		border: 0;
		cursor: pointer;
		outline: 0;
		padding: 0;
		vertical-align: middle;
		position: absolute;
		height: 16px;
		width: 16px;
		top: 25%;
		right: 7px;
	}

	.react-datepicker__close-icon::after {
		background-color: #216ba5;
		border-radius: 50%;
		bottom: 0;
		box-sizing: border-box;
		color: #fff;
		content: '\00d7';
		cursor: pointer;
		font-size: 12px;
		height: 16px;
		width: 16px;
		line-height: 1;
		margin: -8px auto 0;
		padding: 2px;
		position: absolute;
		right: 0px;
		text-align: center;
	}

	.react-datepicker__today-button {
		background: #f0f0f0;
		border-top: 1px solid #aeaeae;
		cursor: pointer;
		text-align: center;
		font-weight: bold;
		padding: 5px 0;
		clear: left;
	}

	.react-datepicker__portal {
		position: fixed;
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.8);
		left: 0;
		top: 0;
		justify-content: center;
		align-items: center;
		display: flex;
		z-index: 2147483647;
	}

	.react-datepicker__portal .react-datepicker__day-name,
	.react-datepicker__portal .react-datepicker__day,
	.react-datepicker__portal .react-datepicker__time-name {
		width: 3rem;
		line-height: 3rem;
	}

	@media (max-width: 400px), (max-height: 550px) {
		.react-datepicker__portal .react-datepicker__day-name,
		.react-datepicker__portal .react-datepicker__day,
		.react-datepicker__portal .react-datepicker__time-name {
			width: 2rem;
			line-height: 2rem;
		}
	}

	.react-datepicker__portal .react-datepicker__current-month,
	.react-datepicker__portal .react-datepicker-time__header {
		font-size: 1.44rem;
	}

	.react-datepicker__portal .react-datepicker__navigation {
		border: 0.81rem solid transparent;
	}

	.react-datepicker__portal .react-datepicker__navigation--previous {
		border-right-color: #ccc;
	}

	.react-datepicker__portal .react-datepicker__navigation--previous:hover {
		border-right-color: #b3b3b3;
	}

	.react-datepicker__portal .react-datepicker__navigation--previous--disabled,
	.react-datepicker__portal .react-datepicker__navigation--previous--disabled:hover {
		border-right-color: #e6e6e6;
		cursor: default;
	}

	.react-datepicker__portal .react-datepicker__navigation--next {
		border-left-color: #ccc;
	}

	.react-datepicker__portal .react-datepicker__navigation--next:hover {
		border-left-color: #b3b3b3;
	}

	.react-datepicker__portal .react-datepicker__navigation--next--disabled,
	.react-datepicker__portal .react-datepicker__navigation--next--disabled:hover {
		border-left-color: #e6e6e6;
		cursor: default;
	}
`;
