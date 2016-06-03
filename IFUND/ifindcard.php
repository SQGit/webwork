<?php 
session_start();
if(!isset($_SESSION['username']))
{
	header("location: pic_user.php"); // Redirecting To Other Page
}

include 'includes/db_config.php';

$p_id = $_GET['id'];

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <title>iFund Network | Connecting Investors To Great Startup <?php echo $p_id ?> </title>
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta charset="utf-8">
    <meta name="author">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link rel="shortcut icon" href="assets/img/favicon.png">
    <link rel="stylesheet" href="assets/css/core/bootstrap.min.css">
    <link rel="stylesheet" href="assets/css/core/animate.min.css">
    <link rel="stylesheet" href="assets/css/core/jquery-ui.css">
    <link rel="stylesheet" href="assets/css/main/main.min.css">
    <link rel="stylesheet" href="assets/css/magnific/magic.min.css">
    <link rel="stylesheet" href="assets/css/magnific/magnific-popup.css">
    <link rel="stylesheet" href="assets/css/magnific/magnific-popup-zoom-gallery.css">
    <link rel="stylesheet" href="assets/css/owl-carousel/owl.carousel.css">
    <link rel="stylesheet" href="assets/css/owl-carousel/owl.theme.css">
    <link rel="stylesheet" href="assets/css/owl-carousel/owl.transitions.css">
    <link rel="stylesheet" href="assets/css/color/pasific.css">
    <link rel="stylesheet" href="assets/css/icon/font-awesome.css">
    <link rel="stylesheet" href="assets/css/icon/et-line-font.css">
    <!--[if lt IE 9]> <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script> <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script> <![endif]-->
</head>

<body id="page-top" data-spy="scroll" data-target=".navbar" data-offset="100">
    <div id="pageloader">
        <div class="loader-item"> <img src="assets/img/other/puff.svg" alt="page loader">
        </div>
    </div>
   <nav class="navbar navbar-pasific navbar-mp megamenu navbar-fixed-top">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse"> <i class="fa fa-bars"></i> </button>
                <a class="navbar-brand page-scroll" href="#page-top"> <img src="assets/img/logo/logo-default.png" alt="logo"> <span style="color:#8cc63f;">i</span>Fund <span style="color:#8cc63f;">Network</span> </a>
            </div>
            <div class="navbar-collapse collapse navbar-main-collapse">
<?php               
if(isset($_SESSION['username']))
{ ?>
			   <ul class="nav navbar-nav">
                    <li><a href="reg_user.php">Home </a></li>
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
                                        <div class="col-md-5">
                                            <img src="http://placehold.it/120x120"
                                                alt="Alternate Text" class="img-responsive img-circle" />                                            
                                        </div>
                                        <div class="col-md-7">
                                            <span><?php echo $_SESSION['username']; ?></span>
                                            <p class="text-muted small mb10 text-lowercase"><?php echo $_SESSION['inv_email']; ?></p>
                                            <div class="divider">
                                            </div>
                                            <a href="userprofile.php" class="btn btn-primary btn-sm active">View Profile</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="navbar-footer mt15">
                                    <div class="navbar-footer-content">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <a href="userprofile.php" class="btn btn-default btn-sm font-black">Change Passowrd</a>
                                            </div>
                                            <div class="col-md-6">
                                                <a href="process/logout.php" class="btn btn-default btn-sm pull-right font-black">Sign Out</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
<?php }
else
{ ?>
				   <ul class="nav navbar-nav">
                    <li><a href="pic_user.php">Home </a></li>
					<li><a href="about_us.php">About Us </a></li>
					<li><a href="faq.php">FAQ </a></li>
					<li><a href="partner.php">Our Partners </a></li>
                    <li><a href="contact_us.php">Contact Us </a></li>
                    <li><a href="#" data-toggle="modal" data-target="#loginModal"><i class="fa fa-power-off fa-fw" style="color:#8cc63e;"></i> Login / Sign Up</a></li>                  
                </ul>
<?php				
} ?>
            </div>
        </div>
    </nav>
	

	
