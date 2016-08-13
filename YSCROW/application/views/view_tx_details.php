<div class="container-fluid tx_details_section">
<div class="row">
    <div class="col-md-6 col-md-offset-3">
        <?php echo $this->session->flashdata('verify_msg'); ?>
    </div>
</div>
<div class="row">
<div class="col-sm-offset-1 col-sm-10 col-md-offset-2 col-md-8 infobox">
<div class="col-sm-1 no_margin_padding text-center">
    <i class="fa fa-bell-o fa-2x" aria-hidden="true"></i>
</div>
<div class="col-sm-11">
<?php
$user = $this->session->userdata('email');
foreach($single_tx as $tx)
//if buyer
if($user == $tx->buyer)
{
    if($user == $tx->init_by)
    {
        switch($tx->status)
        {
            case 'invited':
                echo "Your invitation has been sent and is currently pending acceptance. You may still make changes to your transaction and re-send the invitation.";
            break;

            case 'invitation_resent':
                echo "Your invitation has been resent and is currently pending acceptance. You may still make changes to your transaction and re-send the invitation.";
            break;

            case 'accepted':
               echo "Your invitation was accepted and is currently pending payment.";
            break;

            case 'cancelled':
                echo "This Transaction was cancelled.";
            break;

            case 'requested':
                echo "The Seller request to change something. You can make changes to this transaction and re-send the invitation.";
            break;

            case 'pending':
                echo "Your invitation has been accepted and your payment is currently pending bank clearing. You will be notified when this is complete.";
            break;

            case 'Payment Success':
                echo "Payment Successful. Seller will despatch the materials.";
            break;

            case 'dispatched':
                echo "Goods Dispatched. You Check and confirm.";
            break;

            case 'goods received':
                echo "Goods Received. The Transaction has been completed once seller gets pay from yscrow.com.";
            break;

        }
    }
    else if($user !== $tx->init_by)
    {
        switch($tx->status)
        {
            case 'invited':
                echo "You have been invited to join this transaction and provide payment for it. If the information for this transaction appears correct, accept and provide delivery address in comment section. If you reject the transaction, you must provide a message explaining your rejection.";
            break;

            case 'invitation_resent':
                echo "You have been reinvited to join this transaction, you have to accept and provide payment for it or any changes send request. If the information for this transaction appears correct, accept and provide delivery address in comment section. If you reject the transaction, you must provide a message explaining your rejection.";
            break;

            case 'accepted':
               echo "Your invitation was accepted and is currently pending payment.";
            break;

            case 'cancelled':
                echo "This Transaction was cancelled.";
            break;

            case 'requested':
                echo "You are requested to change on this transaction. You will be notified once the Seller has made changes to this transaction.";
            break;

            case 'pending':
                echo "You have accepted the invitation to join this transaction and your payment is currently pending bank clearing. You will be notified when this is complete.";
            break;

            case 'Payment Success':
                echo "Payment Successful. Seller will despatch the materials.";
            break;

            case 'dispatched':
                echo "Goods Dispatched. You Check and confirm.";
            break;

            case 'goods received':
                echo "Goods Received. The Transaction has been completed once seller gets pay from yscrow.com.";
            break;
        }
    }
}
//if seller
else if($user == $tx->seller)
{
    if($user == $tx->init_by)
    {
        switch($tx->status)
        {
            case 'invited':
                echo "Your invitation has been sent and is currently pending acceptance. You may still make changes to your transaction and re-send the invitation.";
            break;

            case 'invitation_resent':
                echo "Your invitation has been resent and is currently pending acceptance. You may still make changes to your transaction and re-send the invitation.";
            break;

            case 'accepted':
               echo "Your invitation was accepted and is currently pending payment.";
            break;

            case 'cancelled':
                echo "This Transaction was cancelled.";
            break;

            case 'requested':
                echo "The Buyer request to change something. You can make changes to this transaction and re-send the invitation.";
            break;

            case 'pending':
                echo "Your invitation was accepted and is currently pending payment.";
            break;

            case 'Payment Success':
                echo "The Buyer of this Transaction has been paid to Yscrow. You want to dispatch the materials to Buyer. After delivered the goods, update the status to Dispatched";
            break;

            case 'dispatched':
                echo "Goods Dispatched.";
            break;

            case 'goods received':
                echo "Goods Received. The Transaction has been completed once seller gets pay from yscrow.com.";
            break;
        }
    }
    else if($user !== $tx->init_by)
    {
        switch($tx->status)
        {
            case 'invited':
                echo "You have been invited to join this transaction. If the information for this transaction appears correct, accept it. The Buyer will be directed to submit full payment after you have accepted. If you reject the transaction, you must provide a message explaining your rejection.";
            break;

            case 'invitation_resent':
                echo "You have been reinvited to join this transaction. If the information for this transaction appears correct, accept it. The Buyer will be directed to submit full payment after you have accepted. If you reject the transaction, you must provide a message explaining your rejection.";
            break;

            case 'accepted':
               echo "Your invitation was accepted and is currently pending payment.";
            break;

            case 'cancelled':
                echo "This Transaction was cancelled.";
            break;

            case 'requested':
                echo "You are requested to change on this transaction. You will be notified once the Buyer has made changes to this transaction.";
            break;

            case 'pending':
                echo "You have accepted the invitation to join this transaction and it is currently pending payment.";
            break;

            case 'Payment Success':
                echo "The Buyer of this Transaction has been paid to Yscrow. You want to dispatch the materials to Buyer.";
            break;

            case 'dispatched':
                echo "Goods Dispatched.";
            break;

            case 'goods received':
                echo "Goods Received. The Transaction has been completed once seller gets pay from yscrow.com.";
            break;
        }
    }
}?>
</div>
</div>
</div>
<div class="row">
<!-- Transaction details start -->
<div class="col-md-6 tx_details">

