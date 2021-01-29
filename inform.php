<div class="row mt-3">
    <div class="col-lg-12 text-center">
        <span class="text-primary h4">สอบถามข้อมูล</span>
    </div>
</div>


<div class="row mt-3">
    <div class="col-lg-12 text-center">
        <select class="form-control" id="informsel" onchange="selectfn()">
            <option class="form-control" value="เลือกหัวข้อที่ต้องการ">เลือกหัวข้อที่ต้องการ</option>
            <option class="form-control" value="ติดตามคำร้องติดตั้งมิเตอร์">ติดตามคำร้องติดตั้งมิเตอร์</option>
            <option class="form-control" value="ติดตามคำร้องขยายเขต">ติดตามคำร้องขยายเขต</option>
            <option class="form-control" value="อื่นๆ">อื่นๆ</option>
        </select>
    </div>
</div>

<div class="row mt-3">
    <div class="col-lg-12 text-center">
        <input type="text" class="form-control" id="reqnumber" placeholder="" disabled> 
    </div>
</div>

<div class="row mt-3">
    <div class="col-lg-12 text-center">
        <input type="text" class="form-control" id="reqnumber"placeholder="คำถาม" > 
    </div>
</div>

<div class="row mt-2">
    <div class="col-lg-12 text-center">
        <button class="btn btn-primary btn-block" id="btnSend" onclick="sendpoweroutage()" >ส่งข้อมูล</button>
    </div>
</div>