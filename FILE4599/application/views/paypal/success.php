<!--Mask-->
    <div class="about view hm-black-strong">
        <div class="full-bg-img flex-center">
            <div class="container">
                <div class="row" id="home">
                    <!--First column-->
                    <div class="col-sm-12">
                        <div class="description text-xs-center">
                            <h2 class="h2-responsive wow fadeInLeft">File4599.com</h2>
                            <hr class="hr-dark">
                            <p class="wow fadeInLeft" data-wow-delay="0.4s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi fuga nesciunt dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea dolor molestiae, quisquam iste, maiores. Nulla.</p>
                            <br>
                            <a class="btn btn-ptc wow fadeInLeft" data-wow-delay="0.7s"></a>
                        </div>
                    </div>
                    <!--/.First column-->
                </div>
            </div>
        </div>
    </div>
    <!--/.Mask-->

<section class="select_ticket">
<div class="container">    
<div class="row text-xs-center">

    <h2 style="font-family: 'quicksandbold'; font-size:16px; color:#313131; padding-bottom:8px;">Hi <?php echo $ticket_details['0']->customer_name; ?></h2>
    <span style="color: #646464;">Your payment was successful, Thank you for Filing Ticket.</span><br/>
    <span style="color: #646464;">Ticket Filing ID : 
      	<strong style="font:15px Arial,Helvetica,sans-serif;color:#f09"><?php echo $ticket_id; ?></strong>
  	</span><br/>
	<span style="color: #646464;">TXN ID : 
      	<strong style="font:15px Arial,Helvetica,sans-serif;color:#f09"><?php echo $txn_id; ?></strong>
  	</span><br/>
	<span style="color: #646464;">Amount Paid : 
      	<strong style="font:15px Arial,Helvetica,sans-serif;color:#f09">$<?php echo $payment_amt.' '.$currency_code; ?></strong>
  	</span><br/>
	<span style="color: #646464;">Payment Status : 
      	<strong style="font:15px Arial,Helvetica,sans-serif;color:#f09"><?php echo $status; ?></strong>
  	</span><br/>
</div>
</div>
</section>