<h4>Transaction Details <span class="status"><?php echo $tx->status;?></span></h4>
	<table class="table table-responsive">
    <tbody>
    <tr>
    <td class="field_name"><i class="fa fa-user" aria-hidden="true"></i> Transaction ID</td><td class="colon">:</td><td class="field_value uppercase"><?php echo $tx->tx_id;?></td>
    </tr>
    <tr>
    <td class="field_name"><i class="fa fa-user" aria-hidden="true"></i> Transaction Name</td><td class="colon">:</td><td class="field_value capitalize"><?php echo $tx->tr_name;?></td>
    </tr>
    <tr>
    <td class="field_name"><i class="fa fa-user" aria-hidden="true"></i> Buyer</td><td class="colon">:</td><td class="field_value"><?php echo $tx->buyer;?></td>
    </tr>
    <tr>
    <td class="field_name"><i class="fa fa-user" aria-hidden="true"></i> Provider</td><td class="colon">:</td><td class="field_value"><?php echo $tx->seller;?></td>
    </tr>
    <tr>
    <td class="field_name"><i class="fa fa-inr" aria-hidden="true"></i> Purchase Value</td><td class="colon">:</td><td class="field_value capitalize"><?php echo $tx->amt_value;?></td>
    </tr>
    <tr>
    <td class="field_name"><i class="fa fa-inr" aria-hidden="true"></i> Yscrow Fee Pay by</td><td class="colon">:</td><td class="field_value capitalize"><?php if($tx->yscrow_fee_by == "both"){echo "Buyer & Seller Share";}else{echo $tx->yscrow_fee_by;}?></td>
    </tr>
    <tr>
    <td class="field_name"><i class="fa fa-comments-o" aria-hidden="true"></i> Payment Terms</td><td class="colon">:</td><td class="field_value capitalize"><?php if($tx->pay_terms == "other"){ echo $tx->pay_terms_custom;}else{ echo $tx->pay_terms;}?></td>
    </tr>
    </tbody>
    </table>

    <table class="table">
    <tbody>
    <tr>
    <td class="field_name"><i class="fa fa-user" aria-hidden="true"></i> Created By</td><td class="colon">:</td><td class="field_value"><?php echo $tx->init_by;?></td>
    </tr>
    <tr>
    <td class="field_name"><i class="fa fa-clock-o" aria-hidden="true"></i> Created on</td><td class="colon">:</td><td class="field_value"><?php echo $tx->created;?></td>
    </tr>
    <tr>
    <td class="field_name"><i class="fa fa-user" aria-hidden="true"></i> Status</td><td class="colon">:</td><td class="field_value capitalize"><?php echo $tx->status;?></td>
    </tr>
    </tbody>
    </table>

    <table class="table">
    <tbody>
    <tr>
    <td class="field_name"><i class="fa fa-user" aria-hidden="true"></i> Category</td><td class="colon">:</td><td class="field_value capitalize"><?php echo $tx->tr_category;?></td>
    </tr>
    <tr>
    <td class="field_name"><i class="fa fa-film" aria-hidden="true"></i> Movie Name</td><td class="colon">:</td><td class="field_value capitalize"><?php echo $tx->movie_name;?></td>
    </tr>
    <tr>
    <td class="field_name"><i class="fa fa-location-arrow" aria-hidden="true"></i> Theatre Name</td><td class="colon">:</td><td class="field_value capitalize"><?php echo $tx->theatre_name;?></td>
    </tr>
    <tr>
    <td class="field_name"><i class="fa fa-calendar-o" aria-hidden="true"></i> Show Date</td><td class="colon">:</td><td class="field_value"><?php echo $tx->show_date;?></td>
    </tr>
    <tr>
    <td class="field_name"><i class="fa fa-clock-o" aria-hidden="true"></i> Show Time</td><td class="colon">:</td><td class="field_value"><?php echo $tx->show_time;?></td>
    </tr>
    <tr>
    <td class="field_name"><i class="fa fa-comments-o" aria-hidden="true"></i> Extra Details</td><td class="colon">:</td><td class="field_value capitalize"><?php echo $tx->other_details;?></td>
    </tr>
    </tbody>
    </table>

    <table class="table">
    <tbody>
    <tr>
       <td class="field_name"><i class="fa fa-file-o" aria-hidden="true"></i> Related Documents</td><td class="colon">:</td><td class="field_value">
       <?php foreach($single_tx_img as $tx_img){ ?>
       <a href="#" class="zoom"> <img class="img-thumbnail-24 zoomify" src="<?php echo base_url().'assets/img/tr_doc/'.$tx_img->tx_image;?>" alt="msg" ?></a>
       <?php } ?>
       </td>
    </tr>
    </tbody>
    </table>

