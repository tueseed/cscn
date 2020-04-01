var job = firebase.database().ref('job')
var emp = firebase.database().ref('employee')

$.blockUI({
  message: '<div class="spinner-border text-primary display-4" style="width: 4rem; height: 4rem;" role="status"><span class="sr-only">Loading...</span></div><br/><h5 class="font-weight-bold text-pea">รอสักครู่..</h5>',
  overlayCSS : { 
                  backgroundColor: '#ffffff',
                  opacity: 1
              },
      css : {
        opacity: 1,
        border: 'none',
      }
    })
if(!getUrlVars()["code"])
{
  window.location.href= 'https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1654004533&redirect_uri=https://cscn.herokuapp.com&state=12345abcd&scope=openid%20profile'
}
else if(getUrlVars()["code"])
{
  var code = getUrlVars()["code"]
  $.ajax({
    async: true,
    crossDomain: true,
    url: "https://api.line.me/oauth2/v2.1/token",
    method: "POST",
    headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "cache-control": "no-cache"
              },
    data: {
            "grant_type": "authorization_code",
            "code": code,
            "redirect_uri": "https://cscn.herokuapp.com",
            "client_id": "1654004533",
            "client_secret": "8021aaa3dad2e694da20a39c678486ec"
          },
    statusCode:{
                400:function()
                    {
                      console.log('400')
                      window.location.href = 'https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1654004533&redirect_uri=https://cscn.herokuapp.com&state=12345abcd&scope=openid'
                    }
               },
    success: async function(response) {
                                  var id_token = response.id_token
                                  var base64 = id_token.split('.')[1]
                                  var profile = JSON.parse(window.atob(base64))
                                  localStorage.setItem('name',profile.name)
                                  localStorage.setItem('display_url',profile.picture)
                                  localStorage.setItem('userId',profile.sub)
                                  $('#userDropdown').show()
                                  $('#userName').html(profile.name)
                                  $('#userPicture').attr('src',profile.picture)
                                  var checkEmp = await emp.orderByChild('uid').equalTo(profile.sub).once('value')
                                  var empInfo = checkEmp.val()
                                  if(checkEmp.val() == null)
                                  {
                                      window.location.href = 'index.php?action=emp_regis'
                                  }
                                  else if(checkEmp.val() !== null)
                                  {
                                    localStorage.setItem('userId',Object.values(empInfo)[0].uid)
                                    localStorage.setItem('name',Object.values(empInfo)[0].techName)
                                    localStorage.setItem('position',Object.values(empInfo)[0].position)
                                    localStorage.setItem('section',Object.values(empInfo)[0].section)
                                    localStorage.setItem('staffId',Object.values(empInfo)[0].staffId)
                                    localStorage.setItem('display_url',Object.values(empInfo)[0].display_url)
                                    job.orderByChild('ownerSection').equalTo(Object.values(empInfo)[0].section).once('value',function(snapshot){
                                      var data = snapshot.val()
                                      var jobNum = data.length
                                      $('#notifyNumber').html(jobNum)
                                      console.log(jobNum)
                                    })
                                    $('#empName').html(Object.values(empInfo)[0].techName)
                                    var section = {'cn':'แผนกก่อสร้าง','cs':'แผนกบริการลูกค้า','om':'แผนกปฏิบัติการ'}
                                    $('#empsecTion').html(section[Object.values(empInfo)[0].section])
                                  }
                                  $.unblockUI()
                                }
    })
}

job.on('value',function(snapshot){                         
                                  if(snapshot.val() !== null)
                                  {
                                    var data = snapshot.val()
                                    var i =0
                                    var data_for_tbl = []
                                    while(Object.keys(data)[i])
                                    {
                                      data_for_tbl.push(Object.values(data)[i])
                                      i++
                                    }
                                    var $table = $('#jobTbl')
                                    $table.bootstrapTable('refreshOptions', {
                                      data: data_for_tbl
                                    })
                                  }
                                }
)

job.orderByChild('ownerSection').equalTo(localStorage.getItem('section')).on('value',function(snapshot){
  var data = snapshot.val()
  console.log(data)
  var jobNum = data.length
  $('#notifyNumber').html(jobNum)
  console.log(jobNum)
})

// fb.on('child_changed', function(snapshot){
//                                             var newrequest = snapshot.val()
                                            
