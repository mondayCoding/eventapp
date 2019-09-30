import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './react-big-calendar.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
const localizer = momentLocalizer(moment);

// import './main.scss'; // webpack must be configured to do this

export default class CALENDERDEMO extends React.Component {
	render() {
		return <FullCalendar defaultView="dayGridMonth" plugins={[dayGridPlugin]} />;
	}
}
export const CALENDERDEMO2 = () => (
	<FullCalendar defaultView="dayGridMonth" plugins={[dayGridPlugin]} />
);

export const CALENDERDEMO3 = () => {
	return (
		<div>
			<div>
				<Calendar
					localizer={localizer}
					events={[]}
					startAccessor="start"
					endAccessor="end"
				/>
			</div>
		</div>
	);
};
