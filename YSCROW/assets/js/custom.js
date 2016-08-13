/*!
 * Custom Jquery Function
 */

/* function for side nav open close start */

//var path = '/yscrow/';
var path = '/';
(function ($) {

    /* --------------------------------------------------------------
	= ON DOM READY
	-------------------------------------------------------------- */
    $(function () {

        /* Menu Toggle
		-------------------------------------------------- */
        $('.toggle-nav').click(function (event) {
            if (!Modernizr.csstransitions) {
                $(this).toggleNavjs();
            } else {
                $(this).toggleNav();
            }
            if ($(this).parent().hasClass('nav-menu')) {
                event.preventDefault();
            }
        });

		$('.right-off-canvas-menu .push_nav li a').click(function (event) {
			$(this).CanvasClose();
		});


    });

	/* canvas close
	--------------------------------------------------*/

	$.fn.CanvasClose = function () {

        if ($('#site-wrapper').hasClass('show-nav')) {

            $('#site-wrapper').removeClass('show-nav');

            $(".burger").toggleClass('open');

            //$('.header-content .right-off-canvas-menu ul').css({
              //  "marginTop": $(window).scrollTop()
            //});

        }
        return false;

    };

    /* Toggle Nav
	-------------------------------------------------- */
    $.fn.toggleNav = function () {

        if ($('#site-wrapper').hasClass('show-nav')) {

            $('#site-wrapper').removeClass('show-nav');

            $(".burger").toggleClass('open');

            //$('.header-content .right-off-canvas-menu ul').css({
              //  "marginTop": $(window).scrollTop()
            //});

        } else {
            // Do things on Nav Open

            $('#site-wrapper').addClass('show-nav');

            $(".burger").toggleClass('open');

            //$('.header-content .right-off-canvas-menu ul').css({
             //   "marginTop": $(window).scrollTop()
            //});


        }
        return false;

    };

    /* Toggle Nav Fallback
	-------------------------------------------------- */
    $.fn.toggleNavjs = function () {

        /* JS Fallback */

        if ($('#site-wrapper').hasClass('show-nav')) {
            // Do things on Nav Close
            $('#site-wrapper').removeClass('show-nav');
            $(".burger").toggleClass('open');
            $('#site-canvas').animate({
                'margin-left': '0px'
            });

            //$('.header-content .right-off-canvas-menu ul').css({
            //    "marginTop": $(window).scrollTop()
            //});

        } else {
            // Do things on Nav Open
            $('#site-wrapper').addClass('show-nav');
            $(".burger").toggleClass('open');
            $('#site-canvas').animate({
                'margin-left': '-230px'
            });

            //$('.header-content .right-off-canvas-menu ul').css({
            //    "marginTop": $(window).scrollTop()
           // });
        }

        return false;

    };

})(jQuery);
/* function for side nav open close start */

   $(function () {
        "use strict";
        if ($(".navbar-standart").length > 0) {
            $(".topmenu").addClass("top-nav-collapse");
        } else {
            $(window).scroll(function () {
                if ($(".topmenu").offset().top > 10) {
                    $(".topmenu").addClass("top-nav-collapse");

                } else {
                    $(".topmenu").removeClass("top-nav-collapse");
                }
            });
        };
    });

    /* material select init */
$(document).ready(function() {

    $('select').material_select();

    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 5 // Creates a dropdown of 15 years to control year
    });





});
    //Check to see if the window is top if not then display button

