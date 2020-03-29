
  <div class="row">
    <div class="col-lg-3" id="upload_card">
        <div class="card shadow mt-1 bg-primary" >
            <div class="card-body">
                <div class="row">
                    <span class="card-title text-white mt-2">บันทึกเหตุการณ์กระแสไฟฟ้าขัดข้อง</span>
                </div>
                <div class="row">
                <input type="text" class="form-control mt-1" id="place" name="event_input" placeholder="สถานที่">
                <input type="text" class="form-control mt-1" id="moo" name="event_input" placeholder="หมู่ที่">
                <input type="text" class="form-control mt-1" id="tumbol" name="event_input" placeholder="ตำบล">
                <input type="text" class="form-control mt-1" id="aumper" name="event_input" placeholder="อำเภอ">
                <input type="text" class="form-control mt-1" id="province" name="event_input" placeholder="จังหวัด">
                <input type="text" class="form-control mt-1" id="cause" name="event_input" placeholder="สาเหตุ">
                <input type="text" class="form-control mt-1" id="cus_name" name="event_input" placeholder="ผู้แจ้ง">
                <input type="text" class="form-control mt-1" id="tel" name="event_input" placeholder="เบอร์ติดต่อ">
                </div>

            </div>
            <div class="card-footer">
                <div class="float-right">
                    <button class="btn btn-success"  id="save_btn" onclick="creat_event()">
                        <i class="fas fa-save" aria-hidden="true"></i>
                        บันทึก
                    </button>
                </div>
            </div>
        </div>
    </div>

  <div class="col-lg-9" id="card_event_area">
    <div class="card shadow" >
          <div class="card-body">
          <table 
          id="creat_event_tbl"
          data-toggle="table"  
          data-fixed-columns="false"
          data-sticky-header="true"
          data-search="true">
          <thead>
            <tr>
              <th data-align="center" data-field="place" >สถานที่</th>
              <th data-align="center" data-field="addr" >ที่อยู่</th>
              <th data-align="center" data-field="cause">สาเหตุ</th>
              <th data-align="center" data-field="cus_name" > ผู้แจ้ง</th>
              <th data-align="center" data-field="tel" > เบอร์ติดต่อ</th>
              <th data-align="center" data-field="status" data-formatter="check_status">สถานะ</th>
              <th data-align="center" data-field="tech">ช่าง</th>
              <th data-align="center" data-field="key" data-formatter="tbl_btn">ดำเนินการ</th>
            </tr>
          </thead>
        </table>
          </div>
        </div>
  </div>
</div>






