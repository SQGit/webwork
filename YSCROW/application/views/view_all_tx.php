<div class="container-fluid all_tx">
<div class="row">
    <div class="col-md-6 col-md-offset-3">
        <?php echo $this->session->flashdata('verify_msg'); ?>
    </div>
</div>
<div class="row">
<div class="col-md-12">
<h4>Transaction Details</h4>
    <table class="table-responsive bordered highlight">
    <thead>
    <tr>      
      <th><strong>Tx Name</strong></th>
      <th><strong>Buyer</strong></th>
      <th><strong>Provider</strong></th>
      <th><strong>Tx Value</strong></th>
      <th><strong>Tx Status</strong></th>
    </tr>
    </thead>
    <tbody>
    <?php foreach($all_tx as $tx){?>
    <tr class="clickable-row" data-href="<?php echo base_url().'home/view_tx_details/'. $tx->tx_id.'/'. $tx->tr_category ?>">
      <td><?php echo $tx->tr_name;?></td>
      <td><?php echo $tx->buyer;?></td>
      <td><?php echo $tx->seller;?></td>
      <td><?php echo $tx->amt_value;?></td>
      <td class="capitalize"><?php echo $tx->status;?></td>
    </tr> 
     <?php }?>
     </tbody>
   </table>
</div>
</div>
</div>