//                                             var status_text = ''
//                                             var status_color = ''
//                                             if(newrequest.status == 'P')
//                                             {
//                                               status_text = 'รอดำเนินการ'
//                                               status_color = 'danger'
//                                             }
//                                             else if(newrequest.status == 'S')
//                                             {
//                                               status_text = 'จ่ายงานให้ช่าง'
//                                               status_color = 'info'
//                                             }
//                                             else if(newrequest.status == 'I')
//                                             {
//                                               status_text = 'กำลังดำเนินการ'
//                                               status_color = 'warning'
//                                             }else if(newrequest.status == 'F')
//                                             {
//                                               status_text = 'จ่ายไฟแล้ว'
//                                               status_color = 'success'
//                                             }
//                                             $.notify({
//                                                       message: '<h4>' + newrequest.place + ' ' + status_text +'</h4>'
//                                                     },
//                                                     {
//                                                       type: status_color
//                                                     }
//                                                     )
//                                           })


async function creat_job()
{
  console.log('dfasjcfapdjo')
  var d = new Date()
  var dateReq = d.getDate() + '-' + d.getMonth() + '-' + d.getFullYear()
  var checkJob = await job.orderByChild('reqNumber').equalTo($('#reqNumber').val()).once('value')
  if(checkJob.val()== null)
  {
      var pushJob = await job.push({
                                    'jobName':$('#jobName').val(),
                                    'reqNumber':$('#reqNumber').val(),
                                    'customerName':$('#customerName').val(),
                                    'status':'creat',
                                    'dateReq':dateReq,
                                    'owner':localStorage.getItem('display_url'),
                                    'ownerSection':localStorage.getItem('section')
                                  })
      Swal.fire({
                  title: 'สำเร็จ!',
                  html: 'เลขที่คำร้อง '+ $('#reqNumber').val(),
                  type: 'success',
                  timer: 3000
                })
  }
  else if(checkJob.val() !== null)
  {
    Swal.fire({
      title: 'แจ้งเตือน',
      html: 'เลขที่คำร้อง '+ $('#reqNumber').val() + 'มีอยู่ในระบบแล้ว',
      type: 'warning',
      timer: 3000
    })
  }
}

function tbl_btn(value, row, index) 
{
  return[
        '<button id="change_status" type="button" class="btn btn-primary">',
          'รายละเอียด',
        '</button>'
     
].join("")
}

function picOwner(value,row,index)
{
  return '<img class="shadow-sm" src="'+value+'" id="userPicture" style="width:50px;height:50px;border-radius:50px 50px;"/>'
}



$("#jobCreat").on('hide.bs.modal', function(){
  $("input[name='event_input']").val('')
 })

 $('#selectFile').on('click', function(){$('#reqFile').trigger('click')})
 $(document).ready(function(){
    $('#reqFile').change(function(e){                         
                                      readFile()                                                  
                                          })
  })

function readFile()
{
  var fileUpload = document.getElementById("reqFile")
  var reader = new FileReader()
  if (reader.readAsBinaryString)
  {
    reader.onload = function (e) {ProcessExcel(e.target.result);}
    reader.readAsBinaryString(fileUpload.files[0]);
  }
}

async function ProcessExcel(data)
{
  var workbook = XLSX.read(data, {type: 'binary'})
  var firstSheet = workbook.SheetNames[0]
  var excelRows = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[firstSheet])
  console.log(excelRows)
  $('#rowUpload').show()
  var allData = excelRows.length
  var d = new Date()
  var dateReq = d.getDate() + '-' + d.getMonth() + '-' + d.getFullYear()
  var i = 0 
  while(excelRows[i])
  {
    var obj = excelRows[i]
    console.log(Object.values(obj)[3])
    var pushJob = await job.push({
                                  'jobName':Object.values(obj)[7],
                                  'reqNumber':Object.values(obj)[3],
                                  'status':'creat',
                                  'dateReq':dateReq,
                                  'owner':localStorage.getItem('display_url'),
                                  'ownerSection':localStorage.getItem('section')
                                })
    var percentUpload = (parseInt(i+1)/parseInt(allData))*100
    $('#uploadStatus').attr('style','width:' + percentUpload + '%')
    $('#uploadText').html('กำลังอัพโหลด ' + parseInt(i+1) + '/' + allData +' รายการ')
    i++
  }

}






                                          
                                          