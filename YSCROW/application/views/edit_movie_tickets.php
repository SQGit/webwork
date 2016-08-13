<?php foreach($single_tx as $tx)?>
<div class="movie_ticket_form_update">
     <div class="col-md-offset-2 col-md-8 form">
       <div class="row">
       <?php echo validation_errors('<p class="error">'); ?>
          <?php echo form_open_multipart('home/movie_ticket_form_update', 'id="movie_ticket_form_update"'); ?>
          <?php echo form_hidden('tx_id', $tx->tx_id); ?>
           <div class="row">
             <div class="input-field col s12 m6 l6">
               <?php echo form_error('tr_name'); ?>
               <i class="material-icons prefix"><i class="fa fa-exchange" aria-hidden="true"></i></i>
               <input id="tr_name" name="tr_name" type="text" class="validate" data-validation="required length custom" data-validation-length="min4" data-validation-regexp="^([A-Za-z ]+)$" data-validation-error-msg-required="Transaction Name required" value="<?php echo $tx->tr_name;?>">
               <label for="tr_name">Transaction Name</label>
             </div>

             <div class="input-field col s12 m6 l6">
               <?php echo form_error('tr_category'); ?>
               <i class="material-icons prefix"><i class="fa fa-exchange" aria-hidden="true"></i></i>
               <input readonly id="tr_category" name="tr_category" type="text" class="validate" data-validation="required" data-validation-error-msg-required="Transaction Category required" value="<?php echo $tx->tr_category;?>">
               <label for="tr_category">Transaction Category</label>
             </div>
            </div>

            <div class="row">
             <div class="input-field col s12 m6 l6">
               <?php echo form_error('provider_email'); ?>
               <i class="material-icons prefix"><i class="fa fa-envelope-o" aria-hidden="true"></i></i>
               <input <?php if($this->session->userdata('email') == $tx->seller) {
                echo "readonly"; }?> id="provider_email" name="provider_email" type="email" class="validate" data-validation="required email" data-validation-error-msg-required="Email required"  data-validation-error-msg-email="Provide valid email address" value="<?php echo $tx->seller;?>" required>
               <label for="provider_email">Provider's Email Address</label>
             </div>
             <div class="input-field col s12 m6 l6">
               <?php echo form_error('buyer_email'); ?>
               <i class="material-icons prefix"><i class="fa fa-envelope-o" aria-hidden="true"></i></i>
               <input <?php if($this->session->userdata('email') == $tx->buyer) {
                echo "readonly";} ?> id="buyer_email" name="buyer_email" type="email" class="validate" data-validation="required email" data-validation-error-msg-required="Email required"  data-validation-error-msg-email="Provide valid email address" value="<?php echo $tx->buyer;?>" required>
               <label for="buyer_email">Buyer's Email Address</label>
             </div>
           </div>

           <div class="row">
             <div class="input-field col s12 m6 l6">
               <?php echo form_error('movie_name'); ?>
               <i class="material-icons prefix"><i class="fa fa-film" aria-hidden="true"></i></i>
               <input id="movie_name" name="movie_name" type="text" class="validate" data-validation="required length" data-validation-length="min1" data-validation-error-msg-required="Movie Name required" value="<?php echo $tx->movie_name; ?>">
               <label for="movie_name">Movie Name</label>
             </div>
             <div class="input-field col s12 m3 l3">
               <?php echo form_error('show_date'); ?>
               <i class="material-icons prefix"><i class="fa fa-calendar" aria-hidden="true"></i></i>
               <input id="show_date" name="show_date" class="datepicker" type="text" class="validate" data-validation="required" data-validation-error-msg-required="Show date required" value="<?php echo $tx->show_date;?>" required>
               <label for="show_date">Show Date</label>
             </div>
             <div class="input-field col s12 m3 l3">
               <?php echo form_error('show_time'); ?>
               <i class="material-icons prefix"><i class="fa fa-clock-o" aria-hidden="true"></i></i>
               <input id="show_time" name="show_time" class="timepicker form-control" type="text" class="validate" data-validation="required" data-validation-error-msg-required="Show Time required" value="<?php echo $tx->show_time;?>" required>
               <label for="show_time">Show Time</label>
             </div>
           </div>

           <!--<div class="row">
             <div class="input-field col s12">
               <?php echo form_error('theatre_name'); ?>
               <i class="material-icons prefix"><i class="fa fa-film" aria-hidden="true"></i></i>
               <input id="theatre_name" name="theatre_name" type="text" class="validate" class="validate" data-validation="required length" data-validation-length="min1" data-validation-error-msg-required="Theatre Name & Location required" value="<?php echo $tx->theatre_name;?>">
               <label for="theatre_name">Theatre Name & Location</label>
             </div>
           </div>-->
           <div class="row">
           <div class="input-field col s12 select_box">
             <?php echo form_error('theatre_name'); ?>
             <i class="material-icons prefix"><i class="fa fa-film" aria-hidden="true"></i></i>
               <select id="theatre_name" name="theatre_name" data-validation="required" data-validation-error-msg-required="Please select">
                   <option value="Sathyam Cinemas" <?php if($tx->theatre_name == "Sathyam Cinemas"){echo "selected";}?>>Sathyam Cinemas</option>
                   <option value="Luxe Cinemas" <?php if($tx->theatre_name == "Luxe Cinemas"){echo "selected";}?>>Luxe Cinemas</option>
                   <option value="Escape Multiplex" <?php if($tx->theatre_name == "Escape Multiplex"){echo "selected";}?>> Escape Multiplex</option>
                   <option value="PVR Cinemas" <?php if($tx->theatre_name == "PVR Cinemas"){echo "selected";}?>>PVR Cinemas</option>
                   <option value="AGS Cinemas" <?php if($tx->theatre_name == "AGS Cinemas"){echo "selected";}?>>AGS Cinemas</option>
                   <option value="Devi Multiplex" <?php if($tx->theatre_name == "Devi Multiplex"){echo "selected";}?>>Devi Multiplex</option>
                   <option value="Mayajaal Multiplex" <?php if($tx->theatre_name == "Mayajaal Multiplex"){echo "selected";}?>>Mayajaal Multiplex</option>
                   <option value="Abirami Multiplex" <?php if($tx->theatre_name == "Abirami Multiplex"){echo "selected";}?>>Abirami Multiplex</option>
                   <option value="Sangam Multiplex" <?php if($tx->theatre_name == "Sangam Multiplex"){echo "selected";}?>>Sangam Multiplex</option>
                   <option value="INOX Chennai" <?php if($tx->theatre_name == "INOX Chennai"){echo "selected";}?>>INOX Chennai</option>
               </select>
               <label>Theatre Name & Location</label>
           </div>
         </div>

           <div class="row">
             <div class="input-field col s12">
                 <i class="material-icons prefix"><i class="fa fa-upload" aria-hidden="true"></i></i>
                 <input type="file" id="movie_doc" name="movie_doc[]" data-validation="mime size" data-validation-allowing="jpg, png" data-validation-max-size="3072kb" multiple/>
                 <!---<div class="file-path-wrapper">
                 <input class="file-path validate" type="text" placeholder="Upload related Documents" value="<?php foreach($single_tx_img as $tx_img){ echo $tx_img->tx_image;}?>">
                 </div>
                 <input type="file" name="files[]" id="movie_doc" multiple="multiple">-->
  <!-- image list-->
  <div class="jFiler-items jFiler-row from_db">
  <?php foreach($single_tx_img as $tx_img){ ?>
    <ul class="jFiler-items-list jFiler-items-default">
        <li id="remove" class="jFiler-item" data-jfiler-index="0" style="">
            <div class="jFiler-item-container">
                <div class="jFiler-item-inner">
                    <div class="jFiler-item-icon pull-left">
                        <div class="jFiler-item-thumb-image zoom"><img class="zoomify" draggable="false" src="<?php echo base_url().'assets/img/tr_doc/'.$tx_img->tx_image;?>">
                        </div>
                    </div>
                    <div class="jFiler-item-info pull-left">
                        <div title="<?php echo $tx_img->tx_image; ?>" class="jFiler-item-title"><?php echo $tx_img->tx_image; ?></div>
                        <div class="jFiler-item-assets">
                            <ul class="list-inline">
                                <li><a id="del" class="icon-jfi-trash jFiler-item-trash-action" data-id="<?php echo $tx_img->tx_id; ?>" data-img="<?php echo $tx_img->tx_image; ?>" data-url="<?php echo base_url().'home/delete_tx_img'; ?>" ><i class="fa fa-trash-o"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    </ul>
  <?php } ?>
  </div>
  <!-- /.image list-->
                <?php echo form_error('movie_doc');?>
             </div>
           </div>

           <div class="row">
             <div class="input-field col s12">
               <?php echo form_error('desc'); ?>
               <i class="material-icons prefix"><i class="fa fa-comments" aria-hidden="true"></i></i>
               <textarea id="desc" name="desc" class="materialize-textarea"><?php echo $tx->other_details;?></textarea>
               <label for="desc">Description</label>
             </div>
           </div>
           <div class="row">
             <div class="input-field col m12 select_box">
               <?php echo form_error('pay_terms'); ?>
               <i class="material-icons prefix"><i class="fa fa-credit-card" aria-hidden="true"></i></i>
                 <select id="pay_terms" name="pay_terms" data-validation="required" data-validation-error-msg-required="Please select">
                   <option value="Release Payment With in One Hour" <?php if($tx->pay_terms == "Release Payment With in One Hour"){echo "selected";}?>>Release Payment With in One Hour</option>
                   <option value="Release Payment With in Two Hour" <?php if($tx->pay_terms == "Release Payment With in Two Hour"){echo "selected";}?>>Release Payment With in Two Hour</option>
                   <option value="Release Payment after Buyer confirmed" <?php if($tx->pay_terms == "Release Payment after Buyer confirmed"){echo "selected";}?>>Release Payment after Buyer confirmed</option>
                   <option value="other" <?php if($tx->pay_terms == "others"){echo "selected";}?>>Other(write your own terms)</option>
                 </select>
                 <label>Payment Release Terms</label>
             </div>

             <div id="pay_terms_custom_outer">
            <?php if($tx->pay_terms == "other"){?>
             <div class="input-field col s12" id="pay_terms_custom_inner">
               <?php echo form_error('pay_terms_custom'); ?>
               <i class="material-icons prefix"><i class="fa fa-comments" aria-hidden="true"></i></i>
               <textarea id="pay_terms_custom" name="pay_terms_custom " class="materialize-textarea" data-validation="required" data-validation-error-msg-required="Please Mention Payment Release Terms"><?php echo $tx->pay_terms_custom;?></textarea>
               <label for="pay_terms_custom">Enter your Payment Release Terms</label>
             </div>
             <?php } ?>
           </div>
           </div>

           <div class="row">
             <div class="input-field col m6">
               <?php echo form_error('purchase_value'); ?>
               <i class="material-icons prefix"><i class="fa fa-credit-card" aria-hidden="true"></i></i>
               <input id="purchase_value" name="purchase_value" type="text" class="validate" data-validation="required" data-validation-error-msg-required="Please Mention Transaction Value" value="<?php echo $tx->amt_value;?>">
               <label for="purchase_value">Purchase Value</label>
             </div>

             <div class="input-field col m6 select_box">
               <?php echo form_error('yscrow_payer'); ?>
               <i class="material-icons prefix"><i class="fa fa-credit-card" aria-hidden="true"></i></i>
                 <select id="yscrow_payer" name="yscrow_payer" data-validation="required" data-validation-error-msg-required="Please select">
                     <option value="buyer" <?php if($tx->yscrow_fee_by == "buyer"){echo "selected";}?>>Buyer</option>
                     <option value="provider" <?php if($tx->yscrow_fee_by == "provider"){echo "selected";}?>>Seller</option>
                     <option value="both" <?php if($tx->yscrow_fee_by == "both"){echo "selected";}?>>Buyer &amp; Seller</option>
                 </select>
                 <label>Who will pay Yscrow Fee?</label>
             </div>
           </div>

           <div class="row yscrow_fee">
             <div id="yscrow_fee_data">
               <input type="hidden" id="yscrow_fee_by" name="yscrow_fee_by" value="<?php echo $tx->yscrow_fee_by;?>">
               <input type="hidden" id="buyer_amt" name="buyer_amt" value="<?php echo $tx->buyer_pay;?>">
               <input type="hidden" id="seller_amt" name="seller_amt" value="<?php echo $tx->seller_receive;?>">
               <input type="hidden" id="yscrow_fee" name="yscrow_fee" value="<?php echo $tx->yscrow_fees;?>">
               <div class="input-field col m6">Buyer Will pay :<?php echo $tx->buyer_pay;?></div>
               <div class="input-field col m6">Seller Get paid :<?php echo $tx->seller_receive;?></div>
             </div>
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
     <?php  ?>

     <script type="text/javascript">
           $('.timepicker').wickedpicker({twentyFour: false});
       </script>

</body>
</html>
