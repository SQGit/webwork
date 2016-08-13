<?php 
session_start();
if(!(isset($_SESSION['username']) || isset($_SESSION['inv_id']) || isset($_SESSION['inv_email'])))
{
	header("location: pic_user.php"); // Redirecting To Other Page
}
include 'includes/db_config.php';
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
    <link rel="shortcut icon" href="assets/img/favicon.png">    
    <link rel="stylesheet" href="assets/css/core/bootstrap.min.css">
    <link rel="stylesheet" href="assets/css/core/animate.min.css">
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
</head>

<body id="topPage" data-spy="scroll" data-target=".navbar" data-offset="100">
    <div id="pageloader">
        <div class="loader-item"> <img src="assets/img/other/puff.svg" alt="page loader">
        </div>
    </div>
    <nav class="index navbar navbar-pasific navbar-mp megamenu navbar-fixed-top">
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
	$query = "select * from faq_page";
	$result = mysqli_query($conn, $query); 
	$record = mysqli_fetch_array($result);
	?>
    <header class="pt100 pb100 parallax-window-2" data-parallax="scroll" data-speed="0.5" data-image-src="assets/img/bg/<?php echo $record['faq_bg_image']?>" data-positionY="1000">
        <div class="intro-body text-center">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 pt50">
                        <h1 class="brand-heading font-montserrat text-uppercase color-light" data-in-effect="fadeInDown"><?php echo $record['faq_main_title']?></h1>
                        <p class="intro-text color-light text-open-sans text-uppercase" data-in-effect="swing"><?php echo $record['faq_sub_title']?></p><?php mysqli_free_result($result); ?> <!-- <a class="button button-pasific button-lg hover-ripple-out animated" data-animation="fadeInUp" data-animation-delay="1200">Submit Ticket</a>-->
                    </div>
                </div>
            </div>
        </div>
    </header>
	
	<?php
	include 'includes/modals.php';
	?>
	
    <div id="faqs" class="bg-gray pt50 pb20 bt-solid-1">
        <div class="container">
            <div class="row">
                <div class="container">
                    <div class="row" style="text-align:center";>
                        <h3 class="text-center mb20">How can we help you?<br/><hr class="heading-solid"/></h3>
							
							<div class="col-md-7 col-md-offset-2 col">
							<input type="text" class="form-control" id="searchquery" name="search" placeholder="Search FAQs">
							<span class="clear editable-clear-x" style="display:none"></span>
							</div>	
							<div class="col-md-1">
							<input type="submit" class="btn btn-lg btn-success" value="Search" id="faqsearch">
							</div>
                    </div>
                </div>
            </div>
            <div class="row mt35">
                <div class="col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-8 col-xs-offset-2 mb30">
                    <div class="panel-group" id="accordion5">
					<?php					
						$query = "select * from faq";
						$result = mysqli_query($conn, $query); 
						$i=0;
							while($row = mysqli_fetch_array($result))
							{ 
								if($i==0)
								{
								?>
						
					
                        <div class="panel">
                            <div class="panel-heading"> <a href="#<?php echo $row['faq_id']?>" class="font-black collapsed accordian-toggle-chevron-left" data-toggle="collapse" data-parent="#accordion5"><?php echo $row['faq_question']?></a>
                            </div>
                            <div id="<?php echo $row['faq_id']?>" class="panel-collapse collapse in active">
                                <div class="panel-body">
								<?php echo $row['faq_ans']?>
								</div>
                            </div>
                        </div>
						<?php 
						}
						else
						{
						?>		
                        <div class="panel">
                            <div class="panel-heading"> <a href="#<?php echo $row['faq_id']?>" class="font-black collapsed accordian-toggle-chevron-left" data-toggle="collapse" data-parent="#accordion5"><?php echo $row['faq_question']?></a>
                            </div>
                            <div id="<?php echo $row['faq_id']?>" class="panel-collapse collapse">
                                <div class="panel-body">
								<?php echo $row['faq_ans']?>
								</div>
                            </div>
                        </div>
						<?php
						}
						$i++;
						}
						?>                        
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
    <script src="assets/js/core/bootstrap.min.js"></script>
	<script src="formvalidator.js"></script>
	<script src="script1.js"></script>
	<script src="faq.js"></script>
    <script src="assets/js/progress-bar/bootstrap-progressbar.min.js"></script>
    <script src="assets/js/progress-bar/bootstrap-progressbar-main.js"></script>
    <script src="assets/js/main/jquery.appear.js"></script>
    <script src="assets/js/main/isotope.pkgd.min.js"></script>
    <script src="assets/js/main/parallax.min.js"></script>
    <script src="assets/js/main/jquery.countTo.js"></script>
    <script src="assets/js/main/owl.carousel.min.js"></script>
    <script src="assets/js/main/jquery.sticky.js"></script>
    <script src="assets/js/main/ion.rangeSlider.min.js"></script>
    <script src="assets/js/main/main.js"></script>
</body>
</html>