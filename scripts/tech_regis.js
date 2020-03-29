var tech = firebase.database().ref('tech')

$('#head_text').html('EO_REPORT')

window.onload = async function(e) {
                                var init = await liff.init({liffId:'1653963133-E5eYJn42'})
                                var getconText = await liff.getContext()
                                var profile = await liff.getDecodedIDToken()
                            
                                localStorage.setItem('userId', getconText.userId)
                                $('#uNameInput').html(profile.name)
                                $('#profileImage').attr('src',profile.picture)
                                localStorage.setItem('display_url',profile.picture)
                                
                            } 

function regis_tech()
{
    tech.orderByChild('staffId').equalTo($('#staffId').val()).once('value',function (snapshot){
                                                                                                if(snapshot.val() == null)
                                                                                                {
                                                                                                    tech.push({
                                                                                                        'uid':localStorage.getItem('userId'),
                                                                                                        'techName':$('#nameInput').val(),
                                                                                                        'position':$('#position').val(),
                                                                                                        'staffId':$('#staffId').val(),
                                                                                                        'status':'on',
                                                                                                        'tel':$('#telInput').val(),
                                                                                                        'display_url':localStorage.getItem('display_url')
                                                                                                        })
                                                                                                    window.location.href = 'index.php?action=tech_job'
                                                                                                }
                                                                                                else
                                                                                                {
                                                                                                    alert('มีแล้ว')
                                                                                                }
                                                                                            })
}


