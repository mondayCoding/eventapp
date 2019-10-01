import React, { SFC } from 'react';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';
import { connect, FormikProps } from 'formik';

interface AutoDebuggerProps {
	isPlain?: boolean;
	formik: FormikProps<any>;
}

// Formik form visualisoija, ei tarvitse erillista json arvoa, toimii vain formikin sisällä
const JSONFormikDebug: SFC<AutoDebuggerProps> = ({
	isPlain = false,
	formik: { values }
}) => {
	const Visualisation = isPlain ? (
		<pre>{JSON.stringify(values, null, 2)}</pre>
	) : (
		<JSONPretty id="json-pretty" json={JSON.stringify(values)} />
	);

	return process.env.NODE_ENV === 'development' ? <>{Visualisation}</> : null;
};

export const AutoFormDebug = connect<{ isPlain?: boolean }, any>(JSONFormikDebug);
