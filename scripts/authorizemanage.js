var emp = firebase.database().ref('employee')
emp.on('value',function(snapshot){
    var emp = snapshot.val()
    $('#empdata').empty()
    var i =0
    var empinfo = ''
    while(Object.keys(emp)[i])
    {
        empinfo = empinfo + empInfo(
                                    Object.values(emp)[i].display_url,
                                    Object.values(emp)[i].techName,
                                    Object.values(emp)[i].staffId,
                                    Object.values(emp)[i].authorize,
                                    Object.keys(emp)[i]
                                    )
        i++
    }
    $('#empdata').append(empinfo)
})



function empInfo(picurl,empName,empId,empAuthorize,empKey)
{
    var check = ''
    if(empAuthorize == 0)
    {
        check = ''
    }else if(empAuthorize == 1)
    {
        check = 'checked'
    }
    return[
                '<div class="row">',
                    '<div class="col-lg-1 col-md-2 col-sm-2 offset-lg-4 col-xs-2 text-center">',
                        '<img id="profileImage" class="shadow-sm" src="' + picurl + '" style="width:50px;height:50px;border-radius:50px 50px;"/>',
                    '</div>',
                    '<div class="col-lg-2 col-md-8 col-sm-8 col-xs-8 my-auto text-center">',
                        '<span class="text-white" >' + empName + '</span>',
                        '<br>',
                        '<span class="text-white" >รหัสพนักงาน ' + empId + '</span>',
                    '</div>',
                    '<div class="col-lg-1 col-md-2 col-sm-2 col-xs-2 my-auto text-center">',
                    '<label class="switch">',
                        '<input type="checkbox" id="check' + empKey + '" onclick="setAuthorize(' + "'" + empKey + "'" + ')"  ' + check + '>',
                        '<span class="slider round"></span>',
                    '</label>',
                    '</div>',
                '</div>',
                '<hr>'
            ].join("")
}

function setAuthorize(key)
{
    
    var checkBox = document.getElementById("check" + key)
    if (checkBox.checked == true){
        
        var auth = 1
      } 
    else if(checkBox.checked == false) 
      {
        
        var auth = 0
      }

    emp.child(key).update({'authorize':auth})
}

