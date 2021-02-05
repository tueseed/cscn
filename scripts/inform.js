$('#header').hide()



function send_reqnumber()
{
    var form = new FormData();
    form.append("NO", "JPTM64000283");

    var settings = {
                    "url": "https://eservice.pea.co.th/cos/checkstatus/",
                    "method": "POST",
                    "timeout": 0,
                    "processData": false,
                    "mimeType": "multipart/form-data",
                    "contentType": false,
                    "data": form
                    }
    $.ajax(settings).done(function (response) {
    console.log(response);
    })
}