<?php 
session_start();
if(!isset($_SESSION['username'])=="admin")
{
	header("location: ../pic_user.php"); // Redirecting To Other Page
}

include '../includes/db_config.php';

$p_id = $_GET['id'];
//$p_id = 1;

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <title>iFund Network | Connecting Investors To Great Startup</title>
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta charset="utf-8">
    <meta name="author">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link rel="shortcut icon" href="../assets/img/favicon.png">	
    <link rel="stylesheet" href="../assets/css/core/bootstrap.min.css">
    <link rel="stylesheet" href="../assets/css/core/animate.min.css">   
	<link rel="stylesheet" href="../assets/css/core/jquery-ui.css">	
	<link rel="stylesheet" href="../assets/css/core/datetimepicker.css" media="screen">
	<link rel="stylesheet" href="../assets/bootstrap3-editable-1.5.1/bootstrap3-editable/css/bootstrap-editable.css">
	<link rel="stylesheet" href="../assets/bootstrap3-editable-1.5.1/wysihtml5/bootstrap-wysihtml5-0.0.2.css">	
	<link rel="stylesheet" href="../assets/css/core/prettify.css">
    <link rel="stylesheet" href="../assets/css/main/main.min.css">
    <link rel="stylesheet" href="../assets/css/magnific/magic.min.css">
    <link rel="stylesheet" href="../assets/css/magnific/magnific-popup.css">
    <link rel="stylesheet" href="../assets/css/magnific/magnific-popup-zoom-gallery.css">
    <link rel="stylesheet" href="../assets/css/owl-carousel/owl.carousel.css">
    <link rel="stylesheet" href="../assets/css/owl-carousel/owl.theme.css">
    <link rel="stylesheet" href="../assets/css/owl-carousel/owl.transitions.css">
    <link rel="stylesheet" href="../assets/css/color/pasific.css">
    <link rel="stylesheet" href="../assets/css/icon/font-awesome.css">
    <link rel="stylesheet" href="../assets/css/icon/et-line-font.css">    
	<link rel="stylesheet" href="../assets/bootstrap3-editable-1.5.1/wysihtml5/bootstrap-wysihtml5.css">	
</head>

<body id="page-top" data-spy="scroll" data-target=".navbar" data-offset="100">
    <?php    
    include '../includes/pageloader.php';   
    ?>
	<nav class="navbar navbar-pasific navbar-mp navbar-standart megamenu navbar-fixed-top top-nav-collapse">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse"> <i class="fa fa-bars"></i> </button>
                <a class="navbar-brand page-scroll" href="#page-top"> <img src="../assets/img/logo/logo-default.png" alt="logo"> <span style="color:#8cc63f;">i</span>Fund <span style="color:#8cc63f;">Network</span> </a>
            </div>
            <div class="navbar-collapse collapse navbar-main-collapse">
			
                <ul class="nav navbar-nav">
					<li><a href="admin.php">Investor management</a></li>
                    <li><a href="home.php">Home </a></li>
					<li><a href="about_us.php">About Us </a></li>
					<li><a href="faq.php">FAQ </a></li>
					<li><a href="partner.php">Our Partners </a></li>
                    <li><a href="contact_us.php">Contact Us </a></li>
                </ul>
				<ul class="nav navbar-nav navbar-right text-capitalize">
                    <li class="dropdown text-capitalize"><a href="#" class="dropdown-toggle" data-toggle="dropdown"><span class="glyphicon glyphicon-user"> </span>&nbsp;&nbsp;Hi&nbsp;&nbsp;<?php echo $_SESSION['username']; ?> <b class="caret"></b></a>
                        <ul class="dropdown-menu">
                            <li class="pt0">
                                <div class="navbar-content">
                                    <div class="row">
                                        <div class="col-md-5 col-sm-5 hidden-xs">
                                            <img src="http://placehold.it/120x120"
                                                alt="Alternate Text" class="img-responsive img-circle"/>                                            
                                        </div>
                                        <div class="col-md-7 col-sm-7">
                                            <span><?php echo $_SESSION['username']; ?></span>
                                            <p class="text-muted small mb10 text-lowercase"><?php echo $_SESSION['inv_email']; ?></p>
                                            <div class="divider">
                                            </div>
                                            <a href="userprofile.php" class="btn btn-primary btn-sm active" style="color:#fff!important;">View Profile</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="navbar-footer mt15">
                                    <div class="navbar-footer-content">
                                        <div class="row">
                                            <div class="col-md-6 col-sm-6 col-xs-6">
                                                <a href="../userprofile.php" class="btn btn-default btn-sm font-black">Change Passowrd</a>
                                            </div>
                                            <div class="col-md-6 col-sm-6 col-xs-6">
                                                <a href="../process/logout.php" class="btn btn-default btn-sm pull-right font-black">Sign Out</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
</nav>
	

	
<?php
$query = "select * from project_list WHERE project_id= $p_id";
$result = mysqli_query($conn, $query); 
$row = mysqli_fetch_array($result) or die(mysqli_error());
?>
	
