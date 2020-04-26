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
            <div class="card-header">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="disAllcheck">
                <label class="form-check-label" for="defaultCheck1">
                  แสดงข้อมูลงานทั้งหมด
                </label>
              </div>
            </div>
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
                <th data-align="center" data-sortable="true" data-field="docnumber" data-formatter="docRunning">ลำดับที่</th>
                <th data-align="center" data-field="owner" data-formatter="picOwner">ผู้รับผิดชอบ</th>
                <th data-align="center" data-sortable="true" data-field="docnumber" data-formatter="disWbs">หมายเลขงาน</th>
                <th data-align="center" data-field="jobName" >ชื่องาน</th>
                <th data-align="center" data-field="reqNumber">เลขที่คำร้อง</th>
                <th data-align="center" data-field="dateReq" data-formatter="dateDis">วันที่รับคำร้อง</th>
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
              <input type="text" class="form-control mt-1" id="reqnumberAdd"  onkeyup="check_reqnumber()" placeholder="เลขที่คำร้อง">  
              <input type="text" class="form-control mt-1" id="jobnameAdd" name="add_input[jobnameAdd]" placeholder="ชื่องาน" disabled>
              <input type="text" class="form-control mt-1" id="caAdd" name="add_input[customernameAdd]" placeholder="บัญชีแสดงคู่สัญญา" disabled>
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
        <button class="btn btn-outline-primary mr-auto"  id="selectFile" style="border-radius:50px 50px;">
          <i class="fas fa-save" aria-hidden="true"></i>
          เลือกไฟล์
        </button>
        <button class="btn btn-outline-primary"  id="save_btn" onclick="creat_job()" style="border-radius:50px 50px;">
          <i class="fas fa-save" aria-hidden="true"></i>
          บันทึก
        </button>
      </div>
    </div>
  </div>
</div>

