<!DOCTYPE html>
<html lang="en">

<head>
    <title>
        <?=$title?>
    </title>
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta charset="utf-8">
    <meta name="author">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <!-- stylesheet -->
    <link rel="stylesheet" href="<?php echo base_url().'assets/css/bootstrap.css'?>" type="text/css">
    <link rel="stylesheet" href="<?php echo base_url().'assets/css/materialize.css'?>" type="text/css">
    <!--<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/css/materialize.min.css">-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.css" type="text/css">
	<!--<link rel="stylesheet" href="<?php echo base_url().'assets/css/font-awesome.css'?>" type="text/css">-->
    <link rel="stylesheet" href="<?php echo base_url().'assets/css/custom.css'?>" type="text/css">
</head>

<body>

    <div id="site-wrapper">
        <div id="site-canvas">
            <div class="header-content">
                <nav class="right-off-canvas-menu" style="line-height:20px;">
                    <div style="position:fixed;">
                        <div class="row">
                            <div class="col-sm-12" style="padding:0px;">
                                <div style="display:inline; float:left;">
                                    <img style="height: 60px;" src="<?php echo base_url().'assets/img/logo.png'?>" alt="Yscrow Logo">
                                </div>
                                <div style="display:inline; float:left;">
                                    <span class="logofname">YSCROW</span><br/><span class="logosname">Trusted Transactions</span>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-sm-12" style="padding:0px;">
                            <ul class="push_nav">
                                <li>
                                    <a class="page-scroll" href="#">Home</a>
                                </li>

                                <li>
                                    <a data-toggle="modal" data-target="#about" href="#">About Us</a>
                                </li>

                                <!--<li>
                                    <a data-toggle="modal" data-target="#why_yscrow" href="#">Why Yscrow</a>
                                </li>-->

                                <li>
                                    <a data-toggle="modal" data-target="#terms" href="#">Terms & Conditions</a>
                                </li>

                                <li>
                                    <a data-toggle="modal" data-target="#faq" href="#">FAQs</a>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </nav>

                <div id="menu" class=" topmenu transition">
                    <div class="container-fluid menu-content">
                        <div class="left">
                            <a href="#">
                                <div class="left">
                                    <img style="height: 60px;" src="<?php echo base_url().'assets/img/logo.png'?>" alt="Yscrow Logo">
                                </div>
                                <div class="left logoname hidden-xs">
                                    <span class="logofname">YSCROW</span>
                                    <br/>
                                    <span class="logosname">Trusted Transactions</span>
                                    <br/>
                                </div>
                            </a>
                        </div>
                        <div class="right">
                            <span class="item">
                                <a class="waves-effect waves-light" data-toggle="modal" data-target="#reg_form"><img class="hidden-xs" src="<?php echo base_url().'assets/img/register.png'?>" alt="" /><span class="name">Register</span>
                            </a>
                            </span>
                            <span class="vertical_line"></span>
                            <span class="item">
                                <a class="waves-effect waves-light" data-toggle="modal" data-target="#login_form"><img class="hidden-xs" src="<?php echo base_url().'assets/img/login.png'?>" alt="" /><span class="name">Login</span>
                            </a>
                            </span>
                            <span class="item menu-section nav-btn">

									<span class="name nav-menu">

                                        <button class="burger toggle-nav"></button>

                                    </span>
                            </span>
                        </div>
                    </div>
                </div>

                <div class="row no_margin_padding">
                    <div class="col-md-6 col-md-offset-3">
                        <?php echo $this->session->flashdata('verify_msg'); ?>
                    </div>
                </div>


                <!-- modal reg form -->

					<div class="modal fade" id="reg_form" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
						<div class="modal-dialog" role="document">
						<!-- close button -->


						<!--Content-->
						<div class="modal-body">
						<div class="modal-content reg_form">
                        <div class="row">
                            <div class="col m4 hide-on-small-and-down left_side">
                                <div>
                                    <img src="<?php echo base_url().'assets/img/logo.png'?>">
                                </div>
                                <div class="text">
                                    100% TRUSTED<br/>TRANSACTIONS
                                </div>
                            </div>
                            <div class="col s12 m8 form-section">

							<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>

                                <div class="row">
                                    <div class="col s12">
                                        <?php echo validation_errors( '<p class="error">'); ?>
                                        <!--<form id="register_form" enctype="multipart/form-data" accept-charset="utf-8" action="">-->
                                        <?php echo form_open_multipart( 'home/register', 'id="register_form"'); ?>
                                        <div class="row">
                                            <div class="input-field col s12 m6 l6">
                                                <i class="material-icons prefix"><img src="<?php echo base_url().'assets/img/first.png'?>" alt="Yscrow Logo"></i>
                                                <input id="first_name" name="first_name" type="text" class="validate" data-validation="required length custom" data-validation-length="min4" data-validation-regexp="^([A-Za-z]+)$" data-validation-error-msg-required="First Name required">
                                                <label for="first_name">First Name</label>
                                            </div>
                                            <div class="input-field col s12 m6 l6">
                                                <i class="material-icons prefix"><img src="<?php echo base_url().'assets/img/first.png'?>" alt="Yscrow Logo"></i>
                                                <input id="last_name" name="last_name" type="text" class="validate" data-validation="required length custom" data-validation-length="min1" data-validation-regexp="^([A-Za-z]+)$" data-validation-error-msg-required="Last Name required">
                                                <label for="last_name">Last Name</label>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="input-field col s12">
                                                <i class="material-icons prefix"><img src="<?php echo base_url().'assets/img/email.png'?>" alt="Yscrow Logo"></i>
                                                <input id="email" name="email" type="email" class="validate" data-validation="required email server" data-validation-url="home/is_email_available" data-validation-error-msg-required="Email required" data-validation-error-msg-email="Provide valid email address"
                                                required>
                                                <label for="email">Email</label>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="input-field col s12 m6 l6">
                                                <i class="material-icons prefix"><img src="<?php echo base_url().'assets/img/password.png'?>" alt="Yscrow Logo"></i>
                                                <input id="password_confirmation" name="password_confirmation" type="password" class="validate" data-validation="required length" data-validation-length="min5" data-validation-error-msg-required="Password required" data-validation-error-msg="Password must be min 5 character">
                                                <label for="password_confirmation">Password</label>
                                            </div>
                                            <div class="input-field col s12 m6 l6">
                                                <i class="material-icons prefix"><img src="<?php echo base_url().'assets/img/password.png'?>" alt="Yscrow Logo"></i>
                                                <input id="password" name="password" type="password" class="validate" data-validation="required confirmation" data-validation-error-msg-required="Confirm password required" data-validation-error-msg-confirmation="Password dosn't match">
                                                <label for="password">Re-type Password</label>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="input-field col s12">
                                                <i class="material-icons prefix"><img src="<?php echo base_url().'assets/img/mobile.png'?>" alt="Yscrow Logo"></i>
                                                <input id="mobile" name="mobile" type="text" class="validate" data-validation="required length custom" data-validation-length="min10" data-validation-regexp="^([0-9]+)$" data-validation-error-msg-required="Provide your mobile number" data-validation-error-msg="Mobile number must be 10 characters(0-9)">
                                                <label for="mobile">Mobile Number</label>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="file-field input-field col s12 m9 l9 right ">
                                                <div class="btn" style="width:75px;">
                                                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 17">
                                                        <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"
                                                        />
                                                    </svg>
                                                    <input type="file" id="id_proof" name="id_proof" data-validation="mime size required" data-validation-allowing="jpg, png" data-validation-max-size="3072kb" data-validation-error-msg-required="Upload Your Govt. Issued Id Proof"/>

                                                </div>
                                                <div class="file-path-wrapper">
                                                    <input class="file-path validate" type="text" placeholder="Upload ID Proof"/>
													<span class="help_txt text-right">(Any Govt. Issued ID Proof)</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="alert-msg"></div>
                                        <div class="row">
                                            <div class="col s12 go_btn text-center">
                                                <button type="submit" class="" value=""><img src="<?php echo base_url().'assets/img/logout.png'?>" alt="Submit" width="48" height="48" />
                                                </button>
                                                <div id="loader" style="display:none;">
                                                    <xml version="1.0" encoding="utf-8"/>
                                                    <svg width='70px' height='70px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-ripple">
                                                        <rect x="0" y="0" width="100" height="100" fill="none" class="bk"></rect>
                                                        <g>
                                                            <animate attributeName="opacity" dur="2s" repeatCount="indefinite" begin="0s" keyTimes="0;0.33;1" values="1;1;0"></animate>
                                                            <circle cx="50" cy="50" r="40" stroke="#afafb7" fill="none" stroke-width="6" stroke-linecap="round">
                                                                <animate attributeName="r" dur="2s" repeatCount="indefinite" begin="0s" keyTimes="0;0.33;1" values="0;22;44"></animate>
                                                            </circle>
                                                        </g>
                                                        <g>
                                                            <animate attributeName="opacity" dur="2s" repeatCount="indefinite" begin="1s" keyTimes="0;0.33;1" values="1;1;0"></animate>
                                                            <circle cx="50" cy="50" r="40" stroke="#5cffd6" fill="none" stroke-width="6" stroke-linecap="round">
                                                                <animate attributeName="r" dur="2s" repeatCount="indefinite" begin="1s" keyTimes="0;0.33;1" values="0;22;44"></animate>
                                                            </circle>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <!--<a href="#" id="register"><img src="assets/img/logout.png" />
                                        </a>-->
                                                <!--<input type="image" id="register" src="assets/img/logout.png" alt="Submit" width="48" height="48">-->
                                            </div>
                                        </div>
                                        </form>
                                    </div>
                                </div>
                                <!--row end -->
                            </div>
                            <!--col end -->
                        </div>
						</div>
                    </div>
                </div>
				</div>
                <!-- /. modal reg form  -->





                <!-- modal login form -->

					<div class="modal fade" id="login_form" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
						<div class="modal-dialog" role="document">
						<!--Content-->
						<div class="modal-content login_form">

						 <div class="row">
                            <div class="col m4 hide-on-small-and-down left_side">
                                <div>
                                    <img src="<?php echo base_url().'assets/img/logo.png'?>">
                                </div>
                                <div class="text">
                                    100% TRUSTED
                                    <br/>TRANSACTIONS
                                </div>
                            </div>
                            <div class="col s12 m8 form-section">
							<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <div class="row login_form_view">
                                    <div class="col s12">
                                        <?php echo validation_errors( '<p class="error">'); ?>
                                        <!--<form id="login_form" enctype="multipart/form-data" accept-charset="utf-8" action="<?php echo base_url('home/login'); ?>">-->
                                        <?php echo form_open_multipart( 'home/login', 'id="login_form"'); ?>
                                        <div class="row">
                                            <div class="input-field col s12">
                                                <i class="material-icons prefix"><img src="<?php echo base_url().'assets/img/email.png'?>" alt="Yscrow Logo"></i>
                                                <input id="email" name="email" type="email" class="validate" data-validation="required email" data-validation-error-msg-required="Email required" data-validation-error-msg-email="Provide valid email address" required>
                                                <label for="email">Email</label>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="input-field col s12">
                                                <i class="material-icons prefix"><img src="<?php echo base_url().'assets/img/password.png'?>" alt="Yscrow Logo"></i>
                                                <input id="password" name="password" type="password" class="validate" data-validation="required" data-validation-error-msg-required="Password required">
                                                <label for="password">Password</label>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <!--<div class="input-field col m6 remember_me" style="text-align:left;">
                                    <input type="checkbox" id="remember_me" name="remember_me" />
                                    <label for="remember_me">Remember me</label>
                                </div>-->
                                            <div class="col m6 forgot_pass right" style="text-align:right;">
                                                <div style="cursor:pointer;" onclick="show_forgot_password_form();">Forgot Password?</div>
                                            </div>
                                        </div>
                                        <div id="alert-msg1"></div>
                                        <div class="row">
                                            <div class="col s12 go_btn text-center">
                                                <button type="submit" class="" value=""><img src="<?php echo base_url().'assets/img/logout.png'?>" alt="Submit" width="48" height="48" />
                                                </button>
                                                <div id="login_loader" style="display:none;">
                                                    <xml version="1.0" encoding="utf-8"/>
                                                    <svg width='70px' height='70px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-ripple">
                                                        <rect x="0" y="0" width="100" height="100" fill="none" class="bk"></rect>
                                                        <g>
                                                            <animate attributeName="opacity" dur="2s" repeatCount="indefinite" begin="0s" keyTimes="0;0.33;1" values="1;1;0"></animate>
                                                            <circle cx="50" cy="50" r="40" stroke="#afafb7" fill="none" stroke-width="6" stroke-linecap="round">
                                                                <animate attributeName="r" dur="2s" repeatCount="indefinite" begin="0s" keyTimes="0;0.33;1" values="0;22;44"></animate>
                                                            </circle>
                                                        </g>
                                                        <g>
                                                            <animate attributeName="opacity" dur="2s" repeatCount="indefinite" begin="1s" keyTimes="0;0.33;1" values="1;1;0"></animate>
                                                            <circle cx="50" cy="50" r="40" stroke="#5cffd6" fill="none" stroke-width="6" stroke-linecap="round">
                                                                <animate attributeName="r" dur="2s" repeatCount="indefinite" begin="1s" keyTimes="0;0.33;1" values="0;22;44"></animate>
                                                            </circle>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <!--<a href="#"><img src="assets/img/logout.png" />
                                        </a>
                                        <input type="image" id="login" src="assets/img/logout.png" alt="Submit" width="48" height="48">-->
                                            </div>
                                        </div>
                                        </form>
                                    </div>
                                </div>
                                <!--login form end -->
                                <div class="row forgot_password_form" style="display:none;">
                                    <div class="col s12 form">
                                        <div class="row" style="margin-top:25px;">
                                            <?php echo validation_errors( '<p class="error">'); ?>
                                            <?php echo form_open( 'home/reset_pass', 'id="forgot_password_form"'); ?>
                                            <div class="row">
                                                <div class="input-field col s12 m12 l12">
                                                    <?php echo form_error( 'recovery_mail'); ?>
                                                    <i class="material-icons prefix"><img src="<?php echo base_url().'assets/img/email.png'?>" alt="Yscrow Logo"></i>
                                                    <input id="recovery_mail" name="recovery_mail" type="email" class="validate" data-validation="required email" data-validation-error-msg-required="Email required" data-validation-error-msg-email="Provide valid email address" required>
                                                    <label for="recovery_mail">Email Address</label>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col m6 forgot_pass right" style="text-align:right;">
                                                    <div style="cursor:pointer;" onclick="show_login_form();">Login here..</div>
                                                </div>
                                            </div>
                                            <div id="alert-msg2"></div>
                                            <div class="row">
                                                <div class="col s12 go_btn text-center" style="margin-top:45px;">
                                                    <button type="submit" class="" value=""><img src="<?php echo base_url().'assets/img/logout.png'?>" alt="Submit" width="48" height="48" />
                                                    </button>
                                                    <div id="login_loader" style="display:none;">
                                                        <xml version="1.0" encoding="utf-8"/>
                                                        <svg width='70px' height='70px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-ripple">
                                                            <rect x="0" y="0" width="100" height="100" fill="none" class="bk"></rect>
                                                            <g>
                                                                <animate attributeName="opacity" dur="2s" repeatCount="indefinite" begin="0s" keyTimes="0;0.33;1" values="1;1;0"></animate>
                                                                <circle cx="50" cy="50" r="40" stroke="#afafb7" fill="none" stroke-width="6" stroke-linecap="round">
                                                                    <animate attributeName="r" dur="2s" repeatCount="indefinite" begin="0s" keyTimes="0;0.33;1" values="0;22;44"></animate>
                                                                </circle>
                                                            </g>
                                                            <g>
                                                                <animate attributeName="opacity" dur="2s" repeatCount="indefinite" begin="1s" keyTimes="0;0.33;1" values="1;1;0"></animate>
                                                                <circle cx="50" cy="50" r="40" stroke="#5cffd6" fill="none" stroke-width="6" stroke-linecap="round">
                                                                    <animate attributeName="r" dur="2s" repeatCount="indefinite" begin="1s" keyTimes="0;0.33;1" values="0;22;44"></animate>
                                                                </circle>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <!-- forgot_password_form end -->
                            </div>
                            <!-- right col end -->
                        </div>
                    </div>
                </div>
				</div>
                <!-- /.modal login form -->

                <div class="modal fade" id="change_password_form" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                  <!--Content-->
                  <div class="modal-content reg_form">
                   <div class="row">
                                  <div class="col m4 hide-on-small-and-down left_side">
                                      <div>
                                          <img src="<?php echo base_url().'assets/img/logo.png'?>">
                                      </div>
                                      <div class="text">
                                          100% TRUSTED
                                          <br/>TRANSACTIONS
                                      </div>
                                  </div>
                                  <div class="col s12 m8 form-section">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                      <div class="row change_password_form">
                                          <div class="col s12">
                                                <?php echo validation_errors( '<p class="error">'); ?>
                                              <!--<form id="login_form" enctype="multipart/form-data" accept-charset="utf-8" action="<?php echo base_url('home/login'); ?>">-->
                                              <?php echo form_open( 'home/update_password', 'id="change_password_form"'); ?>
                                              <div class="row">
                                                  <div class="input-field col s12 m12 l12">
                                                      <?php echo form_error( 'email'); ?>
                                                      <i class="material-icons prefix"><img src="<?php echo base_url().'assets/img/email.png'?>" alt="Yscrow Logo"></i>
                                                      <input id="email" name="email" type="email" class="validate" data-validation="required email" data-validation-error-msg-required="Email required" data-validation-error-msg-email="Provide valid email address" required>
                                                      <label for="email">Email Address</label>
                                                  </div>
                                              </div>
                                              <div class="row">
                                                  <div class="input-field col s12 m12 l12">
                                                      <i class="material-icons prefix"><img src="<?php echo base_url().'assets/img/password.png'?>" alt="Yscrow Logo"></i>
                                                      <input id="password_confirmation" name="password_confirmation" type="password" class="validate" data-validation="required length" data-validation-length="min5" data-validation-error-msg-required="Password required" data-validation-error-msg="Password must be min 5 character">
                                                      <label for="password_confirmation">Password</label>
                                                  </div>
                                              </div>
                                              <div class="row">
                                                  <div class="input-field col s12 m12 l12">
                                                      <i class="material-icons prefix"><img src="<?php echo base_url().'assets/img/password.png'?>" alt="Yscrow Logo"></i>
                                                      <input id="password" name="password" type="password" class="validate" data-validation="required confirmation" data-validation-error-msg-required="Confirm password required" data-validation-error-msg-confirmation="Password dosn't match">
                                                      <label for="password">Confirm Password</label>
                                                  </div>
                                              </div>
                                              <div id="alert-msg3"></div>

                                              <div class="row">
                                                  <div class="col s12 go_btn text-center" style="margin-top:45px;">
                                                      <button type="submit" class="" value=""><img src="<?php echo base_url().'assets/img/logout.png'?>" alt="Submit" width="48" height="48" />
                                                      </button>
                                                      <div id="login_loader" style="display:none;">
                                                          <xml version="1.0" encoding="utf-8"/>
                                                          <svg width='70px' height='70px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-ripple">
                                                              <rect x="0" y="0" width="100" height="100" fill="none" class="bk"></rect>
                                                              <g>
                                                                  <animate attributeName="opacity" dur="2s" repeatCount="indefinite" begin="0s" keyTimes="0;0.33;1" values="1;1;0"></animate>
                                                                  <circle cx="50" cy="50" r="40" stroke="#afafb7" fill="none" stroke-width="6" stroke-linecap="round">
                                                                      <animate attributeName="r" dur="2s" repeatCount="indefinite" begin="0s" keyTimes="0;0.33;1" values="0;22;44"></animate>
                                                                  </circle>
                                                              </g>
                                                              <g>
                                                                  <animate attributeName="opacity" dur="2s" repeatCount="indefinite" begin="1s" keyTimes="0;0.33;1" values="1;1;0"></animate>
                                                                  <circle cx="50" cy="50" r="40" stroke="#5cffd6" fill="none" stroke-width="6" stroke-linecap="round">
                                                                      <animate attributeName="r" dur="2s" repeatCount="indefinite" begin="1s" keyTimes="0;0.33;1" values="0;22;44"></animate>
                                                                  </circle>
                                                              </g>
                                                          </svg>
                                                      </div>
                                                  </div>
                                              </div>
                                              </form>
                                          </div>
                                      </div>
                                      <!--login form end -->

                                  </div>
                                  <!-- right col end -->
                              </div>
                          </div>
                      </div>
                </div>

                <div class="container-fluid banner_content">
                    <div class="row">
                        <div class="col-md-6 col-sm-12 col-xs-12">
                            <img class="baner-img" src="<?php echo base_url().'assets/img/bg-img-1.png'?>" />
                        </div>

                      <!--<div class="col-sm-6 col-md-6">
                          <ul>
                            <h4 class="title">Yscrow.com</h4>
                            <li>
                              Yscrow Management for any Buyer / Seller transactions
                            </li>
                            <li>
                              Pay for your goods / service with Trust.
                            </li>
                            <li>
                              Get Paid for your goods / service with Trust.
                            </li>
                          </ul>
                        </div>-->

                        <div class="col-md-6 col-sm-12 col-xs-12 video">
                          <p class="text-center">
                            Yscrow Management for any Buyer / Seller transactions.
                          </p>
                          <div class="embed-responsive embed-responsive-16by10">
                            <iframe src="https://player.vimeo.com/video/177693139?loop=1&color=ffffff&byline=0&portrait=0" width="640" height="480" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                              <p><a href="https://vimeo.com/177693139">Yscrow in Action</a></p>
                            </div>
                        </div>
                    </div>
                    <!--row end -->
                </div>
                <!---banner_content end -->
            </div>
            <!-- header content end -->

			         <section class="section3" id="section3">
                <div class="container-fluid">
                    <div class="process">
                        <img class="img-responsive scrollReveal sr-bottom" src="<?php echo base_url().'assets/img/process.png'?>" alt="Yscrow Logo">
                    </div>
                </div>
            </section>

            <section class="section1" id="section1">
                <div class="container-fluid animate">
                    <div class="hidden-xs col-sm-5 col-md-5 img scrollReveal sr-left">
                        <img class="img-responsive" src="<?php echo base_url().'assets/img/buy-provider.png'?>" />
                    </div>
                    <div class="col-sm-7 col-md-7 scrollReveal sr-right">
                        <h3 class="text-uppercase">Welcome to world of yscrow..</h3>
                        <div>
                          <ul>
                            <li>
                              Yscrow.com is an Independent Online 3rd party Escrow Facilitator for a Requestor (Buyer) and a Provider (Seller)
                            </li>
                            <li>
                              Mediating any Sale/Transactions from very small to large level Purchases.
                            </li>
                            <li>
                              Abide by the Contract that both parties agreed upon.
                            </li>
                            <li>
                              Can be for any Contract – IT work, Domain Sell, Vehicle, Catering, Handyman,Rental advances, jobs etc
                            </li>
                          </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section2">
                <div class="container-fluid">
                    <div class="col-md-12 txt">
                        <h1 class="scrollReveal sr-top">100 % Trusted transactions<br/><small>simple - easy - handy</small></h1>
                        <button class="btn btn-large scrollReveal sr-bottom" data-toggle="modal" data-target="#reg_form">get started now</button>
                    </div>
				        </div>
            </section>

            <section class="section4 no_margin_padding">
                <div class="row no_margin_padding text-center">
                    <div class="col-sm-4 col-md-4 scrollReveal sr-left">
                        <ul>
                            <li data-toggle="modal" data-target="#about"><i class="fa fa-chevron-right" aria-hidden="true"></i>
                                <a href="#">About US</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-4 scrollReveal sr-left">
                        <ul>
                            <li data-toggle="modal" data-target="#terms"><i class="fa fa-chevron-right" aria-hidden="true"></i>
                                <a href="#">Terms & Conditions</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-4 scrollReveal sr-left">
                        <ul>
                          <li data-toggle="modal" data-target="#faq"><i class="fa fa-chevron-right" aria-hidden="true"></i>
                              <a href="#">FAQ's</a>
                          </li>
                        </ul>
                    </div>
                </div>
            </section>
            <!--<section class="section4">
                <div class="row">
                    <div class="col-sm-3 col-md-3 text-center scrollReveal sr-top">
                        <div>
                            <img class="" src="<?php echo base_url().'assets/img/logo.png'?>" />
                        </div>
                        <div>
                            <span class="lname">YSCROW</span>
                            <br/><span class="lsname">Trusted Transactions</span>
                        </div>
                    </div>
                    <div class="col-sm-3 col-md-3 scrollReveal sr-left">
                        <ul>
                            <li data-toggle="modal" data-target="#about"><i class="fa fa-chevron-right" aria-hidden="true"></i>
                                <a href="#">About US</a>
                            </li>
                            <li data-toggle="modal" data-target="#faq"><i class="fa fa-chevron-right" aria-hidden="true"></i>
                                <a href="#">FAQ's</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-sm-3 col-md-3 scrollReveal sr-left">
                        <ul>
                            <li data-toggle="modal" data-target="#terms"><i class="fa fa-chevron-right" aria-hidden="true"></i>
                                <a href="#">Terms & Conditions</a>
                            </li>
                            <li data-toggle="modal" data-target="#why_yscrow"><i class="fa fa-chevron-right" aria-hidden="true"></i>
                                <a href="#">Why Yscrow?</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-sm-3 col-md-3 scrollReveal sr-left">
                        <ul>
                            <li data-toggle="modal" data-target="#different"><i class="fa fa-chevron-right" aria-hidden="true"></i>
                                <a href="#">How We Different?</a>
                            </li>
                            <li data-toggle="modal" data-target="#how_we_works"><i class="fa fa-chevron-right" aria-hidden="true"></i>
                                <a href="#">How we works?</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>-->
            <!--START SCROLL TOP BUTTON -->
            <a class="scrollToTop" href="#">

                <img class="" src="<?php echo base_url().'assets/img/up.png'?>"/>

            </a>
            <!-- END SCROLL TOP BUTTON -->
            <footer>
                <span class="scrollReveal sr-bottom">yscrow 2016 - All Rights Reserved</span>
            </footer>
            </div>
            <!-- #site-canvas -->
        </div>
        <!-- #site-wrapper -->

        <!-- Trigger the modal with a button -->


