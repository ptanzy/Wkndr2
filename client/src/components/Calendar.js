import React from 'react';
import ReactDOM from 'react-dom';

// ... and fullcalendar-reactwrapper.
import FullCalendar from 'fullcalendar-reactwrapper';

require("fullcalendar-reactwrapper/dist/css/fullcalendar.min.css")
 
class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    events:[
                {
                    title: 'All Day Event',
                    start: '2019-05-01'
                },
                {
                    title: 'Long Event',
                    start: '2019-05-07',
                    end: '2019-05-10'
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: '2019-05-09T16:00:00'
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: '2019-05-16T16:00:00'
                },
                {
                    title: 'Conference',
                    start: '2019-05-11',
                    end: '2019-05-13'
                },
                {
                    title: 'Meeting',
                    start: '2019-05-12T10:30:00',
                    end: '2019-05-12T12:30:00'
                },
                {
                    title: 'Birthday Party',
                    start: '2019-05-13T07:00:00'
                },
                {
                    title: 'Click for Google',
                    url: 'http://google.com/',
                    start: '2019-05-28'
                }
            ],		
    }
  }
 
  render() {
    return (
      <div id="calendar">
        <FullCalendar
             id = "wkndr2"
         header = {{
            left: 'prev,next today myCustomButton',
            center: 'title',
            right: 'month,basicWeek,basicDay'
        }}
         defaultDate={new Date()}
        navLinks= {true} // can click day/week names to navigate views
        editable= {true}
        eventLimit= {true} // allow "more" link when too many events
        events = {this.state.events}	
    />
      </div>
    );
  }
}

export default Calendar;