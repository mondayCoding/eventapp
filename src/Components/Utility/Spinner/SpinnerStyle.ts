import styled, { keyframes } from '../../../Theme/theme';

const spinnerKeyframes = keyframes`
   0%,
   100% {
      box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em,
         -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;
   }
   12.5% {
      box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em,
         -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
   }
   25% {
      box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em,
         -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
   }
   37.5% {
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em,
         -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
   }
   50% {
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em,
         -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
   }
   62.5% {
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0,
         -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
   }
   75% {
      box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em,
         -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;
   }
   87.5% {
      box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em,
         -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
   }
`;

const spinnerKeyframesWebkit = keyframes`
   0%,
   100% {
      box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em,
         -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;
   }
   12.5% {
      box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em,
         -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
   }
   25% {
      box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em,
         -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
   }
   37.5% {
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em,
         -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
   }
   50% {
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em,
         -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
   }
   62.5% {
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0,
         -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
   }
   75% {
      box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em,
         -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;
   }
   87.5% {
      box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em,
         -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
   }
`;

const SecondarySpinnerKeyFrames = keyframes`
   0% {
      transform: rotate(0deg);
   }
   100% {
      transform: rotate(360deg);
   }
`;

export const SpinnerElement = styled.div`
	color: ${(p) => p.theme.link_color};
	font-size: 15px;
	margin: 100px auto;
	width: 1.25rem;
	height: 1.25rem;
	border-radius: 50%;
	position: relative;
	text-indent: -9999em;
	-webkit-animation: ${spinnerKeyframesWebkit} 1.3s infinite linear;
	animation: ${spinnerKeyframes} 1.3s infinite linear;
	-webkit-transform: translateZ(0);
	-ms-transform: translateZ(0);
	transform: translateZ(0);
	align-self: center;
`;

export const SpinnerElementSecondary = styled.div`
	display: inline-block;
	position: relative;
	width: 64px;
	height: 64px;

	div {
		box-sizing: border-box;
		display: block;
		position: absolute;
		width: 51px;
		height: 51px;
		margin: 6px;
		border: 6px solid ${(p) => p.theme.link_color};
		border-radius: 50%;
		animation: ${SecondarySpinnerKeyFrames} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
		border-color: ${(p) => p.theme.link_color} transparent transparent transparent;
	}
	div:nth-child(1) {
		animation-delay: -0.45s;
	}
	div:nth-child(2) {
		animation-delay: -0.3s;
	}
	div:nth-child(3) {
		animation-delay: -0.15s;
	}
`;

export const SpinnerWrapper = styled.div`
	min-height: 12rem;
	display: flex;
	flex-direction: column;
`;

export const TableSpinnerWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	background: rgba(255, 255, 255, 0.8);
	transition: all 0.3s ease;
	z-index: 100;
	opacity: 1;
	/* pointer-events: none; */
`;
