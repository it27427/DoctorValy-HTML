document.addEventListener('DOMContentLoaded', function() {
  const calendarEl = document.getElementById('schedule-calendar');
  const calendar = new FullCalendar.Calendar(calendarEl, {
    timeZone: 'UTC',
    headerToolbar: {
      left: 'timeGridWeek,timeGridDay,dayGridMonth',
      center: '',
      right: ''
    },
    aspectRatio: 2.5,
    navLinks: true,
    buttonText: {
      timeGridWeek: 'Week',
      dayGridMonth: 'Month',
      timeGridDay: 'Day',
    },
    height: 500,
    initialView: 'timeGridWeek',
    dayHeaders: true,
    initialDate: "2023-05-15",
    editable: true,    
    events: [
      {
        id: 1,
        title: 'First Event',
        start: '2023-05-13 19:00:00',
        end: '2023-05-13 20:00:00'
      },
      {
        id: 2,
        title: 'Another event',
        start: '2023-05-13 17:00:00',
        end: '2023-05-13 18:00:00'
      },
      {
        id: 3,
        title: 'Third Entry with HTML',
        start: '2023-05-13 15:00:00',
        end: '2023-05-13 18:00:00'
      }
    ]
  });

  calendar.render();
});