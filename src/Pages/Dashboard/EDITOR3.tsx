import React from 'react';
import { Editor } from 'slate-react';
import { Value } from 'slate';

// Create our initial value...
const initialValue = Value.fromJSON({
	document: {
		nodes: [
			{
				object: 'block',
				type: 'paragraph',
				nodes: [
					{
						object: 'text',
						text: 'A line of text in a paragraph.'
					}
				]
			}
		]
	}
});

// Define our app...
export class TEXTEDITOR3 extends React.Component {
	// Set the initial value when the app is first constructed.
	state = {
		value: initialValue
	};

	// On change, update the app's React state with the new editor value.
	onChange = ({ value }: any) => {
		this.setState({ value });
	};

	// Render the editor.
	render() {
		return (
			<>
				<Editor value={this.state.value} onChange={this.onChange} />
				{/* {this.state.value.toJSON()} */}
			</>
		);
	}
}
