<?php
// This file makes a connection with mysql database. 
include ("../includes/db_config.php");

$query = "SELECT * FROM pic_table WHERE expiry_date >= DATE(now())";

$result = mysqli_query($conn, $query);

$num_rows = mysqli_num_rows($result);

if($num_rows >0 ){

	while($row = mysqli_fetch_array($result))
	{
		
		$diff_calc = date_diff(date_create($row['expiry_date']), date_create(date("Y-m-d")));
  		$diff = $diff_calc->format('%d');  		
		
		if($diff <= 2)
		{
			$EmailTo = $row['email'];
			$name = $row['name'];
			$Subject = "ifundnetwork PIC will be expired in ".$diff." days";			
			$femail = "investors@ifindcard.com";

			$Body = "Hi ".$name.", \n Your PIC(".$row['pic'].") for ifundnetwork will be expired in ".$diff." days. \n Before that Register with ifundnetwork and get funding everything..";

			$success = mail($EmailTo, $Subject, $Body, "From:" . $femail);

			echo $row['expiry_date'];
			echo "<br/>";
			echo $diff;
			echo "<br/>";

		}

	}

}

