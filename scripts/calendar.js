$(document).ready(function() {
    $('#header').hide()
    gapi.load("client")
    // loadClient()
    // execute()
})

function loadClient() 
{
    gapi.client.setApiKey("AIzaSyAp1LKnVj68GEWrH43bRXEGbPf6W9iWyKY")
    return gapi.client.load("https://content.googleapis.com/discovery/v1/apis/calendar/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); })
  }
  // Make sure the client is loaded before calling this method.
function execute() 
{
    var eventId =getUrlVars()["eventId"]
    console.log(eventId)    
    return gapi.client.calendar.events.get({
      "calendarId": "peaptr99@gmail.com",
      "eventId": "0lbg9j64nge1nnj33d8qf2tct2"
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response)
              },
              function(err) { console.error("Execute error", err); })
  }
  





