<?php 
session_start();
if(!isset($_SESSION['username'])=="admin")
{
	header("location: ../pic_user.php"); // Redirecting To Other Page
}

include '../includes/db_config.php';
$query = "select * from project_list WHERE status='active'";
$result = mysqli_query($conn, $query); 
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
    include '../includes/navbar.php';
	include '../includes/header-carousel.php';	
	?>
<div id="welcome" class="pt25">
  <div class="container">
    <div class="row">
      <div class="col-md-12 text-center">
        <h1 class="font-size-normal"> <small>Welcome to ifundnetwork</small> Funding High- Impact Innovations Of The Future. <small class="heading heading-solid center-block"></small></h1>
      </div>
      <div class="col-md-8 col-md-offset-2 text-center">
        <p> <span class="lead"><strong>The ifundnetwork is a seed and early-stage invite only private investors platform. Currently we are focused on investing in startup with Novel  ideas and outstanding technological innovations. We are presently operating in the following locations, Houston Texas, Chennai India, and Lagos Nigeria</strong></span><br>
        </p>
      </div>
    </div>
  </div>
</div>
	
<div id="testimonial" class="pt75 pb25">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="row">
                        <div id="owlSectionThreeItem" class="owl-carousel">
<?php
while($record = mysqli_fetch_assoc($result))
{
?>
		<div class="ml15 mr15 portfolio_border">
        <div class="animated pjt_cover_img" data-animation="fadeInLeft" data-animation-delay="100"> 
		<img src="../assets/img/other/<?php echo $record['project_cover']?>" alt="website service" class="img-responsive"></div>
        <div class="animated pjt_logo_img" data-animation="fadeInLeft" data-animation-delay="100"> 
		<img src="../assets/img/other/<?php echo $record['project_logo']?>" alt="website service" class="img-responsive"></div>		
		<div class="animated" data-animation="fadeIn" data-animation-delay="100">
		<h3 class="font-size-normal text-center pt5 pb5 ml0 mr0 portfolio_bg2"> <small class="color-primary pb10">Category</small> <span href="#" class="inlineedit" data-name="project_category" data-type="text" data-pk="<?php echo $record['project_id'] ?>" data-url="pjtlstupdate.php"><?php echo$record['project_category']?></span></h3>
		<p class="mt20 pl10 pr10"><span href="#" class="inlineedit" data-name="project_desc_short" data-type="textarea" data-pk="<?php echo $record['project_id'] ?>" data-url="pjtlstupdate.php"><?php echo $record['project_desc_short'] ?></span></p>
		<h3 class="font-size-normal text-center mb0 pb10 pt10 portfolio_bg3"> <small class="color-primary pb15">Seed Stage Funding Goal</small>$ <span href="#" class="inlineedit" data-name="project_fund_goal" data-type="text" data-pk="<?php echo $record['project_id'] ?>" data-url="pjtlstupdate.php"><?php echo $record['project_fund_goal']?></span></h3>
		</div>
		<?php 
			$persent = 0;
			$amt_total = $record['project_fund_goal'];
			$amt_invested = $record['project_amt_invested'];
			$persent = round(($amt_invested / $amt_total)*100);
			if($persent > 100){
				$persent = 100;
			}
		?>
		<div class="row mt5 mb5">
			<div class="col-md-12 text-center">
				<div class="pBar" data-from="0" data-to="<?php echo $persent; ?>" data-color="#20bf3c"></div>
			</div>
		</div>
		<div class="row status">
			<div class="col-md-3 text-center col">
				<div class="text-center col circle">
					<span class="name persent"><?php echo $persent; ?>% <br/></span><span class="value">Funded</span>
				</div>
			</div>
			<div class="col-md-4 text-center col border-top">
				<div class="text-center col">
					<span class="name">Project&nbsp;&nbsp;Status</span> <br/> <span class="value">Development Stage</span>
				</div>
			</div>
			<div class="col-md-5 text-center col border-top">
				<span class="name">Done</span> <br/> <span class="value">UI/UX <br/> Patent Provisional <br/> Development Team</span>
			</div>
		</div>
		<div class="border-bottom"></div>
		
		<div class="text-center pt15 pb15"><a href="ifindcard.php?id=<?php echo $record['project_id']?>" class="button button-md button-pasific hover-ripple-out tex">View More</a></div>
		
		<div class="row status1 address">
			<div class="col-xs-4 text-center">
				<span style="position:absolute; left:-20px; top:-21px;"><img src="../assets/img/location.png" alt="location"></span> <?php echo $record['location_city']; ?>
			</div>
			<div class="col-xs-4 text-center">
				<?php echo $record['location_state']; ?>
			</div>
			<div class="col-xs-4">
				<?php echo $record['location_country']; ?>.
			</div>
		</div>
		<div class="row status2">
			<div class="col-sm-12 text-center">
			<div class="fund-period">
			<?php 
			$from = $record['project_fund_period_from'];
			$to = $record['project_fund_period_to'];
			?>
				Funding  Period  <?php echo date("F j<\s\up>S</\s\up>", strtotime($from)); ?> – <?php echo date("F j<\s\up>S</\s\up>", strtotime($to)); ?>
				<!--Funding  Period  <?php echo date("F j<\s\up>S</\s\up> , Y", strtotime($from)); ?> – <?php echo date("F j<\s\up>S</\s\up> , Y", strtotime($to)); ?>-->
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
    </div>
</div>
    
    <div id="info-1" class="pt50 pb50 mt75 parallax-window" data-parallax="scroll" data-speed="0.5" data-image-src="../assets/img/bg/home_ready.jpg">
        <div class="container">
            <div class="row pt75">
                <div class="col-md-12 text-center">
                    <h1 class="color-light"> <small class="color-light">The best way to be success</small> Are you ready to be join as Investor?</h1>
                    
                </div>
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
    <script src="../assets/js/main/ion.rangeSlider.min.js"></script>
	<script src="../assets/js/jquery.pBar.js"></script>
    <script src="../assets/js/main/main.js"></script>
	<script type="text/javascript">
		//$('.username').editable('option', 'disabled', true);
        $.fn.editable.defaults.mode = "popup";                       
        $('.inlineedit').editable();          
    </script>
	
</body>

</html>