<div class='modal fade' tabindex='-1' role='dialog' id='jobDetail'>
  <div class='modal-dialog modal-lg' role='document' >
    <div class='modal-content'>
      <div class='modal-header'>
        <h5 class='modal-title font-weight-bold' id="head_modal">
            รายละเอียดงาน เลขที่คำร้อง : <span class="text-success" id="reqNumbermodal"></span> <!-- ชื่อลูกค้า : <span class="text-success" id="customerNamemodal"></span>-->
        </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" class="white-text">&times;</span>
        </button>
      </div>
      <div class='modal-body'>
          <div class="row">
            <input type="hidden" id="jobKey">
            <div class="col-lg-4">
              <div class="form-group">
                <span class="text-success font-weight-bold"><i class="fas fa-sort-numeric-down"></i> บัญชีแสดงสัญญา</span>
                <span  id="caNumbermodal"> </span> 
              </div>
            </div>
            <div class="col-lg-4">
              <div class="form-group">
                <span class="text-success font-weight-bold"><i class="fas fa-calendar-alt"></i> ส่งแฟ้มงานให้ ผกส.</span>
                <span  id="dateSendtocn" > </span> 
              </div>
            </div>
            <div class="col-lg-4">
              <div class="form-group">
                <span class="text-success font-weight-bold"><i class="fas fa-calendar-alt"></i> ผกส.รับแฟ้มงาน</span>
                <span id="datecnrecive" ></span>
              </div>
            </div>
          </div>
          
          <div class="row">
            <div class="col-lg-4">
              <div class="form-group">
                <span class="text-success font-weight-bold"><i class="fas fa-sort-numeric-down"></i> เลขที่แบบ</span>
                <span id="drawingNumber" name='inputNumber'></span>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="form-group">
                <span class="text-success font-weight-bold"><i class="fas fa-sort-numeric-down"></i> เลขที่อนุมัติ</span>
                <span  id="approveNumber" name='inputNumber'></span>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="form-group">
                <span class="text-success font-weight-bold"><i class="fas fa-sort-numeric-down"></i> หมายเลขงาน</span>
                <span id="jobWbs" name='inputNumber'></span> 
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-3">
              <div class="form-group">
                <label class="text-success font-weight-bold"><i class="fas fa-calendar-alt"></i> วันที่รับคำร้อง</label>
                <input type="text" class="form-control" data-toggle="datepicker"  name="inputJobmodal[jobNamemodal]" id="dateRecivemodal" disabled>  
              </div>
            </div>
            <div class="col-lg-3">
              <div class="form-group">
                <label class="text-success font-weight-bold"><i class="fas fa-calendar-alt"></i> วันที่ชำระเงิน</label>
                <input type="text" class="form-control" data-toggle="datepicker" name="inputJobmodal[datePaid]" id="datePaid"  disabled>  
              </div>
            </div>
            <div class="col-lg-3">
              <div class="form-group">
                <label class="text-success font-weight-bold"><i class="fas fa-info"></i> เลขที่ใบเสร็จ</label>
                <input type="text" class="form-control" name="inputJobmodal" id="recNumbermodal" disabled>  
              </div>
            </div>
            <div class="col-lg-3">
              <div class="form-group">
                <label class="text-success font-weight-bold"><i class="fas fa-calendar-alt"></i> บริการ Hotline</label>
                <select class="form-control" id="hlService" name="inputJobmodal" disabled>
                  <option value="0">-</option>
                  <option value="1">ไม่มี</option>
                  <option value="2">มี</option>
                </select> 
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-6">
            <div class="form-group">
                <label class="text-success font-weight-bold"><i class="fas fa-folder-open"></i> ชื่อแฟ้มงาน</label>
                <input type="text" class="form-control" name="inputJobmodal[cnJobname]" id="cnJobname" disabled>  
              </div>
             
            </div>
            <div class="col-lg-6">
              <div class="form-group">
                <label class="text-success font-weight-bold"><i class="fas fa-info"></i> คำอธิบายงานงาน</label>
                <input type="text" class="form-control" name="inputJobmodal[jobNamemodal]" id="jobNamemodal" disabled>  
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-3">
                <div class="form-group autocomplete">
                <label class="text-success font-weight-bold"><i class="fas fa-calendar-alt"></i> ช่างสำรวจ</label>
                <input type="text" class="form-control" name="inputJobmodal" id="techSurvey" disabled>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="form-group">
                <label class="text-success font-weight-bold"><i class="fas fa-calendar-alt"></i> หม้อแปลง(ทรัพย์สิน)</label>
                <select class="form-control" id="trOwner" name="inputJobmodal" disabled>
                  <option value="0">-</option>
                  <option value="1">กฟภ.</option>
                  <option value="2">ผู้ใช้ไฟฟ้า</option>
                </select> 
              </div>
            </div>
            <div class="col-lg-3">
              <div class="form-group">
                <label class="text-success font-weight-bold"><i class="fas fa-calendar-alt"></i> หม้อแปลง(ผู้จัดหา)</label>
                <select class="form-control" id="trSupply" name="inputJobmodal" disabled>
                  <option value="0">-</option>
                  <option value="1">กฟภ.</option>
                  <option value="2">ผู้ใช้ไฟฟ้า</option>
                </select> 
              </div>
            </div>
            <div class="col-lg-3">
              <div class="form-group">
                <label class="text-success font-weight-bold"><i class="fas fa-calendar-alt"></i> ขนาดหม้อแปลง</label>
                <input type="text" class="form-control"  name="inputJobmodal[datePlan]" id="trSize" disabled>  
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-3">
              <div class="form-group">
                <label class="text-success font-weight-bold"><i class="fas fa-calendar-alt"></i> เสาไฟฟ้า</label>
                <textarea id="polemodal" class="form-control"  name="textareadetailModal" rows="4" cols="20" disabled></textarea>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="form-group">
                <label class="text-success font-weight-bold"><i class="fas fa-calendar-alt"></i> ความยาวระบบจำหน่าย</label>
                <textarea id="distancemodal" class="form-control"  name="textareadetailModal" rows="4" cols="20" disabled></textarea> 
              </div>
            </div>
            <div class="col-lg-3">
              <div class="form-group">
                <label class="text-success font-weight-bold"><i class="fas fa-user-tag"></i> ช่างควบคุมงาน</label>
                <input type="text" class="form-control" name="inputJobmodal[techCon]" id="techCon" disabled>
                <label class="text-success font-weight-bold mt-1"><i class="fas fa-hammer"></i> การดำเนินการ</label>
                <select class="form-control" id="operator" name="inputJobmodal" disabled>
                    <option value="0">-</option>
                    <option value="1">กฟภ.</option>
                    <option value="2">จ้างเหมา</option>
                </select>  
              </div>
            </div>
            <div class="col-lg-3">
              <div class="form-group">
                <label class="text-success font-weight-bold"><i class="fas fa-calendar-alt"></i> วันที่คาดว่าจะดำเนินการ</label>
                <input type="text" class="form-control" data-toggle="datepicker" name="inputJobmodal[datePlan]" id="datePlan" disabled>  
                <div id="contractor" class="mt-1">
                <label class="text-success font-weight-bold"><i class="fas fa-file-signature"></i> ผู้รับจ้าง</label>
                <input type="text" class="form-control" name="inputJobmodal[contractor]" id="textContractor" disabled>
                </div>
              </div>
            </div>
          </div>

      </div>
      <input id="reqFile" type="file"  style="display: none;" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel">
      <div class="modal-footer" id="jobDetailfoot">
        <button id="send_btn" type="button" class="btn btn-outline-primary mr-auto dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="border-radius:50px 50px;">
          <i class="fas fa-paper-plane" aria-hidden="true"></i>          
          ส่งงาน
        </button>
        <div class="dropdown-menu" aria-labelledby="change_status" id="dropSendjob">
            <a class="dropdown-item" href="#" onclick="sendJob()">แผนกก่อสร้าง</a>
            <a class="dropdown-item" href="#" onclick="sendJob()">แผนกบริการ</a>
        </div>
        <!-- <button class="btn btn-outline-primary mr-auto"  id="sendJobbtn" onclick="sendJob()" style="border-radius:50px 50px;">
            <i class="fas fa-paper-plane" aria-hidden="true"></i>
            ส่งงานให้แผนกก่อสร้าง
        </button> -->
        <button class="btn btn-outline-primary"  id="editBudget_btn" data-toggle="modal" data-target="#edit_budget" style="border-radius:50px 50px;">
          <span id="btnText"><i class="fas fa-folder-plus"></i> แก้ไขงบประมาณ</span>
        </button>
        <button class="btn btn-outline-primary"  id="geberate_number_btn" data-toggle="modal" data-target="#generate_number_modal" style="border-radius:50px 50px;">
          <span id="btnText"><i class="fas fa-folder-plus"></i> สร้างหมายเลขงาน</span>
        </button>
        <button class="btn btn-outline-primary"  id="edit_save_btn" value="edit" onclick="edit_job()" style="border-radius:50px 50px;">
          <span id="btnText"><i class="fas fa-edit" aria-hidden="true"></i> แก้ไข</span>
        </button>
      </div>
    </div>
  </div>
