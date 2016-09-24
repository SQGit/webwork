
$(document).ready(function() {


$('.payment_link').on('click', function() {
    var current = $(this);
	var link = $(this).data("href");
	var id = $(this).data("id");
    

    $.ajax({
                url : link,
                type: 'POST',
                data: 'tickt_id='+id,                
                dataType:'JSON',
                /*beforeSend: function(){
                   
                },                
                complete: function(){
                                  
                },*/
                success: function(result) { 
                	if (msg == 'mail_sent')
            			{
            			    alert("Link sent to Customer");
            			}
            			else if (msg == 'mail_not_send')
            			{
            			    alert("Sorry! Unexpected Error.");
            			}            

                }


    });


});

});