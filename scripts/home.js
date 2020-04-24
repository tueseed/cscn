var job = firebase.database().ref('job')
var emp = firebase.database().ref('employee')
var number = firebase.database().ref('number')
var jobSending = firebase.database().ref('jobSending')
window.onbeforeunload = localStorage.clear()
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
                                    countJob(Object.values(empInfo)[0].section)
                                    getdata(Object.values(empInfo)[0].section)
                                    
                                    $('#empName').html(Object.values(empInfo)[0].techName)
                                    var section = {'cn':'แผนกก่อสร้าง','cs':'แผนกบริการลูกค้า','om':'แผนกปฏิบัติการ'}
                                    $('#empsecTion').html(section[Object.values(empInfo)[0].section])
                                  }
                                  $.unblockUI()
                                }
    })
}
// var section = 'cs' //สมมุติแผนก
// getdata()
function getdata(section)
{
job.orderByChild('ownerSection').equalTo(section).on('value',function(snapshot){                         
                                                                            if(!$('#disAllcheck').prop("checked")) 
                                                                            {
                                                                              if(snapshot.val() !== null)
                                                                              {
                                                                                var data = snapshot.val()
                                                                                var i =0
                                                                                var data_for_tbl = []
                                                                            
                                                                                while(Object.keys(data)[i])
                                                                                {
                                                                                  var obj = []
                                                                                  obj = Object.values(data)[i]
                                                                                  obj.key = Object.keys(data)[i]
                                                                                  data_for_tbl.push(obj)
                                                                                  i++
                                                                                }
                                                                                var $table = $('#jobTbl')
                                                                                $table.bootstrapTable('refreshOptions', {
                                                                                  data: data_for_tbl
                                                                                })
                                                                                // console.log(data_for_tbl)
                                                                              }
                                                                              else if(snapshot.val() == null)
                                                                              {
                                                                                var $table = $('#jobTbl')
                                                                                $table.bootstrapTable('refreshOptions', {
                                                                                  data: []
                                                                                })
                                                                              }
                                                                            }
                                                                            }
                        )
  }

function getAlldata()
{
      job.on('value',function(snapshot){                         
                                        if($('#disAllcheck').prop("checked")) 
                                        {
                                          if(snapshot.val() !== null)
                                          {
                                            var data = snapshot.val()
                                            var i =0
                                            var data_for_tbl = []
                                        
                                            while(Object.keys(data)[i])
                                            {
                                              var obj = []
                                              obj = Object.values(data)[i]
                                              obj.key = Object.keys(data)[i]
                                              data_for_tbl.push(obj)
                                              i++
                                            }
                                            var $table = $('#jobTbl')
                                            $table.bootstrapTable('refreshOptions', {
                                              data: data_for_tbl
                                            })
                                          }
                                          else if(snapshot.val() == null)
                                          {
                                            var $table = $('#jobTbl')
                                            $table.bootstrapTable('refreshOptions', {
                                              data: []
                                            })
                                          }
                                        }
                                        }
      )
}

function countJob(section)
{
  //จำนวนงานกล่องงานออก
  jobSending.orderByChild('from').equalTo(section).on('value',function(snapshot){
  var jobNumout = snapshot.numChildren()
  if(jobNumout > 0)
  {
    $('#notifyNumber').show()
    $('#notifyNumberOut').show()
    $('#notifyNumber').html(jobNumout)
    $('#notifyNumberOut').html(jobNumout)
  }
  else if(jobNumout == 0)
  {
    $('#notifyNumber').hide()
    $('#notifyNumberOut').hide()
  }   
  })
//จำนวนงานกล่องงานเข้า
  jobSending.orderByChild('to').equalTo(section).on('value',function(snapshot){
    var jobNumin = snapshot.numChildren()
    console.log(jobNumin)
    if(jobNumin > 0)
    {
      $('#notifyNumber').show()
      $('#notifyNumberIn').show()
      $('#notifyNumber').html(jobNumin)
      $('#notifyNumberIn').html(jobNumin)
    }
    else if(jobNumin == 0)
    {
      $('#notifyNumber').hide()
      $('#notifyNumberIn').hide()
    }   
    })

}

