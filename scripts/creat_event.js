var fb = firebase.database().ref('event')
var tech = firebase.database().ref('tech')

$('#head_text').html('ระบบบริหารจัดการงานแก้กระแสไฟฟ้าขัดข้อง-การไฟฟ้าส่วนภูมิภาคอำเภอโพธาราม')
fb.on('value',function(snapshot){                         
                                    if(snapshot.val() !== null)
                                    {
                                      var data = snapshot.val()
                                      var i = 0
                                      var data_for_tbl = []
                                      while(Object.keys(data)[i])
                                      {
                                          var data_i = Object.values(data)[i]
                                          data_i.key = Object.keys(data)[i]
                                          data_for_tbl.push(data_i)
                                          i++;
                                      }
                                      
                                      var $table = $('#creat_event_tbl')
                                      $table.bootstrapTable('refreshOptions', {data: data_for_tbl})
                                    }
                                  }
                                
        )

function creat_event()
{
  var req = true
  $("input[name='event_input']").each( function() {
                                                     
                                                      var check = $(this).val()
                                                      if(check == '') 
                                                      {
                                                        req = false
                                                      }
                                                  })  
  if(req==true)
    {
      fb.push({
        'place':$('#place').val(),
        'addr':'ม.' + $('#moo').val() + ' ต.' + $('#tumbol').val() + ' อ.' + $('#aumper').val() + ' จ.' +$('#province').val(),
        'cause':$('#cause').val(),
        'cus_name':$('#cus_name').val(),
        'tel':$('#tel').val(),
        'status':'P',
        'tech':''
      })
      $('#place').val('')
      $('#moo').val('')
      $('#tumbol').val('')
      $('#aumper').val('')
      $('#province').val('')
      $('#cause').val('')
      $('#cus_name').val('')
      $('#tel').val('')
    }else
    {
      console.log('กรอกข้อมูลให้ครบซิ')
    }

}

function render_event_card(data,key,no)
{
    var bg_color = ''
    if(data.status == 'P'){bg_color = 'bg-danger'}else if(data.status == 'I'){bg_color = 'bg-warning'}else if(data.status == 'F'){bg_color = 'bg-success'}
    var card = document.getElementById("card_event_area")
    card.innerHTML += '<div class="card shadow mt-1 ' + bg_color + '"><div class="card-body"><div class="row"><div class="col-lg-8"><h5><span class="text-white">' + parseInt(no+1) + '.' + data.place + '</span></h5></div><div class="col-lg-4"><div class="btn-group float-right" role="group"><div class="btn-group dropleft"><button id="change_status" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">เปลี่ยนสถานะ</button><div class="dropdown-menu" aria-labelledby="change_status"><a class="dropdown-item" href="#" onclick="change_status(' + "'" + key+ "'" + ','+ "'P'" + ')">รอดำเนินการ</a><a class="dropdown-item" href="#" onclick="change_status(' + "'" + key+ "'" + ','+ "'I'" + ')">กำลังดำเนินการ</a><a class="dropdown-item" href="#" onclick="change_status(' + "'" + key+ "'" + ','+ "'F'" + ')">เสร็จงาน</a></div></div><div class="btn-group dropleft"><button id="tech" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">ส่งงานให้ช่าง</button><div class="dropdown-menu" aria-labelledby="tech"><a class="dropdown-item" href="#">นายนัทธพงศ์ เจริญกิจพิเชียร</a><a class="dropdown-item" href="#">นายปรัชญาจีนขาวขำ</a></div></div></div></div></div></div></div>'
}

function change_status(key,status)
{
  fb.child(key + '/status').set(status)
  console.log(status)
  if(status == 'F'){
      tech.orderByChild('job_key').equalTo(key).on('value',function(snapshot){
      var data = snapshot.val()
      console.log(data)
      tech.child(Object.keys(data)[0]+'/job').set('ว่าง')
      //tech.child(Object.keys(data)[0]+'/job_key').set('ว่าง')
  }
  )}

}