<?php

if($tx->status !== "cancelled" && $tx->status !== "Payment Success" && $tx->status !== "dispatched" && $tx->status !== "goods received")
{
	if($user == $tx->buyer && $tx->status == 'accepted'){ ?>
<!-- payumoney -->
<?php
$price= $tx->buyer_pay;
$PAYU_BASE_URL = "https://test.payu.in";
// Merchant key here as provided by Payu
$MERCHANT_KEY = 'HoBMWymH';
// Merchant Salt as provided by Payu
$SALT =  "EDPhIUkAc0";
$username = $this->session->userdata('fname');
$email  = $this->session->userdata('email');
$phone = $this->session->userdata('mobile');
//$id = "paying for ".$tx->tr_name."Transaction";
$desc = "paying for ".$tx->tr_name."Transaction";
//$txnid = substr(hash('sha256', mt_rand() . microtime()), 0, 20);
$txnid = $tx->tx_id;

$udf1 = $tx->tx_id;
$udf2 = $tx->tr_name;
$udf3 = $tx->buyer;
$udf4 = $tx->seller;
$hash_string = $MERCHANT_KEY."|".$txnid."|".$price."|".$desc."|".$username."|".$email."|".$udf1."|".$udf2."|".$udf3."|".$udf4."|||||||".$SALT;
$hash = strtolower(hash('sha512', $hash_string));
$action = $PAYU_BASE_URL . '/_payment';
?>
<div class="col-sm-12" style="padding:8%; font-family: georgia; font-size: 18px;">
<form method="POST" action="<?php echo $action; ?>">
<input type="hidden" name="key" value="<?php echo $MERCHANT_KEY; ?>" />
<input type="hidden" name="hash" value="<?php echo $hash; ?>"/>
<input type="hidden" name="txnid" value="<?php echo $txnid; ?>" />
<input type="hidden" name="phone" value="<?php echo $phone;?>" />
<input type="hidden" name="amount" value="<?php echo $price;?>" />
<input type="hidden" name="firstname" id="firstname" value="<?php echo $username;?>" >
<input type="hidden" name="email" id="email" value="<?php echo $email;?>"  />
<input type="hidden" name="productinfo" value="<?php echo $desc;?>">
<input type="hidden" name="surl" value="<?php echo base_url();?>home/pay_status"/>
<input type="hidden" name="furl" value="<?php echo base_url();?>home/pay_status"/>
<input type="hidden" name="service_provider" value="payu_paisa"/>
<input type="hidden" name="udf1" value="<?php echo $udf1; ?>"/>
<input type="hidden" name="udf2" value="<?php echo $udf2; ?>"/>
<input type="hidden" name="udf3" value="<?php echo $udf3; ?>"/>
<input type="hidden" name="udf4" value="<?php echo $udf4; ?>"/>
<button type="submit" value="Pay" class="btn btn-success">Pay now</button>
</form>
</div>
<!-- payumoney -->

		<!--<a href="<?php echo base_url().'/home/pay_now/'. $tx->tx_id?>" class="waves-effect waves-light btn"><i class="fa fa-cc-mastercard" aria-hidden="true"></i><span class="hidden-xs">&nbsp;&nbsp;&nbsp;Pay Now</span></a>-->
	<?php }

	if($user == $tx->init_by && $tx->status !== 'accepted') {?>
		<a href="<?php echo base_url().'/home/edit_tx/'. $tx->tx_id.'/'.$tx->tr_category?>" class="waves-effect waves-light btn"><i class="fa fa-pencil-square-o" aria-hidden="true"></i><span class="hidden-xs">&nbsp;&nbsp;&nbsp;Edit & Resend</span></a>
        <a href="#show_cancel_form" class="waves-effect waves-light btn" data-toggle="modal" data-target="#show_cancel_form"><i class="fa fa-ban" aria-hidden="true"></i><span class="hidden-xs">&nbsp;&nbsp;&nbsp;Cancel</span></a>



  <div class="modal fade" id="show_cancel_form" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document" >
            <div class="modal-body" >

            <div class="modal-content">

              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <?php echo validation_errors('<p class="error">'); ?>
              <?php echo form_open('home/cancel_tx', 'id="cancel_form"'); ?>
              <?php echo form_hidden('tx_id', $tx->tx_id); ?>
              <?php echo form_hidden('tr_name', $tx->tr_name); ?>
              <?php echo form_hidden('buyer_email', $tx->buyer); ?>
              <?php echo form_hidden('provider_email', $tx->seller); ?>
              <div class="row">
              <div class="input-field col s12">
                  <?php echo form_error('reason'); ?>
                  <i class="material-icons prefix"><i class="fa fa-comments" aria-hidden="true"></i></i>
                  <textarea id="reason" name="reason" class="materialize-textarea" data-validation="required" data-validation-error-msg-required="Write Something.."></textarea>
                     <label for="reason">Reason for cancel the transaction</label>
              </div>
              </div>
              <div id="alert-msg"></div>
              <div class="row">
                  <button type="submit" class="btn btn-primary pull-right">Submit</button>
              </div>
              </form>
          </div>
        </div>
        </div>
      </div>
	<?php } ?>


<?php
	if($user !== $tx->init_by && $tx->status !== 'accepted'){ ?>
		<a href="<?php echo base_url().'/home/accept_tx/'. $tx->tx_id.'/'.$tx->tr_category ?>" class="waves-effect waves-light btn"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i><span class="hidden-xs">&nbsp;&nbsp;&nbsp;Accept</a>
		<a href="#show_req_form" class="waves-effect waves-light btn" data-toggle="modal" data-target="#show_req_form"><i class="fa fa-repeat" aria-hidden="true"></i><span class="hidden-xs">&nbsp;&nbsp;&nbsp;Req to Change</span></a>
        <!--<a href="<?php echo base_url().'/home/req_change/'. $tx->tx_id ?>" class="waves-effect waves-light btn">Req to Change</a>-->

        <div class="modal fade" id="show_req_form" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" >
                <div class="modal-dialog" role="document">
                  <div class="modal-body">
                  <div class="modal-content">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <?php echo validation_errors('<p class="error">'); ?>
                <?php echo form_open('home/req_raise', 'id="req_form"'); ?>
                <?php echo form_hidden('tx_id', $tx->tx_id); ?>
                <?php echo form_hidden('tr_name', $tx->tr_name); ?>
                <?php echo form_hidden('buyer_email', $tx->buyer); ?>
                <?php echo form_hidden('provider_email', $tx->seller); ?>
                <div class="row">
                <div class="input-field col s12">
                    <?php echo form_error('req'); ?>
                    <i class="material-icons prefix"><i class="fa fa-comments" aria-hidden="true"></i></i>
                    <textarea id="req" name="req" rows="10" class="materialize-textarea" data-validation="required" data-validation-error-msg-required="Write Something.."></textarea>
                       <label for="req">write your requests</label>
                </div>
                </div>
                <div id="alert-msg"></div>
                <div class="row">
                    <button type="submit" class="btn btn-primary pull-right">Submit</button>
                </div>
                </form>
            </div>
        </div>
        </div>
        </div>

	<?php } }?>

