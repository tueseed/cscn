$(document).ready(function() {
    $('#header').hide()
    gapi.load("client",function(){loadClient()})
})
const month = ["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"]
const dayweek = ["จันทร์","อังคาร","พุธ","พฤหัส","ศุกร์","เสาร์","อาทิตย์"]
function loadClient()
{
  gapi.client.setApiKey("AIzaSyAp1LKnVj68GEWrH43bRXEGbPf6W9iWyKY");
    return gapi.client.load("https://content.googleapis.com/discovery/v1/apis/calendar/v3/rest")
        .then(function() { 
                          console.log("GAPI client loaded for API")
                          execute()
                        },
              function(err) { console.error("Error loading GAPI client for API", err); });
}



  // Make sure the client is loaded before calling this method.
function execute() {
    return gapi.client.calendar.events.get({
      "calendarId": "peaptr99@gmail.com",
      "eventId": "0lbg9j64nge1nnj33d8qf2tct2"
    })
        .then(function(response) {
                var meeting = response.result.summary
                var start = new Date(response.result.start.dateTime)
                var end = new Date(response.result.end.dateTime)
                var description = response.result.description
                $('#meeting_topic').text(meeting)
                $('#datetime').text("วัน" + dayweek[parseInt(start.getDay()-1)] +"ที่ "+ start.getDate() + " " + month[start.getMonth()] + " "+parseInt(start.getFullYear() + 543))

              },
              function(err) { console.error("Execute error", err); });
  }

  
  





