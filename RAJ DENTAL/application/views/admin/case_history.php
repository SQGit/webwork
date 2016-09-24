<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
<!-- mask -->
<div class="mask">
  <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
          Case History        
        </h1>
        <ol class="breadcrumb">
          <li><a href="<?php echo base_url(). 'admin/dashboard' ?>">Dashboard</a></li>
          <li><a href="<?php echo base_url(). 'admin/existing_patient' ?>">Existing Patient</a></li>
          <li class="active">Case history</li>
        </ol>
      <hr/>
    </section>

    <!-- Main content -->
    <section class="content">
    <div class="row">
        <div class="col-md-12" id="print">
        <div class="add_patient">
        <!-- header first row -->
        <div class="row" style="border-bottom: 2px solid #eee; display:table; width:100%">
            <div class="col-sm-7" style="display:table-cell;">
                <span class="logo-lg"><img style="width:65%"; src="<?php echo base_url().'assets/img/logo.png'?>" class="" alt="logo"></span>
            </div>
            <div class="col-sm-5" style="display:table-cell;">
                <h4 style="text-decoration: none;">FOUNDER</h4>
                <h4 style="text-decoration: none;">Dr.R.BAKTHAVATCHALAM, <span class="small">B.D.S., Reg. No.:450</span></h4>
            </div>
        </div>        
        <!-- header address -->
        <div class="row">
            <div class="col-sm-12" style="text-align: center;">
            <h4 style="text-decoration: none;">No. 57/34, R.V.Street, Alagesa Nagar, (Near Rani Mahal &amp; Latha Cinimas), Chengalpattu.</h4>
            <h4 style="text-decoration: none;">Phone: 044-27430838, 9597180264</h4>
            <h4 style="background-color: #eee; padding:7px; font-weight: 600; text-decoration: none;">Consulting Hours : 10.00 am - 2.30 pm &nbsp;&nbsp;&nbsp; 5.30 pm - 9.30 pm (Sunday Holiday)</h4>
            </div>
        </div>

        <!-- content -->
        <?php foreach($patient_history as $p_info) ?>
          <h4 class="modal-title" style="text-align:center; margin-bottom:20px; margin-top:30px;">Case History</h4>
          <div class="patient_info">
            <table width="100%" border="0">
              <tbody>
                <tr>
                <!-- patient details -->
                    <td valign="top" align="left" style="width:50%;">
                      <span class="title">Patient ID : </span><?php echo $p_info->p_id ?><br>
                      <span class="title">Patient Name : </span><?php echo $p_info->p_name ?><br>
                      <span class="title">Age : </span><?php echo $p_info->p_age ?>&nbsp;&nbsp;<span class="title">Sex : </span><?php echo $p_info->p_sex ?><br>
                      <span class="title">Regn. Date : </span><?php echo $p_info->timestamp ?><br>
                      <span class="title">Mobile : </span><?php echo $p_info->p_phone ?><br>
                    </td>
                <!-- previous history -->
                    <td valign="top" align="right" style="width:50%;">                      
                      <div class="row">
                        <div class="col-sm-12">
                            <h4><b>Previous Medical History</b></h4>
                        </div>

                        <div  class="col-sm-12"> 
                        <ul>
                            <?php 
                            foreach($patient_history as $p_info)

                            $selected =  $p_info->med_history;

                            $selected_value = explode(", ", $selected);


                            foreach($selected_value as $value) { ?>
                                <li style="display:inline; border:1px solid #888; border-radius: 2px; padding:3px; margin:3px;"><?php echo $value; ?></li>
                            <?php } ?>
                         
                        </ul>
                        </div>

                        <div class="col-sm-12"> 
                            <p><b>Doctor Name :</b> B.Sathish B.D.S.</p>
                        </div>
                      </div>
                    </td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr/>
          <div class="case_history">                                

                <div class="table">
                    <table id="medication" class="table">
                      <thead>
                        <tr>                                                    
                          <th>Date Visited</th>
                          <th>Diagnosis</th>
                          <th>Treatment Type</th>
                          <th>Treatment Details</th>                          
                          <th>Treatment Cost</th>                          
                          <th>Fees paid</th>
                          <th>Balance pay</th>
                        </tr>
                      </thead>
                      <tbody>
                      <?php foreach($patient_history as $p_info) { ?>
                        <tr>                            
                            <td>
                                <?php echo $p_info->last_visited; ?>
                            </td>

                            <td>
                                <?php echo $p_info->diagnosis; ?>
                            </td>
                            
                            <td>
                                <?php echo $p_info->treat_type; ?>
                            </td>

                            <td>
                                <?php echo $p_info->treat_details; ?>
                            </td>
                            
                            <td>
                                Rs. <?php echo $p_info->treat_cost; ?>
                            </td>
                            <td>
                                Rs. <?php echo $p_info->fees; ?>                                
                            </td>
                            <td>
                                Rs. <?php echo $p_info->bal_cost; ?>                                
                            </td>
                        </tr>
                        <?php } ?>
                      </tbody>
                    </table>
                </div>

                <div class="action text-center">
                    <button type="button" class="btn violet btn-info" onclick="PrintDoc()">Print</button>                    
                </div>

          </div>

</section>
</div>
</div>
</div>
</section>
</div>
</div>

<script type="text/javascript">
  
      function PrintDoc() {

            var divContents = document.getElementById('print');
            var printWindow = window.open('', '', 'height=1400,width=800');
            printWindow.document.write('<html><head><title>Prescription</title>   <link rel="stylesheet" href="<?php echo base_url().'assets/css/Bootstrap3.3.7.css'?>"> <link rel="stylesheet" href="<?php echo base_url().'assets/plugins/select2/select2.min.css'?>"> <link rel="stylesheet" href="<?php echo base_url().'assets/css/AdminLTE.css'?>"> <link rel="stylesheet" href="<?php echo base_url().'assets/css/custom.css'?>"> <link rel="stylesheet" href="<?php echo base_url().'assets/css/print.css'?>">'); printWindow.document.write('</head><body >');
            printWindow.document.write(divContents.innerHTML);
            printWindow.document.write('</body></html>');
            printWindow.document.close();
            printWindow.print();
       
    }
</script>
        
