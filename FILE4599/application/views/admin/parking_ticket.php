<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>File4599</title>
  <!-- Tell the browser to be responsive to screen width -->
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">

  <link rel="stylesheet" href="<?php echo base_url().'assets/css/print.css'?>">
</head>

<body>
<div style="margin:0 auto; width: 800px; margin-top:20px;">
  <a href="<?php echo base_url().'admin'?>">Go to Back</a>
  <button type="submit" style="float:right;" class="btn" onclick="PrintDoc()">Print</button>
  <!--<button type="submit" class="btn" onclick="PrintPreview()">Print Preview</button>-->
</div>
<div id="print_preview">
<?php
foreach($tickets_details as $tickets_detail)
?>


	<table class="parent" cellspacing="0" cellpadding="0" border="0" align="center">
		<tbody>
		<tr>
			<td>
			<table width="98%" cellspacing="0" cellpadding="0" border="0" align="center">
				<tbody>
				
				<tr>
					<td>
					<table width="100%" cellspacing="0" cellpadding="0" border="0">
						<tbody>
						<tr>
							<td align="left" colspan="2" class="text">Please make sure that the <strong>OWNER OF THE VEHICLE</strong> is marked as the <strong>DEFENDANT'S NAME</strong>. In addition, the <strong>ADDRESS</strong> that is <strong>REGISTERED TO THE LICENCE PLATE</strong> must be noted.</td>
						</tr>
						</tbody>
					</table>
					</td>
				</tr>

				<tr>
					<td style="border-bottom:dashed; border-bottom-color:#005595; border-bottom-width:3px;">
					&nbsp;
					</td>
				</tr>
				
				<tr>
					<td align="right" style="padding-top:10px;">
					<table width="40%" cellspacing="0" cellpadding="0" border="1">
						<tbody>
						<tr>
							<td style="border:solid; border-width:1px; border-color:#8aa4cc; height:40px;">
								<input type="text" value="<?php echo $tickets_detail->notice_number;?>" style="width:97%; height:100%; font-size:22px; margin: 0;" readonly>
							</td>
						</tr>
						</tbody>
					</table>
					</td>
				</tr>

				<tr>
					<td align="right" style="font-size:10px; color:#527ab8; padding-right:4px; padding-bottom:5px;">
						PARKING INFRACTION NOTICE NUMBER
					</td>
				</tr>
				
				<tr>
					<td align="center" style="font-size:20px; font-weight:bold; color:#005595; padding-top:3px;">
						NOTICE OF INTENTION TO APPEAR
					</td>
				</tr>

				<tr>
					<td align="center" style="font-size:11px; color:#527ab8;">
						PURSUANT TO s.17.1 OF THE PROVINCIAL OFFENCES ACT
					</td>
				</tr>
							  
				<tr>
					<td align="center" style="font-size:11px; color:#527ab8;">
						Ontario Court of Justice, Toronto Region
					</td>
				</tr>
				
				<tr>
					<td>
						&nbsp;
					</td>
				</tr>
				
				<tr>
					<td style="font-size:12px; color:#005595; font-weight:bold; padding-bottom:5px;">
						Take notice that I,
					</td>
				</tr>

				<tr>
					<td>
					<table width="100%" cellspacing="0" cellpadding="0" border="0" style="border:solid; border-width:2px; border-color:#005595; padding:5px;">
					<tbody>
					<tr>
					  <td colspan="2" class="text">DEFENDANT/OWNER'S NAME -PLEASE PRINT</td>
					</tr>
					<tr>
					  <td colspan="2" class="text_box"><input type="text" value="<?php echo $tickets_detail->customer_name;?>" style="width:99%;" readonly></td>
					</tr>
					<tr>
					  <td colspan="2" class="text">CURRENT MAILING ADDRESS</td>
					</tr>
					<tr>
					  <td colspan="2" class="text_box"><input type="text" value="<?php echo $tickets_detail->address;?>" style="width:99%;" readonly></td>
					</tr>
					<tr>
					  <td class="text">APT./SUITE</td>
					  <td class="text">CITY</td>
					</tr>

					<tr>
					  <td class="text_box"><input type="text"  value="<?php echo $tickets_detail->apt;?>" style="width: 94%;" readonly></td>
					  <td class="text_box"><input type="text"  value="<?php echo $tickets_detail->city;?>" style="width:97%;" readonly></td>
					</tr>
					<tr>
					  <td class="text">PROVINCE</td>
					  <td class="text">POSTAL CODE</td>
					</tr>
					<tr>
					  <td class="text_box"><input type="text"  value="<?php echo $tickets_detail->province;?>" style="width:94%;" readonly></td>
					  <td class="text_box"><input type="text"  value="<?php echo $tickets_detail->pin_code;?>" style="width:97%;" readonly></td>
					</tr>
					<tr>
					  <td class="text">DAYTIME TELEPHONE NUMBER</td>
					  <td>&nbsp;</td>
					</tr>
					<tr>
					  <td colspan="2" class="text_box"><input type="text"  value="<?php echo $tickets_detail->phone;?>" style="width:99%;" readonly></td>
					</tr>
					<tr>
					  <td colspan="2">&nbsp;</td>
					</tr>
				  </tbody></table></td>
			  	</tr>
				  
				<tr>
					<td class="para_text">wish to give notice of my intention to appear in court for the purpose of entering a plea and having a trial respecting the charges set out in the Parking Infraction Notice noted above.</td>
				</tr>
				
				<tr>
					<td>
					<table width="100%" cellspacing="0" cellpadding="0" border="0" style="border:solid; border-width:2px; border-color:#005595;">
						<tbody>
						<tr>
						 	<td class="para_text"> At the trial I intend to challenge the evidence of the Provincial OffencesOfficer who completed the Parking Infraction Notice and Certificate of Parking Infraction.</td>
						</tr>
						
						<tr>
							<td>
							<table width="100%" cellspacing="0" cellpadding="0" border="0" style="padding-left:5px;">
							  <tbody><tr>
								<td width="33%" class="text">Check <img src="images/mark.jpg"> One</td>
								<td width="34%" class="text"><input type="radio" value="No" <?php if($tickets_detail->offence_accept == '0'){echo "checked";}?> >
								<span style="">No</span> </td>
								<td width="33%" class="text"><input type="radio"  value="Yes" <?php if($tickets_detail->offence_accept == '1'){echo "checked";}?>>
								<span style="">Yes </span></td>
							  </tr>
							</tbody></table></td>
						</tr>
					  </tbody>
					</table>
					</td>
				</tr>
				
				<tr>
					<td><p align="justify" class="para_text"><strong>If you indicate above that you do not intend to challenge the officer's evidence, the officer may not attend and prosecution may rely on certified statements as evidence against you.</strong></p></td>
				</tr>

				<tr>
					<td>
					<table width="100%" cellspacing="0" cellpadding="0" border="0" style="border:solid; border-width:2px; border-color:#005595;">
						<tbody>
						<tr>
						  <td>
						  	<p align="justify" class="para_text">I request that my trial be held in the</p></td>
						</tr>

						<tr>
						  <td>
						  <table width="100%" cellspacing="0" cellpadding="0" border="0" style="padding-left:5px;">
							  <tbody>
							  <tr>
								<td width="33%" class="text">Check <img src="images/mark.jpg" alt=""> One</td>
								<td width="34%" class="text"><input type="radio" value="English Language" <?php if($tickets_detail->trial_lang == 'english'){echo "checked";}?>>
								<span style="">English Language </span></td>
								<td width="33%" class="text"><input type="radio" value="French Language" <?php if($tickets_detail->trial_lang == 'french'){echo "checked";}?>>
								<span style=""> French Language </span></td>
							  </tr>
							</tbody>
							</table>
							</td>
						</tr>

						<tr>
						  <td class="text" style="padding-top:6px; padding-left:5px;">I request a&nbsp;<input type="text" value="<?php echo $tickets_detail->trial_lang_ip;?>" style="background-color:#F0F0F0; width:60%" readonly> language Interpreter</td>
						</tr>

						<tr>
						  <td valign="top" class="text" style="font-size:10px; padding-left:75px; margin-top:0px; padding-top:5px; padding-bottom:10px;">LEAVE BLANK IF INAPPLICABLE</td>
						</tr>

					  	</tbody>
					</table>
					</td>
				</tr>

				<tr>
					<td class="para_text"><strong>NOTE: If you fail to appear at the time and place set for your trial, you will be deemed to not dispute the charge and a conviction may be entered against you in your absence without further notice.</strong></td>
				</tr>

				<tr>
					<td>
					<table width="100%" cellspacing="5" cellpadding="0" border="0">
						<tbody>
						<tr>
						  <td width="57%"><input type="text" style="width:300px; background: #F0F0F0;" name="signature" id="signature" readonly="readonly"></td>

						  <td width="43%"><input type="text" value="<?php echo $tickets_detail->filed_date;?>" style="width:240px; background:#FFFFE1;" readonly>
						  </td>
						</tr>

						<tr>
						  <td style="font-size:10px; color:#527ab8;">SIGNATURE OF DEFENDANT OR AGENT</td>
						  <td style="font-size:10px; color:#527ab8;">DATE</td>
						</tr>

						<tr height="5px;">
						  <td colspan="2"></td>
						</tr>				
					  	</tbody>
					</table>
					</td>
				  </tr>

				  <tr>
					<td style="border:solid; border-width:2px; border-color:#005595;"><table width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#CCCCCC">
					  <tbody><tr>
						<td><table width="25%" cellspacing="0" cellpadding="0" bordercolor="#6666CC" border="0" bgcolor="#FFFFFF" style="margin-top:0px;">
						  <tbody><tr>
							<td style="font-size:8px; padding-left:2px;">FOR OFFICE USE ONLY</td>
						  </tr>
						</tbody></table></td>
					  </tr>
					  <tr height="90px;">
						<td>&nbsp;</td>
					  </tr>
					</tbody></table></td>
				  </tr>

				  <tr>
					<td style="border-bottom:dashed; border-bottom-color:#005595; border-bottom-width:3px;">&nbsp;</td>
				  </tr>

				  <tr>
					<td><p align="justify" class="para_text"><strong>If you are appearing as agent for the defendant, please complete the following:</strong></p></td>
				  </tr>

				  <tr>
					<td class="para_text">I,
					  <input type="text" name="AgentName" id="AgentName" value="Cate Von Smith-Bauder" style="width:540px; font-size:10px; color:#527ab8; background-color:#F0F0F0;" readonly="">
					  <br>
					  acknowledge that the person named as the defendant above has authorized me to file the Notice of Intention to Appear in court.</td>
				  </tr>

				  <tr>
					<td>
					<table width="100%" cellspacing="0" cellpadding="0" border="0">
						<tbody>
						<tr>
						  <td><table width="100%" cellspacing="0" cellpadding="0" border="0">
							  <tbody><tr>
								<td width="25%" valign="top" class="para_text">Check <img src="images/mark.jpg" alt=""> One</td>
								<td width="8%" valign="top" align="right" class="para_text"><input type="radio" name="appearing" id="appearing" value="I will" disabled=""></td>
								<td width="11%" valign="top" align="left" class="para_text">I will </td>
								<td width="8%" valign="top" class="para_text"><input type="radio" name="appearing" id="appearing2" value="I will not be appearing" checked="checked"></td>
								<td width="48%" valign="top" align="left" class="para_text">I will not be appearing on behalf of the defendant.</td>
							  </tr>
						  </tbody></table></td>
						</tr>
					  	</tbody>
					</table>
					</td>
				</tr>
				
				<tr>
					<td style="padding-top:15px;">
					<table width="100%" cellspacing="0" cellpadding="0" border="0">
						<tbody><tr>
						  <td colspan="2" class="text">CURRENT MAILING ADDRESS OF AGENT</td>
						</tr>

						<tr>
						  <td colspan="2" class="text_box"><input type="text" name="AgentMailingAddress1" id="AgentMailingAddress1" value="1235 Bay Street" style="width:99%;background-color:#F0F0F0;" readonly=""></td>
						</tr>

						<tr>
						  <td width="51%" class="text">APT./SUITE</td>
						  <td width="49%" class="text">CITY</td>
						</tr>

						<tr>
						  <td class="text_box"><input type="text" name="Suite1" id="Suite1" value="7th floor, Suite 700" style="width:94%;background-color:#F0F0F0;" readonly=""></td>
						  <td class="text_box"><input type="text" name="City1" id="City1" value="Toronto" style="width:98%;background-color:#F0F0F0;" readonly=""></td>
						</tr>

						<tr>
						  <td class="text">PROVINCE</td>
						  <td class="text">POSTAL CODE</td>
						</tr>
						<tr>
						  <td class="text_box"><input type="text" name="Province1" id="Province1" value="Ontario" style="width:94%;background-color:#F0F0F0;" readonly=""></td>
						  <td class="text_box"><input type="text" name="PostalCode1" id="PostalCode1" value="M5R 3K4" style="width:98%;background-color:#F0F0F0;" readonly=""></td>
						</tr>
						<tr>
						  <td class="text">DAYTIME TELEPHONE NUMBER</td>
						  <td>&nbsp;</td>
						</tr>
						<tr>
						  <td colspan="2" class="text_box"><input type="text" name="TelePhone1" id="TelePhone1" value="1-866-431-5763" style="width:99%;background-color:#F0F0F0;" maxlength="50" readonly=""></td>
						</tr>
						<tr>
						  <td class="text_small">WHITE - COURT</td>
						  <td class="text_small">YELLOW - DEFENDANT</td>
						</tr>
					  </tbody>
					  </table></td>
				</tr>
				<tr>
					<td>&nbsp;</td>
				</tr>				
			</tbody>
		</table>
		</td>
	</tr>
	</tbody>