<?php
$query = "select * from project_list WHERE project_id= $p_id";
$result = mysqli_query($conn, $query); 
$row = mysqli_fetch_array($result) or die(mysqli_error());
?>
		<header class="pt100 pb100 parallax-window-2" data-parallax="scroll" data-speed="0.5" data-image-src="assets/img/bg/investment.jpg" data-positionY="1000">
        <div class="intro-body text-center">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center">
                    <h1 class="brand-heading font-montserrat text-uppercase color-light" data-in-effect="fadeInDown"> <small>iFund Network</small> <span class="mt15"><?php echo $row['project_category']?></span> <small class="heading heading-solid center-block"></small></h1>
                </div>
                <div class="col-md-8 col-md-offset-2 text-center">
                    <p><span class="lead color-light alpha7"><strong><?php echo $row['project_desc_short']?></strong></span>
                    </p>
                </div>
                </div>
            </div>
        </div>
    </header>
   
    <div class="pt100 pb100 bg-grad-bora">
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-sm-12 col-xs-12">
                    <div class="embed-responsive embed-responsive-4by3">
                        <iframe class="embed-responsive-item brdr-full" src="<?php echo $row['project_video']?>" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
                <div class="col-md-4 col-sm-12 col-xs-12 side">
                    <div class="row m0">
                        <div class="col-sm-12 col-xs-12 col-md-12 text-center mb20">
                            <h4 class="mt0 mb0 text-uppercase"> Seed Stage Funding Goal <small class="text-lowercase" style="color:#f00; font-size:24px;">$<?php echo $row['project_fund_goal']?></small></h4>
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
                                <div class="col-md-4 col-sm-4 col-xs-4 pull-left pr0 pl0 text-center">$<?php echo $row['project_amt_invested']?> </div>
                                <div class="col-md-4 col-sm-4 col-xs-4 pull-left pr0 pl0 text-center"><?php echo $row['project_fund_pool']?> Backers</div>
                                <div class="col-md-4 col-sm-4 col-xs-4 pull-left pr0 pl0 text-center"><?php echo $row['project_angels']?></div>
                            </div>
                        </div>
                        <div class="row">
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
                                    <br/><span style="font-size:28px;">
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
                        </div>
                    </div>
                    <div class="row m0">
                        <div class="col-md-offset-2 col-sm-offset-2 col-md-8 col-sm-8 col-xs-12 mt25 content-box content-box-o content-box-center bg-blue-1">
                            <div class="col-md-12 col-sm-12 col-xs-12"><span style="font-size:18px; color:#333; font-weight:normal;">FUNDING PERIOD</span>
                            </div>
                            <div class="col-md-12 col-sm-12 col-xs-12 pt20 pb15">
                                <div>
                                    <input class="pr0 pl5 col-md-5 col-sm-5 col-xs-5 color-dark pull-left" value="<?php echo $row['project_fund_period_from']?>" type="text" id="txtFromDate" disabled>
                                </div>
                                <div>
                                    <input class="pr0 pl5 col-md-5 col-sm-5 col-xs-5 color-dark pull-right" value="<?php echo $row['project_fund_period_to']?>" type="text" id="txtToDate" disabled>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12 col-md-12 col-xs-12 mt10 text-center pt20">
                            <strong style="font-size:16px;">Yes Am Interested In Investing</strong>
                        </div>
                    </div>
										
					<div class="text-center"><a class="button button-md button-pasific hover-ripple-out mt25" href="invesment.php">Click Here To be Part of This Innovation</a></div>
					
                </div>
            </div>
        </div>
    </div>
	<!-- second level -->
    <div id="testimonial1" class="pt75 pb75 bglg">
        <div class="container bg-white">
            <div class="row">
                <div class="col-md-8 mt10">
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
                    <div class="tab-content pr10 pl10">
                        <!-- tab 1 -->
                        <div class="tab-pane fade active in pt0" id="pilljustifiedHome">
                            <h4 class="mt30 font-blue">Vision</h4>
                            <?php echo $row['project_vision']?>
                            <h4 class="font-blue">Problem</h4>
                            <?php echo $row['project_problem']?>
                            <h4 class="font-blue">Solution</h4>
                            <div class="embed-responsive embed-responsive-4by3">
                                <iframe class="embed-responsive-item brdr-full" src="<?php echo $row['project_solution_video']?>" frameborder="0" allowfullscreen></iframe>
                            </div>
                            <?php echo $row['project_other_details'];
							mysqli_free_result($result);
							?>
                            <div class="text-center mt20 mb20"><a class="button button-md button-pasific hover-ripple-out mt25" href="invesment.php">Invest Now</a></div>
                        </div>
						
                        <!-- tab 2 -->
						<?php							
							$query = "select * from team_page";
							$result = mysqli_query($conn, $query); 
							$row = mysqli_fetch_array($result) or die(mysqli_error());
							?>
                        <div class="tab-pane fade" id="pilljustified1">
                            <div class="row m0">
							<div class="col-md-offset-1 col-md-10 col-sm-offset-1 col-sm-10 text-center">
								<h4 class="font-blue" style="font-weight:700 !important;">MEET THE TEAM </h4>
								<?php echo $row['team_short_intro']?>
							</div>
							</div>
							<?php mysqli_free_result($result); ?>
							<?php
							$query = "select * from team_members WHERE project_id= $p_id";
							$result = mysqli_query($conn, $query); 
							while($row = mysqli_fetch_array($result))
							{ ?>
							<div class="row mr0 ml0 mt25 bb-solid-1">
                                <div class="col-md-4 col-sm-4"> <img class="center-block" alt="team" src="assets/img/<?php echo $row['team_member_photo']?>">
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <h4 class="font-montserrat text-uppercase"> <?php echo $row['team_member_name']?> <small><?php echo $row['team_member_profession']?></small></h4>
                                    <p class="pb25"><?php echo $row['team_member_intro']?></p>
                                </div>
                            </div>
							<?php 
							} 
							mysqli_free_result($result);
							?>
							
                            <div class="text-center mt20 mb20"><a class="button button-md button-pasific hover-ripple-out mt25" href="invesment.php">Invest Now</a></div>
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
                                        <div class="panel-heading"> <a href="#<?php echo $row['document_id']?>" class="collapsed accordian-toggle-chevron-left" data-toggle="collapse" data-parent="#accordion9"><?php echo $row['document_group_name']?></a>
                                        </div>
										<div id="<?php echo $row['document_id']?>" class="panel-collapse collapse in">
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
                                        <div class="panel-heading"> <a href="#<?php echo $row['document_id']?>" class="collapsed accordian-toggle-chevron-left" data-toggle="collapse" data-parent="#accordion9"><?php echo $row['document_group_name']?></a>
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
							<div class="text-center mt20 mb20"><a class="button button-md button-pasific hover-ripple-out mt25" href="invesment.php">Invest Now</a></div>
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
                                        <div class="panel-heading"> <a href="#f<?php echo $row['fund_id']?>" class="collapsed accordian-toggle-chevron-left" data-toggle="collapse" data-parent="#accordion10"><?php echo $row['funding_name']?></a>
                                        </div>
										<div id="f<?php echo $row['fund_id']?>" class="panel-collapse collapse in">
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
                                        <div class="panel-heading"> <a href="#f<?php echo $row['fund_id']?>" class="collapsed accordian-toggle-chevron-left" data-toggle="collapse" data-parent="#accordion10"><?php echo $row['funding_name']?></a>
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
							<div class="text-center mt20 mb20"><a class="button button-md button-pasific hover-ripple-out mt25" href="invesment.php">Invest Now</a></div>
                        </div>
                        <!-- tab 5 -->
                        <div class="tab-pane fade" id="pilljustified4">
						<h4 class="font-blue">Competitors</h4>
                            <div id="testimonial" class="pt45 pb75">
                                <div class="col-sm-12">
                                    <div class="row">
                                        <div id="owlSectionThreeItem" class="owl-carousel">
										<?php					
										$query = "select * from competitors WHERE project_id= $p_id";
										$result = mysqli_query($conn, $query); 
										while($row = mysqli_fetch_array($result))
										{ 									
										?>
                                            <div class="testimonial testimonial-center">
                                                <div class="testimonial-header"> <img style="width:160px; height:160px;"src="assets/img/<?php echo $row['competitor_logo']?>" alt="<?php echo $row['competitor_name']?>" class="img-responsive img-square">
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
                            <div>
							<?php					
							$query = "select * from project_list WHERE project_id= $p_id";
							$result = mysqli_query($conn, $query); 
							$row = mysqli_fetch_array($result) or die(mysqli_error());
							?>
                                <h4 class="font-blue">Ifindcard Advantage Over Our Competitors </h4>
								<div class="pl40">
                                <?php echo $row['project_advantage']?>
								<?php mysqli_free_result($result); ?>
								</div>
                            </div>
							<div class="text-center mt20 mb20"><a class="button button-md button-pasific hover-ripple-out mt25" href="invesment.php">Invest Now</a></div>
                        </div>
                    </div>
                </div>
                <!-- Traction -->
                <div class="col-md-4 side no-border mt10">
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
									<img src="assets/img/i.png" "width=24px; height=32px;" class="pull-left mr20" alt="logo">
								</div>
								<div class="col-md-8 text-left pl0 pr0" style="font-size:16px; color: rgb(113, 108, 108); text-transform:none; font-weight:bold;">
									<?php echo $row['traction_name']?> <br/><?php echo $row['traction_name_desc']?>
								</div>
								<div class="col-md-2 pl0 pt10 pr0">
									<input type="checkbox" disabled>
								</div>
							</div>
							<?php 
							}else{ ?>
							<div class="row  pt30">
								<div class="col-md-2 pt10">
									<img src="assets/img/i.png" "width=24px; height=32px;" class="pull-left mr20" alt="logo">
								</div>
								<div class="col-md-8 text-left pl0 pr0" style="font-size:16px; color: rgb(113, 108, 108); text-transform:none; font-weight:bold;">
									<?php echo $row['traction_name']?> <br/><?php echo $row['traction_name_desc']?>
								</div>
								<div class="col-md-2 pl0 pt10 pr0">
									<input type="checkbox" checked disabled>
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
									<img src="assets/img/i.png" "width=24px; height=32px;" class="pull-left mr20" alt="logo">
								</div>
								<div class="col-md-8 text-left pl0 pr0" style="font-size:16px; color: rgb(113, 108, 108); text-transform:none; font-weight:bold;">
									<?php echo $row['testing_name']?><br/><?php echo $row['testing_name_desc']?>
								</div>
								<div class="col-md-2 pl0 pt10 pr0">
									<input type="checkbox" disabled>
								</div>
							</div>
							<?php 
							}else{ ?>
							<div class="row  pt30">
								<div class="col-md-2 pt10">
									<img src="assets/img/i.png" "width=24px; height=32px;" class="pull-left mr20" alt="logo">
								</div>
								<div class="col-md-8 text-left pl0 pr0" style="font-size:16px; color: rgb(113, 108, 108); text-transform:none; font-weight:bold;">
									<?php echo $row['testing_name']?><br/><?php echo $row['testing_name_desc']?>
								</div>
								<div class="col-md-2 pl0 pt10 pr0">
									<input type="checkbox" checked disabled>
								</div>
							</div>
                            <?php 
							}
							}
							mysqli_free_result($result); 
							?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="footer" class="footer-two pt20">
        <div class="container-fluid">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12 text-center">
                        <p>Copyright &copy;2016 <a href="#">iFund Network</a>. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="assets/js/core/jquery.min.js"></script>
