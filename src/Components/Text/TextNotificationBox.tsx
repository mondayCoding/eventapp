import * as React from 'react';
import Icons from '../Icons/icons';
import { NotificationBox, IStyleProps } from './TextNotificationBoxStyles';

interface IProps extends IStyleProps {
	text: string;
	icon?: React.ReactNode;
	removable?: boolean;
}

class State {
	readonly displaySelf: boolean = true;
}

class TextNotificationBox extends React.Component<IProps, State> {
	static defaultProps = { removable: true };

	state = new State();

	handleRemoveSelf = () => this.setState({ displaySelf: false });

	componentWillReceiveProps = () => {
		// Näytetään ilmoitus uudestaan aina kun propsit päivittyvät
		this.setState({ displaySelf: true });
	};

	render = () => {
		if (!this.state.displaySelf) return null;
		const { text, icon, removable, ...rest } = this.props;

		return (
			<NotificationBox {...rest}>
				{removable && <span className="themehighlight--close" />}
				<span className="themehighlight--text--content">
					{icon}
					{text}
					{this.props.children}
				</span>
				{removable && (
					<span className="themehighlight--close" onClick={this.handleRemoveSelf}>
						{Icons.close}
					</span>
				)}
			</NotificationBox>
		);
	};
}

const AllGoodNotification: React.SFC<{ text: string }> = ({ text, ...rest }) => (
	<TextNotificationBox text={text} isSuccess={true} icon={Icons.check} {...rest} />
);
const WarningNotification: React.SFC<{ text: string }> = ({ text, ...rest }) => (
	<TextNotificationBox
		text={text}
		isWarning={true}
		icon={Icons.exlamation_triangle}
		{...rest}
	/>
);
const ErrorNotification: React.SFC<{ text: string }> = ({ text, ...rest }) => (
	<TextNotificationBox
		text={text}
		isError={true}
		icon={Icons.exlamation_triangle}
		{...rest}
	/>
);
const InfoNotification: React.SFC<{ text: string }> = ({ text, ...rest }) => (
	<TextNotificationBox text={text} isInfo={true} icon={Icons.questionmark} {...rest} />
);

export {
	TextNotificationBox,
	AllGoodNotification,
	WarningNotification,
	InfoNotification,
	ErrorNotification
};
