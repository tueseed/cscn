$('#header').hide()



function send_reqnumber()
{
    var formData = new FormData()
    formData.append('NO','JPTM64000283')
    $.ajax({
                url: 'https://eservice.pea.co.th/cos/checkstatus/',
                method: 'POST',
                crossDomain: true,
                data:formData,
                async: true,
                cache: false,
                processData: false,
                contentType: false,
                success: function(response) 
                {
                    var obj = JSON.parse(response)
                    console.log(obj)     
                }					
            })
}