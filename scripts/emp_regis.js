var emp = firebase.database().ref('employee')

function regis_tech()
{
    emp.orderByChild('staffId').equalTo($('#staffId').val()).once('value',function (snapshot){
                                                                                                if(snapshot.val() == null)
                                                                                                {
                                                                                                    tech.push({
                                                                                                        'uid':localStorage.getItem('userId'),
                                                                                                        'techName':$('#nameInput').val(),
                                                                                                        'position':$('#position').val(),
                                                                                                        'staffId':$('#staffId').val(),
                                                                                                        'display_url':localStorage.getItem('display_url')
                                                                                                        })
                                                                                                    window.location.href = 'index.php?action=home'
                                                                                                }
                                                                                                else
                                                                                                {
                                                                                                    alert('มีแล้ว')
                                                                                                }
                                                                                            })
}