</div>


<div class='modal fade' tabindex='-1' role='dialog' id='generate_number_modal'>
  <div class='modal-dialog modal-md' role='document' >
    <div class='modal-content'>
      <div class='modal-header bg-dark'>
        <h5 class='modal-title font-weight-bold text-white' id="head_modal">
          สร้างหมายเลขงาน
        </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" class="text-white">&times;</span>
        </button>
      </div>
      <div class='modal-body bg-dark'>
          <div class="row">
            <div class="col-md-12">
            <div class="form-group">
              <label class="text-white" for="sel1">เลือกงบ:</label>
              <select class="form-control" id="budgetSel">
                <option value="c">งบผู้ใช้ไฟฟ้า</option>
                <option value="p">งบโครงการ</option>
              </select>
            </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <button class="btn btn-primary"  id="save_btn" onclick="genNumber()" style="border-radius:50px 50px;">
              <i class="fas fa-save" aria-hidden="true"></i>
              ยืนยัน
            </button>
            </div>
          </div>
      </div>
    </div>
  </div>
</div>

<div class='modal fade' tabindex='-1' role='dialog' id="edit_budget">
  <div class='modal-dialog modal-md' role='document' >
    <div class='modal-content'>
      <div class='modal-header bg-dark'>
        <h5 class='modal-title font-weight-bold text-white' id="head_modal">
          แก้ไขงบประมาณ
        </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" class="text-white">&times;</span>
        </button>
      </div>
      <div class='modal-body bg-dark'>
          <div class="row">
            <div class="col-md-12">
            <div class="form-group">
              <label class="text-white"for="sel1">เลือกงบ:</label>
              <select class="form-control" id="budgeteditSel">
                <option value="c">งบผู้ใช้ไฟฟ้า</option>
                <option value="p">งบโครงการ</option>
              </select>
            </div>
            </div>
          </div>
          <div class="row"> 
            <div class="col-md-12">
              <button class="btn btn-primary "  id="save_btn" onclick="editBudget()" style="border-radius:50px 50px;">
                <i class="fas fa-save" aria-hidden="true"></i>
                ยืนยัน
              </button>
            </div>
          </div>
      </div>
    </div>
  </div>
