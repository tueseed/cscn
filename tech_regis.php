<div class="row">
  <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
    <h4 class="font-weight-bold text-center">
      ลงทะเบียนการใช้งาน
    </h4>
  </div>
</div>

<div class="row text-center">
    <div class="col-sm-12">
        <div class="form-group text-center">
            <h4 class="font-weight-bold">ยินดีต้อนรับ<br/><div id="uNameInput"></div></h4>
            <img id="profileImage" class="shadow-sm" style="width:100px;height:100px;border-radius:50px 50px;"/>
            <input type="hidden" id="uIdInput" name="uIdInput">
        </div>
        <div class="form-group">
            <label for="nameInput" class="font-weight-bold"><i class="fas fa-user-edit"></i> ชื่อ - นามสกุล</label>
            <input type="text" class="form-control" id="nameInput" name="nameInput" placeholder="ชื่อ - นามสกุลของท่าน" required>
        </div>
        <div class="form-group">
            <label for="telInput" class="font-weight-bold"><i class="fa fa-address-card"></i> ตำแหน่งสังกัด</label>
            <input type="text" class="form-control" id="position" name="position" placeholder="กรอกตำแหน่ง/สังกัด" required>
        </div>
        <div class="form-group">
            <label for="telInput" class="font-weight-bold"><i class="fa fa-address-card"></i> รหัสพนักงาน</label>
            <input type="text" class="form-control" id="staffId" name="staffId" placeholder="กรอกรหัสพนักงาน" required>
        </div>
        <div class="form-group">
            <label for="telInput" class="font-weight-bold"><i class="fas fa-mobile-alt"></i> เบอร์โทรศัพท์</label>
            <input type="text" class="form-control" id="telInput" name="telInput" placeholder="กรอกเบอร์โทรศัพท์ สำหรับติดต่อกลับ" required>
        </div>
        <button type="ิbutton" class="btn btn-primary" onclick="regis_tech()">ส่งข้อมูล</button>
    </div>
</div>