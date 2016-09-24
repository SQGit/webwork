<!-- jQuery 2.2.3 -->
<script type="text/javascript" src="<?php echo base_url().'assets/js/jquery-2.2.3.js'?>"></script>
<!-- Bootstrap 3.3.6 -->
<script type="text/javascript" src="<?php echo base_url().'assets/js/bootstrap3.3.7.js'?>"></script>

<!-- Jquery validation -->
<script src="<?php echo base_url().'assets/plugins/jquery-validation/jquery.validate.js'?>"></script>
<script src="<?php echo base_url().'assets/plugins/jquery-validation/additional-methods.js'?>"></script>


<!-- iCheck for checkboxes and radio inputs -->
<link rel="stylesheet" href="<?php echo base_url().'assets/plugins/iCheck/all.css'?>">
<script src="<?php echo base_url().'assets/plugins/iCheck/icheck.min.js'?>"></script>


<?php foreach($drugs_info as $drug_info) ?>
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title" style="text-align:center;">Edit Drugs</h4>
        </div>
        <div class="modal-body">
          <div class="prescription_details">
            <form enctype="multipart/form-data" method="post" action="<?php echo base_url(). 'admin/drug_update/'.$drug_info->drug_id;?>" class="form-horizontal form-groups-bordered" id="drug_update" role="form">                

                <div class="form-group">
                    <label class="col-sm-3 col-md-3 control-label" for="drug_name">Drug Name</label>
                    <div class="col-sm-7">
                        <input type="text" id="drug_name" class="form-control" name="drug_name" value="<?php echo $drug_info->drug_name ?>">
                    </div>
                </div>

                <div class="form-group">
                    <label class="col-sm-3 col-md-3 control-label" for="drug_desc">Drug Details</label>
                    <div class="col-sm-7">
                        <input type="text" id="drug_desc" class="form-control" name="drug_desc" value="<?php echo $drug_info->drug_desc ?>">
                    </div>
                </div>

                <div class="form-group">
                    <label class="col-sm-3 col-md-3 control-label" for="drug_instruct">Instruction</label>
                    <div class="col-sm-7">
                        <input type="text" id="drug_instruct" class="form-control" name="drug_instruct" value="<?php echo $drug_info->drug_instruct ?>">
                    </div>
                </div>
                
                <div class="form-group">
                <label class="col-sm-3 col-md-3 control-label" for="duration">Schedule</label>
                <div class="col-sm-7">
               <label>
                  <input type="radio" name="duration" class="minimal" value='1' <?php if($drug_info->duration =='1'){echo 'checked';} ?>>&nbsp;&nbsp;Yes
                </label>
                <label>
                  <input type="radio" name="duration" class="minimal" value='0' <?php if($drug_info->duration =='0'){echo 'checked';} ?>>&nbsp;&nbsp;No
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