<?php
  if($tx->status == "Payment Success")
  {
  	if($user == $tx->seller){ ?>
      <a href="<?php echo base_url().'/home/dispatched_tx/'. $tx->tx_id.'/'.$tx->tr_category ?>" class="waves-effect waves-light btn"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i><span>&nbsp;&nbsp;&nbsp;Dispatched</a>
  <?php }
  }

  if($tx->status == "dispatched")
  {
  if($user !== $tx->seller){ ?>
    <a href="<?php echo base_url().'/home/received_tx/'. $tx->tx_id.'/'.$tx->tr_category ?>" class="waves-effect waves-light btn"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i><span>&nbsp;&nbsp;&nbsp;Goods Received</a>
<?php }

} ?>

<!-- image modal start -->
<div class="modal fade" id="imagemodal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog" data-dismiss="modal">
    <div class="modal-content"  >
      <div class="modal-body">
      	<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
        <img src="" class="imagepreview" style="width: 100%;">
      </div>
    </div>
  </div>
</div>
<!-- image modal end -->
</div>
<!-- Transaction details end -->

<!-- Transaction histroy start -->
<div class="col-md-6 tx_histroy">
<h4>Transaction History</h4>
<div class="row">
<div class="history">
<?php foreach($single_tx_history as $tx_histroy){?>
	<div class="row communication-item">
            <div class="date-and-user">
                <?php echo $tx_histroy->updated_date;?>
                <br>
                <b><?php echo $tx_histroy->updated_by;?></b>
            </div>
            <div class="status">
                <span class="label label-info"><?php echo $tx_histroy->status;?></span>
                <?php
                  if($tx_histroy->status == 'requested')
                  {?>
                    <br/><a href="#" data-toggle="modal" data-target="#req_show">See Request</a>
                    <!-- Modal why yscrow-->
                    <div id="req_show" class="extra-modal modal fade" role="dialog">
                      <div class="modal-dialog">
                        <!-- Modal content-->
                        <div class="modal-content">
                          <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4 class="modal-title">Request Details</h4>
                          </div>
                          <div class="modal-body">
                            <p>
                              <?php
                                echo $tx_histroy->if_requested;
                              ?>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  <?php } ?>
            </div>
    </div>
<?php } ?>
</div>
<!-- Transaction histroy end -->

</div>
</div>

</div>
</div>