async function creat_job()
{
  var d = new Date()
  var dateReq = d.getDate() + '-' + d.getMonth() + '-' + d.getFullYear()
  var checkJob = await job.orderByChild('reqNumber').equalTo($('#reqNumber').val()).once('value')
  if(checkJob.val()== null)
  {
      var pushJob = await job.push({
                                    'jobName':$('#jobName').val(),
                                    'reqNumber':$('#reqNumber').val(),
                                    'customerName':$('#customerName').val(),
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
        '<button id="change_status" type="button"   onclick="fetchDetail('+"'"+value+"'"+')" class="btn btn-outline-primary" style="border-radius:50px 50px;">',
          '<i class="fas fa-eye"></i> รายละเอียด',
        '</button>'
     
].join("")
}

function picOwner(value,row,index)
{
  return '<img class="shadow-sm" src="'+value+'" id="userPicture" style="width:50px;height:50px;border-radius:50px 50px;"/>'
}

function disWbs(value,row,index)
{
  if(row.docnumber)
  {
    var budget = value
    var docNo = row.docnumber
    var budgetArr = {c:"C-63-JPTMCS.",p:"P-NHE02.0-JPTMD0.3"}
    var zeroFill = (budget == 'c') ? '0000':'000' 
    var wbs = budgetArr[budget] + zeroFill.slice(0, parseInt(zeroFill.length) - parseInt(docNo.length)) + docNo
    return wbs
  }
}

function dateDis(value)
{
  return convdate(value)
}

async function fetchDetail(reqNumber)
{
  // แสดงรายละเอียดงานใน Modal
  $('#jobDetail').modal('show')
  var jobDetail = await job.orderByChild('reqNumber').equalTo(reqNumber).once('value')
  var jobKey = jobDetail.val()
  $('#jobKey').val(Object.keys(jobKey)[0])
  var jobValue = Object.values(jobKey)[0]
  $('#reqNumbermodal').html(Object.values(jobKey)[0].reqNumber)
  $('#jobNamemodal').val(Object.values(jobKey)[0].jobName)
  $('#dateRecivemodal').val(convdate(Object.values(jobKey)[0].dateReq))
  $('#dateSendtocn').html(convdate(Object.values(jobKey)[0].dateSendtocn))
  $('#techCon').val(Object.values(jobKey)[0].techCon)
  $('#cnJobname').val(Object.values(jobKey)[0].cnJobname)
  $('#datePaid').val(convdate(Object.values(jobKey)[0].datePaid))
  $('#datePlan').val(convdate(Object.values(jobKey)[0].datePlan))
  $('#operator').val(Object.values(jobKey)[0].operator)
  $('#textContractor').val(Object.values(jobKey)[0].textContractor)
  if(Object.values(jobKey)[0].operator == '1'){$('#contractor').show()}else{$('#contractor').hide() }
  //แสดงหมายเลขงาน
  var docNumber = await number.orderByChild('jobkey').equalTo(Object.keys(jobKey)[0]).once('value')
  var snapdocNumber = docNumber.val()
  if(docNumber.val() !== null)
  {
    $('#geberate_number_btn').hide()
    $('#send_btn').show()
    $('#editBudget_btn').show()
    var budget = Object.values(snapdocNumber)[0].budget
    var docNo = Object.values(snapdocNumber)[0].docnumber
    var budgetArr = {c:"C-63-JPTMCS.",p:"P-NHE02.0-JPTMD0.3"}
    var zeroFill = (budget == 'c') ? '0000':'000' 
    var draWingzero = '0000'
    $('#jobWbs').html(budgetArr[budget] + zeroFill.slice(0, parseInt(zeroFill.length) - parseInt(docNo.length)) + docNo)
    $('#drawingNumber').html('TB19-015/63'+draWingzero.slice(0, parseInt(draWingzero.length) - parseInt(docNo.length)) + docNo)
    $('#approveNumber').html('ต.1 พธร.(บค.)'+zeroFill.slice(0, parseInt(zeroFill.length) - parseInt(docNo.length)) + docNo + '/2563')
  }
  else if(docNumber.val() == null)
  {
    $('#geberate_number_btn').show()
    $('#send_btn').hide()
    $('#editBudget_btn').hide()
  }
}

async function edit_job()
{
  $("input[name^='inputJobmodal']").prop('disabled', false)
  $("select[name='inputJobmodal']").prop('disabled', false)
  if($('#edit_save_btn').val() == 'edit')
  {
    $('#edit_save_btn').html('<i class="fas fa-save" aria-hidden="true"></i> บันทึก')
    $('#edit_save_btn').val('save')
  }
  else if($('#edit_save_btn').val() == 'save')
  {
    $('#edit_save_btn').html('<i class="fas fa-edit" aria-hidden="true"></i> แก้ไข')
    $('#edit_save_btn').val('edit')
    var dateEngreq = await convThdatetoEndate($('#dateRecivemodal').val())
    var updateJob = await job.child($('#jobKey').val()).update({
                                                                'jobName':$('#jobNamemodal').val(),
                                                                'dateReq': dateEngreq,
                                                                'cnJobname':$('#cnJobname').val(),
                                                                'datePaid':'-',
                                                                'techCon':$('#techCon').val(),
                                                                'datePlan':'-',
                                                                'operator':'-',
                                                                'textContractor':'-',
                                                                'dateSendtocn':'-',
                                                                'datecnRecive':'-'
                                                                })
    $('#jobDetail').modal('toggle')
  }
}

async function sendJob(sectionrecive)
{
  var updateStatus = await job.child($('#jobKey').val()).update({
    'ownerSection':'se',
    'owner':'./pic/sending.jpeg',
    'dateSendtocn':getdateNow()
  })
  var senDing = await jobSending.push(
    {
      'jobKey': $('#jobKey').val(),
      'jobName':$('#jobNamemodal').val(),
      'from':localStorage.getItem('section'),
      'to':sectionrecive
    })
    $('#jobDetail').modal('hide')
}

$("#jobDetail").on('hidden.bs.modal', function(){
  $("input[name^='inputJobmodal']").prop('disabled', true)
  $("select[name='inputJobmodal']").prop('disabled', true)
  $("span[name='inputNumber']").html('')
  $("input[name^='inputJobmodal']").val('')
  $('#edit_save_btn').html('<i class="fas fa-edit" aria-hidden="true"></i> แก้ไข')
  $('#edit_save_btn').val('edit')
  $('#geberate_number_btn').hide()
 })

 $("#jobDetail").on('show.bs.modal', function(){
 
   var section = localStorage.getItem('section')
  if(section == 'cn')
  {
    $('#dropSendjob').html('<a class="dropdown-item" href="#" onclick="sendJob('+"'"+'cs'+"'"+')">แผนกบริการลูกค้า</a><a class="dropdown-item" href="#" onclick="sendJob('+"'"+'om'+"'"+')">แผนกปฎิบัติการ</a>')
  }
  else if(section == 'cs')
  {
    $('#dropSendjob').html('<a class="dropdown-item" href="#" onclick="sendJob('+"'"+'cn'+"'"+')">แผนกก่อสร้าง</a><a class="dropdown-item" href="#" onclick="sendJob('+"'"+'om'+"'"+')">แผนกปฎิบัติการ</a>')
  }
  else if(section == 'om')
  {
    $('#dropSendjob').html('<a class="dropdown-item" href="#" onclick="sendJob('+"'"+'cn'+"'"+')">แผนกก่อสร้าง</a><a class="dropdown-item" href="#" onclick="sendJob('+"'"+'cs'+"'"+')">แผนกบริการลูกค้า</a>')
  
  }
 })

 $("#jobCreat").on('hide.bs.modal', function(){
  $('#reqnumberAdd').val('')
  $("input[name^='add_input']").prop('disabled', true)
 })

 $("#jobIn").on('show.bs.modal', function(){
    jobSending.orderByChild('to').equalTo(localStorage.getItem('section')).on('value',function(jobIncoming){
    var snapJobincomimg = jobIncoming.val()
    $('#jobInarea').empty()
    var i = 0
    var jobCard = ''
    while(Object.keys(snapJobincomimg)[i])
    {
      jobCard = render_jobIn_card(Object.values(snapJobincomimg)[i].jobKey,Object.values(snapJobincomimg)[i].jobName,Object.keys(snapJobincomimg)[i])
      $('#jobInarea').append(jobCard)
      i++
    }
  })
 })



 $('#selectFile').on('click', function(){$('#reqFile').trigger('click')})

 $("#operator").on('change',function(){
                                        if(this.value == '0')
                                        {
                                            $('#contractor').hide()
                                            
                                        }else if(this.value== '1')
                                        {
                                            $('#contractor').show()
                                        }
                                        })

 $(document).ready(function(){
    $('#reqFile').change(function(e){readFile()})
    $('[data-toggle="datepicker"]').datepicker({
      format: 'yyyy-mm-dd',
      autoclose: true
    })
    $('#dateRecivemodal').change(async function(e){
                                                    var getdate = await convdate(this.value)
                                                    $('#dateRecivemodal').val(getdate)
                                                  })
    $('#datePaid').change(async function(e){
                                              var getdate = await convdate(this.value)
                                              $('#datePaid').val(getdate)
                                            }) 
    $('#datePlan').change(async function(e){
                                              var getdate = await convdate(this.value)
                                              $('#datePlan').val(getdate)
                                            }) 
    $('#disAllcheck').change( async function(e){
                                          if($('#disAllcheck').prop("checked"))
                                          {
                                            var data = await getAlldata()
                                          }
                                          else if(!$('#disAllcheck').prop("checked")){
                                            var data = await getdata(localStorage.getItem('section'))
                                          }
                                        }
                                          
                                          )                 
})


$('#geberate_number_btn').hide()
$('#send_btn').hide()
$('#editBudget_btn').hide()
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
  var excelRows = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[firstSheet], {
    header: "",
    defval: "-"
  })
  console.log(excelRows)
  $('#rowUpload').show()
  var allData = excelRows.length
  var i = 0 
  while(excelRows[i])
  {
    var obj = excelRows[i]
    var checkReq = await job.orderByChild('reqNumber').equalTo(Object.values(obj)[3]).once('value')
    if(checkReq.val() == null)
    {
      var pushJob = await job.push({
                                  'jobName':Object.values(obj)[4],
                                  'reqNumber':Object.values(obj)[2],
                                  'dateReq':Object.values(obj)[1],
                                  'owner':localStorage.getItem('display_url'),
                                  'ownerSection':localStorage.getItem('section'),
                                  'cnJobname':Object.values(obj)[3],
                                  'datePaid':Object.values(obj)[6],
                                  'ca':Object.values(obj)[0],
                                  'recNumber':Object.values(obj)[5],//เลขที่ใบเสร็จ
                                  'techCon':'-',
                                  'datePlan':'-',
                                  'operator':'0',
                                  'textContractor':'-',
                                  'dateSendtocn':'-',
                                  'datecnRecive':'-',
                                  'customerName':'-',
                                  'customerPhone':'-',
                                  'trOwner':'0',//เจ้าของหม้อแปลง 0=PEA,1=CUSTOMER
                                  'trSupply':'0',//ผู้จัดหาหม้อแปลง 0=PEA,1=CUSTOMER
                                  'trSize':'-',
                                  'cirHt':'-',
                                  'cirLt':'-',
                                  'cirSt':'-',
                                  'techSurvey':'-'
                                })
    }
    else if(checkReq.val() !== null)
    {
      // var updateJob = await job.child().update({})
    }
    var percentUpload = (parseInt(i+1)/parseInt(allData))*100
    $('#uploadStatus').attr('style','width:' + percentUpload + '%')
    $('#uploadText').html('กำลังอัพโหลด ' + parseInt(i+1) + '/' + allData +' รายการ')
    i++
  }

}

