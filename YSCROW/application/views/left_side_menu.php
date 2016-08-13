<div class="page-container sidebar-collapsed">
      <!--top bar -->
      <!--<div style="height:50px; background-color:#60c7c6;  position: fixed;right: 0;top: 0;width: 100%;z-index: 990;">
        <div class="row">
          <div class="col-md-5 right" style="color:#fff; vertical-align:middle; margin-right:20px; margin-top:10px;">
            <div class="right" style="font-size:18px; color:#000;"> <img src="<?php echo base_url().'assets/img/user.jpg'?>" style="width:24px; border-radius:50px; margin-right:10px;" alt="user"/> <span style="text-transform:capitalize; vertical-align:middle;"><?=$fname.' '.$lname ?></span></div>
          </div>
        </div>
      </div>-->

      <header class="navbar">
          <div class="container-fluid">
              <ul class="nav navbar-nav pull-right">
                  <li class="nav-item dropdown">
                      <a aria-expanded="false" aria-haspopup="true" role="button" href="#" data-toggle="dropdown" class="nav-link dropdown-toggle nav-link">
                          <img alt="admin@bootstrapmaster.com" class="img-avatar" src="<?php echo base_url().'assets/img/user.jpg'?>">
                          <span style="text-transform:capitalize; vertical-align:middle;"><?=$fname.' '.$lname ?></span>
                      </a>
                      <div class="dropdown-menu dropdown-menu-right">
                          <!--<a href="#" class="dropdown-item"><i class="fa fa-user"></i> Profile</a>-->
                          <a href="<?php echo base_url('home/logout'); ?>" class="dropdown-item"><i class="fa fa-lock"></i> Logout</a>
                      </div>
                  </li>
              </ul>
          </div>
      </header>

      <!-- left side menu open-->
      <div class="left_sidebar-menu">
        <header class="logo">
          <!--nav open close icon -->
          <a href="#" class="sidebar-icon" style="color:#fff;">
            <span class="fa fa-bars"></span>
          </a>
          <!--user logo -->
          <div  class="row user">
            <div><img src="<?php echo base_url().'assets/img/user.jpg'?>" alt="user"/> </div>
            <div class="name" style="text-transform:capitalize"><?=$fname.' '.$lname ?></div>
            <div class="name" style="text-transform:capitalize"><?=$email ?></div>
            <!--<div class="name"><a style="color:#60c7c6; text-decoration:none;" href="<?php echo base_url('home/logout'); ?>">Logout</a></div>
            <div class="logout"><a href="<?php echo base_url('home/logout'); ?>"><i style="color:#60c7c6;" class="fa fa-sign-out fa-2x" aria-hidden="true"></i>
            </a></div>-->
          </div>
        </header>
        <div style="border-top:1px solid #464f5a"></div>
        <div class="user_menu">
          <ul id="user_menu">
            <li id="menu-home" ><a title="Create Transaction" href="<?php echo base_url('home/role_category'); ?>"><i class="fa fa-home"></i><span>Create Transaction</span></a></li>
            <li><a title="View All Transactions" href="<?php echo base_url('home/view_all_tx'); ?>"><i class="fa fa-th"></i><span>View All Transactions</span></a></li>
            <!--<li><a title="User Settings" href="#"><i class="fa fa-gears"></i><span>User Settings</span></a></li>-->
          </ul>
        </div><!--/.user_menu-->
        </div><!--/.left_sidebar-menu -->
