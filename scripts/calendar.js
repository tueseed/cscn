$(document).ready(function() {
    $('#header').hide()
})



// async function listUpcomingEvents() {
//     let response;
//     try {
//       const request = {
//         'calendarId': 'peaptr99@gmail.com',
//         'eventId': '0lbg9j64nge1nnj33d8qf2tct2'
//       };
//       response = await gapi.client.calendar.events.get({
//         "calendarId": "peaptr99@gmail.com",
//         "eventId": "0lbg9j64nge1nnj33d8qf2tct2"
//       });
//     } catch (err) {
//       document.getElementById('content').innerText = err.message;
//       return;
//     }

//     const events = response.result.items;
//     if (!events || events.length == 0) {
//       document.getElementById('content').innerText = 'No events found.';
//       return;
//     }
//     // Flatten to string to display
//     const output = events.reduce(
//         (str, event) => `${str}${event.summary} (${event.start.dateTime || event.start.date})\n`,
//         'Events:\n');
//     document.getElementById('content').innerText = output;
//   }

