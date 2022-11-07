<script src="https://apis.google.com/js/api.js"></script>
<script>
  /**
   * Sample JavaScript code for calendar.events.get
   * See instructions for running APIs Explorer code samples locally:
   * https://developers.google.com/explorer-help/code-samples#javascript
   */

  function authenticate() {
    return gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/calendar.events.readonly https://www.googleapis.com/auth/calendar.readonly"})
        .then(function() { console.log("Sign-in successful"); },
              function(err) { console.error("Error signing in", err); });
  }
  function loadClient() {
    gapi.client.setApiKey("AIzaSyAp1LKnVj68GEWrH43bRXEGbPf6W9iWyKY");
    return gapi.client.load("https://content.googleapis.com/discovery/v1/apis/calendar/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }
  // Make sure the client is loaded and sign-in is complete before calling this method.
  function execute() {
    return gapi.client.calendar.events.get({
      "calendarId": "peaptr99@gmail.com",
      "eventId": "0lbg9j64nge1nnj33d8qf2tct2"
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
              },
              function(err) { console.error("Execute error", err); });
  }
  gapi.load("client:auth2", function() {
    gapi.auth2.init({client_id: "750613794981-u9m5h7avk3h9mgt7kmae49cfur8lr795.apps.googleusercontent.com"});
  });
</script>




<div class="row mt-3">
    <div class="col-lg-12 text-center">
        <span class="text-primary h4">รายละเอียดการประชุม</span>
    </div>
</div>

<div class="row mt-2">
    <div class="col-lg-12 text-left">
    <label for="telInput" class="font-weight-bold text-success"><i class="fas fa-handshake"></i> ประชุมติดตามงานก่อสร้าง</label>
    
    </div>
    <div class="col-lg-12 text-left">
    <label for="telInput" class="font-weight-bold text-success"><i class="fas fa-calendar"></i> วันที่</label>
    </div>
    <div class="col-lg-12 text-left">
    <label for="telInput" class="font-weight-bold text-success"><i class="fas fa-clock"></i> เวลา</label>
    </div>
    <div class="col-lg-12 text-left">
    <label for="telInput" class="font-weight-bold text-success"><i class="fas fa-info"></i> รายละเอียด</label>
    </div>
</div>
<div id="content"></div>
<button onclick="authenticate().then(loadClient)">authorize and load</button>
<button onclick="execute()">execute</button>
