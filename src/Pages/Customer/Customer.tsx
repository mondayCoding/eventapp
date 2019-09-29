import React, { FC } from 'react';
import { RouteComponentProps, useHistory } from 'react-router';
import styled, { createGlobalStyle } from '../../Theme/theme';
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
import { MockEvents } from '../../MockData/MockEvents';
import { Portal } from 'reakit/Portal';
import { useDialogState, Dialog, DialogDisclosure, DialogBackdrop } from 'reakit/Dialog';

import { Button } from '../../Components/Button/Button';

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
							<MessageLog title={message.title} date={message.date}>
								<ModalExample x={message.title} />
							</MessageLog>
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

const MockHtml =
	'<head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /><title>Demystifying Email Design</title><meta name="viewport" content="width=device-width, initial-scale=1.0"/></head><body style="margin: 0; padding: 0;">    <table border="0" cellpadding="0" cellspacing="0" width="100%">         <tr>            <td style="padding: 10px 0 30px 0;">                <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border: 1px solid #cccccc; border-collapse: collapse;">                    <tr>                        <td align="center" bgcolor="#70bbd9" style="padding: 40px 0 30px 0; color: #153643; font-size: 28px; font-weight: bold; font-family: Arial, sans-serif;">                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/h1.gif" alt="Creating Email Magic" width="300" height="230" style="display: block;" />                        </td>                    </tr>                    <tr>                        <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">                            <table border="0" cellpadding="0" cellspacing="0" width="100%">                                <tr>                                    <td style="color: #153643; font-family: Arial, sans-serif; font-size: 24px;">                                        <b>Lorem ipsum dolor sit amet!</b>                                    </td>                                </tr>                                <tr>                                    <td style="padding: 20px 0 30px 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus adipiscing felis, sit amet blandit ipsum volutpat sed. Morbi porttitor, eget accumsan dictum, nisi libero ultricies ipsum, in posuere mauris neque at erat.                                    </td>                                </tr>                                <tr>                                    <td>                                        <table border="0" cellpadding="0" cellspacing="0" width="100%">                                            <tr>                                                <td width="260" valign="top">                                                    <table border="0" cellpadding="0" cellspacing="0" width="100%">                                                        <tr>                                                            <td>                                                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/left.gif" alt="" width="100%" height="140" style="display: block;" />                                                            </td>                                                        </tr>                                                        <tr>                                                            <td style="padding: 25px 0 0 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus adipiscing felis, sit amet blandit ipsum volutpat sed. Morbi porttitor, eget accumsan dictum, nisi libero ultricies ipsum, in posuere mauris neque at erat.                                                            </td>                                                        </tr>                                                    </table>                                                </td>                                                <td style="font-size: 0; line-height: 0;" width="20">                                                    &nbsp;                                                </td>                                                <td width="260" valign="top">                                                    <table border="0" cellpadding="0" cellspacing="0" width="100%">                                                        <tr>                                                            <td>                                                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284ight.gif" alt="" width="100%" height="140" style="display: block;" />                                                            </td>                                                        </tr>                                                        <tr>                                                            <td style="padding: 25px 0 0 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus adipiscing felis, sit amet blandit ipsum volutpat sed. Morbi porttitor, eget accumsan dictum, nisi libero ultricies ipsum, in posuere mauris neque at erat.                                                            </td>                                                        </tr>                                                    </table>                                                </td>                                            </tr>                                        </table>                                    </td>                                </tr>                            </table>                        </td>                    </tr>                    <tr>                        <td bgcolor="#ee4c50" style="padding: 30px 30px 30px 30px;">                            <table border="0" cellpadding="0" cellspacing="0" width="100%">                                <tr>                                    <td style="color: #ffffff; font-family: Arial, sans-serif; font-size: 14px;" width="75%">                                        &reg; Someone, somewhere 2013<br/>                                        <a href="#" style="color: #ffffff;"><font color="#ffffff">Unsubscribe</font></a> to this newsletter instantly                                    </td>                                    <td align="right" width="25%">                                        <table border="0" cellpadding="0" cellspacing="0">                                            <tr>                                                <td style="font-family: Arial, sans-serif; font-size: 12px; font-weight: bold;">                                                    <a href="http://www.twitter.com/" style="color: #ffffff;">                                                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/tw.gif" alt="Twitter" width="38" height="38" style="display: block;" border="0" />                                                    </a>                                                </td>                                                <td style="font-size: 0; line-height: 0;" width="20">&nbsp;</td>                                                <td style="font-family: Arial, sans-serif; font-size: 12px; font-weight: bold;">                                                    <a href="http://www.twitter.com/" style="color: #ffffff;">                                                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/fb.gif" alt="Facebook" width="38" height="38" style="display: block;" border="0" />                                                    </a>                                                </td>                                            </tr>                                        </table>                                    </td>                                </tr>                            </table>                        </td>                    </tr>                </table>            </td>        </tr>    </table></body></html>';

const MessageLog: FC<IMessageProps> = (props) => (
	<Participated onClick={props.onClick}>
		<div className="icon">{Icons.envelope}</div>
		<div className="name">{props.title}</div>
		<div className="date__ago">
			<ReactTimeago date={props.date}></ReactTimeago>
		</div>

		<div className="date__icon">{Icons.calendar}</div>
		{props.children}
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

function ModalExample({ x }: any) {
	const dialog = useDialogState();
	return (
		<>
			<DialogWrapper></DialogWrapper>
			<DialogDisclosure as={Button} {...dialog}>
				Preview
			</DialogDisclosure>
			<Portal>
				<DialogBackdrop {...dialog} className="dialog__fade" />
			</Portal>
			<Dialog {...dialog} aria-label="Email Preview" className="dialog">
				<div className="dialog__header">Viesti esikatselu</div>
				<div className="dialog__body">
					<div>Aihe: {x}</div>
					<div>Esikatselu:</div>
					<div
						className="dialog__body__preview"
						dangerouslySetInnerHTML={{ __html: MockHtml }}
					></div>
				</div>
				<div className="dialog__footer">Täälläkin pitäisi olla sulkupainike</div>
			</Dialog>
		</>
	);
}

const DialogWrapper = createGlobalStyle`
	.dialog {
		position: fixed;
		top: 28px;
		left: 50%;
      width: 100%;
      max-width: 42rem;
		transform: translateX(-50%);
		border-radius: 0.25rem;
		max-height: calc(80vh - 56px);
		outline: 0;
		color: ${(p) => p.theme.text_color};
		z-index: 999;


      &__header {
         background: ${(p) => p.theme.menu_background_color};
         padding: .5rem 1.5rem;
         color: ${(p) => p.theme.text_color_nav};
      }

      &__body {
         background: ${(p) => p.theme.body_background_color};
         padding: 1.5rem;
         color: ${(p) => p.theme.text_color};
         max-height: 70vh;
         overflow: auto;

         &__preview {}

      }

      &__footer {
         background: ${(p) => p.theme.menu_background_color};
         padding: .5rem 1.5rem;
         color: ${(p) => p.theme.text_color_nav};
      }

		&:focus {
			box-shadow: ${(p) => p.theme.shadow.focus};
		}
	}
	.dialog__fade {
		background-color: rgba(0, 0, 0, 0.5);
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 999;
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
