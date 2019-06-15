import * as React from 'react';
import {
	SpinnerElement,
	SpinnerWrapper,
	TableSpinnerWrapper,
	SpinnerElementSecondary
} from './SpinnerStyle';

export const Spinner: React.SFC = () => (
	<SpinnerWrapper>
		<SpinnerElement />
	</SpinnerWrapper>
);

export const SpinnerSecondary: React.SFC = () => (
	<SpinnerWrapper>
		<SpinnerElementSecondary>
			<div />
			<div />
			<div />
			<div />
		</SpinnerElementSecondary>
	</SpinnerWrapper>
);

export default Spinner;

export const TableSpinner: React.FC<{ loading: boolean }> = ({ loading }) =>
	loading ? (
		<TableSpinnerWrapper>
			<SpinnerElementSecondary>
				<div />
				<div />
				<div />
				<div />
			</SpinnerElementSecondary>
		</TableSpinnerWrapper>
	) : null;