<script>
	$(function() {
		//var value_slider_dynamic = $("#slidervalue").val();
		$( "#slider" ).slider({	
			min: 1,
			max: 100,
			value: $("#slidervalue").text(),	
		});

	});
</script>
    <script src="assets/js/core/jquery-ui.js"></script>
    <script src="assets/js/core/bootstrap.min.js"></script>
    <script src="myquery.js"></script>
    <script src="assets/js/magnific-popup/jquery.magnific-popup.min.js"></script>
    <script src="assets/js/magnific-popup/magnific-popup-zoom-gallery.js"></script>
    <script src="assets/js/progress-bar/bootstrap-progressbar.js"></script>
    <script src="assets/js/progress-bar/bootstrap-progressbar-main.js"></script>
    <script src="assets/js/main/jquery.appear.js"></script>
    <script src="assets/js/main/isotope.pkgd.min.js"></script>
    <script src="assets/js/main/parallax.min.js"></script>
    <script src="assets/js/main/jquery.countTo.js"></script>
    <script src="assets/js/main/owl.carousel.min.js"></script>
    <script src="assets/js/main/owl.carousel.min.js"></script>
    <script src="assets/js/main/ion.rangeSlider.min.js"></script>
    <script src="assets/js/main/main.js"></script>
</body>

</html>