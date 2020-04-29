<!DOCTYPE html>
<html lang="th">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>CSCN</title>
    <link rel="stylesheet" href="./assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="./assets/css/theme_1545570683953.css">
    <link rel="stylesheet" href="./assets/css/jquery-ui.css">
    <link href="https://fonts.googleapis.com/css?family=Sarabun|Roboto" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    <link rel="stylesheet" href="https://unpkg.com/bootstrap-table@1.14.2/dist/bootstrap-table.min.css">
    <link rel="stylesheet" href="./assets/css/bootstrap-table-sticky-header.css">
    <link rel="stylesheet" href="./assets/css/effect.css">
    <link rel="stylesheet" href="./assets/css/sidemenu.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.8.0/css/bootstrap-datepicker.min.css" />
    <link rel="stylesheet" href="./assets/css/autocomplete.css">
    <link rel="icon" href="./pic/sending.jpeg" type="image/gif" sizes="64x64">
    <style>
      * {
        font-family: 'Sarabun', 'Roboto', sans-serif;
      }

      .item {
    position:relative;
    padding-top:0px;
    display:inline-block;
}
.notify-badge{
    position: absolute;
    right:-10px;
    top:-5px;
    background:red;
    text-align: center;
    border-radius: 10px 10px 10px 10px;
    color:white;
    padding:1px 1px;
    font-size:14px;
}
    </style>
  </head>

  <body class="bg-dark">
    <header class="pb-3">
      <!-- Image and text -->
      <nav class="shadow-sm navbar navbar-light bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand font-weight-bold" href="?action=rg1">
            <img src="./assets/images/pea-logo.png" width="100" class="d-inline-block align-top" alt="">
            <span class="text-white" id="head_text">ระบบบริหารจัดการแฟ้มงานก่อสร้าง</span>
          </a>
          <div class="dropdown" id="userDropdown" style="display:none;">
            <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
              <span class="header text-dark font-weight-bold text-center" id="user_logged">
                <span class="text-white" id="userName">ยังไม่ได้เข้าสู่ระบบ</span>
                <div class="item">
                <span class="notify-badge" id="notifyNumber"></span>
                <img class="shadow-sm" src="" id="userPicture" style="width:50px;height:50px;border-radius:50px 50px;"/>
                </div>
              </span>
            </a>
            <div class="dropdown-menu dropdown-menu-right justify-content-center">
                <a class="dropdown-item" href="#" >
                  <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                  <span id="empName"></span>
                </a>
                <a class="dropdown-item" href="#" >
                  <i class="fas fa-building fa-sm fa-fw mr-2 text-gray-400"></i>
                  <span id="empsecTion"></span>
                </a>
                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#jobIn" >
                  <i class="fas fa-sign-in-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                  กล่องงานเข้า <span class="badge badge-danger" id="notifyNumberIn"></span>
                </a>
                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#jobOut" >
                  <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                  กล่องงานออก <span class="badge badge-danger" id="notifyNumberOut"></span>
                </a>
                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#jobCreat" >
                  <i class="fas fa-upload fa-sm fa-fw mr-2 text-gray-400"></i>
                  เพิ่ม/นำเข้าข้อมูล
                </a>
                <a class="dropdown-item" href="?action=authorizemanage" id="admin_menu">
                  <i class="fas fa-users-cog fa-sm fa-fw mr-2 text-gray-400"></i>
                  จัดการ User
                </a>
                <a class="dropdown-item" href="?action=editprofile">
                  <i class="fas fa-user-edit fa-sm fa-fw mr-2 text-gray-400"></i>
                  แก้ไขข้อมูลส่วนตัว
                </a><a class="dropdown-item" href="#" onclick="creatExcel()">
                  <i class="fas fa-cloud-download-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                  ดาวน์โหลดข้อมูล
                </a>

                <a class="dropdown-item" href="#" onclick="logout()">
                  <i class="fas fa-power-off fa-sm fa-fw mr-2 text-gray-400"></i>
                  ออกจากระบบ
                </a>
            </div>
          </div>
      </nav>
    </header>
    <main class="mb-3" id="main">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-10 col-md-10 col-lg-12">
          