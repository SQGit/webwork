
$(document).ready(function() {

//=========== scroll event for note section show and hidden ===============
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 100) {
            jQuery('.note').fadeIn();
        } else {
            jQuery('.note').fadeOut();
        }
    });

//=========== services page vertical tab init ================
    $('#parentVerticalTab').easyResponsiveTabs({
        type: 'vertical', //Types: default, vertical, accordion
        width: 'auto', //auto or any width like 600px
        fit: true, // 100% fit in a container
        closed: 'accordion', // Start closed if in accordion view
        tabidentify: 'hor_1', // The tab groups identifier
        activate: function(event) { // Callback function if tab is switched
            var $tab = $(this);
            var $info = $('#nested-tabInfo2');
            var $name = $('span', $info);
            $name.text($tab.text());
            $info.show();
        }
    });

});//$(document).ready(function() end


// ============ material select init ============
$(document).ready(function() {

    $('select').material_select();
  
});


//=========== floating form controller ================
var floatbox = $("#floating-form");    
var floatbox_opener = $(".floating-opener");
floatbox.css("right", "-250px"); //initial contact form position] 
//Contact form Opener Closer button
floatbox_opener.click(function(){        
    if (floatbox.hasClass('visiable'))
    {
        floatbox.animate({"right":"-250px"}, {duration: 300}).removeClass('visiable');
    }
    else
    {
       floatbox.animate({"right":"0px"}, {duration: 300}).addClass('visiable');
    }
});



$(document).ready(function(){
//=========== floating enquiry form submit ============
    $(document).on("submit", "#enquiry_form", function(e){  
    
        $(this).validate({ // initialize plugin
            errorPlacement: function(error, element) {
            // Append error within linked label
            $( element )
                .closest( "form" )
                    .find( "label[for='" + element.attr( "id" ) + "']" )
                        .append( error );
        },
        errorElement: "span",
            ignore:":not(:visible)",
            rules: {
                nq_name : "required",
                nq_email : {required : true, email:true},
                nq_city  : "required",
                nq_phone : {required:true, pattern: /^[0-9]+$/},                
                nq_desc : "required",
            },
            messages:{
                nq_name:{
                    required: " (required)",
                },
                nq_email:{
                    required: " (required)",
                    email : " (Invalid Email)",
                },
                nq_city:{
                    required: " (required)",
                },
                nq_phone:{
                    required: " (required)",
                    pattern: " (Numbers only Allowed)",
                },
                nq_desc:{
                    required: " (required)",
                }
            }           
        });
        
        if($(this).valid()){
    
            $.ajax({
                url : $(this).attr('action'),
                type: $(this).attr('method'),
                data: new FormData(this),
                processData: false,
                contentType: false,
                beforeSend: function(){
                    $('#enquiry_form button').html('Submitting&nbsp;&nbsp; <i class="fa fa-spinner fa-spin" style="font-size:24px"></i>');                    
                },                
                complete: function(){
                    $('#enquiry_form button').text('SUBMIT');                    
                },
                success: function(msg) {
                    if (msg == 'mail_sent')
                    {
                        $('#enquiry_form')[0].reset(); // To reset form fields     
                        $('#contact_results').notify("Mail Successfully Sent", "success", { position:"center" });
                    }
                    else if (msg == 'mail_not_send')
                    {
                        $('#contact_results').html('<div class="alert alert-danger text-center">Error in sending mail</div>');
                    }                    
                    else
                    {
                        $('#contact_results').html('<div class="alert alert-danger">' + msg + '</div>');
                    }
                }
            });
            return false;
        }
        else
        {
            e.preventDefault();
        }
    });
});

