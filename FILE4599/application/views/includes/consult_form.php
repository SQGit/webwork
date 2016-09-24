    <!-- contact form start -->
    <section class="floating-form" id="floating-form">
        <button type="button" class="btn btn-primary floating-opener"><i class="fa fa-hand-o-right" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;FREE CONSULTATION</button>        
        <div id="contact_results" class="text-xs-center"></div>
        <h3 class="floating-form-heading">Free Consultation</h3>

        <div id="contact_body">
            <form method="POST" action="<?php echo base_url().'main/enquiry'?>" id="enquiry_form">
            <div class="md-form">
                <i class="fa fa-user prefix"></i>
                <input type="text" class="form-control validate" id="nq_name" name="nq_name">
                <label for="nq_name">Name</label>
            </div>

            <div class="md-form">
                <i class="fa fa-location-arrow prefix"></i>
                <input type="text" id="nq_city" name="nq_city" class="form-control validate">
                <label for="nq_city">City of Ticket</label>
            </div>

            <div class="md-form">
                <i class="fa fa-envelope prefix"></i>
                <input type="email" id="nq_email" name="nq_email" class="form-control validate">
                <label for="nq_email">Email</label>
            </div>

            <div class="md-form">
                <i class="fa fa-phone prefix"></i>
                <input type="text" id="nq_phone" name="nq_phone" class="form-control validate">
                <label for="nq_phone">Phone</label>
            </div>

            <div class="input-field">
            <i class="fa fa-ticket prefix"></i>       
              <select id="nq_ticket" name="nq_ticket">
                  <option value="" disabled selected>Choose your Ticket</option>
                  <?php foreach($ticket_points as $ticket_point) { ?>
                    <option value="<?php echo $ticket_point->point_name; ?>"><?php echo $ticket_point->point_name; ?></option>
                   <?php } ?>
              </select> 
              <label for="nq_ticket">Ticket</label>           
            </div>
           
            <div class="md-form">
                <i class="fa fa-comment prefix"></i>
                <textarea type="text" id="nq_desc" name="nq_desc" class="md-textarea"></textarea>
                <label for="nq_desc">Brief Description</label>
            </div>
            
            <div class="text-xs-center">
                <button type="submit" class="btn btn-primary"><i class="fa fa-hand-o-right" aria-hidden="true"></i>&nbsp;SUBMIT</button>
            </div>
            </form>
        </div>
    </section>
    <!-- contact form end -->