<!-- Modal about-->
<div id="about" class="extra-modal modal fade" role="dialog">
  <div class="modal-dialog">
    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">About Yscrow</h4>
      </div>
      <div class="modal-body">
        <ul>
          <li>
            Yscrow.com is an Independent Online 3rd party Escrow Facilitator for a Requestor (Buyer) and a Provider (Seller)
          </li>
          <li>
            Mediating any Sale/Transactions from very small to large level Purchases.
          </li>
          <li>
            Abide by the Contract that both parties agreed upon.
          </li>
          <li>
            Can be for any Contract – IT work, Domain Sell, Vehicle, Catering, Handyman,Rental advances, jobs etc
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

<!-- modal terms -->
<div id="terms" class="extra-modal modal fade" role="dialog">
  <div class="modal-dialog">
    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">About Yscrow</h4>
      </div>
      <div class="modal-body">
        <ul>
          <li>
            yscrow charges Transaction fee(8%) for each transaction. The Transaction fee will pay by buyer / seller.
          </li>
          <li>
            Customer must give original idendification details for creating yscrow.com account, if yscrow.com find any information is fraudulent account will be terminated.
          </li>
          <li>
            Seller get pay by bank transfer, after successful transaction..
          </li>
          <li>
            If any Product / Service from provider is found to be fraudulent, then the Buyer can cancel the Transaction and henceforth the amount will be refunded to buyer. 
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

