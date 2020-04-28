var emp = firebase.database().ref('employee')
window.onload = fetchdata()
function fetchdata()
{
    $('#profileImage').attr('src',localStorage.getItem('display_url'))
    $('#nameEdit').val(localStorage.getItem('name'))
    $('#positionEdit').val(localStorage.getItem('position'))
    $('#sectionEdit').val(localStorage.getItem('section'))
    $('#staffId').val(localStorage.getItem('staffId'))
    
}

async function editProfile()
{
 var update = await emp.child().update(
                    {
                        'techName':$('#nameEdit').val(),
                        'position':$('#positionEdit').val(),
                        'section':$('#sectionEdit').val()
                    })
localStorage.clear()
window.location.href = 'https://cscn.herokuapp.com'
}