<div id="welcome" class="pt100 pb25">
<div id="testimonial" class="pt75 pb25 inner">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="row">
                        <div id="owlSectionThreeItem" class="owl-carousel">
<?php
$query1 = "select * from project_list WHERE status='active'";
$result1 = mysqli_query($conn, $query1); 
while($record = mysqli_fetch_assoc($result1))
{   
    echo    
        '<div class="ml15 mr15 portfolio_border" style="background-color:#eee;">
        <div class="animated pjt_cover_img" data-animation="fadeInLeft" data-animation-delay="100"> <img src="../assets/img/other/'.$record['project_cover'].'" alt="website service" class="img-responsive"></div>
        <div class="animated pjt_logo_img" data-animation="fadeInLeft" data-animation-delay="100"> <img src="../assets/img/other/'.$record['project_logo'].'" alt="website service" class="img-responsive"></div>        
        </div>';        
}
mysqli_free_result($result1);
?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="intro-body text-center">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <img src="../assets/img/other/<?php echo $row['project_logo']?>" alt="website service" class="img-responsive">
                </div>
                <div class="col-md-8 col-md-offset-2 text-center">
                    <p><span class="lead"><strong><a href="#" class="inlineedit" data-name="project_desc_short" data-mode="inline" data-type="wysihtml5" data-pk="<?php echo $row['project_id'] ?>" data-url="pjtlstupdate.php"><?php echo $row['project_desc_short']?></a></strong></span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

    <div class="pt50 pb50 bg-grad-bora">
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-sm-12 col-xs-12">
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item brdr-full" src="<?php echo $row['project_video']?>" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
                <div class="col-md-4 col-sm-12 col-xs-12 side">
                    <div class="row m0">
                        <div class="col-sm-12 col-xs-12 col-md-12 text-center mb20">
                            <h4 class="mt0 mb0 text-uppercase"> Seed Stage Funding Goal <small class="text-lowercase" style="color:#f00; font-size:24px;">$<a href="#" class="inlineedit" data-name="project_fund_goal" data-type="text" data-pk="<?php echo $row['project_id'] ?>" data-url="pjtlstupdate.php"><?php echo $row['project_fund_goal']?></a></small></h4>
                        </div>
                    </div>
                    <div style="background-color:#f3f7f7;" class="pt10 pb25 pr10 pl10">
                        <div class="row">
                            <div class="col-sm-12 col-xs-12 col-md-12 pr5 pl5 pb10">
                                <div class="col-md-4 col-sm-4 col-xs-4 pull-left pr0 pl0 text-center"><strong>Amount Invested</strong>
                                </div>
                                <div class="col-md-4 col-sm-4 col-xs-4 pull-left pr0 pl0 text-center"><strong>Fund Pool</strong>
                                </div>
                                <div class="col-md-4 col-sm-4 col-xs-4 pull-left pr0 pl0 text-center"><strong>Angels / Syndicates</strong>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12 col-xs-12 col-md-12 pr0 pl0">
                                <div class="col-md-4 col-sm-4 col-xs-4 pull-left pr0 pl0 text-center">$<a href="#" class="inlineedit" data-name="project_amt_invested" data-type="text" data-pk="<?php echo $row['project_id'] ?>" data-url="pjtlstupdate.php"><?php echo $row['project_amt_invested']?></a> </div>
                                <div class="col-md-4 col-sm-4 col-xs-4 pull-left pr0 pl0 text-center"><a href="#" class="inlineedit" data-name="project_fund_pool" data-type="text" data-pk="<?php echo $row['project_id'] ?>" data-url="pjtlstupdate.php"><?php echo $row['project_fund_pool']?></a> Backers</div>
                                <div class="col-md-4 col-sm-4 col-xs-4 pull-left pr0 pl0 text-center"><a href="#" class="inlineedit" data-name="project_angels" data-type="text" data-pk="<?php echo $row['project_id'] ?>" data-url="pjtlstupdate.php"><?php echo $row['project_angels']?></a></div>
                            </div>
                        </div>
                       <!-- <div class="row">
                            <div class="col-md-12 col-sm-12 col-xs-12 pt25">
                                <div class="col-md-8 col-sm-8 col-xs-8 height81 pull-left text-center content-box content-box-o content-box-center bg-white pl10 pr10">
								<div id="slider" style="margin-top:11%;"></div>
								<div id="slidervalue" style="display:none;">

								<?php 
								$todal_days = floor(( strtotime( $row['project_fund_period_to'] ) - strtotime( $row['project_fund_period_from'] )) / 86400 );
								$days_left = floor( ( strtotime( $row['project_fund_period_to'] ) - strtotime(date("Y/m/d")) ) / 86400 );
								$days_prnt = (($days_left / $todal_days) * 100);
								echo $days_prnt;
								?>
								</div>
								</div>

                                <div class="col-md-3 col-sm-3 col-xs-3 pull-right text-center content-box content-box-o content-box-center bg-white">Days Left
                                    <br/><span id="daysleft" data-pk="<?php echo $row['project_id'] ?>" style="font-size:28px;">
									<?php
									$daydiff = floor( ( strtotime( $row['project_fund_period_to'] ) - strtotime(date("Y/m/d")) ) / 86400 );
									if($daydiff >=0){
										echo $daydiff;
									}
									else
									{
										echo 0;
									}
									?>
									</span>
                                </div>
                            </div>
                        </div>-->
                    </div>
                    <div class="row m0">
                        <div class="mt25 content-box content-box-o content-box-center"  style="margin:0 10% 0;">
                            <div class="col-md-12 col-sm-12 col-xs-12"><span style="font-size:18px; color:#333; font-weight:normal;">FUNDING PERIOD</span>
                            </div>
                            <div class="col-md-12 col-sm-12 col-xs-12 pt20 pb15">
                                <div>
                                    <input class="pr0 pl5 col-md-5 col-sm-5 col-xs-5 color-dark pull-left dateupdate" data-name="project_fund_period_from" data-pk="<?php echo $row['project_id'] ?>" value="<?php echo $row['project_fund_period_from']?>" type="text" id="txtFromDate">
                                </div>								
                                <div>
                                    <input class="pr0 pl5 col-md-5 col-sm-5 col-xs-5 color-dark pull-right dateupdate" data-name="project_fund_period_to" data-pk="<?php echo $row['project_id'] ?>" value="<?php echo $row['project_fund_period_to']?>" type="text" id="txtToDate" >
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12 col-md-12 col-xs-12 mt5 text-center pt10">
                            <strong style="font-size:16px;">Yes Am Interested In Investing</strong>
                        </div>
                    </div>
                    
					<div class="text-center"><a class="button button-md button-pasific hover-ripple-out mt15" href="invesment.php">Click Here To be Part of This Innovation</a></div>
                </div>
            </div>
        </div>
    </div>
	<!-- second level -->

    <div class="modal fade" id="confirm-view" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" style="z-index:99999;">
        <div class="modal-dialog m-width" role="document">
            <div class="modal-content brdr_blue">
            <div class="modal-header" style="border:none;">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            </div>
                <div class="modal-body text-center">
                    <h4 class="sm_fnt_1"><span style="color:#f60; font-size:18px;">Please Fill The Following Form To View Your Requested Document</h4>
                    <p>The document am about to view is a confidential property of ifindcard Inc and is intended only for my investment purposes in the platform</p>
                    <input type="checkbox">
                    <label>I agree to the terms & Condition</label>
                    <div class="text-center mt20 mb20"><a class="button button-md button-pasific hover-ripple-out mt25" href="invesment.php">Submit</a></div>
                </div>
            </div>
        </div>
    </div>

    <div id="testimonial1" class="pt75 pb75 bglg">
        <div class="container bg-white">
            <div class="row">
                <div class="col-md-12 mt10">
                    <ul class="nav nav-tabs nav-justified">
                        <li class="active"><a href="#pilljustifiedHome" data-toggle="pill">Startup Pitch</a>
                        </li>
                        <li class=""><a href="#pilljustified1" data-toggle="pill">Team</a>
                        </li>
                        <li class=""><a href="#pilljustified2" data-toggle="pill">Documents</a>
                        </li>
                        <li class=""><a href="#pilljustified3" data-toggle="pill">Funding</a>
                        </li>
                        <li class=""><a href="#pilljustified4" data-toggle="pill">Highlights/ Research</a>
                        </li>
                    </ul>
                    <div class="tab-content pb15">
                        <!-- tab 1 -->
                        <div class="tab-pane fade active in pt0 startup" id="pilljustifiedHome">
                          <!-- row1 -->
                          <div class="row row1">
                            <div class="col-md-4">
                                <img src="../assets/img/inner/world map.jpg" alt="website service" class="img-responsive img1">
                            </div>
                            <div class="col-md-4">
                                <h5 class="text-center">USER  CREATE  A PERSONALIZED BUSINESS NETWORKING PROFILE</h5>
                                <p>The user will get a complete list of cards that are connected to him i.e. is in his network. The user can click on one of the card and see the profile for that particular user. Additionally, user can mark any of the connection as favourite and also do vice versa if user is already added to favourites.</p>
                                <img src="../assets/img/inner/ifindcard network logo.png" alt="website service" class="img-responsive img2">
                            </div>
                            <div class="col-md-4">
                                <img src="../assets/img/inner/ifindcard 3rd party view.png" alt="website service" class="img3">
                            </div>
                          </div>

                          <!-- row2 -->
                          <div class="row row2">
                            <div class="col-md-4">
                                <div class="row" style="margin:0px;">
                                    <img src="../assets/img/inner/news feed.png" alt="website service" class="img-responsive img4">
                                </div>
                                <div class="row" style="background-color:#fff;margin:0px; padding-bottom:58px;">
                                    <div class="col-sm-3">
                                        <img src="../assets/img/inner/ifindcard icon.png" alt="website service" class="img5">
                                    </div>
                                    <div class="col-sm-9">
                                        <h3 class="text-center">Business Feeds</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">                                
                                    <h5 class="text-center">BUSINESS FEEDS EMPOWERS BOTH REGULAR  USER AND BUSINESSES  TO GENERATE BUSINESS LEADS AND MAKE MONEY FROM ADS</h5>
                                    <p>The business feed will be provided by individual businesses, giving information about business and its product or services they offer. For products and services that are displayed there is an option to mark it as favourite and rate it accordingly.</p>
                            </div>
                            <div class="col-md-4">
                                <img src="../assets/img/inner/ifindcard business feed.png" alt="website service" class="img3">
                            </div>
                          </div>

                          <!-- row3 -->
                          <div class="row row3">
                            <div class="col-md-4">
                                <img src="../assets/img/inner/event-networking-nametags.jpg" alt="website service" class="img7">
                            </div>
                            <div class="col-md-4">
                                <h5 class="text-center">USER  CAN  CREATE  BOTH  FREE  &  PAID EVENTS AND  USEE THEIR BUSINESS CARD NETWORK TO  GENERATE AN INVITE  LIST</h5>
                                <p>Ability to create an event, attend an event and donate to event, display events or better still see lists of events to attend or host. These can either be free events or paid events.</p>
                                <img src="../assets/img/inner/events icon.png" alt="website service" class="img-responsive img8">
                            </div>
                            <div class="col-md-4">
                                <img src="../assets/img/inner/ifindcard events.png" alt="website service" class="img3">
                            </div>
                          </div>

                          <!-- row4 -->
                          <div class="row row4">
                            <div class="col-md-7">
                                <img src="../assets/img/inner/nc1.png" alt="website service" class="img-responsive img10-1">
                                <img src="../assets/img/inner/nc2.png" alt="website service" class="img-responsive img10-2">
                                <img src="../assets/img/inner/nc1.png" alt="website service" class="img-responsive img10-3">
                            </div>
                            <div class="col-md-5" style="padding:0 35px 10px 0;">
                                <h5 class="text-center">CREATE A PERSONALIZED  NETWORK CARD AND MULTIPLE INDEPENDENT  BUSINESS CARDS & ADVERTISE YOUR PRODUCT & SERVICES  ON  MOBILE </h5>
                                <p>With this feature the user can create multiple independent business cards and also create a Network card in order to share his profile and work related experience this is a great tool for students and unemployed, User can quickly activate any of his card as at when he needs it and broadcast his business card/Network card to anyone using either their clamtag ID or their registered business phone number.</p>
                                <img src="../assets/img/inner/contact.png" alt="website service" class="img-responsive img11">
                            </div>                            
                          </div>

                          <!-- row5 -->
                          <div class="row row5">
                            <div class="col-md-3">
                                <img src="../assets/img/inner/chat_mobile.png" alt="" class="img-responsive img12">
                            </div>
                            <div class="col-md-3" style="margin-top:20px;">
                                <div>
                                    <h5 class="text-center">Chat With Your Clients & Business Partners Via Their Digital Business Card</h5>
                                </div>
                                <div>
                                    <img src="../assets/img/inner/chat_online.jpg" alt="" class="img-responsive img13">
                                </div>
                            </div>
                            <div class="col-md-3" style="margin-top:20px;">
                                <div>
                                    <h5 class="text-center">Create Appointments Via Your Digital Business Card Anytime, Anywhere</h5>
                                </div>
                                <div>
                                    <img src="../assets/img/inner/appoinment_card.png" alt="" class="img-responsive img14">
                                </div>
                            </div>
                            <div class="col-md-3">
                                <img src="../assets/img/inner/appoint_mobile.png" alt="" class="img-responsive img15">
                            </div>
                          </div>

                          <!-- row6 -->
                          <div class="row row6">
                            <div class="col-md-7">
                                <img src="../assets/img/inner/hire1.png" alt="website service" class="img-responsive img10-1">
                                <img src="../assets/img/inner/hire2.png" alt="website service" class="img-responsive img10-2">
                                <img src="../assets/img/inner/hire3.png" alt="website service" class="img-responsive img10-3">
                            </div>
                            <div class="col-md-5" style="padding:20px 50px;">
                                <h5 class="text-center">User Can Hire Local  Artisan & High End professionals Directly From Their Mobile App </h5>
                                <p>With the iHire feature a user has the capability to post a job displaying his requirements and see/review quotes from available local service providers as they so please</p>                                
                            </div>                            
                          </div>

                          <!--row7 -->
                          <div class="row row7">
                            <div class="col-md-4">
                                <div>
                                    <img src="../assets/img/inner/ifindscreen.png" alt="website service" class="img-responsive img16">
                                </div>
                                <div>
                                    <img src="../assets/img/inner/chart1.png" alt="website service" class="img-responsive img17">
                                </div> 
                            </div>
                            <div class="col-md-4">
                                <h4 class="text-center">ifindcard Business Manager</h4>
                                <div>
                                    <img src="../assets/img/inner/ifind_monitor.png" alt="website service" class="img-responsive img18">
                                </div>
                            </div>
                            <div class="col-md-4">
                                <h4 class="text-center">ifindcard Business Manager</h4>
                                <p>Manage Your Products & Services Ads Create Free & Paid Events Schedule Appointment Create Targeted Campaign Ads View Daily Local Business Leads View Daily Analyticals Manage Associate Ads Accounts Automatically Update and share Your Most recent business/Network card Print Customized Business Card Generate Event Name Tags with !clamtag Ids</p>
                                <img src="../assets/img/inner/chart.png" alt="website service" class="img-responsive img19">
                            </div>
                          </div>
                        </div>
                        
                        <!-- tab 2 -->
                        <?php                           
                            $query = "select * from team_page";
                            $result = mysqli_query($conn, $query); 
                            $row = mysqli_fetch_array($result) or die(mysqli_error());
                            ?>
                        <div class="tab-pane fade team" id="pilljustified1">
                            <div class="row m0">
                              <div class="col-md-offset-2 col-md-8 col-sm-offset-1 col-sm-10 text-center team_intro">
                                    <p><i><?php echo $row['team_short_intro']?></i></p>
                              </div>
                            </div>
                            <?php mysqli_free_result($result); ?>
                            <?php
                            $query = "select * from team_members WHERE project_id= $p_id";
                            $result = mysqli_query($conn, $query); 
                            while($row = mysqli_fetch_array($result))
                            { ?>
                            <div class="row mr0 ml0 mt25 bb-solid-1 team-members">
                                <div class="col-md-3 col-sm-3"> <img class="center-block" alt="team" src="../assets/img/team_members/<?php echo $row['team_member_photo']?>">
                                <h4 class="font-montserrat text-center"> <span class="text-capitalize"><?php echo $row['team_member_name']?></span> <small class="text-uppercase"><?php echo $row['team_member_profession']?></small></h4>
                                </div>
                                <div class="col-md-5 col-sm-5">
                                    <p class="pb25"><?php echo $row['team_member_intro']?></p>
                                </div>
                            </div>
                            <?php 
                            } 
                            mysqli_free_result($result);
                            ?>                                                      
                        </div>
                        <!-- tab 3 -->
                        <?php                   
                            $query = "select * from documents WHERE project_id= $p_id";
                            $result = mysqli_query($conn, $query); 
                            ?>
                            <div class="tab-pane fade" id="pilljustified2">
                            <div class="col-md-12 col-sm-12">
                                <div class="panel-group" id="accordion9">                           
                            <?php
                            $i=0;
                            while($row = mysqli_fetch_array($result))
                            { 
                                if($i==0)
                                {?>
                                    <div class="panel panel-primary">
                                        <div class="panel-heading" style="position:relative;"> <a href="#<?php echo $row['document_id']?>" class="collapsed accordian-toggle-chevron-left" data-toggle="collapse" data-parent="#accordion9"><?php echo $row['document_group_name']?></a>
                                        <a class="btn" style="position:absolute; right:30px; bottom:12px; border:1px solid #eee; background:#eee;padding:6px 25px; color:#000;" data-toggle="modal" data-target="#confirm-view">View</a>
                                        </div>
                                        <div id="<?php echo $row['document_id']?>" class="panel-collapse collapse">
                                            <div class="panel-body">
                                                <div class="row pr20 pl30">
                                                    <div class="pull-left"><?php echo $row['document_name']?></div>
                                                    <div class="pull-right"><a href="<?php echo $row['document_path']?>">View</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                <?php 
                                }
                                else
                                {
                                ?>
                                    <div class="panel panel-primary">
                                        <div class="panel-heading" style="position:relative;"> <a href="#<?php echo $row['document_id']?>" class="collapsed accordian-toggle-chevron-left" data-toggle="collapse" data-parent="#accordion9"><?php echo $row['document_group_name']?></a>
                                        <a class="btn" style="position:absolute; right:30px; bottom:12px; border:1px solid #eee; background:#eee;padding:6px 25px; color:#000;" data-toggle="modal" data-target="#confirm-view">View</a>
                                        </div>
                                        <div id="<?php echo $row['document_id']?>" class="panel-collapse collapse">
                                            <div class="panel-body">
                                                <div class="row pr20 pl30">
                                                    <div class="pull-left"><?php echo $row['document_name']?></div>
                                                    <div class="pull-right"><a href="<?php echo $row['document_path']?>">View</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                <?php
                                }
                                $i++;
                            }
                            mysqli_free_result($result);
                            ?>                          
                            </div>
                            </div>                          
                        </div>
                        <!-- tab 4 -->
                            <?php                   
                            $query = "select * from funding WHERE project_id= $p_id";
                            $result = mysqli_query($conn, $query); 
                            ?>
                            <div class="tab-pane fade" id="pilljustified3">
                            <div class="col-md-12 col-sm-12">
                            <div class="panel-group" id="accordion10">                          
                            
                            <?php
                            $i=0;
                            while($row = mysqli_fetch_array($result))
                            { 
                                if($i==0)
                                {?>
                                    <div class="panel panel-primary">
                                        <div class="panel-heading" style="position:relative;"> <a href="#f<?php echo $row['fund_id']?>" class="collapsed accordian-toggle-chevron-left" data-toggle="collapse" data-parent="#accordion10"><?php echo $row['funding_name']?></a>
                                        <a class="btn" style="position:absolute; right:30px; bottom:12px; border:1px solid #eee; background:#eee;padding:6px 25px; color:#000;" data-toggle="modal" data-target="#confirm-view">View</a>
                                        </div>
                                        <div id="f<?php echo $row['fund_id']?>" class="panel-collapse collapse">
                                            <div class="panel-body">
                                                <div class="row pr20 pl30">
                                                    <div class="pull-left"><?php echo $row['funding_name']?></div>
                                                    <div class="pull-right"><a href="<?php echo $row['funding_document_path']?>">View</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                <?php 
                                }
                                else
                                {
                                ?>
                                    <div class="panel panel-primary">
                                        <div class="panel-heading" style="position:relative;"> <a href="#f<?php echo $row['fund_id']?>" class="collapsed accordian-toggle-chevron-left" data-toggle="collapse" data-parent="#accordion10"><?php echo $row['funding_name']?></a>
                                        <a class="btn" style="position:absolute; right:30px; bottom:12px; border:1px solid #eee; background:#eee;padding:6px 25px; color:#000;" data-toggle="modal" data-target="#confirm-view">View</a>
                                        </div>
                                        <div id="f<?php echo $row['fund_id']?>" class="panel-collapse collapse">
                                            <div class="panel-body">
                                                <div class="row pr20 pl30">
                                                    <div class="pull-left"><?php echo $row['funding_name']?></div>
                                                    <div class="pull-right"><a href="<?php echo $row['funding_document_path']?>">View</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                <?php
                                }
                                $i++;
                            }
                            mysqli_free_result($result);
                            ?>                          
                            </div>
                            </div>                          
                        </div>
                        <!-- tab 5 -->
                        <div class="tab-pane fade tab5" id="pilljustified4">                        
                        <?php                   
                            $query = "select * from project_list WHERE project_id= $p_id";
                            $result = mysqli_query($conn, $query); 
                            $row = mysqli_fetch_array($result) or die(mysqli_error());
                        ?>
                            <div id="testimonial" class="pt15 pb15 vision">
                                <h4 class="font-blue text-center text-uppercase">vision</h4>
                                <div>
                                    <?php echo $row['project_vision']?>
                                </div>
                            </div>
                            <div id="testimonial" class="pt15 pb15 problem">
                                <h4 class="font-blue text-center text-uppercase">Problem</h4>
                                <div>
                                    <?php echo $row['project_problem']?>
                                </div>
                            </div>
                            <div id="testimonial" class="pt15 pb15 solution">
                                <h4 class="font-blue text-center text-uppercase">Solutions</h4>
                                <div>
                                    <?php echo $row['project_solution_text']?>
                                </div>
                                <?php mysqli_free_result($result); ?>
                            </div> 

                        <div id="testimonial" class="pt15 pb15 competitions">
                            <h4 class="font-blue text-uppercase text-center" style="font-weight:bold;">COMPETITIONS</h4>
                                <div class="row">
                                <div class="col-sm-12">
                                    <div class="row">                                        
                                        <?php                   
                                        $query = "select * from competitors WHERE project_id= $p_id";
                                        $result = mysqli_query($conn, $query); 
                                        while($row = mysqli_fetch_array($result))
                                        {                                   
                                        ?>
                                        <div class="col-md-3" style="margin-top:20px; margin-bottom:20px;">
                                          <div class="row">
                                            <div class="col-xs-12" style="height:50px;">
                                                <div style="text-align:center; margin:0 auto;">
                                                    <?php echo $row['competitor_profession']?>
                                                </div>
                                            </div>
                                            <div class="col-xs-12">
                                                <img style="width:160px; height:160px; border:1px solid #eee; margin-left:auto; margin-right:auto;" src="../assets/img/competitors/<?php echo $row['competitor_logo']?>" alt="<?php echo $row['competitor_name']?>" class="img-responsive img-square">
                                            </div>
                                            <div class="col-xs-12" style="height:70px;">
                                                <div style="text-align:center; margin:0 auto;">
                                                    <?php echo $row['competitor_desc']?>
                                                </div>
                                            </div>
                                          </div>
                                        </div>
                                        <?php
                                        }
                                        mysqli_free_result($result);
                                        ?>
                                    </div>
                                </div>
                                </div>
                        </div>

                        <div id="testimonial" class="pt15 pb15 pjt_advantage">
                            <h4 class="font-blue text-uppercase text-center" style="font-weight:bold;">IFINDCARD  ADVANTAGGE OVER COMPETITIONS </h4>
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="row">                                        
                                        <?php                   
                                        $query = "select * from project_list WHERE project_id= $p_id";
                                        $result = mysqli_query($conn, $query); 
                                        while($row = mysqli_fetch_array($result))
                                        {                                   
                                        ?>
                                        <div class="col-sm-12" style="margin-top:20px; margin-bottom:20px; text-align:center;">
                                            <?php echo $row['project_advantage']?>
                                        </div>
                                        <?php
                                        }
                                        mysqli_free_result($result);
                                        ?>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>


