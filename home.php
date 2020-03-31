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
            data-pagination="true"
            data-pagination-v-align="both"
            data-page-list="[5, 10, 20, 100, ALL]"
            data-page-size="5"
            data-fixed-columns="false"
            data-sticky-header="true"
            data-search="true">
            <thead>
              <tr>
                <th data-align="center" data-field="owner" data-formatter="picOwner">Owner</th>
                <th data-align="center" data-field="jobName" >ชื่องาน</th>
                <th data-align="center" data-field="reqNumber">เลขที่คำร้อง</th>
                <th data-align="center" data-field="dateReq">วันที่รับคำร้อง</th>
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
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" class="white-text">&times;</span>
        </button>
      </div>
      <div class='modal-body'>
          <div class="row">
            <div class="col-md-12">
              <input type="text" class="form-control mt-1" id="reqNumber" name="event_input" placeholder="เลขที่คำร้อง">  
              <input type="text" class="form-control mt-1" id="jobName" name="event_input" placeholder="ชื่องาน">
              <input type="text" class="form-control mt-1" id="customerName" name="event_input" placeholder="ชื่อลูกค้า">
            </div>
          </div>
          <div class="row mt-2" id="rowUpload" style="display:none;">
            <div class="col-md-12 ">
              <div class="progress">
                <div class="progress-bar progress-bar-info progress-bar-striped" role="progressbar"
                  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width:0%" id="uploadStatus">
                    <spam id="uploadText"></span>
                </div>
              </div>
              </div>
          </div>
      </div>
      <input id="reqFile" type="file"  style="display: none;" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel">
      <div class="modal-footer">
        <button class="btn btn-success mr-auto"  id="selectFile" >
          <i class="fas fa-save" aria-hidden="true"></i>
          เลือกไฟล์
        </button>
        <button class="btn btn-success"  id="save_btn" onclick="creat_job()">
          <i class="fas fa-save" aria-hidden="true"></i>
          บันทึก
        </button>
      </div>
    </div>
  </div>
</div>



