var msg = firebase.database().ref('message')
var tech = firebase.database().ref('tech')
var images = firebase.storage().ref()
$('#head_text').html('EO_REPORT')
window.onload = async function(e) {
    var init = await liff.init({liffId:'1653963133-E5eYJn42'})
    var getconText = await liff.getContext()
    var profile = await liff.getDecodedIDToken()

    localStorage.setItem('userId', getconText.userId)
    var check_userId = await this.tech.orderByChild('uid').equalTo(getconText.userId).once('value')
    if(check_userId.val() == null)
    {
        window.location.href = 'index.php?action=tech_regis'
    }
    $('#profileImage').attr('src',profile.picture)
    localStorage.setItem('display_url',profile.picture)
    localStorage.setItem('displayname',profile.name)
}

async function post_msg()
{
    var d = new Date()
    var datepost = d.getDate() + '-' + d.getMonth() + '-' + d.getFullYear()
    var timepost = d.getHours()+':' + d.getMinutes()
    var msg_comment = $('#comment_msg').val()
    var selectedFile = document.getElementById('picture_post').files

    var msg_push =  await msg.push({
                'msg':msg_comment,
                'name':localStorage.getItem('displayname'),
                'display_url':localStorage.getItem('display_url'),
                'timeStamp': timepost,
                'datestamp':datepost,
                'picture_num':pic2up.length
            })
$.blockUI({
            message: '<div class="spinner-border text-primary display-4" style="width: 4rem; height: 4rem;" role="status"><span class="sr-only">Loading...</span></div><br/><h5 class="font-weight-bold text-pea">กำลังโพสต์..</h5>',
            overlayCSS : { 
                            backgroundColor: '#ffffff',
                            opacity: 1
                        },
                css : {
                  opacity: 1,
                  border: 'none',
                }
              })
    var i =0
    while(pic2up[i])
    {
        var mountainImagesRef = images.child('images/' + msg_push.key + '/' + i + '.jpg')
        var up = await mountainImagesRef.put(pic2up[i])
        i++
    }
    $.unblockUI()
    window.location.href='index.php?action=tech_job'
}

$('#camera_btn').on('click', function(){$('#picture_post').trigger('click')})

var pic2up = []
$(document).ready(function(){
$('#picture_post').change(function(e){
                            
                                        var selectedFile = document.getElementById('picture_post')         
                                        // pic2up.push(document.getElementById('picture_post').files)
                                        // pic2up.concat(document.getElementById('picture_post').files)
                                        append_picture(selectedFile)
                                        console.log(pic2up)
                                        // var i = 0
                                        // while(pic2up[0][i])
                                        // {
                                        //     // var mountainImagesRef = images.child('images/msg001/' + i + '.jpg')
                                        //     // mountainImagesRef.put(selectedFile[i])
                                        //     // append_picture(pic2up[i])
                                        //     // console.log(i)
                                        //     i++
                                        // }
                                        // images.child('images/msg001/1.jpg').on.getDownloadURL().then(function(url) {console.log(url)})
                                        
                                        })
})

function append_picture(file)
{
    // console.log(file.files)
    if (file.files && file.files[0])
    {
        var i = 0
        while(file.files[i]){
        pic2up.push(file.files[i])
        var fr = new FileReader()
        fr.onload = function(e) {
            $('#pic_to_upload').append('<img class="card-img-top" src="' + e.target.result + '" alt="Card image cap" style="width:100px;height:100px;"></img>')
        }
        fr.readAsDataURL(file.files[i])
        i++
    }
    }
}
