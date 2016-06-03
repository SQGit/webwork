<?php
// This file makes a connection with mysql database. 
include ("../includes/db_config.php");

$id = $_POST['pk'];
$sql = "SELECT project_fund_period_from, project_fund_period_to FROM project_list WHERE project_id= $id";


$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
	
	while ($row = mysqli_fetch_assoc($result)) {	
	
	//echo "from: " .$row["project_fund_period_from"]. " to: " .$row["project_fund_period_to"];
	
	$todal_days = floor(( strtotime( $row['project_fund_period_to'] ) - strtotime( $row['project_fund_period_from'] )) / 86400 );
	
	$daydiff = floor( ( strtotime( $row['project_fund_period_to'] ) - strtotime(date("Y/m/d")) ) / 86400 );
	
	$days_prnt = (($daydiff / $todal_days) * 100);
	
		echo $days_prnt;
			
	}
}

?>


