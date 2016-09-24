<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
</head>
<body>
<h3 style="text-align:center; text-decoration:underline;">Sales Report</h3>
	<table style="border-collapse:collapse;">
	<thead>
	<tr style="border-bottom:1px solid #ccc;font-size:16px; text-transform:capitalize;">
		<?php
		foreach($this->data->report->head as $item)
		{?>
			<th align="center" style="width:200px; padding:10px 0;"><b><?php echo $item; ?></b></th>
		<?php } ?>
	</tr>
	</thead>
	<tbody>
		<?php
		$body_len = count($this->data->report->body->data);

		//echo "length :" .$body_len;

		for($i=0; $i<$body_len; $i++){?>
			<tr style="border-bottom:1px solid #ccc;">
			<td align="center" style="width:200px; padding:10px 0;"><?php echo $this->data->report->body->data[$i]; ?></td>
			<td align="center" style="width:200px; padding:10px 0;"><?php echo $this->data->report->body->user_id[$i]; ?></td>
			<td align="center" style="width:200px; padding:10px 0;"><?php echo $this->data->report->body->name[$i]; ?></td>
			<td align="center" style="width:200px; padding:10px 0;"><?php echo $this->data->report->body->plan[$i]; ?></td>
			<td align="center" style="width:200px; padding:10px 0;"><?php echo $this->data->report->body->plan_amt[$i]; ?></td>
			</tr>
		<?php } ?>
	<tr style="border-bottom:1px solid #ccc;">
	<td/>
	<td colspan=2 align="center" style="width:200px; padding:10px 0;">
		Today's Report : <?php echo $this->data->report->report_cost; ?>
	</td>
	<td colspan=2 align="center" style="width:200px; padding:10px 0;">
		Bill Date: <?php echo $this->data->report->bill_date; ?>
	</td>
	</tr>
	</tbody>
	</table>
<br/>	
<br/>
<br/>	
<br/>
With Regards,<br/>
Sai Shakthy Networks (JK Broadband),<br/>
# 198-GST Road,<br/>
Guduvanchery.<br/>
Contact: 9750931200, 9750931201<br/>
landline: 044-27461997<br/>
email:saishakthynetworks@gmail.com<br/>	
<br/>
<br/>	
<br/>
</body>
</html>