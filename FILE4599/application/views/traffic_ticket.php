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
                            <p class="wow fadeInLeft" data-wow-delay="0.4s">Avoid waiting in Line<br/>Let Get Legal Help File Your Ticket in min..</p>
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
<section class="file_ticket">
        <div class="container">
            <div>
                <h3>File Your Traffic Ticket</h3>
                <hr/>
                <div class="ticket-note">
                    <h4>Please Note:</h4>
                        <h5 id="date_error">Traffic Tickets MUST be less than 30 days old.</h5>
                        <br/>
                        <p>The issue date of your City Of Toronto Traffic Ticket must be less than 30 days. If you received your Traffic Ticket more than 30 days ago, we are unable to file it through our website, sorry!</p>
                </div>
                
                <div class="ticket-date">
                    Please Enter your Traffic Ticket Offence Date:
                    <form>
                    <div class="row">
                        <div class="col-md-offset-3 col-md-6">
                            <div class="md-form">
                                <input type="text" id="date" class="datepicker" class="form-control" placeholder="Please Enter your Ticket Offence Date">
                            </div>
                        </div>
                    </div>
                    </form>
                </div>

            </div>      
        </div>
    </section>

<section class="ticket_form slideDown">
    <div class="container">
    <br><br>
    <form class="form-horizontal form" id="file_ticket" method="POST" action="traffic_tkt">
      <div class="col-md-10 col-md-offset-1">    
       <!-- Progress Bar -->
        <div class="progress progress-success progress-striped progress-animated">
          <div aria-valuemax="100" aria-valuemin="0" role="progressbar" class="progress" style="width: 0%;">0%</div>
        </div>
        <!--
        <progress class="progress progress-success progress-striped progress-animated" value="0" max="100"></progress>
        -->
        <div class="row box">
            <div class="step slideLeft">
            <h4>Step 1 <a type="button" style="font-size:14px;" data-toggle="modal" data-target="#traffic_ticket">(Click here to see sample form)</a></h4>
            <input type="hidden" id="ticket_name" name="ticket_name" value="Traffic Ticket">
            <input type="hidden" name="offence_date" class="form-control" id="offence_date" placeholder="OFFENCE DATE" readonly="readonly">
                <div class="field_group">
                  <div class="form-group">                    
                    <div class="col-sm-6">
                      <input type="text" name="offence_number" class="form-control" id="offence_number" placeholder="OFFENCE NUMBER">
                    </div>
                  </div>

                  <div class="form-group">                    
                    <div class="col-sm-6">
                      <input type="text" name="icon" class="form-control" id="icon" placeholder="CIRCLE ICON NUMBER ">
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="col-sm-12">
                      <input type="text" name="address" class="form-control" id="address" placeholder="ADDRESS">
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="col-sm-12">
                      <input type="text" name="defendant_name" class="form-control" id="defendant_name" placeholder="DEFENDANT NAME">
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="col-sm-6">
                      <input type="text" name="suite" class="form-control" id="suite" placeholder="APT./APP.">
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="col-sm-6">
                      <input type="text" name="municipality" class="form-control" id="municipality" placeholder="MUNICIPALITY">
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="col-sm-6">
                      <input type="text" name="province" class="form-control" id="province" placeholder="PROVINCE">
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="col-sm-6">
                      <input type="text" name="postal_code" class="form-control" id="postal_code" placeholder="POSTAL CODE">
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="col-sm-6">
                      <input type="text" name="phone" class="form-control" id="phone" placeholder="DAYTIME TELEPHONE NUMBER">
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="col-sm-6">
                      <input type="email" name="email" class="form-control" id="email" placeholder="EMAIL">
                    </div>
                  </div>
                </div>
            </div><!--/.step1 -->

            <div class="step slideLeft">
            <h4>step 2 <a type="button" style="font-size:14px;" data-toggle="modal" data-target="#traffic_ticket">(Click here to see sample form)</a></h4>
            <div class="field_group">
            <p>FOR ANY OFFENCE EXCEPT s.s. 144(18.1) OF THE HTA COMPLETE THIS SECTION:</p>
            <p>I intend to challenge the Provincial Offences Officer’s evidence. I request that the officer attend the trial</p>
            <div class="form-inline">
                <fieldset class="form-group">
                    <input name="offence_accept" type="radio" class="with-gap" id="radio21" value="0">
                    <label for="radio21">No</label>
                </fieldset>
            
                <fieldset class="form-group">
                    <input name="offence_accept" type="radio" class="with-gap" id="radio22" value="1" checked="checked">
                    <label for="radio22">Yes</label>
                </fieldset>
            </div>
            </div>

            <div class="field_group">
            <fieldset class="form-group">
                <input type="checkbox" class="filled-in" name="trial_lang" id="trial_lang" value="1">
                <label for="trial_lang">I intend to appear in court to enter a plea at the time and place set for the trial and I wish that it be held in the English language</label>
            </fieldset>            

            <p>I request a</p>
            <div class="md-form input-group">
                <input type="text" name="trial_lang_ip" class="form-control" id="trial_lang_ip" placeholder="I request a" aria-describedby="basic-addon2">
                <span class="input-group-addon" id="basic-addon2"> language Interpreter</span>
            </div>
            </div>   

            <div class="field_group">    
            <div class="col-sm-6">
            <div class="md-form input-group">            
                <span class="input-group-addon" id="basic-addon2">SIGNATURE</span>
                <input type="text" name="sign" class="form-control" id="sign" placeholder="SIGNATURE OF DEFENDANT OR AGENT" aria-describedby="basic-addon2">
            </div>
            </div>

            <div class="col-sm-6">
            <div class="md-form input-group">            
                <span class="input-group-addon" id="basic-addon2">Date</span>
                <input type="text" class="form-control" placeholder="Current Date" aria-describedby="basic-addon2">
            </div>
            </div>
            </div>

            </div><!--/.step2-->

            <div class="row">
              <div class="col-sm-12 action_btn">
                  <div class="pull-right">
                    <button type="button" class="action btn btn-amber text-capitalize back">Back</button>
                    <button type="button" class="action btn btn-amber text-capitalize next">Next</button>
                    <button type="submit" class="action btn btn-amber text-capitalize submit">File This Ticket</button>
                  </div>
              </div>
            </div>          

        </div>
        
      </div> 
    </form> 
   </div>
</section>

<!-- Modal -->
  <div class="modal fade" id="traffic_ticket" role="dialog" style="z-index:99999;">
    <div class="modal-dialog" style="width:860px;">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title" style="text-align:center;">Sample Traffic Ticket Form</h4>
        </div>
        <div class="modal-body">
          <img src="<?php echo base_url().'assets/img/traffic_ticket.png' ?>" alt="sample traffic ticket" />
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      
    </div>
  </div>