<!-- modal faq -->
<div id="faq" class="extra-modal modal fade" role="dialog">
  <div class="modal-dialog">
    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">FAQ's</h4>
      </div>
      <div class="modal-body">

  <ul class="collapsible popout" data-collapsible="accordion">
    <li>
      <div class="collapsible-header">What is Yscrow?</div>
      <div class="collapsible-body"><ul>
        <li>
          Yscrow is a neutral third party that provides financial security for both Buyers and Sellers.
        </li>
        <li>
          It helps make the transactions more secure by keeping the payment in a secure yscrow account which is only released when all of the terms of an agreement are met as overseen by the escrow company.
        </li>
        <li>
          If the buyer is not satisfied with the transaction - merchandise not delivered or not as described, the buyer will then be able to easily reject the transaction and have the money returned from Escrow.
        </li>
        <li>
          Holding funds 'In Escrow' simplifies the dispute process - the funds will not be released until both parties have agreed.
        </li>
      </ul>
    </div>
    </li>
    <li>
      <div class="collapsible-header">What types of transactions can I use Yscrow for?</div>
      <div class="collapsible-body"><p>Yscrow service can be used for the trading of any legal goods Movie Tickets, Electronics, etc..</p></div>
    </li>
    <li>
      <div class="collapsible-header">How does Yscrow protect the Seller? </div>
      <div class="collapsible-body"><p>Yscrow protects sellers by verifying all buyer purchase funds up front before any exchange of items takes place. Not only does this eliminate the risk of non-payment or insufficient funds, but also guarantees serious buyers - not just window shoppers. </p></div>
    </li>
    <li>
      <div class="collapsible-header">How does Yscrow protect the Buyer? </div>
      <div class="collapsible-body"><p>Yscrow protects buyers by holding their funds in a neutral, third party bank account until their purchase agreement is completed. Funds cannot be pushed to the seller without the buyer’s approval - protecting against misrepresentation and keeping honest people honest. </p></div>
    </li>
    <li>
      <div class="collapsible-header">Does the buyer or seller create the transaction? </div>
      <div class="collapsible-body"><p>Either the buyer or the seller can create the transaction and invite the other party. We recommend that the party who creates the transaction have access to all relevant uploads and transaction details; like photos, description, copy of title, etc. </p></div>
    </li>
    <li>
      <div class="collapsible-header">Can you change the transaction details after both parties agree to the terms and the transaction is activated? </div>
      <div class="collapsible-body"><p>No. Once the transaction is agreed upon by both parties the transaction details are not editable. </p></div>
    </li>
    <li>
      <div class="collapsible-header">What are the steps in the Yscrow process?</div>
      <div class="collapsible-body">
        <ul>
          <li>
            Either buyer or seller creates the transaction details and invites the other party
          </li>
          <li>
            Both parties agree to transaction details
          </li>
          <li>
            Buyer will paid to Yscrow online payment
          </li>
          <li>
            Seller delivers or ships the goods
          </li>
          <li>
            Buyer verifies the transaction terms have been met
          </li>
          <li>
            Yscrow releases funds to seller
          </li>
        </ul>
    </div>
    </li>
  </ul>
      </div>
    </div>
  </div>
