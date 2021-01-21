<div class="row mt-3">
    <div class="col-lg-12 text-center">
        <span class="text-primary h4">แจ้งเหตุกระแสไฟฟ้าขัดข้อง</span>
    </div>
</div>
<div class="row mt-1">
    <div class="col-lg-12 text-center">
        <p class="text-danger" style="font-size:10px;">**ในเขตพื้นที่รับผิดชอบของ PEA อำเภอโพธาราม</p>
    </div>
</div>
<div class="row mt-2">
    <div class="col-lg-12 text-center">
        <input type="text" class="form-control" id="peano"placeholder="รหัสเครื่องวัด">
        <input type="text" class="form-control mt-2" id="place" placeholder="สถานที่ (ซอย ถนน)">
        <input type="text" class="form-control mt-2" id="observ" placeholder="จุดสังเกตุ">
        <input type="text" class="form-control mt-2" id="customername" placeholder="ชื่อผู้แจ้ง">
        <input type="number" class="form-control mt-2" id="tel" placeholder="เบอร์ติดต่อ">
    </div>
</div>

<div class="row mt-2">
    <div class="col-lg-12 text-center">
        <button class="btn btn-primary btn-block" id="btnSend" onclick="sendpoweroutage()" disabled>ส่งข้อมูล</button>
    </div>
</div>