<!--<div class="col-md-4 side no-border mt10">
    <div class="" style="background-color:#F3F3F3;">
        <div class="col-sm-12 col-xs-12 col-md-12 text-center mb20">
            <h4 class="pb15 bb-solid-1 text-uppercase font-blue"> Traction </h4>
            <?php					
				$query = "select * from traction WHERE project_id=$p_id";
				$result = mysqli_query($conn, $query); 
				while($row = mysqli_fetch_array($result))
				{ 																	
			if($row['traction_status']==0)
			{ ?>
			<div class="row  pt30">
				<div class="col-md-2 pt10">
					<img src="../assets/img/i.png" "width=24px; height=32px;" class="pull-left mr20" alt="logo">
				</div>
				<div class="col-md-8 text-left pl0 pr0" style="font-size:16px; color: rgb(113, 108, 108); text-transform:none; font-weight:bold;">
					<a href="#" class="inlineedit" data-name="traction_name" data-type="text" data-pk="<?php echo $row['traction_id'] ?>" data-url="pjtlstupdate.php"><?php echo $row['traction_name']?></a> <br/><a href="#" class="inlineedit" data-name="traction_name_desc" data-type="text" data-pk="<?php echo $row['traction_id'] ?>" data-url="pjtlstupdate.php"><?php echo $row['traction_name_desc']?></a>
				</div>
				<div class="col-md-2 pl0 pt10 pr0">
					<input class="tractionupdate" data-name="traction_status" data-pk="<?php echo $row['traction_id'] ?>" type="checkbox">
				</div>
			</div>
			<?php 
			}else{ ?>
			<div class="row  pt30">
				<div class="col-md-2 pt10">
					<img src="../assets/img/i.png" "width=24px; height=32px;" class="pull-left mr20" alt="logo">
				</div>
				<div class="col-md-8 text-left pl0 pr0" style="font-size:16px; color: rgb(113, 108, 108); text-transform:none; font-weight:bold;">
					<a href="#" class="inlineedit" data-name="traction_name" data-type="text" data-pk="<?php echo $row['traction_id'] ?>" data-url="pjtlstupdate.php"><?php echo $row['traction_name']?></a> <br/><a href="#" class="inlineedit" data-name="traction_name_desc" data-type="text" data-pk="<?php echo $row['traction_id'] ?>" data-url="pjtlstupdate.php"><?php echo $row['traction_name_desc']?></a>
				</div>
				<div class="col-md-2 pl0 pt10 pr0">
					<input class="tractionupdate" data-name="traction_status" data-pk="<?php echo $row['traction_id'] ?>" type="checkbox" checked>
				</div>
			</div>
				<?php
				}							
				}
				mysqli_free_result($result); 
				?>
				
        </div>
        <div class="col-sm-12 col-xs-12 col-md-12 text-center mb20 mt20">
            <h4 class="pb15 bb-solid-1 text-uppercase font-blue"> Projection & Beta/ Alfa Testing </h4>
				<?php					
					$query = "select * from testing WHERE project_id= $p_id";
					$result = mysqli_query($conn, $query); 
					while($row = mysqli_fetch_array($result))
					{ 									
					if($row['testing_status']==0)
				{ ?>
				<div class="row  pt30">
					<div class="col-md-2 pt10">
						<img src="../assets/img/i.png" "width=24px; height=32px;" class="pull-left mr20" alt="logo">
					</div>
					<div class="col-md-8 text-left pl0 pr0" style="font-size:16px; color: rgb(113, 108, 108); text-transform:none; font-weight:bold;">
						<a href="#" class="inlineedit" data-name="testing_name" data-type="text" data-pk="<?php echo $row['testing_id'] ?>" data-url="pjtlstupdate.php"><?php echo $row['testing_name']?></a><br/><a href="#" class="inlineedit" data-name="testing_name_desc" data-type="text" data-pk="<?php echo $row['testing_id'] ?>" data-url="pjtlstupdate.php"><?php echo $row['testing_name_desc']?></a>
					</div>
					<div class="col-md-2 pl0 pt10 pr0">
						<input class="testingupdate" data-name="testing_status" data-pk="<?php echo $row['testing_id'] ?>" type="checkbox">
					</div>
				</div>
				<?php 
				}else{ ?>
				<div class="row  pt30">
					<div class="col-md-2 pt10">
						<img src="../assets/img/i.png" "width=24px; height=32px;" class="pull-left mr20" alt="logo">
					</div>
					<div class="col-md-8 text-left pl0 pr0" style="font-size:16px; color: rgb(113, 108, 108); text-transform:none; font-weight:bold;">
						<a href="#" class="inlineedit" data-name="testing_name" data-type="text" data-pk="<?php echo $row['testing_id'] ?>" data-url="pjtlstupdate.php"><?php echo $row['testing_name']?></a><br/><a href="#" class="inlineedit" data-name="testing_name_desc" data-type="text" data-pk="<?php echo $row['testing_id'] ?>" data-url="pjtlstupdate.php"><?php echo $row['testing_name_desc']?></a>
					</div>
					<div class="col-md-2 pl0 pt10 pr0">
						<input class="testingupdate" data-name="testing_status" data-pk="<?php echo $row['testing_id'] ?>" type="checkbox" checked>
					</div>
				</div>
                         <?php 
				}
				}
				mysqli_free_result($result); 
				?>
                     </div>
                    </div>
                </div>-->

            </div>
        </div>
    </div>
    <?php
    include '../includes/footer.php';
    ?>
    <script src="../assets/js/core/jquery.min.js"></script>
	<script src="../assets/js/core/jquery-ui.js"></script>
    <script src="../assets/js/core/bootstrap.min.js"></script>
    <script src="../formvalidator.js"></script>
	<script src="../myquery.js"></script>
    <script src="../assets/js/core/bootstrap-formhelpers.js"></script>
	<script src="../assets/js/core/bootstrap-datetimepicker.js"></script>
    <script src="../assets/bootstrap3-editable-1.5.1/bootstrap3-editable/js/bootstrap-editable.min.js"></script>
	<script src="../assets/bootstrap3-editable-1.5.1/wysihtml5/wysihtml5-0.3.0.min.js"></script>
	<script src="../assets/bootstrap3-editable-1.5.1/wysihtml5/wysihtml5.js"></script>
	<script src="../assets/bootstrap3-editable-1.5.1/wysihtml5/bootstrap-wysihtml5-0.0.2.js"></script>	
	<script src="../assets/js/core/moment.min.js"></script>
	<script src="../assets/js/core/combodate.js"></script>
    <script src="../assets/js/magnific-popup/jquery.magnific-popup.min.js"></script>
    <script src="../assets/js/magnific-popup/magnific-popup-zoom-gallery.js"></script>
    <script src="../assets/js/progress-bar/bootstrap-progressbar.js"></script>
    <script src="../assets/js/progress-bar/bootstrap-progressbar-main.js"></script>
    <script src="../assets/js/main/jquery.appear.js"></script>
    <script src="../assets/js/main/isotope.pkgd.min.js"></script>
    <script src="../assets/js/main/parallax.min.js"></script>
    <script src="../assets/js/main/jquery.countTo.js"></script>
    <script src="../assets/js/main/owl.carousel.min.js"></script>
    <script src="../assets/js/main/owl.carousel.min.js"></script>
    <script src="../assets/js/main/ion.rangeSlider.min.js"></script>
    <script src="../assets/js/main/main.js"></script>
	<script type="text/javascript">
		//$('.username').editable('option', 'disabled', true);
        $.fn.editable.defaults.mode = "popup";                       
        $('.inlineedit').editable();  

