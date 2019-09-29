import React, { FC } from 'react';
import { RouteComponentProps, useHistory } from 'react-router';
import styled from '../../Theme/theme';
import { Heading } from '../../Components/Text/Heading';
import Icons from '../../Components/Icons/icons';
import { useCustomers } from '../../Queries/useCustomers';
import { CustomerTagType, CustomerTag } from '../../Constants/CustomerTags';
import ReactTimeago from 'react-timeago';
import 'bootstrap/dist/css/bootstrap.css';
import { BadgeTag } from '../../Components/BadgeTag';
import { PageFooter } from '../../Layout/MainFooter';
import { useDocumentTitle } from '../../Hooks/useDocumentTitle';
import { CustomerForm } from './CustomerForm';
import { CardWrapper } from '../../Components/CardWrapper';
import * as routes from '../../Constants/Routes_MODIF';
import { SelectBase } from '../../Components/Select/Select';
import { CustomerActionsMenu } from './CustomerActionsMenu';
import { IconButton } from '../../Components/Button/IconButton';
import { MockEvents } from '../../MockData/MockEvents';
import { TextAreaField } from '../../Components/TextArea/TextArea';

interface routeprops {
	id: string;
}

export const Customer: FC<RouteComponentProps<routeprops>> = ({ match }) => {
	useDocumentTitle('Asiakas');
	const { customers } = useCustomers();
	const history = useHistory();
	const customer = customers.find((cust) => cust.id === match.params.id);

	return (
		<>
			<div className="row">
				<div className="col-lg-8">
					<CardWrapper>
						<Heading
							text={customer ? `${customer.firstname} ${customer.lastname}` : ''}
							isUnderlined
						>
							{/* <div
               style={{ flex: '1 1 auto', justifyContent: 'flex-end', display: 'flex' }}
            >
               {customer && (
                  <div>
                     <CustomerActionsMenu id={customer.id} />
                     <IconButton icon={Icons.trashcan}></IconButton>
                     <IconButton icon={Icons.envelope}></IconButton>
               
                  </div>
               )}
            </div> */}
						</Heading>
						{customer && customer.tags && renderTags(customer.tags)}

						{/* Lomake */}
						<CustomerForm customer={customer!} />
					</CardWrapper>
				</div>

				<div className="col-lg-4">
					<CardWrapper>
						<img
							alt=""
							className="card__image"
							src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
						/>
					</CardWrapper>
				</div>
			</div>

			<div className="row" style={{ marginTop: '1.5rem' }}>
				<div className="col-lg-6">
					<CardWrapper>
						<Heading
							text="Osallistumiset"
							ingress="Osallistumishistoria"
							isUnderlined
						></Heading>

						{MockParticipations.map((event) => (
							<Participations
								date={new Date(2017, 8, 11)}
								name={event.name}
								onClick={() =>
									history.push(routes.event.path + '/' + event.id + '/frontpage')
								}
							></Participations>
						))}
					</CardWrapper>
				</div>

				<div className="col-lg-6">
					<CardWrapper>
						<Heading
							text="Viestintä"
							isUnderlined
							ingress="Asiakkaalle lähetetyt viestit"
						></Heading>
						{MockMessages.map((message) => (
							<MessageLog title={message.title} date={message.date}></MessageLog>
						))}
					</CardWrapper>
				</div>
			</div>

			<PageFooter showDates></PageFooter>
		</>
	);
};

interface IParticipationProps {
	date: Date;
	name: string;
	icon?: React.ReactNode;
	onClick?: () => void;
	id?: string;
}

const MockParticipations = [MockEvents[1], MockEvents[4], MockEvents[3], MockEvents[2]];

const Participations: FC<IParticipationProps> = (props) => (
	<Participated onClick={props.onClick}>
		<div className="icon">{Icons.check_circle}</div>
		<div className="name">{props.name}</div>
		<div className="date__ago">
			<ReactTimeago date={props.date}></ReactTimeago>
		</div>
		<div className="date__icon">{Icons.calendar}</div>
	</Participated>
);

interface IMessageProps {
	date: Date;
	title: string;
	onClick?: () => void;
}

const MockMessages: IMessageProps[] = [
	{
		date: new Date(2019, 8, 9),
		title: 'Kutsu Keravan viinifestivaaleille'
	},
	{
		date: new Date(2018, 7, 2),
		title: 'Unohtuneet tähdet -seminaari on peruttu'
	},
	{
		date: new Date(2017, 6, 21),
		title: 'Todistus osallistumisesta peruskoulutukseen'
	},

	{
		date: new Date(2016, 11, 14),
		title: 'Kutsu tapahtumaan IO-Koulutus'
	}
];

const MessageLog: FC<IMessageProps> = (props) => (
	<Participated onClick={props.onClick}>
		<div className="icon">{Icons.envelope}</div>
		<div className="name">{props.title}</div>
		<div className="date__ago">
			<ReactTimeago date={props.date}></ReactTimeago>
		</div>
		<div className="date__icon">{Icons.calendar}</div>
	</Participated>
);

const Participated = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.25rem 0.5rem;
	border-radius: 0.8rem;
	border-bottom: 1px solid ${(p) => p.theme.border_color};
	color: ${(p) => p.theme.text_color};
	cursor: pointer;

	&:hover {
		color: ${(p) => p.theme.info_color};
	}

	.icon {
		flex: 0 0 2rem;
		font-size: 1.2rem;
	}
	.name {
		flex: 1 1 auto;
	}
	.date__ago {
		display: flex;
		justify-content: flex-end;
		flex: 0 0 20%;
		padding-right: 0.5rem;
	}
	.date__icon {
		flex: 0 0 1.25rem;
		display: flex;
		justify-content: center;
	}
`;

const renderTags = (tags: CustomerTagType[]) =>
	tags.map((tag) => {
		const current = CustomerTag[tag];
		return current ? (
			<BadgeTag
				name={current.name}
				icon={current.icon}
				description={current.description}
			/>
		) : (
			new Error(`Uknown Event Tag Type: ${tag}`)
		);
	});