</div>
<!-- modal faq -->

<!-- Modal how we different-->
<!--<div id="different" class="extra-modal modal fade" role="dialog">
  <div class="modal-dialog">

    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">How Yscrow Different!</h4>
      </div>
      <div class="modal-body">
        <ul>
          <li>
            Available market options are very limited in scope/size and also they do not handle many of transaction types.
          </li>
          <li>
            Give a simplistic view so any vendor can use to get payment-worry free.
          </li>
          <li>
            Cost wise also Yscrow.com will be much affordable and most cases be a flat fee up to certain level of transactions. 8%-10% to begin with.
          </li>
          <li>
            Tie up with e.g. PayU, Payback to use any Rewards/Points.
          </li>
          <li>
            Tie-up with Legal Company to frame any contracts.
          </li>
          <li>
            Provide tech support and oncall customer support.
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>-->

<!-- Modal why yscrow-->
  <!-- <div id="why_yscrow" class="extra-modal modal fade" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Why Yscrow?</h4>
      </div>
      <div class="modal-body">
        <ul>
          <li>
            Buying and Selling has been simplified with yscrow.
          </li>
          <li>
            Yscrow allows you to Create your own transaction in minutes with safe and secure.
          </li>
          <li>
            Yscrow provide financial security for both buyers and sellers.
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>-->

