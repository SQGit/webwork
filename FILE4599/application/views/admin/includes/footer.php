  <footer class="main-footer">
    <strong> © 2016 <a href="#">File4599.com</a>.</strong> All rights
    reserved.
  </footer>

  <!-- jQuery 2.2.3 -->
<script type="text/javascript" src="<?php echo base_url().'assets/js/jquery-2.2.3.js'?>"></script>

<!-- Bootstrap 3.3.6 -->
<script src="<?php echo base_url().'assets/js/bootstrap3.3.6.js'?>"></script>

<!-- DataTables -->
<script src="<?php echo base_url().'assets/plugins/datatables/jquery.dataTables.min.js'?>"></script>
<script src="<?php echo base_url().'assets/plugins/datatables/dataTables.bootstrap.min.js'?>"></script>

<!-- Slimscroll -->
<script src="<?php echo base_url().'assets/plugins/slimScroll/jquery.slimscroll.min.js'?>"></script>

<!-- FastClick -->
<script src="<?php echo base_url().'assets/plugins/fastclick/fastclick.js'?>"></script>

<!-- AdminLTE App -->
<script src="<?php echo base_url().'assets/js/app.js'?>"></script>

<script src="<?php echo base_url().'assets/js/admin.js'?>"></script>


<script>
  $(function () {
    $('#tickets_filed').DataTable({
      "paging": true,
      "lengthChange": true,
      "searching": true,
      "ordering": true,
      "info": true,
      "autoWidth": true,
      "order": [[ 5, "desc" ]],
      "scrollX": true
    });
  });

</script>

</body>
</html>