async function check_reqnumber()
{
  var reqNumber = document.getElementById('reqnumberAdd').value
  if(reqNumber.length == 12)
  {
    var check = await job.orderByChild('reqNumber').equalTo(reqNumber).once('value')
    console.log(check.val())
    if(check.val() !== null)
    {
      fetchDetail(reqNumber)
      $('#reqnumberAdd').val('')
      $('#jobCreat').modal('hide')
    }else if(check.val() == null)
    {
      $("input[name^='add_input']").prop('disabled', false)
    }
  }else if (reqNumber.length < 12)
  {
    $("input[name^='add_input']").prop('disabled', true)
  }
}

async function genNumber()
{
  var checkNumber = await number.endAt().limitToLast(1).once('value')
  var snapNumber = checkNumber.val()
  console.log(checkNumber.val())
  if(checkNumber.val() == null)
  {
    var genNumber = await number.push({'budget':$('#budgetSel').val(),'docnumber':'1','jobkey':$('#jobKey').val()})
    var updatejobNuber = await job.child($('#jobKey').val()).update({'budget':$('#budgetSel').val(),'docnumber':'1' })
  }else if(checkNumber.val() !== null)
  {
    var newdocnumber = parseInt(Object.values(snapNumber)[0].docnumber) + 1
    var genNumber = await number.push({'budget':$('#budgetSel').val(),'docnumber':newdocnumber.toString(),'jobkey':$('#jobKey').val()})
    var updatejobNuber = await job.child($('#jobKey').val()).update({'budget':$('#budgetSel').val(),'docnumber':newdocnumber.toString() })
  }
  var getreqNumber = await job.child($('#jobKey').val()).once('value')
  $('#generate_number_modal').modal('hide')
  fetchDetail(getreqNumber.val().reqNumber)
  
}
async function editBudget()
{
  var getkeyFromnumber = await number.orderByChild('jobkey').equalTo($('#jobKey').val()).once('value')
  var numKey = Object.keys(getkeyFromnumber.val())[0]
  var updatebudgetInnumber = await number.child(numKey).update({'budget':$('#budgeteditSel').val()})
  var updatebudgetInjob = await job.child($('#jobKey').val()).update({'budget':$('#budgeteditSel').val()})
  var getreqNumber = await job.child($('#jobKey').val()).once('value')
  $('#edit_budget').modal('hide')
  fetchDetail(getreqNumber.val().reqNumber)
}
function logout()
{
  localStorage.clear()
  window.location.href = 'https://cscn.herokuapp.com'
}

