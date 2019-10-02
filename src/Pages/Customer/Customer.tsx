import React, { FC } from 'react';
import { RouteComponentProps, useHistory } from 'react-router';
import { Heading } from '../../Components/Text/Heading';
import { useCustomers } from '../../Queries/useCustomers';
import { CustomerTagType, CustomerTag } from '../../Constants/CustomerTags';
import 'bootstrap/dist/css/bootstrap.css';
import { BadgeTag } from '../../Components/BadgeTag';
import { PageFooter } from '../../Layout/MainFooter';
import { useDocumentTitle } from '../../Hooks/useDocumentTitle';
import { CustomerForm } from './CustomerForm';
import { CardWrapper } from '../../Components/CardWrapper';
import * as routes from '../../Constants/Routes';
import { Participations } from './Components/Participations';
import { ModalExample } from './Components/MessageLogModal';
import { MessageLogList } from './Components/MessageLogRow';
import { MockParticipations } from '../../MockData/MockParticipationList';
import { MockMessageLogMessages } from '../../MockData/MockMessageLogMessages';

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
						{MockMessageLogMessages.map((message) => (
							<MessageLogList title={message.title} date={message.date}>
								<ModalExample x={message.title} />
							</MessageLogList>
						))}
					</CardWrapper>
				</div>
			</div>

			<PageFooter showDates></PageFooter>
		</>
	);
};

const renderTags = (tags: CustomerTagType[]) =>
	tags.map((tag, index) => {
		const current = CustomerTag[tag];
		return current ? (
			<BadgeTag
				key={index}
				name={current.name}
				icon={current.icon}
				description={current.description}
			/>
		) : (
			new Error(`Uknown Event Tag Type: ${tag}`)
		);
	});