$(document).ready(function() {
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 600) {
            jQuery('.scrollToTop').fadeIn();
        } else {
            jQuery('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top

    jQuery('.scrollToTop').click(function () {
        jQuery('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

});


$(document).ready(function() {
var toggle = true;

$(".sidebar-icon").click(function() {
  if (toggle)
  {
    $(".page-container").addClass("sidebar-collapsed-back").removeClass("sidebar-collapsed");
    $("#menu span").css({"position":"absolute"});
  }
  else
  {
    $(".page-container").removeClass("sidebar-collapsed-back").addClass("sidebar-collapsed");
    setTimeout(function() {
      $("#menu span").css({"position":"relative"});
    }, 400);
  }
  toggle = !toggle;
});
});

$(document).ready(function() {
    $(".ct_btn").click(function(){
        $(".sect1 #level1").hide();

        $(".sect2").show(function(){
            $(this).fadeIn(100);
        });
    });

    $("#buyer").click(function(){
        $(".sect1").hide();
        $(".sect2").hide();

        $(".sect3").show(function(){
            $(this).fadeIn(100);
        });
    });

    $("#seller").click(function(){
        $(".sect1").hide();
        $(".sect2").hide();

        $(".sect3").show(function(){
            $(this).fadeIn(100);
        });
    });

});

$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
});





//registration form submit after validation start//
$(document).on("submit", "#register_form", function(e){
    $.ajax({
        url : $(this).attr('action'),
        type: 'POST',
        data: new FormData(this),
        processData: false,
        contentType: false,
        beforeSend: function(){
            $('#register_form .go_btn button').hide();
            $("#register_form #loader").show();
        },
        complete: function(){
            $("#register_form #loader").hide();
            $('#register_form .go_btn button').show();
        },
        success: function(msg) {

            $('#register_form')[0].reset(); // To reset form fields
            $('#alert-msg').html(msg);

          /*  if (msg == 'mail_sent')
          {
                $('#register_form')[0].reset(); // To reset form fields
                $('#alert-msg').html('<div class="alert alert-success text-center">Hi You are Registered successfully! Activation Link sent to your given mail id!! Please verify..</div>');
            }
            else if (msg == 'mail_not_send')
            {
                $('#register_form')[0].reset(); // To reset form fields
                $('#alert-msg').html('<div class="alert alert-danger text-center">Error in sending activation link to your mail.. Please try again later.</div>');
            }
            else if (msg == 'error')
            {
                $('#register_form')[0].reset(); // To reset form fields
                $('#alert-msg').html('<div class="alert alert-danger text-center">Error in registration! Please try again later.</div>');
            }
            else
            {
                $('#alert-msg').html('<div class="alert alert-danger">' + msg + '</div>');
            }*/
        }
    });
    return false;
});
//registration form submit after validation end//

//login form submit after validation start//
$(document).on("submit", "#login_form", function(e){

    $.ajax({
        url : $(this).attr('action'),
        type: 'POST',
        data: new FormData(this),
        processData: false,
        contentType: false,
        beforeSend: function(){
            $('#login_form .go_btn button').hide();
            $("#login_form #login_loader").show();
        },
        complete: function(){
            $("#login_form #login_loader").hide();
            $('#login_form .go_btn button').show();
        },
        success: function(msg) {
            if (msg == 'YES'){
                window.location.href = path+"home/user";
            }
            else if (msg == 'NO'){
                $('#login_form #alert-msg1').html('<div class="alert alert-danger text-center">Invalid Email-ID or Password!</div>');
            }
            else{
                $('#login_form #alert-msg1').html('<div class="alert alert-danger">' + msg + '</div>');
            }
        }
    });
    return false;
});
//login form submit after validation end//

//forgot_password_form submit after validation start//
$(document).on("submit", "#forgot_password_form", function(e){
    $.ajax({
        url : $(this).attr('action'),
        type: 'POST',
        data: new FormData(this),
        processData: false,
        contentType: false,
        beforeSend: function(){
            $('#forgot_password_form .go_btn button').hide();
            $("#forgot_password_form #login_loader").show();
        },
        complete: function(){
            $("#forgot_password_form #login_loader").hide();
            $('#forgot_password_form .go_btn button').show();
        },
        success: function(msg) {
            if (msg == 'mail_sent'){
                $('#forgot_password_form #alert-msg2').html('<div class="alert alert-success text-center">Check your email for instructions, thank you!</div>');
            }
            else if (msg == 'mail_not_sent'){
                $('#forgot_password_form #alert-msg2').html('<div class="alert alert-danger text-center">Email was not sent, please try again..!</div>');
            }
            else if (msg == 'no_email'){
                $('#forgot_password_form #alert-msg2').html('<div class="alert alert-danger text-center">Your email is not in our database.</div>');
            }
        }
    });
    return false;
});
//forgot_password_form submit after validation end//

//forgot_password_form submit after validation start//
$(document).on("submit", "#change_password_form", function(e){
    $.ajax({
        url : $(this).attr('action'),
        type: 'POST',
        data: new FormData(this),
        processData: false,
        contentType: false,
        beforeSend: function(){
            $('#change_password_form .go_btn button').hide();
            $("#change_password_form #login_loader").show();
        },
        complete: function(){
            $("#change_password_form #login_loader").hide();
            $('#change_password_form .go_btn button').show();
        },
        success: function(msg) {
            if (msg == 'changed'){
                $('#change_password_form #alert-msg3').html('<div class="alert alert-success text-center">Your password successfully Changed!</div>');
            }
            else if (msg == 'notchanged'){
                $('#change_password_form #alert-msg3').html('<div class="alert alert-danger text-center">Sorry! Check your email is correct..</div>');
            }
        }
    });
    return false;
});
//forgot_password_form submit after validation end//
//movie ticket tx form submit start//
$(document).on("submit", "#movie_ticket_form", function(e){
    $.ajax({
        url : $(this).attr('action'),
        type: 'POST',
        data: new FormData(this),
        processData: false,
        contentType: false,
        beforeSend: function(){
            $('#movie_ticket_form .go_btn button').hide();
            $("#movie_ticket_form #login_loader").show();
        },
        complete: function(){
            $("#movie_ticket_form #login_loader").hide();
            $('#movie_ticket_form .go_btn button').show();
        },
        success: function(msg) {
            if (msg == 'mail_sent'){
                window.location.href = path+"home/re_view_all_tx";
            }
            else if (msg == 'mail_not_sent'){
                $('#movie_ticket_form #alert-msg6').html('<div class="alert alert-danger text-center">Sorry! Error occured! Please Try again.</div>');
            }else{
                $('#movie_ticket_form #alert-msg6').html('<div class="alert alert-danger text-center">' + msg + '</div>');
            }
        }
    });
    return false;
});
//movie ticket tx form submit end//

//movie ticket tx form update submit start//
$(document).on("submit", "#movie_ticket_form_update", function(e){
    $.ajax({
        url : $(this).attr('action'),
        type: 'POST',
        data: new FormData(this),
        processData: false,
        contentType: false,
        beforeSend: function(){
            $('#movie_ticket_form_update .go_btn button').hide();
            $("#movie_ticket_form_update #login_loader").show();
        },
        complete: function(){
            $("#movie_ticket_form_update #login_loader").hide();
            $('#movie_ticket_form_update .go_btn button').show();
        },
        success: function(msg) {
            if (msg == 'mail_sent'){
                window.location.href = path+"home/re_view_all_tx";
            }
            else if (msg == 'mail_not_sent'){
                $('#movie_ticket_form_update #alert-msg6').html('<div class="alert alert-danger text-center">Sorry! Error occured! Please Try again.</div>');
            }else{
                $('#movie_ticket_form_update #alert-msg6').html('<div class="alert alert-danger text-center">' + msg + '</div>');
            }
        }
    });
    return false;
});
//movie ticket tx form update submit end//

//cancel tx form submit after validation start//
$(document).on("submit", "#cancel_form", function(e){
    $.ajax({
        url : $(this).attr('action'),
        type: 'POST',
        data: new FormData(this),
        processData: false,
        contentType: false,
        /*beforeSend: function(){
            $('#cancel_form .go_btn button').hide();
            $("#cancel_form #login_loader").show();
        },
        complete: function(){
            $("#cancel_form #login_loader").hide();
            $('#cancel_form .go_btn button').show();
        },*/
        success: function(msg) {
            if (msg == 'mail_sent'){
                window.location.href = path+"home/user";
            }
            else if (msg == 'mail_not_sent'){
                $('#cancel_form #alert-msg').html('<div class="alert alert-danger text-center">Your transaction Cancelled. But Confirmation mail not sent to you..</div>');
            }
            else{
                $('#cancel_form #alert-msg').html('<div class="alert alert-danger">' + msg + '</div>');
            }
        }
    });
    return false;
});
//cancel tx form submit after validation end//

//req form submit after validation start//
$(document).on("submit", "#req_form", function(e){
    $.ajax({
        url : $(this).attr('action'),
        type: 'POST',
        data: new FormData(this),
        processData: false,
        contentType: false,
        /*beforeSend: function(){
            $('#req_form .go_btn button').hide();
            $("#req_form #login_loader").show();
        },
        complete: function(){
            $("#req_form #login_loader").hide();
            $('#req_form .go_btn button').show();
        },*/
        success: function(msg) {
            if (msg == 'mail_sent'){
                window.location.href = path+"home/req_sent";
            }
            else if (msg == 'mail_not_sent'){
                $('#req_form #alert-msg').html('<div class="alert alert-danger text-center">Sorry Unexpected Error occured. Please Try Again..</div>');
            }
            else{
                $('#req_form #alert-msg').html('<div class="alert alert-danger">' + msg + '</div>');
            }
        }
    });
    return false;
});
//req form submit after validation end//
$(document).ready(function(){
    $('.catagory_list').hide();
    $('#trans_cat').on('change', function() {
        var show = $(this).val();
        $('.catagory_list').hide(function(){
            $(this).fadeOut(100);
        });

        $("#"+show).show(function(){
             $(this).fadeIn(100);
        });
    });
});

jQuery(document).ready(function($) {
    $(".clickable-row").click(function() {
        window.document.location = $(this).data("href");
    });
});

$(function() {
    $('.pop').on('click', function() {
        $('.imagepreview').attr('src', $(this).data('img'));
        $('#imagemodal').modal('show');
    });
});

function show_forgot_password_form(){
    $('.login_form_view').hide();
    $('.forgot_password_form').show();
}

function show_login_form(){
    $('.forgot_password_form').hide();
    $('.login_form_view').show();
}
$(document).ready(function() {

$.validate({
    form : '#register_form, #login_form, #forgot_password_form, #change_password_form, #movie_ticket_form, #movie_ticket_form_update, #cancel_form, #req_form',
    modules : 'security, file, html5, logic, sanitize, toggleDisabled',
    toggleDisabledForm : '#register_form, #login_form, #forgot_password_form, #change_password_form, #movie_ticket_form',
    showErrorDialogs : true,
});
});



/*
//when document is ready
$(document).ready(function() {
    //center the all popup modal
    function centerModal() {
        $(this).css('display', 'block');
        var $dialog = $(this).find(".modalm");
        var offset = Math.max(0, ($(window).height() - $dialog.height()) / 2);
        // Applying the top margin on modal dialog to align it vertically center
        $dialog.css("margin-top", offset);
    }
    // Align modal when it is displayed
    //$('.modalm').on('show.bs.modal', centerModal);
    $('.modalm').on('show.bs.modal', centerModal);
    //Align modal when user resize the window
    $(window).on("resize", function() {
        $('.modalm:visible').each(centerModal);
    });
    //center the all popup modal end

//============clear form fields on close modal==============start//
$('.modal').on('hidden.bs.modal', function (e) {
  $(this)
    .find("input,textarea,select")
       .val('')
       .end()
    .find("input[type=checkbox], input[type=radio]")
       .prop("checked", "")
       .end();
});
//============clear form fields on close modal==============end//
});
*/


//image delete start
$(document).on("click", "#del", function(){
    var tx_id = $(this).data("id");
    var tx_img = $(this).data("img");

    $(this).parents('#remove').fadeOut();

    $.ajax({
        url : $(this).data('url'),
        type: 'POST',
        ataType: 'json',
        data: 'tx_id='+tx_id+'&tx_img='+tx_img,
        success: function(msg) {
            if (msg == 'ok')
            {
                //$(this).parents('#remove').fadeOut();
            }
            else if (msg == 'not_deleted')
            {
                alert("Image Can't Not be Deleted");
            }
            else
            {
                alert(msg);
            }
        }
    });
    return false;
});
//image delete end
// Align modal when it is displayed
$('.modal').on('show.bs.modal', centerModal);
//Align modal when user resize the window
$(window).on("resize", function() {
    $('.modal:visible').each(centerModal);
});
//center the all popup modal end

function centerModal() {

            $(this).css('display', 'block');
            var $dialog = $(this).find(".modal-dialog");
            var offset = Math.max(0, ($(window).height() - $dialog.height()) / 2);
            // Applying the top margin on modal dialog to align it vertically center
            $dialog.css("margin-top", offset);
        };

  $(document).ready(function() {
    // Align modal when it is displayed
    $('.modal').on('show.bs.modal', centerModal);
    //Align modal when user resize the window
    $(window).on("resize", function() {
        $('.modal:visible').each(centerModal);
    });
    //center the all popup modal end
});
//============clear form fields on close modal==============start//
$('.modal').on('hidden.bs.modal', function (e) {
  $(this)
    .find("input,textarea,select")
       .val('')
       .removeClass('error')
       .css("border-color", "#fff")
       .end()
   .find(".help-block").remove().end()
   .find("label").removeClass('active').end()
   .find("i").removeClass('active').end()
   .find(".alert").remove().end()
	.find("input[type=checkbox], input[type=radio]")
       .prop("checked", "")
       .end();
});

/*
$('.modal').on('show.bs.modal', function () {
	$(this).find('.modal-dialog').css({
		width:'auto', //probably not needed
		height:'auto', //probably not needed
		'max-height':'100%'
	});
});
*/
$(document).ready(function() {

$("#movie_ticket_form input#purchase_value").change(function(){
  var amt = $("#movie_ticket_form input#purchase_value").val();
  var payee = $("#movie_ticket_form select#yscrow_payer :selected").val();
if(!(isNaN(amt))){
  yscrow_fee_calc(amt,payee);
}else if(isNaN(amt)){
  $("#yscrow_fee_data").remove();
}
});

$("#movie_ticket_form select#yscrow_payer").change(function(){
  var amt = $("#movie_ticket_form input#purchase_value").val();
  var payee = $("#movie_ticket_form select#yscrow_payer :selected").val();
  yscrow_fee_calc(amt,payee);
});

/* ---------------------*/

$("#movie_ticket_form_update input#purchase_value").change(function(){
  var amt = $("#movie_ticket_form_update input#purchase_value").val();
  var payee = $("#movie_ticket_form_update select#yscrow_payer :selected").val();
if(!(isNaN(amt))){
  yscrow_fee_calc(amt,payee);
}else if(isNaN(amt)){
  $("#yscrow_fee_data").remove();
}
});

$("#movie_ticket_form_update select#yscrow_payer").change(function(){
  var amt = $("#movie_ticket_form_update input#purchase_value").val();
  var payee = $("#movie_ticket_form_update select#yscrow_payer :selected").val();
  yscrow_fee_calc(amt,payee);
});
});

function yscrow_fee_calc(amt,payee){
var amt  = parseInt(amt);
if(payee == "buyer"){
  yscrow_fee_by = "buyer";
  buyer_amt = amt + (8/100)*amt;
  seller_amt = amt;
  yscrow_fee = (8/100)*amt;
}
if(payee == "provider"){
  yscrow_fee_by = "provider";
  buyer_amt = amt;
  seller_amt = amt - (8/100)*amt;
  yscrow_fee = (8/100)*amt;
}
if(payee == "both"){
  yscrow_fee_by = "both";
  buyer_amt = amt + (4/100)*amt;
  seller_amt = amt - (4/100)*amt;
  yscrow_fee = (8/100)*amt;
}

  $(".yscrow_fee").html('<div id="yscrow_fee_data"><input type="hidden" id="yscrow_fee_by" name="yscrow_fee_by" value="'+yscrow_fee_by+'"><input type="hidden" id="buyer_amt" name="buyer_amt" value="'+buyer_amt+'"><input type="hidden" id="seller_amt" name="seller_amt" value="'+seller_amt+'"><input type="hidden" id="yscrow_fee" name="yscrow_fee" value="'+yscrow_fee+'"><div class="input-field col m6">Buyer pay :'+buyer_amt+'</div><div class="input-field col m6">Seller Get Pay :'+seller_amt+'</div></div>')
}

$(document).ready(function(){
  //$("select#pay_terms").hide();
  $("#pay_terms").change(function(){
    var currentVal = $(this).val();
    if(currentVal == "other"){
      $("#pay_terms_custom_outer").html('<div class="input-field col s12" id="pay_terms_custom_inner"><?php echo form_error("pay_terms_custom"); ?> <i class="material-icons prefix"><i class="fa fa-comments" aria-hidden="true"></i></i><textarea id="pay_terms_custom" name="pay_terms_custom" class="materialize-textarea" data-validation="required" data-validation-error-msg-required="Please Mention Payment Release Terms"></textarea> <label for="pay_terms_custom">Enter your Payment Release Terms</label> </div>');
    }
    else
      $("#pay_terms_custom_inner").remove();
  });
});
$(document).ready(function() {
$(function() {
    $('.zoom img').zoomify();

    $('#movie_doc').filer({
       changeInput: true,
       showThumbs: true,
       addMore: true
    });

});
});