<!-- Modal How we works-->
<!--<div id="how_we_works" class="extra-modal modal fade" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">How Yscrow Works?</h4>
      </div>
      <div class="modal-body">
        <ul>
          <li>
            Register in yscrow.com with following credentials:
            <ol>
              <li>
                Valid Email id(All Transaction details send via eamil only).
              </li>
              <li>
                Upload scan copy of any govt approved id proof.
              </li>
            </ol>
          </li>
          <li>
            Login into your registered Account.
          </li>
          <li>
            Create Transaction(Transaction can either be create by the Buyer or Seller) with following credentials:
            <ol>
              <li>
                Transaction name.
              </li>
              <li>
                Enter the email address of the other party in this transaction.
              </li>
              <li>
                Payments release terms.
              </li>
              <li>
                Upload Transaction related documents.
              </li>
            </ol>
          </li>
          <li>
            Both Members Agree to Conditions.
          </li>
          <li>
            Once the buyer and seller have approved, the Buyer will pay Transaction Amount into Yscrow account.
          </li>
          <li>
            The seller deliver the goods to the Buyer.
          </li>
          <li>
            Seller Request The payment to yscrow.com
          </li>
          <li>
            Buyer satisfied with this transaction, yscrow release the payments to seller.
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>-->

	<!-- js files -->
    <!--<script type="text/javascript" src="assets/js/jquery-3.0.0.js"></script>-->
    <script type="text/javascript" src="<?php echo base_url().'assets/js/jquery-1.12.3.js'?>"></script>
    <script type="text/javascript" src="<?php echo base_url().'assets/js/jquery-2.1.4.js'?>"></script>
    <script type="text/javascript" src="<?php echo base_url().'assets/js/jquery.form-validator.js'?>"></script>
    <script type="text/javascript" src="<?php echo base_url().'assets/js/modernizr.js'?>"></script>
    <script type="text/javascript" src="<?php echo base_url().'assets/js/bootstrap.js'?>"></script>
    <script type="text/javascript" src="<?php echo base_url().'assets/js/materialize.js'?>"></script>
    <!--<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/js/materialize.min.js"></script>-->
    <script type="text/javascript" src="<?php echo base_url().'assets/js/scrollreveal.min.js'?>"></script>
    <script type="text/javascript" src="<?php echo base_url().'assets/js/scroll-reavel-custom.js'?>"></script>
    <script type="text/javascript" src="<?php echo base_url().'assets/js/custom.js'?>"></script>

</body>

</html>