//============ Multi step form controller =============
$(document).ready(function(){    
    var current = 1;
    
    widget      = $(".step");
    btnnext     = $(".next");
    btnback     = $(".back"); 
    btnsubmit   = $(".submit");

    // Init buttons and UI
    widget.not(':eq(0)').hide();
    hideButtons(current);
    setProgress(current);

    // Next button click action
    btnnext.click(function(){
        if(current < widget.length){
            // Check validation
            if($(".form").valid()){
                widget.show();
                widget.not(':eq('+(current++)+')').hide();
                setProgress(current);
            }
        }
        hideButtons(current);
    })

    
    // Submit button click
   /* btnsubmit.click(function(){  
 
        alert("Your Ticket Filed");
        
    });*/
    

    // Back button click action
    btnback.click(function(){
        if(current > 1){
            current = current - 2;
            if(current < widget.length){
                widget.show();
                widget.not(':eq('+(current++)+')').hide();
                setProgress(current);
            }
        }
        hideButtons(current);
    })

    $('.form').validate({ // initialize plugin
        ignore:":not(:visible)",
        rules: {
            notice_number : "required",
            email : {required : true, email:true},
            defendant_name  : "required",
            address : "required",
            city : "required",
            province  : "required",
            postal_code : {required:true, pattern: /^[A-z0-9]+$/},
            phone : {required:true, pattern: /^[0-9]+$/},

            offence_number :"required",
            municipality :"required",

            icon: "required",            
        },

        messages:{
            postal_code:{
                pattern :"AlphaNumeric only Allowed",
            },

            phone:{
                pattern: "Numbers only Allowed",
            }
        }
    });
});

// Change progress bar action
    setProgress = function(currstep){
        var percent = parseFloat(100 / widget.length) * currstep;
        percent = percent.toFixed();
        $(".progress").css("width",percent+"%").html(percent+"%");      
    }

// Hide buttons according to the current step
    hideButtons = function(current){
        var limit = parseInt(widget.length); 

        $(".action").hide();

        if(current < limit) btnnext.show();
        if(current > 1) btnback.show();
        if (current == limit) { 
            // Show entered values
            /*$(".display label.lbl").each(function(){
                $(this).html($("#"+$(this).data("id")).val());
            });*/
            btnnext.hide();
            btnsubmit.show();
        }
    }

//multi step form hide init
$(document).ready(function(){

    $(".ticket_form").hide();

});

//init data picker
$(function() {
    $( ".datepicker" ).datepicker({
        minDate: -30,
        maxDate: 0,
    });
});

//date picker date range set
$(".datepicker").change(function(){
    if($(".datepicker").val() != '')
    {
        $(".ticket_form").show();
        $('.ticket_form #offence_date').val($(".datepicker").val());
    }
    else
    {
        $(".ticket_form").hide();
        $('.ticket_form #offence_date').val('');   
    }

});

//file ticket form submit
$(document).on("submit", "#file_ticket", function(e){  
    
       
        if($(this).valid()){
    
            $.ajax({
                url : $(this).attr('action'),
                type: $(this).attr('method'),
                data: new FormData(this),
                processData: false,
                contentType: false,
                dataType:'JSON',
                beforeSend: function(){
                    $('#file_ticket button.submit').html('Submitting&nbsp;&nbsp; <i class="fa fa-spinner fa-spin" style="font-size:24px"></i>');                    
                },                
                complete: function(){
                    $('#file_ticket button.submit').text('SUBMIT');                    
                },
                success: function(result) {                    

                    var msg = result.msg;
                    var id = result.id;
                    if (msg == 'mail_sent')
                    {
                        // Redirect to payment page
                        setTimeout(function()
                        {                           
           
                            window.location.href = baseurl + 'main/payment/'+ id;

                        }, 100);

                        // alert("ok");
                        //$(this)[0].reset(); // To reset form fields

                    }
                    else if (msg == 'mail_not_send')
                    {
                        $('#file_ticket button.submit').notify("Ticket Not Filed, Please Try Again", "error");
                    }                    
                }
            });
            return false;
        }
        else
        {
            e.preventDefault();
        }
    });