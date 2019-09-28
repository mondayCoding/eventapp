import React, { useRef, FC, MutableRefObject } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { Content, Main } from '../AppStyles';
import { Events } from '../Pages/Events/Events';
import { Event } from '../Pages/Event/Event';
import { DashBoard } from '../Pages/Dashboard/Dashboard';
import { TopPanel } from './TopPanel';
import * as routes from '../Constants/Routes_MODIF';
import { Customers } from '../Pages/Customers/Customers';
import { Customer } from '../Pages/Customer/Customer';
import { RegistrationForm } from '../Pages/RegistrationForm/RegistrationForm';
import { SendEmail } from '../Pages/SendEmail/SendEmail';
import { SignInPage } from '../Pages/SignIn/SingIn';
import { SignUpPage } from '../Pages/SignUp/SingUp';
import { UserSettings } from '../Pages/UserSettings/UserSettings';
import { SignOutPage } from '../Pages/SignOut/SignOut';

export const MainPage = () => {
	const ref = useRef(undefined as any | HTMLElement);
	return (
		<Content ref={ref}>
			<TopPanel />
			<Main>
				<Route path={'/'} component={() => <ScrollToTop external={ref}></ScrollToTop>} />
				<Switch>
					<Route exact path={routes.customers.path} component={Customers} />
					<Route exact path={routes.customer.path + '/:id'} component={Customer} />
					<Route exact path={routes.dashboard.path} component={DashBoard} />

					<Route exact path={routes.events.path} component={Events} />
					<Route path={routes.event.path + '/:id'} component={Event} />

					<Route
						path={routes.registrationform.path + '/:id'}
						component={RegistrationForm}
					/>
					<Route path={routes.sendEmail.path + '/:id?'} component={SendEmail} />
					<Route path={routes.settings.path} component={UserSettings} />
					{/* <Route path={routes.signIn.path} component={SignInPage} />
					<Route path={routes.signUp.path} component={SignUpPage} /> */}
					<Route path={routes.signOut.path} component={SignOutPage} />
					<Redirect to={routes.dashboard.path} />
				</Switch>
			</Main>
		</Content>
	);
};

const ScrollToTop: FC<{ external: MutableRefObject<any> }> = ({ external }) => {
	if (external.current) external.current._container.scrollTop = 0;
	return null;
};