</div>

<div class='modal fade' tabindex='-1' role='dialog' id='poleconfig'>
  <div class='modal-dialog modal-md' role='document' >
    <div class='modal-content'>
      <div class='modal-header bg-dark'>
        <h5 class='modal-title font-weight-bold text-white' id="head_modal">
            ระบุจำนวนเสาไฟฟ้า
        </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" class="text-white">&times;</span>
        </button>
      </div>
      <div class='modal-body bg-dark'>
          <div class="row">
            <div class="col-md-3">
              <div class="form-group">
                  <label class="text-success font-weight-bold"> 8 เมตร</label>
                  <input type="number" class="form-control"  id="p8" value="0" >  
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                  <label class="text-success font-weight-bold"> 9 เมตร</label>
                  <input type="number" class="form-control"  id="p9" value="0" >  
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                  <label class="text-success font-weight-bold"> 12 เมตร</label>
                  <input type="number" class="form-control"  id="p12" value="0" >  
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                  <label class="text-success font-weight-bold"> 12.20 เมตร</label>
                  <input type="number" class="form-control"  id="p1220" value="0" >  
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <button class="btn btn-primary "  id="poleconfig_btn" onclick="polefrommodalconfigtotext()" style="border-radius:50px 50px;">
                <i class="fas fa-save" aria-hidden="true"></i>
                ยืนยัน
              </button>
          </div>
      </div>
    </div>
  </div>
  </div>
</div>

<div class='modal fade' tabindex='-1' role='dialog' id='dismodal'>
  <div class='modal-dialog modal-md' role='document' >
    <div class='modal-content'>
      <div class='modal-header bg-dark'>
        <h5 class='modal-title font-weight-bold text-white'>
            ระบุความยาวระบบจำหน่าย
        </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" class="text-white">&times;</span>
        </button>
      </div>
      <div class='modal-body bg-dark'>
          <div class="row">
            <div class="col-md-3">
              <div class="form-group">
                  <label class="text-success font-weight-bold"> แรงสูง</label>
                  <input type="number" class="form-control" name="inputJobmodal[contractor]" id="HT" value="-" disabled>  
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                  <label class="text-success font-weight-bold"> แรงต่ำ</label>
                  <input type="number" class="form-control" name="inputJobmodal[contractor]" id="LT" value="-" disabled>  
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                  <label class="text-success font-weight-bold"> ไฟสาธารณะ</label>
                  <input type="number" class="form-control" name="inputJobmodal[contractor]" id="ST" value="-" disabled>  
              </div>
            </div>
            
          </div>
          <div class="row">
            <div class="col-md-12">
              <button class="btn btn-primary "  id="poleconfig_btn" onclick="circuitfrommodalconfigtotext()" style="border-radius:50px 50px;">
                <i class="fas fa-save" aria-hidden="true"></i>
                ยืนยัน
              </button>
          </div>
      </div>
    </div>
  </div>
  </div>
</div>

<div class='modal fade' tabindex='-1' role='dialog' id='jobIn'>
  <div class='modal-dialog modal-md' role='document' >
    <div class='modal-content'>
      <div class='modal-header'>
        <h5 class='modal-title font-weight-bold' id="head_modal">
            กล่องงานเข้า
        </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" class="white-text">&times;</span>
        </button>
      </div>
      <div class='modal-body'>
          <div class="row">
            <div class="col-md-12" id="jobInarea">
              <!--  -->
            </div>
          </div>
      </div>
    </div>
  </div>
</div>

<div class='modal fade' tabindex='-1' role='dialog' id='jobOut'>
  <div class='modal-dialog modal-md' role='document' >
    <div class='modal-content'>
      <div class='modal-header'>
        <h5 class='modal-title font-weight-bold' id="head_modal">
            กล่องงานออก
        </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" class="white-text">&times;</span>
        </button>
      </div>
      <div class='modal-body'>
          <div class="row">
            <div class="col-md-12" id="jobOutarea">
              <!--  -->
            </div>
          </div>
      </div>
    </div>
  </div>
</div>


