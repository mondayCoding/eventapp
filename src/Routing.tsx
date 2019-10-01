import React, { FC } from 'react';
import { RouteProps } from 'react-router-dom';
import { Redirect, Switch, Route } from 'react-router-dom';
import { SignInPage } from './Pages/SignIn/SingIn';
import { SignUpPage } from './Pages/SignUp/SingUp';
import { Registration } from './Pages/Registration/Registration';
import { Body } from './AppStyles';
import { PageWrapper } from './Layout/PageWrapper';
import { Navigation } from './Layout/Navigation';
import { Customers } from './Pages/Customers/Customers';
import { Customer } from './Pages/Customer/Customer';
import { RegistrationForm } from './Pages/RegistrationForm/RegistrationForm';
import { SendEmail } from './Pages/SendEmail/SendEmail';
import { UserSettings } from './Pages/UserSettings/UserSettings';
import { SignOutPage } from './Pages/SignOut/SignOut';
import { ImageBank } from './Pages/ImageBank/ImageBank';
import { Events } from './Pages/Events/Events';
import { Event } from './Pages/Event/Event';
import { DashBoard } from './Pages/Dashboard/Dashboard';
import * as routes from './Constants/Routes_MODIF';
import { ProductManagement } from './Pages/ProductManagement/ProductManagement';
import { PostOffice } from './Pages/PostOffice/PostOffice';

interface IRoutingProps {
	authorised: boolean;
}

export const Routing: FC<IRoutingProps> = (props) => (
	<Switch>
		{/* Protected pages */}
		<ProtectedRoute
			safe={props.authorised}
			exact
			path={routes.customers.path}
			component={Customers}
		/>
		<ProtectedRoute
			safe={props.authorised}
			exact
			path={routes.customer.path + '/:id'}
			component={Customer}
		/>
		<ProtectedRoute
			safe={props.authorised}
			exact
			path={routes.dashboard.path}
			component={DashBoard}
		/>
		<ProtectedRoute
			safe={props.authorised}
			exact
			path={routes.events.path}
			component={Events}
		/>
		<ProtectedRoute
			safe={props.authorised}
			path={routes.event.path + '/:id'}
			component={Event}
		/>
		<ProtectedRoute
			safe={props.authorised}
			exact
			path={routes.sendEmail.path + '/:id?'}
			component={SendEmail}
		/>
		<ProtectedRoute
			safe={props.authorised}
			exact
			path={routes.mediabank.path + '/:id?'}
			component={ImageBank}
		/>
		<ProtectedRoute
			safe={props.authorised}
			exact
			path={routes.settings.path}
			component={UserSettings}
		/>
		<ProtectedRoute
			safe={props.authorised}
			exact
			path={routes.registration.path + '/:id'}
			component={Registration}
		/>
		<ProtectedRoute
			safe={props.authorised}
			exact
			path={routes.registrationform.path + '/:id'}
			component={RegistrationForm}
		/>

		<ProtectedRoute
			safe={props.authorised}
			exact
			path={routes.productManagement.path}
			component={ProductManagement}
		/>

		<ProtectedRoute
			safe={props.authorised}
			exact
			path={routes.postOffice.path}
			component={PostOffice}
		/>

		{/* Public pages */}
		<Route exact path={routes.signOut.path} component={SignOutPage} />
		<Route exact path={routes.signIn.path} component={SignInPage} />
		<Route exact path={routes.signUp.path} component={SignUpPage} />

		{/* Redirect when no match */}
		<Redirect to={routes.signIn.path} />
	</Switch>
);

interface IProtected extends RouteProps {
	safe: boolean;
}

const ProtectedRoute: FC<IProtected> = ({ safe, component: Component, ...props }: any) =>
	safe ? (
		<Route
			{...props}
			render={(matchProps) => (
				<Body>
					<Navigation />
					<PageWrapper>
						<Component {...matchProps} />
					</PageWrapper>
				</Body>
			)}
		/>
	) : (
		<Redirect to={routes.signIn.path} />
	);
