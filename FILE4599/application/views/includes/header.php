<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    
    <title>FILE4599</title>

    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.0/css/font-awesome.min.css">

    <!-- Font Awesome css -->
    <link href="<?php echo base_url().'assets/css/font-awesome.css'?>" rel="stylesheet" type="text/css">

    <!-- Material CSS -->
    <link rel="stylesheet" href="<?php echo base_url().'assets/css/materialize.css'?>">

    <!-- jqueryui CSS -->
    <link href="<?php echo base_url().'assets/css/jquery-ui.css'?>" rel="stylesheet" type="text/css"> 

    <!-- Bootstrap core CSS -->
    <link href="<?php echo base_url().'assets/css/bootstrap.css'?>" rel="stylesheet" type="text/css">

    <!-- Material Design pro Bootstrap -->
	<link href="<?php echo base_url().'assets/css/mdb pro.css'?>" rel="stylesheet" type="text/css">

    <!-- Material Design Bootstrap -->
    <link href="<?php echo base_url().'assets/css/mdb.css'?>" rel="stylesheet" type="text/css">    

	<!-- Crow Grid Framework -->
    <link href="<?php echo base_url().'assets/css/crow.css'?>" rel="stylesheet" type="text/css">

    <!-- Animation css -->
    <link href="<?php echo base_url().'assets/css/animations.css'?>" rel="stylesheet" type="text/css">

    <!-- Easy Responsive Tabs -->
    <link href="<?php echo base_url().'assets/css/easy-responsive-tabs.css'?>" rel="stylesheet" type="text/css">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.11.0/css/bootstrap-select.min.css">
	
    <!-- Your custom styles (optional) -->
    <link href="<?php echo base_url().'assets/css/style.css'?>" rel="stylesheet" type="text/css">

</head>

<body>    
	<!-- First Navbar-->
    <nav class="first-nav navbar navbar-fixed-top scrolling-navbar navbar-dark bg-primary">        
        <!--Container-->
        <div class="container">
            <!-- Secon Nav Collapse button-->
            <button class="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#collapse-second-nav"><i class="fa fa-bars"></i></button>            
                <!--Navbar Brand-->
                <a class="navbar-brand hidden-md-up" href="<?php echo base_url().'main/index'?>"><span class="logo">FILE4599</span>.com<br/>We're Driven by Our Success</a>
                <!--Links-->
                <ul class="nav navbar-nav hidden-sm-down">
                    <li class="nav-item">
                        <a class="nav-link"><i class="fa fa-envelope-o fa-2x" aria-hidden="true"></i>&nbsp;&nbsp;info@file4599.com</a>                    
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"><i class="fa fa-phone fa-2x" aria-hidden="true"></i>&nbsp;&nbsp;416-929-4004</a>
                    </li>
                    <li class="nav-item hidden-md-down">
                        <a class="nav-link"><i class="fa fa-clock-o fa-2x" aria-hidden="true"></i>&nbsp;&nbsp;Man - Sat: 9AM - 6PM</a>
                    </li>                
                </ul>
                <!--/Links-->

                <!--Links-->
                <ul class="nav navbar-nav nav-flex-icons">
                    <li class="nav-item  hidden-xs-down">
                        <a href="<?php echo base_url().'main/select_ticket'?>"><button type="button" class="btn btn-amber">FILE YOUR TICKET</button></a>
                    </li>
                    <li class="nav-item  hidden-sm-down">
                        <a href="<?php echo base_url().'main/contact_us'?>"><button type="button" class="btn btn-elegant">CONTACT US</button></a>
                    </li>
                </ul>
                <!--Links-->
        </div><!--/.Container-->
    </nav>
    <!--/.First Navbar-->


    <!-- Second Navbar-->
        <nav class="second-nav navbar">
            <!--Collapse content-->
            <div class="collapse navbar-toggleable-xs" id="collapse-second-nav">
                <!--Navbar Brand-->
                <a class="navbar-brand hidden-sm-down" href="<?php echo base_url().'main/index'?>"><span class="logo">FILE4599</span>.com<br/>We're Driven by Our Success</a>               
                <!--Links-->
                <ul class="nav navbar-nav">
                    <?php if(isset($active)) {if($active == 'home') {echo '<li class="nav-item active">'; } else {echo '<li class="nav-item">'; } } else {echo '<li class="nav-item">'; }?>
                        <a class="nav-link" href="<?php echo base_url().'main/index'?>">HOME</a>
                    </li>
                    <?php if(isset($active)) {if($active == 'about') {echo '<li class="nav-item active">'; } else {echo '<li class="nav-item">'; } } else {echo '<li class="nav-item">'; }?>
                        <a class="nav-link" href="<?php echo base_url().'main/about'?>">ABOUT</a>
                    </li>
                    <?php if(isset($active)) {if($active == 'services') {echo '<li class="nav-item active">'; } else {echo '<li class="nav-item">'; } } else {echo '<li class="nav-item">'; }?>
                        <a class="nav-link" href="<?php echo base_url().'main/services'?>">SERVICES</a>
                    </li>
                    <?php if(isset($active)) {if($active == 'civil') {echo '<li class="nav-item active">'; } else {echo '<li class="nav-item">'; } } else {echo '<li class="nav-item">'; }?>
                        <a class="nav-link" href="<?php echo base_url().'main/civil'?>">CIVIL LITIGATION</a>
                    </li>
                    <?php if(isset($active)) {if($active == 'tribunal') {echo '<li class="nav-item active">'; } else {echo '<li class="nav-item">'; } } else {echo '<li class="nav-item">'; }?>
                        <a class="nav-link" href="<?php echo base_url().'main/tribunal'?>">TRIBUNAL</a>
                    </li>
                </ul>
                <!--Links-->
            </div>
            <!--/.Collapse content-->
        </nav>
    <!--/.Second Navbar-->