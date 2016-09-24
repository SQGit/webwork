<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Main extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */

	function __construct()
	{	
		parent::__construct();
		$this->load->library('paypal_lib');
		$this->load->model('main_model');
	}

	public function index()
	{
		$data['active'] = "home";
		$data['ticket_points'] = $this->get_ticket_points();
		$this->load->view('includes/header',$data);
		$this->load->view('home');
		$this->load->view('includes/consult_form',$data);
		$this->load->view('includes/footer');
	}

	public function about()
	{	
		$data['active'] = "about";
		$data['ticket_points'] = $this->get_ticket_points();
		$this->load->view('includes/header',$data);
		$this->load->view('about');
		$this->load->view('includes/consult_form',$data);
		$this->load->view('includes/footer');
	}

	public function civil()
	{
		$data['active'] = "civil";
		$data['ticket_points'] = $this->get_ticket_points();
		$this->load->view('includes/header',$data);
		$this->load->view('civil');
		$this->load->view('includes/consult_form',$data);
		$this->load->view('includes/footer');
	}

	public function contact_us()
	{	
		$data['ticket_points'] = $this->get_ticket_points();
		$this->load->view('includes/header');
		$this->load->view('contact_us');
		$this->load->view('includes/consult_form',$data);
		$this->load->view('includes/footer');
	}

	public function criminal_charges()
	{
		$data['ticket_points'] = $this->get_ticket_points();
		$this->load->view('includes/header');
		$this->load->view('criminal_charges');
		$this->load->view('includes/consult_form',$data);
		$this->load->view('includes/footer');
	}

	public function property_tax()
	{
		$data['ticket_points'] = $this->get_ticket_points();
		$this->load->view('includes/header');
		$this->load->view('property_tax');
		$this->load->view('includes/consult_form',$data);
		$this->load->view('includes/footer');
	}

	public function services()
	{
		$data['ticket_points'] = $this->get_ticket_points();
		$data['active'] = "services";
		$this->load->view('includes/header',$data);
		$this->load->view('services');
		$this->load->view('includes/consult_form',$data);
		$this->load->view('includes/footer');
	}

	public function tribunal()
	{
		$data['active'] = "tribunal";
		$data['ticket_points'] = $this->get_ticket_points();
		$this->load->view('includes/header',$data);
		$this->load->view('tribunal');
		$this->load->view('includes/consult_form',$data);
		$this->load->view('includes/footer');
	}

	public function select_ticket()
	{
		$data['ticket_points'] = $this->get_ticket_points();
		$this->load->view('includes/header');
		$this->load->view('select_ticket');
		$this->load->view('includes/consult_form',$data);
		$this->load->view('includes/footer');
	}

	public function parking_ticket()
	{
		$data['ticket_points'] = $this->get_ticket_points();        
		$this->load->view('includes/header');
		$this->load->view('parking_ticket', $data);
		$this->load->view('includes/consult_form',$data);
		$this->load->view('includes/footer');
	}

	public function red_light_ticket()
	{
		$data['ticket_points'] = $this->get_ticket_points();
		$this->load->view('includes/header');
		$this->load->view('red_light_ticket');
		$this->load->view('includes/consult_form',$data);
		$this->load->view('includes/footer');
	}

	public function traffic_ticket()
	{
		$data['ticket_points'] = $this->get_ticket_points();
		$this->load->view('includes/header');
		$this->load->view('traffic_ticket');
		$this->load->view('includes/consult_form',$data);
		$this->load->view('includes/footer');
	}

    public function payment($id)
    {   
        $data['ticket_points'] = $this->get_ticket_points();
        $data['ticket_details'] = $this->main_model->getRows($id);
        $this->load->view('includes/header');
        $this->load->view('payment',$data);
        $this->load->view('includes/consult_form',$data);
        $this->load->view('includes/footer');
    }

	public function get_ticket_points()
	{
		return $this->main_model->get_ticket_points();		
	}

	//send email to user's email id start//
  	function sendEmail($to_email, $subject, $message)
  	{
    	$from_email = 'sqtesting2016@gmail.com';   	

    	//configure email settings
    	$config['protocol'] = 'smtp';
    	$config['smtp_host'] = 'ssl://smtp.googlemail.com'; //smtp host name
    	$config['smtp_port'] = '465'; //smtp port number
    	$config['smtp_user'] = $from_email;
    	$config['smtp_pass'] = 'P@$$word@123'; //$from_email password
    	$config['mailtype'] = 'html';
    	$config['charset'] = 'iso-8859-1';
    	$config['wordwrap'] = TRUE;
    	$config['newline'] = "\r\n"; //use double quotes

    	$this->email->initialize($config);
    	
    	//send mail
    	$this->email->from($from_email, 'File4599.com');
    	$this->email->to($to_email);
    	$this->email->subject($subject);
    	$this->email->message($message);
    	return $this->email->send();
  	}
  	//send email to user's email id end//

	public function enquiry()
	{
		$this->form_validation->set_rules('nq_name', 'Name', 'trim|required');
    	$this->form_validation->set_rules('nq_city', 'City', 'trim|required');   
    	$this->form_validation->set_rules('nq_email', 'Email', 'trim|required|valid_email');
    	$this->form_validation->set_rules('nq_phone', 'Phone', 'trim|required');
    	$this->form_validation->set_rules('nq_desc', 'Message', 'trim|required');

    	if($this->form_validation->run() == FALSE)
    	{
      		echo validation_errors();
    	}
    	else
    	{
    		//get post data
    		$name = $this->input->post('nq_name');
    		$email = $this->input->post('nq_email');
    		$city = $this->input->post('nq_city');
    		$phone = $this->input->post('nq_phone');
    		$ticket = $this->input->post('nq_ticket');
    		$msg = $this->input->post('nq_desc');
    		//send mail
    		$subject = 'Msg From File4599.com';
    		$to = 'siva@sqindia.net';
    		$message = 'Name : '.$name.'<br/> Email id : '.$email.'<br/> City : '.$city.'<br/> Phone : '.$phone.'<br/> Ticket : '.$ticket.'<br/> Messge : '.$msg;

    		if ($this->sendEmail($to, $subject, $message))
    		{
            	echo "mail_sent";
          	}
          	else
          	{
            	echo "mail_not_send";
          	}
    	}
	}

	public function parkingtkt()
	{
		$this->form_validation->set_rules('notice_number', 'notice_number', 'trim');
    	$this->form_validation->set_rules('defendant_name', 'defendant_name', 'trim');   
    	$this->form_validation->set_rules('email', 'email', 'trim|required|valid_email');
    	$this->form_validation->set_rules('address', 'address', 'trim');
    	$this->form_validation->set_rules('city', 'city', 'trim');
    	$this->form_validation->set_rules('province', 'province', 'trim');
    	$this->form_validation->set_rules('postal_code', 'postal_code', 'trim');
    	$this->form_validation->set_rules('phone', 'phone', 'trim');    	

    	if($this->form_validation->run() == FALSE)
    	{
      		echo validation_errors();
    	}
    	else
    	{
            $price = $this->main_model->get_ticket_price();

    		//get post data
    		$today = date("Y-m-d H:i:s");
    		$tkt_id = 'PK'.random_string('alnum',5);

    		$data_tkt = array( 
    			'filed_date' => $today,
    			'offence_date' => $this->input->post('offence_date'),
                'customer_name' => $this->input->post('defendant_name'),
    			'ticket_id' => $tkt_id,
    			'ticket_name' => $this->input->post('ticket_name'),
                'amount' => $price[0]->ticket_price,
				'email' => $this->input->post('email'),
                'payment_status' => 'Not Paid',
                'table_name' => 'parking_ticket'
    		);
			$data_parking_tkt = array(
				'parking_ticket_id' => $tkt_id,	    	
    			'notice_number' => $this->input->post('notice_number'),
    			'name' => $this->input->post('defendant_name'),
    			'address' => $this->input->post('address'),    			
    			'apt' => $this->input->post('suite'),
    			'city' => $this->input->post('city'),
    			'province' => $this->input->post('province'),
    			'pin_code' => $this->input->post('postal_code'),
    			'phone' => $this->input->post('phone'),
    			'offence_accept' => $this->input->post('offence_accept'),
    			'trial_lang' => $this->input->post('trial_lang'),
    			'trial_lang_ip' => $this->input->post('trial_lang_ip'),
    			'signature' => $this->input->post('sign')
    		);
    		
			if ($this->main_model->insert_tkt($data_tkt) && $this->main_model->data_parking_tkt($data_parking_tkt))
			{
				//send mail
    			$subject = 'Msg From File4599.com';
    			$to = 'siva@sqindia.net';
    			$message = 'testing';

    			if ($this->sendEmail($to, $subject, $message))
    			{
            		$response['msg'] = "mail_sent";
                    $response['id'] = $tkt_id;
                    echo json_encode($response);
                    //echo "mail_sent";
          		}
          		else
          		{
                    $response['msg'] = "mail_sent";
                    echo json_encode($response);
            		//echo "mail_not_send";
          		}
			}
    	}
	}

	public function red_light_tkt()
	{
		$this->form_validation->set_rules('offence_number', 'offence_number', 'trim');
    	$this->form_validation->set_rules('defendant_name', 'defendant_name', 'trim');   
    	$this->form_validation->set_rules('email', 'email', 'trim|required|valid_email');
    	$this->form_validation->set_rules('address', 'address', 'trim');
    	$this->form_validation->set_rules('municipality', 'municipality', 'trim');
    	$this->form_validation->set_rules('province', 'province', 'trim');
    	$this->form_validation->set_rules('postal_code', 'postal_code', 'trim');
    	$this->form_validation->set_rules('phone', 'phone', 'trim');    	

    	if($this->form_validation->run() == FALSE)
    	{
      		echo validation_errors();
    	}
    	else
    	{
            $price = $this->main_model->get_ticket_price();
    		//get post data
    		$today = date("Y-m-d H:i:s");
    		$tkt_id = 'RL'.random_string('alnum',5);

    		$data_tkt = array( 
    			'filed_date' => $today,
    			'offence_date' => $this->input->post('offence_date'),
                'customer_name' => $this->input->post('defendant_name'),
    			'ticket_id' => $tkt_id,
    			'ticket_name' => $this->input->post('ticket_name'),
                'amount' => $price[1]->ticket_price,
				'email' => $this->input->post('email'),
                'payment_status' => 'Not Paid',
                'table_name' => 'red_light_ticket'
    		);
			$data_red_light_tkt = array(
				'red_light_ticket_id' => $tkt_id,
    			'notice_number' => $this->input->post('offence_number'),
    			'name' => $this->input->post('defendant_name'),
    			'address' => $this->input->post('address'),    			
    			'apt' => $this->input->post('suite'),
    			'city' => $this->input->post('municipality'),
    			'province' => $this->input->post('province'),
    			'pin_code' => $this->input->post('postal_code'),
    			'phone' => $this->input->post('phone'),
    			'offence_accept' => $this->input->post('offence_accept'),
    			'trial_lang' => $this->input->post('trial_lang'),
    			'trial_lang_ip' => $this->input->post('trial_lang_ip'),
    			'signature' => $this->input->post('sign')
    		);
    		
			if ($this->main_model->insert_tkt($data_tkt) && $this->main_model->data_red_light_tkt($data_red_light_tkt))
			{
				//send mail
    			$subject = 'Msg From File4599.com';
    			$to = 'siva@sqindia.net';
    			$message = 'testing';

    			if ($this->sendEmail($to, $subject, $message))
                {
                    $response['msg'] = "mail_sent";
                    $response['id'] = $tkt_id;
                    echo json_encode($response);
                    //echo "mail_sent";
                }
                else
                {
                    $response['msg'] = "mail_sent";
                    echo json_encode($response);
                    //echo "mail_not_send";
                }
			}
    	}
	}

	public function traffic_tkt()
	{
		$this->form_validation->set_rules('offence_number', 'offence_number', 'trim');
    	$this->form_validation->set_rules('defendant_name', 'defendant_name', 'trim');   
    	$this->form_validation->set_rules('email', 'email', 'trim|required|valid_email');
    	$this->form_validation->set_rules('address', 'address', 'trim');
    	$this->form_validation->set_rules('municipality', 'municipality', 'trim');
    	$this->form_validation->set_rules('province', 'province', 'trim');
    	$this->form_validation->set_rules('postal_code', 'postal_code', 'trim');
    	$this->form_validation->set_rules('phone', 'phone', 'trim');    	

    	if($this->form_validation->run() == FALSE)
    	{
      		echo validation_errors();
    	}
    	else
    	{
            $price = $this->main_model->get_ticket_price();
    		//get post data
    		$today = date("Y-m-d H:i:s");
    		$tkt_id = 'TR'.random_string('alnum',5);

    		$data_tkt = array( 
    			'filed_date' => $today,
    			'offence_date' => $this->input->post('offence_date'),
                'customer_name' => $this->input->post('defendant_name'),
    			'ticket_id' => $tkt_id,
    			'ticket_name' => $this->input->post('ticket_name'),
                'amount' => $price[2]->ticket_price,
				'email' => $this->input->post('email'),
                'payment_status' => 'Not Paid',
                'table_name' => 'traffic_ticket'
    		);
			$data_traffic_tkt = array(
				'traffic_ticket_id' => $tkt_id,
    			'notice_number' => $this->input->post('offence_number'),
    			'icon' => $this->input->post('icon'),
    			'name' => $this->input->post('defendant_name'),
    			'address' => $this->input->post('address'),    			
    			'apt' => $this->input->post('suite'),
    			'city' => $this->input->post('municipality'),
    			'province' => $this->input->post('province'),
    			'pin_code' => $this->input->post('postal_code'),
    			'phone' => $this->input->post('phone'),
    			'offence_accept' => $this->input->post('offence_accept'),
    			'trial_lang' => $this->input->post('trial_lang'),
    			'trial_lang_ip' => $this->input->post('trial_lang_ip'),
    			'signature' => $this->input->post('sign')
    		);
    		
			if ($this->main_model->insert_tkt($data_tkt) && $this->main_model->data_traffic_tkt($data_traffic_tkt))
			{
				//send mail
    			$subject = 'Msg From File4599.com';
    			$to = 'siva@sqindia.net';
    			$message = 'testing';

    			if ($this->sendEmail($to, $subject, $message))
                {
                    $response['msg'] = "mail_sent";
                    $response['id'] = $tkt_id;
                    echo json_encode($response);
                    //echo "mail_sent";
                }
                else
                {
                    $response['msg'] = "mail_sent";
                    echo json_encode($response);
                    //echo "mail_not_send";
                }
			}
    	}
	}

    public function payment_link()
    {
        
        $ticket_id = $this->input->post('tickt_id');

        $data['ticket_details'] = $this->main_model->getRows($ticket_id);

        $email = $data['ticket_details']['0']->email;

        //send mail
                $subject = 'Payment Link From File4599.com';
                $to = $email;
                $message = 'Hi thankyou for Filing Ticket<br/>Please make the payment using below link<br/><a href="'.base_url().'main/pay_now/'.$ticket_id.'"><button type="button" class="btn btn-amber">Pay Now</button></a>';

                if ($this->sendEmail($to, $subject, $message))
                {
                    //$response['msg'] = "mail_sent";
                    //$response['id'] = $tkt_id;
                    //echo json_encode($response);
                    echo "mail_sent";
                }
                else
                {
                    //$response['msg'] = "mail_sent";
                    //echo json_encode($response);
                    echo "mail_not_send";
                }
        

    }

    public function pay_now($id)
    {
        //Set variables for paypal form
        $returnURL = base_url().'paypal/success'; //payment success url
        $cancelURL = base_url().'paypal/cancel'; //payment cancel url
        $notifyURL = base_url().'paypal/ipn'; //ipn url

        $product = $this->main_model->getRows($id);

        //$logo = base_url().'assets/images/codexworld-logo.png';
        
        $this->paypal_lib->add_field('business', 'seller@sqindia.net');
        $this->paypal_lib->add_field('return', $returnURL);
        $this->paypal_lib->add_field('cancel_return', $cancelURL);
        $this->paypal_lib->add_field('notify_url', $notifyURL);
        $this->paypal_lib->add_field('item_name', $product[0]->ticket_name);
        //$this->paypal_lib->add_field('custom', $userID);
        $this->paypal_lib->add_field('item_number',  $product[0]->ticket_id);
        $this->paypal_lib->add_field('amount',  $product[0]->amount);        
        //$this->paypal_lib->image($logo);
        
        $this->paypal_lib->paypal_auto_form();


    }





}