$('.tractionupdate').change(function() {

    var $check = $(this);
    var name = $(this).data("name");
    var pk = $(this).data("pk");

    if ($check.prop('checked')) {  
    	var value = 1;
    } else {
		var value = 0;
    }
	$.ajax({
                type: "POST",
                url: "pjtlstupdate.php",
                data: 'name='+name+'&pk='+pk+'&value='+value,
                cache: false,
                success: function(text) {                        
                    } //end success
            }); //end ajax
	
});

$('.testingupdate').change(function() {

    var $check = $(this);
    var name = $(this).data("name");
    var pk = $(this).data("pk");

    if ($check.prop('checked')) {  
    	var value = 1;
    } else {
		var value = 0;
    }
	$.ajax({
                type: "POST",
                url: "pjtlstupdate.php",
                data: 'name='+name+'&pk='+pk+'&value='+value,
                cache: false,
                success: function(text) {                        
                    } //end success
            }); //end ajax
	
});
        

    $( "#txtFromDate" ).datepicker({ dateFormat: "yy-mm-dd",
          onClose: function( selectedDate ) {
                      $("#txtToDate" ).datepicker( "option", "minDate", selectedDate );
                   }
     });
	 
	 $( "#txtToDate" ).datepicker({ dateFormat: "yy-mm-dd" });    


    $(".dateupdate").on("change",function(){
	
		var name = $(this).data("name");
		var pk = $(this).data("pk");
        var value = $(this).val();
        //alert(name + pk + value);
		$.ajax({
                type: "POST",
                url: "pjtlstupdate.php",
                data: 'name='+name+'&pk='+pk+'&value='+value,
                cache: false,
                success: function(text) {  
					daysleft(pk);
					percent(pk);
					
                    } //end success
            }); //end ajax	
    });

function daysleft(pk){

	var pkey=pk;

    $.ajax({
      type: "POST",
      dataType: "html",
      url: "calcdaysdiff.php",
	  data: 'pk='+pkey,
      cache: false,
      success: function(response) {
		  
      $("#daysleft").html(response);

	}
    });
}

function percent(pk){

	var pkey=pk;

    $.ajax({
      type: "POST",
      dataType: "html",
      url: "dayspercent.php",
	  data: 'pk='+pkey,
      cache: false,
      success: function(response) {
		  
      $("#slidervalue").html(response);

	      $( "#slider" ).slider({
	
			min: 1,
			max: 100,
			value: $("#slidervalue").text(),
	
  });
	  
	}
    });
}

$(function() {
	//var value_slider_dynamic = $("#slidervalue").val();
    $( "#slider" ).slider({
	
			min: 1,
			max: 100,
			value: $("#slidervalue").text(),
	
  });

});

    </script>
</body>

</html>