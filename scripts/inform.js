$('#header').hide()



function selectfn()
{
    if($('#informsel').val() =='ติดตามคำร้องติดตั้งมิเตอร์')
    {
        $('#reqnumber').prop('disabled',false)
        $('#reqnumber').attr('placeholder','เลขที่คำร้อง')
    }
}