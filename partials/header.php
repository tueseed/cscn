<!DOCTYPE html>
<html lang="th">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>outageReporter</title>
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
    <link rel="icon" href="./pic/logo-auc.png" type="image/gif" sizes="64x64">
    <style>
      * {
        font-family: 'Sarabun', 'Roboto', sans-serif;
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
            <span class="text-white" id="head_text">ระบบบริหารจัดการแฟ้มงานก่อสร้าง(CSCN)</span>
          </a>
          <div class="dropdown" id="userDropdown" style="display:none;">
            <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
              <span class="header text-dark font-weight-bold text-center" id="user_logged">
                <span class="text-white" id="userName">ยังไม่ได้เข้าสู่ระบบ</span>
                <img class="shadow-sm" src="" id="userPicture" style="width:50px;height:50px;border-radius:50px 50px;"/>
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
                <a class="dropdown-item" href="#" id="admin_menu">
                  <i class="fas fa-inbox fa-sm fa-fw mr-2 text-gray-400"></i>
                  กล่องงานของแผนก
                </a>
                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#jobCreat" id="admin_menu">
                  <i class="fas fa-upload fa-sm fa-fw mr-2 text-gray-400"></i>
                  เพิ่ม/นำเข้าข้อมูล
                </a>
                <a class="dropdown-item" href="#" onclick="logout()">
                  <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
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
          