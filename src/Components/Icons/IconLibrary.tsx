import { Icons } from './icons';
import * as React from 'react';

export const IconLibrary: React.FC = () => (
	<div>
		{[...Object.entries(Icons)].map((icon, index) => (
			<span
				key={index}
				style={{
					width: '2.5em',
					height: '2.5rem',
					borderRadius: '50%',
					backgroundColor: 'darkgray',
					display: 'inline-flex',
					justifyContent: 'center',
					alignItems: 'center',
					marginLeft: '.5rem',
					marginTop: '.25rem'
				}}
				onClick={() => alert(`KEY: ${icon[0]}`)}
			>
				<span title={icon[0]} style={{ fontSize: '1.25rem', color: 'white' }}>
					{icon[1]}
				</span>
			</span>
		))}
	</div>
);
