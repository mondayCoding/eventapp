import React from 'react';
import { Body } from '../AppStyles';
import { MainPage } from './MainPage';
import { Navigation } from './Navigation';

export const AuthorisedApp = () => (
	<Body>
		<Navigation />
		<MainPage />
	</Body>
);
