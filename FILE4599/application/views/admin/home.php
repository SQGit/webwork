  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        Dashboard
        <small>Filed Tickets List</small>
      </h1>
     <!-- <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li class="active">Dashboard</li>
      </ol>-->
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="row">
        <div class="col-xs-12">
          <div class="box">
            <div class="box-header">
              <h3 class="box-title" style="align:center; font-size:24px;">Filed Tickets List</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <table id="tickets_filed" class="table table-bordered table-striped">
                <thead>
                <tr>
                  <th>Ticket ID</th>
                  <th>Defendant Name</th>
                  <th>Ticket Name</th>
                  <th>Offence Date</th>
                  <th>Ticket Filed On</th>
                  <th>Amount</th>
                  <th>Payment</th>
                  <th>Preview</th>
                </tr>
                </thead>
                <tbody>
                <?php 
                foreach($tickets_filed as $ticket)
                {
                ?>
                <tr>
                  <td><?php echo $ticket->ticket_id;?></td>
                  <td><?php echo $ticket->customer_name;?></td>
                  <td><?php echo $ticket->ticket_name;?></td>
                  <td><?php echo $ticket->offence_date;?></td>
                  <td><?php echo $ticket->filed_date;?></td>
                  <td>CAD <?php echo $ticket->amount;?></td>
                  
                  <td>
                  <?php
                    if($ticket->payment_status != 'Completed')
                    {?>
                      <a data-href="<?php echo base_url().'main/payment_link/';?>" data-id="<?php echo $ticket->ticket_id; ?>" class="btn btn-info btn-sm btn-icon icon-left payment_link">Request to Pay</a>
                   <?php }
                    else
                    {
                      echo $ticket->payment_status;
                    }
                  ?>
                  </td>
                  <td>
                    <a href="<?php echo base_url().'admin/preview/'.$ticket->table_name.'/'.$ticket->ticket_id;?>" class="btn btn-info btn-sm btn-icon icon-left">Preview</a>
                  </td>
                </tr> 
                <?php
                }
                ?>
                </tbody>                
              </table>
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->