<div class="movie_ticket_form">
     <div class="col-md-offset-2 col-md-8 form">
       <div class="row">
       <?php echo validation_errors('<p class="error">'); ?>
          <?php echo form_open_multipart('home/movie_form_submit', 'id="movie_ticket_form"'); ?>
           <input type="hidden" id="category" name="category" value="<?=$category?>">
           <input type="hidden" id="user_role" name="user_role" value="<?=$role?>">
           <input type="hidden" id="user_email" name="user_email" value="<?=$email?>">
           <?php
           if($role == 'buyer')
           { ?>
             <input type="hidden" id="buyer_email" name="buyer_email" value="<?=$email?>">
           <?php }
           else if($role == 'provider')
           { ?>
             <input type="hidden" id="provider_email" name="provider_email" value="<?=$email?>">
           <?php } ?>

           <div class="row">
             <div class="input-field col s12 m6 l6">
               <?php echo form_error('tr_name'); ?>
               <i class="material-icons prefix"><i class="fa fa-exchange" aria-hidden="true"></i></i>
               <input id="tr_name" name="tr_name" type="text" class="validate" data-validation="required length custom" data-validation-length="min4" data-validation-regexp="^([A-Za-z ]+)$" data-validation-error-msg-required="Transaction Name required">
               <label for="tr_name">Transaction Name</label>
             </div>
             <div class="input-field col s12 m6 l6">
               <?php echo form_error('provider_email'); ?>
               <i class="material-icons prefix"><i class="fa fa-envelope-o" aria-hidden="true"></i></i>
               <?php
               if($role == 'buyer')
               { ?>
               <input id="provider_email" name="provider_email" type="email" class="validate" data-validation="required email server" data-validation-url="<?php echo base_url().'home/buyer_provider_match'?>" data-validation-error-msg-required="Email required"  data-validation-error-msg-email="Provide valid email address" required>
               <label for="provider_email">Provider's Email Address</label>
               <?php }
               else if($role == 'provider')
               {?>
               <input id="buyer_email" name="buyer_email" type="email" class="validate" data-validation="required email server" data-validation-url="<?php echo base_url().'home/buyer_provider_match'?>" data-validation-error-msg-required="Email required"  data-validation-error-msg-email="Provide valid email address" required>
               <label for="buyer_email">Buyer Email Address</label>
              <?php } ?>
             </div>
           </div>

           <div class="row">
             <div class="input-field col s12 m6 l6">
               <?php echo form_error('movie_name'); ?>
               <i class="material-icons prefix"><i class="fa fa-film" aria-hidden="true"></i></i>
               <input id="movie_name" name="movie_name" type="text" class="validate" data-validation="required length" data-validation-length="min1" data-validation-error-msg-required="Movie Name required">
               <label for="movie_name">Movie Name</label>
             </div>
             <div class="input-field col s12 m3 l3">
               <?php echo form_error('show_date'); ?>
               <i class="material-icons prefix"><i class="fa fa-calendar" aria-hidden="true"></i></i>
               <input id="show_date" name="show_date" class="datepicker" type="text" class="validate" data-validation="required" data-validation-error-msg-required="Show date required" required>
               <label for="show_date">Show Date</label>
             </div>
             <!--<div class="input-field col s12 m3 l3">
               <?php echo form_error('show_time'); ?>
               <i class="material-icons prefix"><i class="fa fa-clock-o" aria-hidden="true"></i></i>
               <input id="show_time" name="show_time" class="timepicker" type="text" class="validate" data-validation="required" data-validation-error-msg-required="Show Time required" required>
               <label for="show_time">Show Time</label>
             </div>-->

             <div class="input-field col s12 m3 l3">
               <?php echo form_error('show_time'); ?>
               <i class="material-icons prefix"><i class="fa fa-clock-o" aria-hidden="true"></i></i>
               <input type="text" id="show_time" name="show_time" class="timepicker form-control" class="validate" data-validation="required" data-validation-error-msg-required="Show Time required" required>
               <label for="show_time">Show Time</label>
             </div>
            <!-- <div class="input-field col s12 m3 l3">
               <?php echo form_error('show_time'); ?>
               <i class="material-icons prefix"><i class="fa fa-clock-o" aria-hidden="true"></i></i>
               <input id="show_time" name="show_time" class="timepicker" type="text" class="validate" data-validation="required time" data-validation-error-msg-required="Show Time required" required>
               <label for="show_time">Show Time</label>
             </div> -->
           </div>

           <!--<div class="row">
             <div class="input-field col s12">
               <?php echo form_error('theatre_name'); ?>
               <i class="material-icons prefix"><i class="fa fa-film" aria-hidden="true"></i></i>
               <input id="theatre_name" name="theatre_name" type="text" class="validate" class="validate" data-validation="required length" data-validation-length="min1" data-validation-error-msg-required="Theatre Name & Location required">
               <label for="theatre_name">Theatre Name & Location</label>
             </div>
           </div>-->
           <div class="row">
           <div class="input-field col s12 select_box">
             <?php echo form_error('theatre_name'); ?>
             <i class="material-icons prefix"><i class="fa fa-film" aria-hidden="true"></i></i>
               <select id="theatre_name" name="theatre_name" data-validation="required" data-validation-error-msg-required="Please select">
                   <option value="" selected>---</option>
                   <option value="Sathyam Cinemas">Sathyam Cinemas</option>
                   <option value="Luxe Cinemas">Luxe Cinemas</option>
                   <option value="Escape Multiplex"> Escape Multiplex</option>
                   <option value="PVR Cinemas">PVR Cinemas</option>
                   <option value="AGS Cinemas">AGS Cinemas</option>
                   <option value="Devi Multiplex">Devi Multiplex</option>
                   <option value="Mayajaal Multiplex">Mayajaal Multiplex</option>
                   <option value="Abirami Multiplex">Abirami Multiplex</option>
                   <option value="Sangam Multiplex">Sangam Multiplex</option>
                   <option value="INOX Chennai">INOX Chennai</option>
               </select>
               <label>Theatre Name & Location</label>
           </div>
         </div>

            <div class="row">
             <div class="file-field input-field col s12">
             <i class="material-icons prefix"><i class="fa fa-upload" aria-hidden="true"></i></i>
                 <input type="file" id="movie_doc" name="movie_doc[]" data-validation="mime size" data-validation-allowing="jpg, png" data-validation-max-size="3072kb" multiple/>
                 <!--<input type="file" id="movie_doc" name="movie_doc" data-validation="mime size required" data-validation-allowing="jpg, png" data-validation-max-size="3072kb" data-validation-error-msg-required="Upload related documents"/>
                 <div class="file-path-wrapper">
                   <input class="file-path validate" type="text" placeholder="Upload related Documents">
                 </div>-->
                 <?php echo form_error('movie_doc'); ?>
             </div>
           </div>

           <div class="row">
             <div class="input-field col s12">
               <?php echo form_error('desc'); ?>
               <i class="material-icons prefix"><i class="fa fa-comments" aria-hidden="true"></i></i>
               <textarea id="desc" name="desc" class="materialize-textarea"></textarea>
               <label for="desc">Description</label>
             </div>
           </div>
           <div class="row">
             <div class="input-field col m12 select_box">
               <?php echo form_error('pay_terms'); ?>
               <i class="material-icons prefix"><i class="fa fa-credit-card" aria-hidden="true"></i></i>
                 <select id="pay_terms" name="pay_terms" data-validation="required" data-validation-error-msg-required="Please select">
                     <option value="Release Payment With in One Hour" selected>Release Payment With in One Hour</option>
                     <option value="Release Payment With in Two Hour">Release Payment With in Two Hour</option>
                     <option value="Release Payment after Buyer confirmed">Release Payment after Buyer confirmed</option>
                     <option value="other">Other(write your own terms)</option>
                 </select>
                 <label>Payment Release Terms</label>
             </div>
             <div id="pay_terms_custom_outer">
             <!--<div class="input-field col s12" id="pay_terms_custom_inner">
               <?php echo form_error('pay_terms_custom'); ?>
               <i class="material-icons prefix"><i class="fa fa-comments" aria-hidden="true"></i></i>
               <textarea id="pay_terms_custom" name="pay_terms_custom" class="materialize-textarea" data-validation="required" data-validation-error-msg-required="Please Mention Payment Release Terms"></textarea>
               <label for="pay_terms_custom">Enter your Payment Release Terms</label>
             </div>-->
           </div>
           </div>

           <div class="row">
             <div class="input-field col m6">
               <?php echo form_error('purchase_value'); ?>
               <i class="material-icons prefix"><i class="fa fa-credit-card" aria-hidden="true"></i></i>
               <input id="purchase_value" name="purchase_value" type="text" class="validate" data-validation="custom" data-validation-regexp="^([0-9]+)$" data-validation="required" data-validation-error-msg-required="Please Mention Transaction Value">
               <label for="purchase_value">Purchase Value</label>
             </div>

             <div class="input-field col m6 select_box">
               <?php echo form_error('yscrow_payer'); ?>
               <i class="material-icons prefix"><i class="fa fa-credit-card" aria-hidden="true"></i></i>
                 <select id="yscrow_payer" name="yscrow_payer" data-validation="required" data-validation-error-msg-required="Please select">
                     <option value="buyer">Buyer</option>
                     <option value="provider">Seller</option>
                     <option value="both" selected>Buyer &amp; Seller</option>
                 </select>
                 <label>Who will pay Yscrow Fee?</label>
             </div>
           </div>

           <div class="row yscrow_fee">
             <!--<div>
               <div class="input-field col m6">
                  Buyer Will pay :
               </div>
               <div class="input-field col m6">
                  Seller Get paid :
                </div>
             </div>-->
           </div>

           <div class="row">
             <div class="input-field col s12 terms">
               <?php echo form_error('terms'); ?>
               <input type="checkbox" id="terms" name="terms" data-validation="required" data-validation-error-msg="You have to agree to our terms"/>
               <label for="terms"> I agree to the terms of use and yscrow instructions.</label>
             </div>
           </div>
           <div id="alert-msg6"></div>
           <div class="row">
               <div class="col s12 go_btn text-center" style="margin-top:45px;">
                 <!--<a href="<?php echo base_url().'/home/load_ct_form'?>"><img src="<?php echo base_url().'assets/img/logout.png'?>" alt="Submit" width="48" height="48"/></a>-->
                 <button type="submit" class="" value=""><img src="<?php echo base_url().'assets/img/logout.png'?>" alt="Submit" width="48" height="48"/></button>
                 <div id="login_loader" style="display:none;">
                     <xml version="1.0" encoding="utf-8"/>
                     <svg width='70px' height='70px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-ripple"><rect x="0" y="0" width="100" height="100" fill="none" class="bk"></rect><g> <animate attributeName="opacity" dur="2s" repeatCount="indefinite" begin="0s" keyTimes="0;0.33;1" values="1;1;0"></animate><circle cx="50" cy="50" r="40" stroke="#afafb7" fill="none" stroke-width="6" stroke-linecap="round"><animate attributeName="r" dur="2s" repeatCount="indefinite" begin="0s" keyTimes="0;0.33;1" values="0;22;44"></animate></circle></g><g><animate attributeName="opacity" dur="2s" repeatCount="indefinite" begin="1s" keyTimes="0;0.33;1" values="1;1;0"></animate><circle cx="50" cy="50" r="40" stroke="#5cffd6" fill="none" stroke-width="6" stroke-linecap="round"><animate attributeName="r" dur="2s" repeatCount="indefinite" begin="1s" keyTimes="0;0.33;1" values="0;22;44"></animate></circle></g></svg>
                 </div>
               </div>
           </div>
         </form>

       </div>

     </div>
     </div><!-- sect3 -->
     </div><!-- sect -->
     </div><!-- content -->
     </div><!--/.page-container-->

         <script type="text/javascript">
               $('.timepicker').wickedpicker({twentyFour: false});
           </script>
</body>
</html>
