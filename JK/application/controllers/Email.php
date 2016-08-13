<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH . 'libraries/REST_Controller.php';

class Email extends REST_Controller {
	
	 function __construct()
	{	
		    parent::__construct();
        $this->load->helper('url','email');
      	//$this->load->database();
		//$this->load->model('Master_model');	
        $this->load->library('email');
	}


public function billpayment_post()
{

//http://www.passafaila.com/jk/email/billpayment

//{{"from_mailid":{"username":"sqtesting2016@gmail.com","password":"P@$$word@123"}, "To_mailid":{"mail_id":"siva@sqindia.net","cc":"siva@sqindia.net"}, "body":{"id_no":"1","name":"tulasi","phone_no":"9952081115","email_id":"tulasi@gmail.com","address":"chennai","plan_mode":"plan1","amount":"200","paid_mode":"yes"}, "Signature":{"Regards":"Jk products"}}
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

      $message = "ID No  :".$this->data->body->id_no. "<br/> Name :".$this->data->body->name. "<br/> Phone Number:".$this->data->body->phone_no. "<br/> Eamil id :" .$this->data->body->email_id. "<br/> Address: ".$this->data->body->address. "<br/>Plan Mode : ".$this->data->body->plan_mode. "<br/> Amount : ".$this->data->body->amount. "<br/>Paid Mode :" .$this->data->body->paid_mode."<br/><br/><br/>Regards<br/>".$this->data->Signature->Regards;
      
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
        $this->response("success", REST_Controller::HTTP_OK);
      }
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

      $message = "ID No  :".$this->data->body->id_no. "<br/> Name :".$this->data->body->name. "<br/> Phone Number:".$this->data->body->phone_no. "<br/>Plan Mode : ".$this->data->body->plan. "<br/> Eamil id :" .$this->data->body->email."<br/>Payment :" .$this->data->body->payment."<br/><br/><br/>Regards<br/>".$this->data->Signature->Regards;
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
               $this->response("success", REST_Controller::HTTP_OK);     
            }
}
  
public function sales_report_post()
{
//http://www.passafaila.com/jk/email/sales_report

//{"report":{"from_mailid":{"username":"sqtesting2016@gmail.com","password":"P@$$word@123"}, "To_mailid":{"mail_id":"siva@sqindia.net","cc":"siva@sqindia.net"}, "head": ["Ref Id","Name","Plan"], "body": { "data":["101","102","103"], "name":["name1","name2","name3"], "plan":["plan1","plan2","plan3"] }, "report_cost":"Rs700", "bill_date":"01/08/2016" } }

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
	  $msg = $this->email->message($message);
        if ($success)
            {
               $this->response("success", REST_Controller::HTTP_OK);     
            }
}


public function unpaid_mail_post()
{

//http://www.passafaila.com/jk/email/unpaid_mail
	//old one
//{"report":{"from_mailid":{"username":"sqtesting2016@gmail.com","password":"P@$$word@123"}, "To_mailid":{"Sivaraj":"siva@sqindia.net","Sivaraja":"siva@sqindia.net"} } }
	//new one
//{"report":{"from_mailid":{"username":"sqtesting2016@gmail.com","password":"P@$$word@123"}, "to_user":["Sivaraj","sivaraja"], "To_mailid:["siva@sqindia.net","siva@sqindia.net"] } }

  $this->data = json_decode(file_get_contents('php://input'));
  //print_r ($this->data);
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
	 	$this->response("success", REST_Controller::HTTP_OK);     
	 }

}    
  
}
