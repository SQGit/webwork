<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH . 'libraries/REST_Controller.php';

class Email extends REST_Controller {
	
	 function __construct()
	{	
		parent::__construct();
        $this->load->helper('url','email');
      	//$this->load->database();	
        $this->load->library('email');
		$this->load->helper('file');
		$this->load->helper('string');
	}


public function billpayment_post()
{

//http://www.passafaila.com/jk/email/billpayment

//{"from_mailid":{"username":"sqtesting2016@gmail.com","password":"P@$$word@123"}, "To_mailid":{"mail_id":"siva@sqindia.net","cc":"siva@sqindia.net"}, "body":{"id_no":"1","name":"tulasi","phone_no":"9952081115","email_id":"tulasi@gmail.com","address":"chennai","plan_mode":"plan1","amount":"200","paid_mode":"yes"}, "Signature":{"Regards":"Jk products"}}
  
	$this->data = json_decode(file_get_contents('php://input'));
	
	  //configure email settings
      $config['protocol'] = 'smtp';
      $config['smtp_host'] = 'ssl://smtp.googlemail.com'; //smtp host name
      $config['smtp_port'] = '465'; //smtp port number
      $config['smtp_user'] = $this->data->from_mailid->username;
      $config['smtp_pass'] = $this->data->from_mailid->password; //$from_email password
      //$config['smtp_user'] = 'sqtesting2016@gmail.com';
      //$config['smtp_pass'] = 'P@$$word@123'; //$from_email password
      $config['mailtype'] = 'html';
      $config['charset'] = 'iso-8859-1';
      $config['wordwrap'] = TRUE;
      $config['newline'] = "\r\n"; //use double quotes

      $this->email->initialize($config);
      
      $subject = "Message";
	  $regards = "With Regards,<br/>Sai Shakthy Networks (JK Broadband),<br/># 198-GST Road,<br/>Guduvanchery.<br/>Contact: 9750931200, 9750931201<br/>landline: 044-27461997<br/>email:saishakthynetworks@gmail.com<br/><br/>";
      $message = "ID No  :".$this->data->body->id_no. "<br/> Name :".$this->data->body->name. "<br/> Phone Number:".$this->data->body->phone_no. "<br/> Eamil id :" .$this->data->body->email_id. "<br/> Address: ".$this->data->body->address. "<br/>Plan Mode : ".$this->data->body->plan_mode. "<br/> Amount : ".$this->data->body->amount. "<br/>Paid Mode :" .$this->data->body->paid_mode."<br/><br/><br/>".$regards;
      
	  //send mail
      //$this->email->from("sqtesting2016@gmail.com", 'JK');
	  $this->email->from($this->data->from_mailid->username, 'JK');
      $this->email->to($this->data->To_mailid->mail_id);
      $this->email->cc($this->data->To_mailid->cc);
      $this->email->subject($subject);
      $this->email->message($message);
      $success = $this->email->send();

      if ($success)
        {
			$response['status'] = "success";  
        }
		else
	    {	
			$response['status'] = "fail";
	    }
		
		$this->response($response, REST_Controller::HTTP_OK);
	  
}

public function report_post()
{

//http://www.passafaila.com/jk/email/report

//{"from_mailid":{"username":"sqtesting2016@gmail.com","password":"P@$$word@123"} ,"To_mailid":{"mail_id":"siva@sqindia.net","cc":"siva@sqindia.net"},"body":{"id_no":"1","name":"tulasi","phone_no":"9952081115","plan":"plan2","email":"tulasi@gmail.com","payment":"paid/unpaid"},"Signature":{"Regards":"Jk products"}}
  $this->data = json_decode(file_get_contents('php://input'));

      //configure email settings
      $config['protocol'] = 'smtp';
      $config['smtp_host'] = 'ssl://smtp.googlemail.com'; //smtp host name
      $config['smtp_port'] = '465'; //smtp port number
      $config['smtp_user'] = $this->data->from_mailid->username;
      $config['smtp_pass'] = $this->data->from_mailid->password; //$from_email password
      //$config['smtp_user'] = 'sqtesting2016@gmail.com';
      //$config['smtp_pass'] = 'P@$$word@123'; //$from_email password
      $config['mailtype'] = 'html';
      $config['charset'] = 'iso-8859-1';
      $config['wordwrap'] = TRUE;
      $config['newline'] = "\r\n"; //use double quotes

      $this->email->initialize($config);
      
      $subject = "Message";
	  $regards = "With Regards,<br/>Sai Shakthy Networks (JK Broadband),<br/># 198-GST Road,<br/>Guduvanchery.<br/>Contact: 9750931200, 9750931201<br/>landline: 044-27461997<br/>email:saishakthynetworks@gmail.com<br/><br/>";
      $message = "ID No  :".$this->data->body->id_no. "<br/> Name :".$this->data->body->name. "<br/> Phone Number:".$this->data->body->phone_no. "<br/>Plan Mode : ".$this->data->body->plan. "<br/> Eamil id :" .$this->data->body->email."<br/>Payment :" .$this->data->body->payment."<br/><br/><br/>".$regards;
      //send mail
      //$this->email->from("sqtesting2016@gmail.com", 'JK');
	  $this->email->from($this->data->from_mailid->username, 'JK');
      $this->email->to($this->data->To_mailid->mail_id);
      $this->email->cc($this->data->To_mailid->cc);
      $this->email->subject($subject);
      $this->email->message($message);
      $success = $this->email->send();

        if ($success)
        {
			$response['status'] = "success";                
        }
		else
	    {	
			$response['status'] = "fail";
	    }
		
		$this->response($response, REST_Controller::HTTP_OK);
}
  
public function sales_report_post()
{
//http://www.passafaila.com/jk/email/sales_report

//{"report":{"from_mailid":{"username":"sqtesting2016@gmail.com","password":"P@$$word@123"}, "To_mailid":{"mail_id":"siva@sqindia.net","cc":"siva@sqindia.net"}, "head": ["Ref Id","User Id","Name","Plan"], "body": { "data":["101","102","103"], "user_id":["JKBB1001", "JKBB1002", "JKBB1003"], "name":["name1","name2","name3"], "mail":["plan1","plan2","plan3"] }, "report_cost":"Rs700", "bill_date":"01/08/2016" } }

  $this->data = json_decode(file_get_contents('php://input'));
  
	//print_r($this->data);	
	//echo $this->data->report->head[0];
	//echo $this->data->report->body->data[0];
	//echo $this->data->report->body->name[0];
	//echo $this->data->report->body->plan[0];
	//echo $this->data->report->report_cost;
	
     //configure email settings
      $config['protocol'] = 'smtp';
      $config['smtp_host'] = 'ssl://smtp.googlemail.com'; //smtp host name
      $config['smtp_port'] = '465'; //smtp port number
      $config['smtp_user'] = $this->data->report->from_mailid->username;
      $config['smtp_pass'] = $this->data->report->from_mailid->password; //$from_email password
      //$config['smtp_user'] = 'sqtesting2016@gmail.com';
      //$config['smtp_pass'] = 'P@$$word@123'; //$from_email password
      $config['mailtype'] = 'html';
      $config['charset'] = 'iso-8859-1';
      $config['wordwrap'] = TRUE;
      $config['newline'] = "\r\n"; //use double quotes

      $this->email->initialize($config);
      
      $subject = "Sales Report";

      $message = $this->load->view('report', $this->data, true);
      //echo $message;
      
      //$this->email->from("sqtesting2016@gmail.com", 'JK');
	  $this->email->from($this->data->report->from_mailid->username, 'JK');
      $this->email->to($this->data->report->To_mailid->mail_id);
      $this->email->cc($this->data->report->To_mailid->cc);
      $this->email->subject($subject);
      $this->email->message($message);
      $success = $this->email->send();
	  //$msg = $this->email->message($message);
        if ($success)
        {
			$response['status'] = "success";                
        }
		else
	    {	
			$response['status'] = "fail";
	    }
		
		$this->response($response, REST_Controller::HTTP_OK);
}

public function collection_report_post()
{
//http://www.passafaila.com/jk/email/collection_report

//{"report":{"from_mailid":{"username":"sqtesting2016@gmail.com","password":"P@$$word@123"}, "To_mailid":{"mail_id":"siva@sqindia.net","cc":"siva@sqindia.net"}, "head": ["Ref Id","User Id","Name","Plan","Plan Amount", "Phone No.", "Mail ID"], "body": { "data":["101","102","103"], "user_id":["JKBB1001", "JKBB1002", "JKBB1003"], "name":["name1","name2","name3"], "plan":["plan1","plan2","plan3"], "plan_amt":["plan1","plan2","plan3"], "phone":["979028070707","plan2","plan3"], "email":["plan1","plan2","plan3"] }, "today_collection":"Rs700", "reminder_date":"01/08/2016" } }

  $this->data = json_decode(file_get_contents('php://input'));
  
	//print_r($this->data);	
	//echo $this->data->report->head[0];
	//echo $this->data->report->body->data[0];
	//echo $this->data->report->body->name[0];
	//echo $this->data->report->body->plan[0];
	//echo $this->data->report->report_cost;
	
     //configure email settings
      $config['protocol'] = 'smtp';
      $config['smtp_host'] = 'ssl://smtp.googlemail.com'; //smtp host name
      $config['smtp_port'] = '465'; //smtp port number
      $config['smtp_user'] = $this->data->report->from_mailid->username;
      $config['smtp_pass'] = $this->data->report->from_mailid->password; //$from_email password
      //$config['smtp_user'] = 'sqtesting2016@gmail.com';
      //$config['smtp_pass'] = 'P@$$word@123'; //$from_email password
      $config['mailtype'] = 'html';
      $config['charset'] = 'iso-8859-1';
      $config['wordwrap'] = TRUE;
      $config['newline'] = "\r\n"; //use double quotes

      $this->email->initialize($config);
      
      $subject = "Today Collection";

      $message = $this->load->view('collection_report', $this->data, true);
      //echo $message;
      
      //$this->email->from("sqtesting2016@gmail.com", 'JK');
	  $this->email->from($this->data->report->from_mailid->username, 'JK');
      $this->email->to($this->data->report->To_mailid->mail_id);
      $this->email->cc($this->data->report->To_mailid->cc);
      $this->email->subject($subject);
      $this->email->message($message);
      $success = $this->email->send();
	  $msg = $this->email->message($message);
        if ($success)
        {
			$response['status'] = "success";                
        }
		else
	    {	
			$response['status'] = "fail";
	    }
		
		$this->response($response, REST_Controller::HTTP_OK);
}


public function unpaid_mail_post()
{

//http://www.passafaila.com/jk/email/unpaid_mail

//{"report":{"from_mailid":{"username":"sqtesting2016@gmail.com","password":"P@$$word@123"}, "to_user":["Sivaraj","sivaraja"], "To_mailid":["siva@sqindia.net","siva@sqindia.net"]}}

  $this->data = json_decode(file_get_contents('php://input'));
  //print_r ($this->data);
     //configure email settings
      $config['protocol'] = 'smtp';
      $config['smtp_host'] = 'ssl://smtp.googlemail.com'; //smtp host name
      $config['smtp_port'] = '465'; //smtp port number
      $config['smtp_user'] = $this->data->report->from_mailid->username;
      $config['smtp_pass'] = $this->data->report->from_mailid->password;
      //$config['smtp_user'] = 'sqtesting2016@gmail.com';
      //$config['smtp_pass'] = 'P@$$word@123'; //$from_email password
      $config['mailtype'] = 'html';
      $config['charset'] = 'iso-8859-1';
      $config['wordwrap'] = TRUE;
      $config['newline'] = "\r\n"; //use double quotes

      $this->email->initialize($config);
      
      $subject = "Reminder";

      //$message = $this->load->view('unpaid', $this->data, true);
      //echo $message;
      
	  //foreach ($this->data->report->To_mailid as $name => $address)
	  $user_len = count($this->data->report->to_user);
	  for($i=0; $i<$user_len; $i++)
	  {
		$this->email->clear();
		//$data['name'] = $name;
		$data['name'] = $this->data->report->to_user[$i];
		$this->email->from($this->data->report->from_mailid->username, 'JK');
		$this->email->to($this->data->report->To_mailid[$i]);
		$this->email->subject($subject);
		$message = $this->load->view('unpaid', $data, true);
		$this->email->message($message);
		$success = $this->email->send();
	  }	 
	 if ($success)
        {
			$response['status'] = "success";                
        }
		else
	    {	
			$response['status'] = "fail";
	    }
		
		$this->response($response, REST_Controller::HTTP_OK);
}

public function token_req_post()
{
//http://www.passafaila.com/jk/email/token_req

//{"report":{"from_mailid":{"username":"sqtesting2016@gmail.com","password":"P@$$word@123"}, "To_mailid":{"mail_id":"siva@sqindia.net"}}}
 	
	
	$this->data = json_decode(file_get_contents('php://input'));

	$data = json_encode($this->data);
      
	if (!write_file(APPPATH.'mail_data.json', $data))
    {
        $this->response("error", REST_Controller::HTTP_OK);
    }
    else
    {        
		$token = random_string('alnum', 16);
			
			if (!write_file(APPPATH.'token.txt', $token))
			{
				$this->response("error", REST_Controller::HTTP_OK);
			}
			else
			{
				//$data_token = array('token' => $token);
				//$json_token = json_encode($data_token);
				
				$this->response($token, REST_Controller::HTTP_OK);		
			}
    }	
}

function file_attach_post()
{
	
	//http://www.passafaila.com/jk/email/file_attach
	/*
	Content-Type: multipart/form-data
	authorization-token: 52TLN9tcd0eYsqPg
	*/
	
	//get headers
	$headers = getallheaders();
	//$headers = apache_request_headers();
	//print_r($headers);
	//echo "<br/>";
	//echo $headers['Authorization-Token'];
	
	//if token is set		
	if(isset($headers['Authorization-Token']))
	{
		//read token data from file to match
		$token_data = read_file(APPPATH.'token.txt');
		
		//check token is valid or not
		if($headers['Authorization-Token'] == $token_data)
		//if token is valid
		{	
			//set default time zone
			date_default_timezone_set('Asia/Kolkata');
			//check req method and content type
			if($_SERVER['REQUEST_METHOD']=='POST')
			{
				//check uploaded file size
				if($_FILES['fileUpload']['size'] != 0)
				{
					//create upload directory if not exist
					if (!is_dir('./uploads/')) {
						mkdir('./uploads/', 777, TRUE);
					}
					$this->load->library('upload');
					
					$upload_dir = './uploads/';  //set upload path
					$config['upload_path']   = $upload_dir;
					$config['allowed_types'] = 'csv|gif|jpg|png|jpeg';
					$config['file_name']     = 'backup_'.date("Ymd_His");
					$config['overwrite']     = false;
					$config['max_size']      = '5120';
					
					$this->upload->initialize($config);
					
					//check files uploaded or not
					if (!$this->upload->do_upload('fileUpload'))
					{
						//if files not uploaded
						$error = array('msg' => 'Error in uploading file');
						$json_error = json_encode($error);
						$this->response($json_error, REST_Controller::HTTP_OK);
						//echo $this->upload->display_errors();
						//echo $this->upload->file_name;
						//echo "not ok";
					}
					else
					{
						//echo  "ok";
						//if files uploaded
						$this->upload_data['file'] =  $this->upload->data();
						//$success = array('msg' => $this->upload->file_name.' upload success');
						//$json_success = json_encode($success);
						//$this->response($json_success, REST_Controller::HTTP_OK);
						
						//read mail data from file to send mail
						$mail_data = read_file(APPPATH.'mail_data.json');
						//convert to array
						$this->mail_data = json_decode($mail_data);
						
						//print_r($this->mail_data);
						
						$this->load->library('email');
						//configure email settings
						$config['protocol'] = 'smtp';
						$config['smtp_host'] = 'ssl://smtp.googlemail.com'; //smtp host name
						$config['smtp_port'] = '465'; //smtp port number
						$config['smtp_user'] = $this->mail_data->report->from_mailid->username; //$from_email username
						$config['smtp_pass'] = $this->mail_data->report->from_mailid->password; //$from_email password						
						$config['mailtype'] = 'html';
						$config['charset'] = 'iso-8859-1';
						$config['wordwrap'] = TRUE;
						$config['newline'] = "\r\n"; //use double quotes
					
						$this->email->initialize($config);
						$subject = "Backup Mail";
						$regards = "With Regards,<br/>Sai Shakthy Networks (JK Broadband),<br/># 198-GST Road,<br/>Guduvanchery.<br/>Contact: 9750931200, 9750931201<br/>landline: 044-27461997<br/>email:saishakthynetworks@gmail.com<br/><br/>";
						$message = "Hi<br/>PFA... Backup File<br/><br/>".$regards;
						$file_name= './uploads/'.$this->upload->file_name;
						//send mail						
						$this->email->from($this->mail_data->report->from_mailid->username, 'JK');
						$this->email->to($this->mail_data->report->To_mailid->mail_id);
						$this->email->subject($subject);
						$this->email->message($message);
						$this->email->attach($file_name);
						$success = $this->email->send();
					
						if ($success)
						{
							$response['status'] = "success";                
						}
						else
						{	
							$response['status'] = "fail";
						}
		
						$this->response($response, REST_Controller::HTTP_OK);
					}
				}
				else
				{
					//echo "upload file";
					$error = array('msg' => 'Please upload file');
					$json_error = json_encode($error);
					$this->response($json_error, REST_Controller::HTTP_OK);
				}
			}
			else
			{	
				//echo "Invalid Content Type";
				//print_r ($headers);
				$error = array('msg' => 'Invalid Content Type');
				$json_error = json_encode($error);
				$this->response($json_error, REST_Controller::HTTP_OK);
			}	
		}
		else
		//if token is not valid
		{
			//echo "invalid token";
			$error = array('msg' => 'invalid token');
			$json_error = json_encode($error);
			$this->response($json_error, REST_Controller::HTTP_OK);
		}
			
	}
	//if token is not set
	else
	{
		//echo "no token";
		$error = array('msg' => 'authorization-token not set');
		$json_error = json_encode($error);
		$this->response($json_error, REST_Controller::HTTP_OK);
	}
}

}