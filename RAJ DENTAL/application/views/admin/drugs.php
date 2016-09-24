<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
<!-- mask -->
<div class="mask">
  <!-- Content Header (Page header) -->
    <section class="content-header">
        <h1>
            Drugs
        </h1>
        <ol class="breadcrumb">
            <li><a href="#">Dashboard</a></li>
            <li class="active">Drugs</li>
        </ol>
        <hr/>
    </section>

    <!-- Main content -->
    <section class="content">

        <div class="row existing_patient">
            <div style="text-align:right; padding-right:20px;">
                <a data-href="#" style="width:190px;"class="btn violet btn-info btn-icon" data-toggle="modal" data-target="#add_drugs">Add Drugs</a>
            </div>
                <!-- data table patient list table view -->
                <div class="data-table">            
                    <table id="existing_patient" class="table">
                      <thead>
                        <tr>                          
                          <th>Drugs ID</th>
                          <th>Drugs Name</th>
                          <th>Drugs Details</th>                          
                          <th>Instruction</th>
                          <th>Schedule</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                      <?php foreach($drug_details as $p_info){ ?>
                        <tr>
                            <td><?php echo $p_info->drug_id ?></td>
                            <td><?php echo $p_info->drug_name ?></td>
                            <td><?php echo $p_info->drug_desc ?></td>
                            <td><?php echo $p_info->drug_instruct ?></td>
                            <td>
                            <?php
                            if($p_info->duration == '1')
                            {
                                echo "yes";
                            }
                            else
                            {
                                echo "No";
                            } ?>

                            </td>
                            <td><button onclick="showAjaxModal('<?php echo base_url();?>admin/edit_drug/<?php echo $p_info->drug_id ?>');" class="btn violet btn-info">Edit</button></td>                            
                        </tr>
                        <?php } ?>
                      </tbody>                      
                    </table>
                </div>                
                <!--/.data table patient list table view -->
            </div>

        </div>
    </section>
    <!-- /.Main content -->

</div>
<!--/.mask-->
</div>
<!-- /.content-wrapper -->


<!-- add drugs Modal -->
  <div class="modal fade" id="add_drugs" role="dialog" style="z-index:99999;">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title" style="text-align:center;">Add Drugs</h4>
        </div>
        <div class="modal-body">        
          <div class="prescription_details">
            <form enctype="multipart/form-data" method="post" action="<?php echo base_url(). 'admin/drug_create'; ?>" class="form-horizontal form-groups-bordered" id="drug_create" role="form">                

                <div class="form-group">
                    <label class="col-sm-3 col-md-3 control-label" for="drug_name">Drug Name</label>
                    <div class="col-sm-7">
                        <input type="text" id="drug_name" class="form-control" name="drug_name">
                    </div>
                </div>

                <div class="form-group">
                    <label class="col-sm-3 col-md-3 control-label" for="drug_desc">Drug Details</label>
                    <div class="col-sm-7">
                        <input type="text" id="drug_desc" class="form-control" name="drug_desc">
                    </div>
                </div>

                <div class="form-group">
                    <label class="col-sm-3 col-md-3 control-label" for="drug_instruct">Instruction</label>
                    <div class="col-sm-7">
                        <input type="text" id="drug_instruct" class="form-control" name="drug_instruct">
                    </div>
                </div>

                <div class="form-group">
                <label class="col-sm-3 col-md-3 control-label" for="duration">Schedule</label>
                <div class="col-sm-7">
               <label>
                  <input type="radio" name="duration" class="minimal" value='1' checked>&nbsp;&nbsp;Yes
                </label>
                <label>
                  <input type="radio" name="duration" class="minimal" value='0'>&nbsp;&nbsp;No
                </label>
              </div>
              </div>

                <div class="action text-center">
                    <button type="submit" class="btn violet btn-info">Save</button>
                    <button type="button" class="btn cancel btn-info" data-dismiss="modal">Cancel</button>
                </div>
            </form>
          </div>
        </div><!--/.modal nody -->
        <div class="modal-footer">
        </div>
      </div><!--/. Modal content-->
    </div><!--/.Modal dialog-->
  </div>
  <!--/.add drugs modal -->