</table>
</div>
<div style="margin:0 auto; text-align:center;margin-top:20px;">
  <button type="submit" class="btn" onclick="PrintDoc()">Print</button>
  <!--<button type="submit" class="btn" onclick="PrintPreview()">Print Preview</button>-->
</div>

<script type="text/javascript">

/*--This JavaScript method for Print command--*/

    function PrintDoc() {

      /*var toPrint = document.getElementById('print_preview');
      var popupWin = window.open('', '_blank', 'width=400,height=800,location=no,left=200px');
      popupWin.document.open();
      popupWin.document.write('<html><title>::Preview::</title></head><body onload="window.print()">')
      popupWin.document.write(toPrint.innerHTML);
      popupWin.document.write('</html>');
      popupWin.document.close();*/


            var divContents = document.getElementById('print_preview');
            var printWindow = window.open('', '', 'height=400,width=800');
            printWindow.document.write('<html><head><title>file4599</title><link rel="stylesheet" href="<?php echo base_url().'assets/css/print.css'?>">');
            printWindow.document.write('</head><body >');
            printWindow.document.write(divContents.innerHTML);
            printWindow.document.write('</body></html>');
            printWindow.document.close();
            printWindow.print();
       

    }

/*--This JavaScript method for Print Preview command--*/

    /*function PrintPreview() {
        var toPrint = document.getElementById('print_preview');
        var popupWin = window.open('', '_blank', 'width=350,height=150,location=no,left=200px');
        //popupWin.document.open();
        popupWin.document.write('<html><title>::Print Preview::</title></head><body">')
        popupWin.document.write(toPrint.innerHTML);
        popupWin.document.write('</html>');
        popupWin.document.close();
    }*/

</script>
</body>
</html>