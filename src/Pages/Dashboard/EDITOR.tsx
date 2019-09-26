import React, { Component } from 'react';
const CKEditor = require('@ckeditor/ckeditor5-react');
const ClassicEditor = require('@ckeditor/ckeditor5-build-classic');

export class TEXTEDITOR extends Component {
	state = {
		value: ''
	};
	render() {
		return (
			<div className="App">
				<h2>Using CKEditor 5 build in React</h2>
				<CKEditor
					editor={ClassicEditor}
					data="<p>Hello from CKEditor 5!</p>"
					config={
						{
							// fontSize: {
							// 	options: [9, 11, 13, 'default', 17, 19, 21]
							// },
							// fontFamily: {
							// 	options: [
							// 		'default',
							// 		'Ubuntu, Arial, sans-serif',
							// 		'Ubuntu Mono, Courier New, Courier, monospace'
							// 	]
							// },
							// toolbar: ['heading', 'fontSize', 'undo', 'redo']
						}
					}
					onInit={(editor: any) => {
						// You can store the "editor" and use when it is needed.
						console.log('Editor is ready to use!', editor);
					}}
					onChange={(event: any, editor: any) => {
						const data = editor.getData();
						this.setState({ value: data });
						console.log({ event, editor, data });
					}}
					onBlur={(event: any, editor: any) => {
						console.log('Blur.', editor);
					}}
					onFocus={(event: any, editor: any) => {
						console.log('Focus.', editor);
					}}
				/>
				{this.state.value}
			</div>
		);
	}
}