//////function for table
function tbl_btn(value, row, index) 
{
  // var dropdown=''
  // tech.orderByChild('status').equalTo('on').once('value',function(snapshot){
  //                                     var data = snapshot.val()
  //                                     $('#tech_dropdown'+value).empty()
  //                                     var i = 0
                                      
  //                                     while(Object.keys(data)[i])
  //                                     {
  //                                       dropdown = '<a class="dropdown-item" href="#" onclick="send_job(' + "'" + value + "'" + ',' + "'" + Object.values(data)[i].techName + "'" + ',' + "'" + Object.values(data)[i].staffId + "'" + ')">'+Object.values(data)[i].techName+'</a>'
  //                                       $('#tech_dropdown'+value).append(dropdown)
  //                                       i++
  //                                     } 
                                      
  //                                   })
  return[
          '<div class="btn-group-vertical">',
            '<div class="btn-group dropleft">',
              '<button id="change_status" type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">',
                'เปลี่ยนสถานะ',
              '</button>',
              '<div class="dropdown-menu" aria-labelledby="change_status">',
                '<a class="dropdown-item" href="#" onclick="change_status(' + "'" + value + "'" + ','+ "'P'" + ')">รอดำเนินการ</a>',
                '<a class="dropdown-item" href="#" onclick="change_status(' + "'" + value + "'" + ','+ "'I'" + ')">กำลังดำเนินการ</a>',
                '<a class="dropdown-item" href="#" onclick="change_status(' + "'" + value + "'" + ','+ "'F'" + ')">เสร็จงาน</a>',
              '</div>',
            '</div>',
            '<div class="btn-group dropleft">',
              '<button id="tech_btn'+value+'" type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onclick="render_drop(' + "'" + value + "'" + ',' + "'" + row.place + "'" + ',' + "'" + row.techId + "'" +  ')">',
                'ส่งงานให้ช่าง',
              '</button>',
              '<div class="dropdown-menu" aria-labelledby="tech" id="tech_dropdown' + value + '">',
        
              '</div>',
            '</div>',
          '</div>'
  ].join("")
}

function check_status(value, row, index)
{
  var status=''
  var text_color = ''
  if(value == 'P')
  {
    status = 'รอดำเนินการ'
    text_color = 'text-danger'
  }
  else if(value == 'S')
  {
    status = 'จ่ายงานให้ช่าง'
    text_color = 'text-info'
  }
  else if(value == 'I')
  {
    status = 'กำลังดำเนินการ'
    text_color = 'text-warning'
  }
  else if (value == 'F')
  {
    status = 'จ่ายไฟแล้ว'
    text_color = 'text-success'
  }
  return "<div class='text-center " + text_color + "'>" + status + "</div>";
}


function send_job(key,techname,techid,place)
{
  fb.child(key).update({'status':'S','tech':techname,'techId':techid})
  tech.orderByChild('staffId').equalTo(techid).once('value',function (snapshot){
    var data = snapshot.val()
    console.log(Object.keys(data)[0])
    firebase.database().ref('tech/' + Object.keys(data)[0]+'/job').orderByChild('job_key').equalTo(key).once('value',function(snapshot){
      console.log(snapshot.val())
      if(snapshot.val() == null)
      {
        tech.child(Object.keys(data)[0]+'/job').push({'job_place':place,'job_key':key})
      }
    })
    // tech.child(Object.keys(data)[0]+'/job').push({'job_place':place,'job_key':key})
}) 
}

function render_drop(key,place,techId)
{
 var dropdown=''
  tech.orderByChild('status').equalTo('on').on('value',function(snapshot){
                                      var data = snapshot.val()
                                      $('#tech_dropdown'+key).empty()
                                      var i = 0
                                      
                                      while(Object.keys(data)[i])
                                      {
                                        if(techId == '-')
                                        {
                                        dropdown = '<a class="dropdown-item" href="#" onclick="send_job(' + "'" + key + "'" + ',' + "'" + Object.values(data)[i].techName + "'" + ',' + "'" + Object.values(data)[i].staffId + "'" + ',' + "'" + place + "'" +')">'+Object.values(data)[i].techName+'</a>'
                                        $('#tech_dropdown'+key).append(dropdown)
                                      }
                                        i++
                                      }
                                      $('#tech_dropdown'+key).append('<a class="dropdown-item" href="#" onclick="cancle_job(' + "'" + key + "'" + ')">ยกเลิกส่งงาน</a>') 
                                      
                                    })
}

async function cancle_job(job_key)
{
 var snapshot = await fb.child(job_key).once('value')
 var value = snapshot.val()
 console.log(value.techId)

 var snapshot_tech = await tech.orderByChild('staffId').equalTo(value.techId).once('value')
 var tech_value = snapshot_tech.val()
 var tech_key = Object.keys(tech_value)[0]
 console.log(tech_key)

//  tech.child(Object.keys(tech_value)[0] + '/job/' + job_key).remove()
var snapshot_job_intech = await firebase.database().ref('tech/' + tech_key + '/job').orderByChild('job_key').equalTo(job_key).once('value')
var jobIntech = snapshot_job_intech.val()
var jobIntechkey = Object.keys(jobIntech)[0]
console.log(jobIntechkey)

var del_data_ref = firebase.database().ref('tech/' + tech_key + '/job/' + jobIntechkey)
del_data_ref.remove()
fb.child(job_key).update({'status':'P','tech':'-','techId':'-'})
}
