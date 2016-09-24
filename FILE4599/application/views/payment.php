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
            <div class="col-md-12">
                <h4>Thank you for your Submission</h4>
                <p>We have received your information and will be in touch sortly</p> 
                <p>Please use our secure checkout to pay us</p>
            </div>
            <?php foreach($ticket_details as $ticket_detail) ?>
            <h4>You have to pay CAD <?php echo $ticket_detail->amount; ?></h4>
            <br/>            
            <div class="col-sm-12 text-xs-center">
                <a href="<?php echo base_url().'main/pay_now/'.$ticket_detail->ticket_id; ?>"><button type="button" class="btn btn-amber">Pay Now</button></a>
            </div>
        </div>
    </div>
</section>