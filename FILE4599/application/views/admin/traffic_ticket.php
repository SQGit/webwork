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
<table  class="parent" cellspacing="0" cellpadding="0" border="0" align="center" style="padding:10px;">
  <tbody>
          <tr>
            <td align="center" style="font-size:14px;">
            <strong>NOTICE OF INTENTION TO APPEAR<br>AVIS D’INTENTION DE COMPARAîTRE</strong></td>
          </tr>
          <tr>
            <td><table width="100%" cellspacing="0" cellpadding="0" border="0">
                <tbody><tr>
                  <td width="21%" style="font-size:12px;">Ontario Court Of Justice <br>
                    Cour de justice de l’Ontario <br>
                    PROVINCE OF ONTARIO <br>
                    Province de l’Ontario </td>
                  <td width="58%">&nbsp;</td>
                  <td width="21%" style="font-size:12px;"><strong><i>Form / Formule 7</i></strong><br>
                    Provincial Offences Act<br>
                    Loi sur les infractions provinciales<br>
                    Reg. / Règl. 950</td>
                </tr>
              </tbody></table></td>
          </tr>
          <tr>
            <td align="center">&nbsp;</td>
          </tr>
          <tr>
            <td align="center">Please Print Clearly / Veuillez écrire clairment en lettres moulées</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td class="text1">TAKE NOTICE THAT I
              <input type="text" class="required" style="width:75%;" value="<?php echo $tickets_detail->customer_name;?>" readonly></td>
          </tr>
          <tr>
            <td class="text1">VEUILLEZ PRENDRE AVIS QUE JE, SOUSSIGNÉ(E) (defendant’s name / nom du défendeur/de la défenderesse) Of </td>
          </tr>
          <tr>
            <td><table width="100%" cellspacing="0" cellpadding="0" border="0">
                <tbody><tr>
                  <td width="40%" class="text">Current address / adresse actuelle</td>
                  <td width="4%" class="text">&nbsp;</td>
                  <td class="text">Street / rue</td>
                </tr>
                <tr>
                  <td class="text_box" colspan="3"><input type="text" style="width:98%;" value="<?php echo $tickets_detail->address;?>" readonly></td>
                </tr>
                <tr>
                  <td class="text">Apt. / app.</td>
                  <td class="text">&nbsp;</td>
                  <td class="text">Municipality / municipalité</td>
                </tr>
                <tr>
                  <td class="text_box"><input type="text" style="width:94%; background-color: #FFFFE1;" value="<?php echo $tickets_detail->apt;?>" readonly></td>
                  <td class="text_box">&nbsp;</td>
                  <td class="text_box"><input type="text" style="width:96%;" value="<?php echo $tickets_detail->city;?>" readonly></td>
                </tr>
                <tr>
                  <td class="text">Province</td>
                  <td class="text">&nbsp;</td>
                  <td class="text">Postal Code / code postal</td>
                </tr>
                <tr>
                  <td class="text_box"><input type="text" style="width:94%;" value="<?php echo $tickets_detail->province;?>" readonly></td>
                  <td class="text_box">&nbsp;</td>
                  <td class="text_box"><input type="text" style="width:96%;" value="<?php echo $tickets_detail->pin_code;?>" readonly></td>
                </tr>
              </tbody></table></td>
          </tr>
          <tr>
            <td>
            <table width="100%" cellspacing="1" cellpadding="1" border="0">
                <tbody>
                <tr>
                  <td colspan="2" height="20" align="right"><span>ICON: </span>
                    <input type="text" style="background-color:#FFFFE1; width:182px;" size="25"value="<?php echo $tickets_detail->icon;?>" readonly></td>
                </tr>

                <tr>
                  <td width="69%">wish to give notice of my intention to appear in court to enter a plea of not guilty at the time and place set for the trial respecting the charge set out in the Offence Notice or Parking Infraction Notice</td>
                
                  <td width="31%">
                    <input type="text" style="width:182px;background-color:#FFFFE1;" size="25" value="<?php echo $tickets_detail->notice_number;?>" readonly>
                    <br>
                    (offence number / numéro d’infaction)</td>
                </tr>

                <tr>
                  <td>désire aviser de mon intention de comparaître devant le tribunal pour inscrire un plaidoyer de non-culpabilité à l’heure et au lieu prévus pour le procès en réponse à l’accusation énoncée dans l’avis d’infraction ou l'avis d'infraction de stationnement</td>
                  <td><label>
                    <input type="text" style="width:182px; background-color:#FFFFE1" value="<?php echo $tickets_detail->offence_date;?>" readonly>
                    
                    </label>
                    <br>
                    (offence date / date de l’infraction)</td>
                </tr>
              </tbody></table></td>
          </tr>
          <tr>
            <td><hr style="height:1px; color:#000000;"></td>
          </tr>
          <tr>
            <td><table width="100%" cellspacing="0" cellpadding="0" border="0">
                <tbody><tr>
                  <td width="49%" style="padding-right:7px;">FOR ANY OFFENCE EXCEPT s.s. 144(18.1) OF THE HTA COMPLETE THIS SECTION:</td>
                  <td width="51%" style="padding-left:7px;"><i>POUR TOUTE INFRACTION NON VISéE AU PARAGRAPHE 144 (18.1) DU CODE DE LA ROUTE, REMPLIR CETTE SECTION:</i></td>
                </tr>
                <tr>
                  <td style="padding-right:7px;">I intend to challenge the Provincial Offences Officer’s evidence. I request that the officer attend the trial</td>
                  <td style="padding-left:7px;"><i>J’ai l’intention de contester la preuve de l’agent des infractions provinciales. Je demande que l’agent assiste au procès</i></td>
                </tr>
                <tr>
                  <td><table width="100%" cellspacing="0" cellpadding="0" border="0">
                      <tbody><tr>
                        <td width="76%">&nbsp;</td>
                        <td width="24%"><label>
                            <input type="checkbox" <?php if($tickets_detail->offence_accept == '0'){echo "checked";}?>>
                          <strong>No / Non</strong></label></td>
                      </tr>
                    </tbody></table></td>
                  <td><table width="100%" cellspacing="0" cellpadding="0" border="0">
                      <tbody><tr>
                        <td width="61%"><input type="checkbox" <?php if($tickets_detail->offence_accept == '1'){echo "checked";}?>>
                        <strong>Yes</strong> / Oui</td>
                        <td width="39%"><label></label></td>
                      </tr>
                    </tbody></table></td>
                </tr>
              </tbody></table></td>
          </tr>
          <tr>
            <td><hr style="height:1px; color:#000000;"></td>
          </tr>
          <tr>
            <td><table width="100%" cellspacing="0" cellpadding="0" border="0">
                <tbody><tr>
                  <td width="49%" style="padding-right:7px;"><strong>Note:</strong><br>
                    If you have been charged with an offence under s.s. 144(18.1) of the Highway Traffic Act (red light running/owner), s. 205.20 of the Highway Traffic Act provides that you must apply to the justice at trial if you wish to compel the attendance of the Provincial Offences Officer who issued the Certificate of Offence or who certified the photographs to be tendered at your trial.</td>
                  <td width="51%" style="padding-left:7px;"><strong>Remarque:</strong><br>
                    <i>Si vous avez été accusé(e) d’une infraction visée au paragraphe 144 (18.1) du Code de la route (passage au feu rouge/propriétaire), l’article 205.20 du Code de la route prévoit que vous devez vous adresser au juge du procès si vous désirez obtenir la comparution de l’agent des infractions provinciales qui a délivré le procès-verbal d’infraction ou qui a certifié les photos qui seront présentées en preuve lors de votre procès.</i></td>
                </tr>
              </tbody></table></td>
          </tr>
          <tr>
            <td><hr style="height:1px; color:#000000;"></td>
          </tr>
          <tr>
            <td><table width="100%" cellspacing="0" cellpadding="0" border="0">
                <tbody><tr>
                  <td width="49%"><label>
                    <input type="checkbox" <?php if($tickets_detail->trial_lang == '1'){echo "checked";}?>>
                    </label>
                    I intend to appear in court to enter a plea at the time and place set for the trial and I wish that it be held in the English language</td>
                  <td width="51%"><label>
                    <input type="checkbox" <?php if($tickets_detail->trial_lang == '0'){echo "checked";}?>>
                    </label>
                    <i>J’ai l’intention de comparaître devant le tribunal pour inscrire un plaidoyer à l’heure et au lieu prévus pour le procès et je désire que le procès se déroule en français.</i></td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>I request a
                    <label>
                    <input type="text" style="background-color:#F4F4F4; width:75%;" value="<?php echo $tickets_detail->trial_lang_ip;?>" readonly>
                    </label>
                    language interpreter for the trial. (leave blank if inapplicable)</td>
                  <td><i>Je demande l’aide d’un interprète de langue
                    <label>
                    <input type="text" style="background-color:#F4F4F4; width:75%;" id="fr_languageinterpreter" name="fr_languageinterpreter">
                    </label>
                    pour le procès. (À remplir s’il y a lieu)</i></td>
                </tr>
              </tbody></table></td>
          </tr>
          <tr>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td><hr style="height:1px; color:#000000;"></td>
          </tr>
          <tr>
            <td><table width="100%" cellspacing="1" cellpadding="1" border="0">
                <tbody><tr>
                  <td width="49%"><strong>Note:</strong> If you fail to <strong>notify</strong> the court office of <strong>address changes</strong> you may not receive important notices e.g., your Notice of Trial. You may be convicted<br>
                  in your absence if you do not attend the trial.</td>
                  <td width="51%"><strong>Remarque:</strong> <i>Si vous omettez de<strong> prévenir</strong> le greffe du tribunal de tout <strong>changement d’adresse</strong>, vous pourriez ne pas recevoir d’importants avis (par ex., votre avis de procès). Vous pourriez être déclaré(e) coupable en votre absence si vous n’assistez pas au procès.</i></td>
                </tr>
                <tr>
                  <td><label>
                    <input type="checkbox" <?php if($tickets_detail->trial_lang == '1'){echo "checked";}?>>
                    </label>
                    I intend to appear in court to enter a plea at the time and place set for the trial and I wish that it be held in the English language.<br></td>
                  <td><label>
                    <input type="checkbox" <?php if($tickets_detail->trial_lang == '0'){echo "checked";}?>>
                    </label>
                    <i>J’ai l’intention de comparaître devant le tribunal pour inscrire un plaidoyer à l’heure et au lieu prévus pour le procès et je désire que le procès se déroule en français.</i></td>
                </tr>
                <tr>
                  <td><label>
                    <input type="text" style="width:350px;background-color:#F4F4F4;" readonly>
                    <br>
                    </label>
                    (signature of defendant or representative / signature du défendeur/de la défenderesse ou du représentant/de la représentante)</td>
                  <td valign="top"><label>
                    <input type="text" style="background-color:#F4F4F4; width:75%;" value="<?php echo $tickets_detail->filed_date;?>" readonly>
                    </label>
                    <br>
                    date</td>
                </tr>
              </tbody></table></td>
          </tr>
          <tr>
            <td><hr style="height:1px; color:#000000;"></td>
          </tr>
          <tr>
            <td><table width="100%" cellspacing="0" cellpadding="0" border="0">
                <tbody><tr>
                  <td class="text" colspan="3">Representative’s Name &amp; Address/ Nom et adresse du représentant/de la représentante</td>
                </tr>
                <tr>
                  <td class="text_box" colspan="3"><input type="text" style="width:708px;background-color:#F4F4F4;" value="Get Legal Help" id="RepresentativeDetails" name="RepresentativeDetails"></td>
                </tr>
                <tr>
                  <td width="40%" class="text">Current address / adresse actuelle</td>
                  <td width="4%" class="text">&nbsp;</td>
                  <td class="text">Street / rue</td>
                </tr>
                <tr>
                  <td class="text_box"><input type="text" style="width:320px;background-color:#F4F4F4;" value="1235 Bay Street, 7th floor. Suite 700" id="CurrentAddress1" name="CurrentAddress1"></td>
                  <td class="text_box">&nbsp;</td>
                  <td class="text_box"><input type="text" style="width:320px;background-color:#F4F4F4;" id="Street1" name="Street1"></td>
                </tr>
                <tr>
                  <td class="text">Apt. / app.</td>
                  <td class="text">&nbsp;</td>
                  <td class="text">Municipality / municipalité</td>
                </tr>
                <tr>
                  <td class="text_box"><input type="text" style="width:320px;background-color:#F4F4F4;" id="Apt1" name="Apt1"></td>
                  <td class="text_box">&nbsp;</td>
                  <td class="text_box"><input type="text" style="width:320px;background-color:#F4F4F4;" value="Toronto" id="Municipality1" name="Municipality1"></td>
                </tr>
                <tr>
                  <td class="text">Province</td>
                  <td class="text">&nbsp;</td>
                  <td class="text">Postal Code / code postal</td>
                </tr>
                <tr>
                  <td class="text_box"><input type="text" style="width:320px;background-color:#F4F4F4;" value="Ontario" id="Province1" name="Province1"></td>
                  <td class="text_box">&nbsp;</td>
                  <td class="text_box"><input type="text" style="width:320px;background-color:#F4F4F4;" value="M5R 3K4" id="PostalCode1" name="PostalCode1"></td>
                </tr>
              </tbody></table></td>
          </tr>
          <tr>
            <td>&nbsp;</td>
          </tr>
          
          <tr>
            <td>&nbsp;</td>
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