function render_jobIn_card(jobKey,jobName,jobinkey)
{
  return[
        '<div class="card shadow mt-1" >',
          '<div class="card-body">',    
            '<span class="text-success">' + jobName + '</span>',
            '<button class="btn btn-outline-primary float-right"  id="save_btn" onclick="getJob(' + "'" + jobKey + "','" + jobinkey + "'" + ')" style="border-radius:50px 50px;">',
            '<i class="fas fa-save" aria-hidden="true"></i>',
            'รับงาน',
          '</button>',
          '</div>',
        '</div>'
        ].join("")
}

async function getJob(jobKey,jobinKey)
{
  var get2section = await job.child(jobKey).update({'ownerSection':localStorage.getItem('section'),'owner':localStorage.getItem('display_url')})
  var removefromsending = await jobSending.child(jobinKey).remove()
}

function convdate(dateInput)
{
  dateReturn = dateInput
  if(dateInput !== '-')
  {
  var splitDate = dateInput.split("-")
  var m = splitDate[1]
  var d = splitDate[2]
  var y_thai = parseInt(splitDate[0]) + parseInt(543)
  var month_thai = {1:'มกราคม',2:'กุมภาพันธ์',3:'มีนาคม',4:'เมษายน',5:'พฤษภาคม',6:'มิถุนายน',7:'กรกฏาคม',8:'สิงหาคม',9:'กันยายน',10:'ตุลาคม',11:'พฤศจิกายน',12:'ธันวาคม'}
  var dateReturn =  parseInt(d) + ' ' + month_thai[parseInt(m)] + ' ' + y_thai
  }
  return dateReturn
}

function convThdatetoEndate(dateInput)
{
  var splitDate = dateInput.split(" ")
  var month_thai = {1:'มกราคม',2:'กุมภาพันธ์',3:'มีนาคม',4:'เมษายน',5:'พฤษภาคม',6:'มิถุนายน',7:'กรกฏาคม',8:'สิงหาคม',9:'กันยายน',10:'ตุลาคม',11:'พฤศจิกายน',12:'ธันวาคม'}
  var month_eng = Object.keys(month_thai).find(key => month_thai[key] === splitDate[1])
  var year_thai = parseInt(splitDate[2]) - 543
  dateEn = year_thai+'-'+month_eng+'-'+splitDate[0]
  return dateEn
}
function getdateNow()
{  
  var d = new Date()
  var Month = d.getMonth() +1
  var dateNow = d.getFullYear() + '-' + Month + '-' + d.getDate()
  return dateNow
  
}









                                          
                                          