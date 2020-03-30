<!-- <div class="row">
  <div class="col-lg-4 offset-lg-4" id="upload_card">
      <div class="card shadow mt-1 bg-primary" >
        <div class="card-body">
          <div class="row mb-2">
            <div class="col-lg-12">
              <input type="text" class="form-control mt-1" id="reqNumber" name="event_input" placeholder="เลขที่คำร้อง">  
              <input type="text" class="form-control mt-1" id="jobName" name="event_input" placeholder="ชื่องาน">
              <input type="text" class="form-control mt-1" id="customerName" name="event_input" placeholder="ชื่อลูกค้า">
            </div>
          </div>
        </div>
        <div class="card-footer">
          <div class="float-right">
            <button class="btn btn-success"  id="save_btn" onclick="creat_job()">
              <i class="fas fa-save" aria-hidden="true"></i>
              บันทึก
            </button>
          </div>
            </div>
      </div>
  </div>
</div> -->

<div class="row">
  <div class="col-lg-12">
    <div class="row mt-4">
      <div class="col-lg-12">
          <div class="card shadow" >
            <div class="card-body">
            <table 
            id="jobTbl"
            data-toggle="table"  
            data-fixed-columns="true"
            data-sticky-header="true"
            data-search="true">
            <thead>
              <tr>
                <th data-align="center" data-field="owner" data-formatter="picOwner">Owner</th>
                <th data-align="center" data-field="jobName" >ชื่องาน</th>
                <th data-align="center" data-field="reqNumber">เลขที่คำร้อง</th>
                <th data-align="center" data-field="dateReq">วันที่รับคำร้อง</th>
                <th data-align="center" data-field="customerName">ชื่อลูกค้า</th>
                <th data-align="center" data-field="customerTel" >เบอร์โทรศัพท์</th>
                <th data-align="center" data-field="reqNumber" data-formatter="tbl_btn">ดำเนินการ</th>
              </tr>
            </thead>
          </table>
            </div>
          </div>
        </div>
    </div>
  </div>
</div>


<div class='modal fade' tabindex='-1' role='dialog' id='jobCreat'>
  <div class='modal-dialog modal-md' role='document' >
    <div class='modal-content'>
      <div class='modal-header'>
        <h5 class='modal-title font-weight-bold' id="head_modal">
          เพิ่ม/นำเข้าข้อมูล 
        </h5>
      </div>
      <div class='modal-body'>
          <div class="row">
            <div class="col-lg-12">
              <input type="text" class="form-control mt-1" id="reqNumber" name="event_input" placeholder="เลขที่คำร้อง">  
              <input type="text" class="form-control mt-1" id="jobName" name="event_input" placeholder="ชื่องาน">
              <input type="text" class="form-control mt-1" id="customerName" name="event_input" placeholder="ชื่อลูกค้า">
            </div>
          </div>
      </div>
      <div class="modal-footer">
        <div class="float-right">
          <button class="btn btn-success"  id="save_btn" onclick="creat_job()">
            <i class="fas fa-save" aria-hidden="true"></i>
            บันทึก
          </button>
        </div>
      </div>
    </div>
  </div>
</div>



