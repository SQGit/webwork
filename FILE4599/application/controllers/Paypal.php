<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Paypal extends CI_Controller 
{
     function  __construct(){
        parent::__construct();
        $this->load->library('paypal_lib');
        $this->load->model('main_model');
     }
     
     function success(){
        //get the transaction data

        $paypalInfo = $this->input->post();
		$this->ipn();
        
        if(isset($paypalInfo["txn_id"]))
        {
            $data['ticket_id'] = $paypalInfo['item_number']; 
            $data['txn_id'] = $paypalInfo["txn_id"];
            $data['payment_amt'] = $paypalInfo["payment_gross"];
            $data['currency_code'] = $paypalInfo["mc_currency"];
            $data['status'] = $paypalInfo["payment_status"];

        
            $data['ticket_details'] = $this->main_model->getRows($data['ticket_id']);      
            //pass the transaction data to view
            $data['ticket_points'] = $this->main_model->get_ticket_points();
            $this->load->view('includes/header');
            $this->load->view('paypal/success', $data);
            $this->load->view('includes/consult_form',$data);
            $this->load->view('includes/footer');
        }
        else
        {
            redirect(base_url().'main/index', 'refresh');
        }
        
     }
     
     function cancel(){

        $data['ticket_points'] = $this->main_model->get_ticket_points();
        $this->load->view('includes/header');
        $this->load->view('paypal/cancel');
        $this->load->view('includes/consult_form',$data);
        $this->load->view('includes/footer');
     }
     

    function ipn(){    
        
        $paypalInfo = $this->input->post();
        $im_debut_ipn=true;

        if ($this->infotuts_ipn($im_debut_ipn)) {

            // if paypal sends a response code back let's handle it
            if ($im_debut_ipn == true) {
                $sub = 'PayPal IPN Debug Email Main';
                $msg = print_r($paypalInfo, true);
                $aname = 'infotuts';
            //mail send
            //mail("siva@sqindia.net",$sub,$msg);
            }

            // process the membership since paypal gave us a valid
            
            $data['ticket_id']    = $paypalInfo["item_number"];
            $data['txn_id']    = $paypalInfo["txn_id"];
            $data['payment_amt'] = $paypalInfo["payment_gross"];
            $data['currency_code'] = $paypalInfo["mc_currency"];
            $data['payer_email'] = $paypalInfo["payer_email"];
            $data['payment_status']    = $paypalInfo["payment_status"];

            //insert payment data to database
            $this->main_model->insertTransaction($data);
            //update payment status in database
            $this->main_model->update_status($data);
        }
    }

    function infotuts_ipn($im_debut_ipn) {

        $paypalInfo = $this->input->post();
        
        $paypal_url = $this->paypal_lib->paypal_url; 
        
        // parse the paypal URL
        $url_parsed = parse_url($paypal_url);        

        $hostname = $url_parsed['host'];
            
        if (!preg_match('/paypal\.com$/', $hostname)) {
            $ipn_status = 'Validation post isn\'t from PayPal';
            if ($im_debut_ipn == true) {
            // mail test
            }
            return false;
        }   

        $post_string = '';
        
        foreach ($this->input->post() as $field => $value)
        {

            $post_string .= $field . '=' . urlencode(stripslashes($value)) . '&';

        }
        
        $post_string.="cmd=_notify-validate"; // append ipn command
        
        //get the correct paypal url to post request to
        $paypal_mode_status = $im_debut_ipn; //get_option('im_sandbox_mode');
        
        if ($paypal_mode_status == true)
        {
            
            $fp = fsockopen('ssl://www.sandbox.paypal.com', "443", $err_num, $err_str, 60);
        
        }
        else
        {
        
            $fp = fsockopen('ssl://www.paypal.com', "443", $err_num, $err_str, 60);
        
        }

        $ipn_response = '';

        if (!$fp) 
        {
            // could not open the connection.  If loggin is on, the error message will be in the log.
            $ipn_status = "fsockopen error no. $err_num: $err_str";
            if ($im_debut_ipn == true) 
            {
                echo 'fsockopen fail';
            }
            return false;
        }
        else
        {
            // Post the data back to paypal
            fputs($fp, "POST $url_parsed[path] HTTP/1.1\r\n");
            fputs($fp, "Host: $url_parsed[host]\r\n");
            fputs($fp, "Content-type: application/x-www-form-urlencoded\r\n");
            fputs($fp, "Content-length: " . strlen($post_string) . "\r\n");
            fputs($fp, "Connection: close\r\n\r\n");
            fputs($fp, $post_string . "\r\n\r\n");

            //loop through the response from the server and append to variable
            while (!feof($fp)) {
                $ipn_response .= fgets($fp, 1024);
            }
            fclose($fp); // close connection
        }

        //Invalid IPN transaction.  Check the $ipn_status and log for details.
        if(!preg_match("/VERIFIED/s", $ipn_response))
        {
            $ipn_status = 'IPN Validation Failed';

            if ($im_debut_ipn == true)
            {
                echo 'Validation fail';
                print_r($_REQUEST);
            }
            return false;
        }
        else
        {
            $ipn_status = "IPN VERIFIED";
            if ($im_debut_ipn == true) {
                echo 'SUCCESS';
            }
            return true;
        }
    }


}