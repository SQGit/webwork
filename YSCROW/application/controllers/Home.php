<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {

  public function __construct()
  {
    parent::__construct();
    $this->load->database();
    $this->load->model('user_model');
  }

  public function index()
  {
    $data['title'] = "::YSCROW::Trusted Transactions";
    $this->load->view('home_page', $data);
  }

  //send email to user's email id start//
  function sendEmail($to_email,$subject, $message)
  {
      $from_email = 'sqtesting2016@gmail.com';
      //$subject = 'Verify Your Email Address';
      //$message = 'Dear User,<br /><br />Please click on the below activation link to verify your email address.<br /><br /> http://yscrow/home/verify/'. md5($to_email) . '<br /><br /><br />Thanks<br />yscrow Team';

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
      $this->email->from($from_email, 'Yscrow');
      $this->email->to($to_email);
      $this->email->subject($subject);
      $this->email->message($message);
      return $this->email->send();
  }
  //send email to user's email id end//

  //register form controller start//
  public function register()
  {
    // field name, error message, validation rules
    $this->form_validation->set_rules('first_name', 'First Name', 'trim|required|min_length[4]');
    $this->form_validation->set_rules('last_name', 'Last Name', 'trim|required|min_length[1]');
    $this->form_validation->set_rules('email', 'Your Email', 'trim|required|valid_email|is_unique[reg_user.email]');
    $this->form_validation->set_rules('password_confirmation', 'Password', 'trim|required|min_length[5]|max_length[32]');
    $this->form_validation->set_rules('password', 'Password Confirmation', 'trim|required|matches[password]');
    $this->form_validation->set_rules('mobile', 'Mobile Number', 'trim|required|min_length[10]');
    $this->form_validation->set_rules('id_proof', 'User ID Proof', 'callback_image_upload');

    if($this->form_validation->run() == FALSE)
    {
      echo validation_errors();
    }
    else
    {
      //insert user details into db
      $data = array(
        'first_name' => $this->input->post('first_name'),
        'last_name' => $this->input->post('last_name'),
        'email' => $this->input->post('email'),
        'password' => $this->input->post('password_confirmation'),
        'mobile' => $this->input->post('mobile'),
        'id_proof' => $this->upload->file_name, //get uploaded file name
        'status' => 0
      );

      if ($this->user_model->insert_user($data))
      {
          // send email
          $subject = 'Yscrow Account Activation Link';
          $message = 'Hi '.$this->input->post("first_name").' '.$this->input->post("last_name").',<br /><br />Please click on the below link to Activate your Yscrow Account.<br/><br/>'.base_url().'/home/verify/'.md5($this->input->post('email')).'<br/>Once Activated Your Yscrow account, You have to create Transaction.<br/>If You have any queries feel free to contact Us.<br/><br/>Thanks<br/>YSCROW Team';
          if ($this->sendEmail($this->input->post('email'), $subject, $message))
		  {
            echo '<div class="alert alert-success text-center">Registration Success!<br/>Hi '.$this->input->post("first_name").' '.$this->input->post("last_name").' Thank You for Registering with Yscrow.com<br/>An Activation Link has been sent to your Email Address.<br/>Please Click that link to Activate your Yscrow Account.</div>';
          }
          else
          {
            echo '<div class="alert alert-danger text-center">Error in Sending Activation link to your Email.. Please try again later.</div>';
          }
      }
      else
      {
        echo '<div class="alert alert-danger text-center">Error in registration! Please try again later.</div>';
      }
    }
  }
  //register form controller end//

  //reg form live email avaliblity check for registration form start//
  public function is_email_available()
  {
    $response = array(
      'valid' => false,
      'message' => 'Post argument "email" is missing.'
    );
    if( isset($_POST['email']) ) {
        $email = $this->input->post('email');
        $uresult = $this->user_model->is_email_available($email);
        if($uresult){
          $response = array('valid' => false, 'message' => 'This email is already registered.');
        }
        else{
          $response = array('valid' => true);
        }
    }
    echo json_encode($response);//return json data
  }
  //reg form live email avaliblity check for registration form end//

  //registration form image upload start//
  function image_upload()
  {
    if($_FILES['id_proof']['size'] != 0){
    $upload_dir = './assets/img/id_proof/';
    $config['upload_path']   = $upload_dir;
    $config['allowed_types'] = 'gif|jpg|png|jpeg';
    $config['file_name']     = 'id_proof_'.substr(md5(rand()),0,7);
    $config['overwrite']     = false;
    $config['max_size']      = '5120';

    $this->upload->initialize($config);

    if (!$this->upload->do_upload('id_proof')){
      if(is_file($config['upload_path']))
      {
          chmod($config['upload_path'], 777); ## this should change the permissions
      }
      $this->form_validation->set_message('image_upload', $this->upload->display_errors());
      return false;
    }
    else{
      if(is_file($config['upload_path']))
      {
          chmod($config['upload_path'], 777); ## this should change the permissions
      }
      $this->upload_data['file'] =  $this->upload->data();
      return true;
    }
    }
    else{
    $this->form_validation->set_message('image_upload', "No file selected");
    return false;
    }
  }
  //registration form image upload end//

  //verify user account email start//
  function verify($hash=NULL)
  {
      if ($this->user_model->verifyEmailID($hash))
      {
          $this->session->set_flashdata('verify_msg','<div class="alert alert-success text-center" style="z-index:9999;">Hurray! Your Yscrow Account is Active now! Please Login</div>');
          redirect('home');
      }
      else
      {
          $this->session->set_flashdata('verify_msg','<div class="alert alert-danger text-center">Sorry! There is error verifying your Email Address!</div>');
          redirect('home');
      }
  }
  //verify user account email end//

  //login process start//
  public function login()
  {
    $this->form_validation->set_rules('email', 'Your Email', 'trim|required|valid_email');
    $this->form_validation->set_rules('password', 'Password', 'trim|required');

    if ($this->form_validation->run() == FALSE)
        {
          echo validation_errors();
        }
        else
        {
          $email = $this->input->post("email");
          $password = $this->input->post("password");
          // check for user credentials
            $uresult = $this->user_model->get_user($email, $password);
            if (count($uresult) > 0)
            {
              // set session
                $session_data = array('login' => TRUE, 'fname' => $uresult[0]->first_name, 'lname' => $uresult[0]->last_name, 'mobile' => $uresult[0]->mobile, 'email' => $uresult[0]->email,'user_id' => $uresult[0]->user_id,'user thumbnail' => $uresult[0]->user_image);

                $this->session->set_userdata($session_data);

                echo "YES";
            }
            else
            {
                echo "NO";
            }
        }
  }
  //login process end//

  //reset password start//
  public function reset_pass()
  {
    $this->form_validation->set_rules('recovery_mail', 'Recovery Email', 'trim|required|valid_email');

    if($this->form_validation->run() == FALSE)
    {
      echo validation_errors();
    }
    else
    {
      if($this->user_model->email_exists())
      {
        $temp_pass = md5(uniqid());
        $subject = 'Reset your Password';
        $message = "<p>This email has been sent as a request to reset our password</p>";
        $message .= "<p><a href='".base_url()."home/reset_password/$temp_pass'>Click here </a>if you want to reset your password, if not, then ignore</p>";

          if ($this->sendEmail($this->input->post('recovery_mail'), $subject, $message))
          {
              if($this->user_model->temp_reset_password($temp_pass))
              {
                  echo "mail_sent";
              }
          }
          else
          {
              echo "mail_not_sent";
          }
      }
      else
      {
          echo "no_email";
      }
    }
  }
  //reset password end//

  //load change password form start//
  public function reset_password($temp_pass)
  {
      if($this->user_model->is_temp_pass_valid($temp_pass))
      {
          $this->index();
          $this->load->view('reset_password');

      }
      else
      {
          $this->session->set_flashdata('verify_msg','<div class="alert alert-danger text-center">Sorry! The link is not valid!</div>');
          redirect('home');
      }
  }
  //load change password form end//

  //updated password start//
  public function update_password()
  {
      $this->form_validation->set_rules('email', 'Email', 'trim|required|valid_email');
      $this->form_validation->set_rules('password_confirmation', 'Password', 'required|trim');
      $this->form_validation->set_rules('password', 'Confirm Password', 'required|trim|matches[password]');

      if($this->form_validation->run() == FALSE)
      {
        echo validation_errors();
      }
      else
      {
        if($this->user_model->update_password())
        {
            /*$this->session->set_flashdata('verify_msg','<div class="alert alert-success text-center">Hi, Your password successfully Changed! Please Login.</div>');
            redirect('home');*/
            echo "changed";
        }
        else
        {
          /*  $this->session->set_flashdata('verify_msg','<div class="alert alert-success text-center">Sorry! Check your email is correct..</div>');
            redirect('home');*/
            echo "notchanged";
        }
      }
  }
  //updated password end//

  //check logged in or not//
  public function is_logged_in()
  {
    //if(isset($this->session->userdata(fname)))
    if ($this->session->userdata('fname') == '')
    {
      redirect('home');
    }
    else
    {
      $session_data = array(
        'title'      => "::YSCROW::Trusted Transactions",
        'user_id'    => $this->session->userdata('user_id'),
        'fname'      => $this->session->userdata('fname'),
        'lname'      => $this->session->userdata('lname'),
        'email'      => $this->session->userdata('email'),
        'mobile'     => $this->session->userdata('mobile'),
        'user_thumbnail'  => $this->session->userdata('user_thumbnail')
      );
      return $session_data;
    }
  }
  //check logged in or not//

  //user main page start//
  public function user()
  {
    $session_data = $this->is_logged_in();

    $this->load->view('head_section', $session_data);
    $this->load->view('left_side_menu', $session_data);
    $this->load->view('ct_btn', $session_data);
  }
  //user main page end//

  //choose role category start//
  public function role_category()
  {
    $session_data = $this->is_logged_in();

      $this->load->view('head_section', $session_data);
      $this->load->view('left_side_menu', $session_data);
      $this->load->view('role_category', $session_data);
  }
  //choose role category end//

  //check select option value//
  function check_default($post_string)
  {
      if($post_string=="")
      {
         $this->form_validation->set_message('check_default', 'Please Select.');
      }
      else
      {
         return true;
      }
  }
  //check select option value//

  //choose role form start//
  public function category()
  {
    $session_data = $this->is_logged_in();

    $this->form_validation->set_error_delimiters('<div class="error">', '</div>');
    $this->form_validation->set_rules('category', 'category', 'required|callback_check_default');
    $this->form_validation->set_rules('user_role', 'user role', 'required|callback_check_default');

    if ($this->form_validation->run() == FALSE)
    {
        $this->role_category();
    }
    else
    {
      $data = array(
          'role' => $this->input->post('user_role'),
          'category' => $this->input->post('category'),
        );

        switch($this->input->post('category')){
          case 'movie_tickets':
              $this->movie_ticket_form($data);
              break;

          case 'electronics':
              $this->electronics_form($data);
              break;
        }
    }
  }
  //choose role form end//

  //load movie ticket form start//
  public function movie_ticket_form($data)
  {
    $session_data = $this->is_logged_in();

    $this->load->view('head_section', $session_data);
    $this->load->view('left_side_menu', $session_data);
    $this->load->view('movie_ticket', $data, $session_data);
  }
  //load movie ticket form end//

  //movie ticket form submit start//
  public function movie_form_submit()
  {
    $this->form_validation->set_error_delimiters('<div class="error">', '</div>');
    $this->form_validation->set_rules('tr_name', 'tr_name', 'trim|required|min_length[4]');
    $this->form_validation->set_rules('buyer_email', 'Buyer email', 'trim|required|valid_email');
    $this->form_validation->set_rules('provider_email', 'Provider email', 'trim|required|valid_email');
    $this->form_validation->set_rules('movie_name', 'movie_name', 'trim|required');
    $this->form_validation->set_rules('show_date', 'show_date', 'trim|required');
    $this->form_validation->set_rules('show_time', 'show_time', 'trim|required');
    $this->form_validation->set_rules('theatre_name', 'theatre_name', 'trim|required');
    $this->form_validation->set_rules('desc', 'desc', 'trim|required');
    //$this->form_validation->set_rules('pay_terms', 'pay_terms', 'trim|required');
    $this->form_validation->set_rules('purchase_value', 'purchase_value', 'trim|required');
    //$this->form_validation->set_rules('movie_doc', 'Upload Related Doc', 'callback_movie_doc_upload');

    if($this->form_validation->run() == FALSE)
    {
      echo validation_errors();
    }
    else
    {
      //insert user details into db
      $tx_id = 'tx'.substr(rand(),0,5);
      if($this->input->post('pay_terms_custom') !== '')
      {
        $pay_terms_custom = $this->input->post('pay_terms_custom');
      }else {
        $pay_terms_custom = "";
      }
      $data_tr = array(
          'tx_id' => $tx_id,
          'tr_name' => $this->input->post('tr_name'),
          'init_by' => $this->input->post('user_email'),
          'buyer' => $this->input->post('buyer_email'),
          'seller' => $this->input->post('provider_email'),
          'tr_category' => $this->input->post('category'),
          'amt_value' => $this->input->post('purchase_value'),
          'yscrow_fee_by' => $this->input->post('yscrow_fee_by'),
          'buyer_pay' => $this->input->post('buyer_amt'),
          'seller_receive' => $this->input->post('seller_amt'),
          'yscrow_fees' => $this->input->post('yscrow_fee'),
          'pay_terms' => $this->input->post('pay_terms'),
          'pay_terms_custom' => $pay_terms_custom,
          'status' => 'invited'
      );

      $data_cat = array(
          'tx_id' => $tx_id,
          'movie_name' => $this->input->post('movie_name'),
          'show_date' => $this->input->post('show_date'),
          'show_time' => $this->input->post('show_time'),
          'theatre_name' => $this->input->post('theatre_name'),
          //'ticket_image' => $this->upload->file_name, //get uploaded file name
          'other_details' => $this->input->post('desc')
      );

      /*$data_img = array(
          'tx_id' => $tx_id,
          'tx_image' => $this->upload->file_name, //get uploaded file name
      );*/

      $data_history = array(
          'tx_id' => $tx_id,
          'updated_by' => $this->input->post('user_email'),
          'status' => 'invited'
      );
      //insert transaction data to database
      if ($this->user_model->insert_tr($data_tr, $data_cat, $data_history) && $this->upload_multiple_tx_images($tx_id))
      {
          $subject = 'New Transaction Created';
          $message = "<p>You have Created a New Transaction ".$this->input->post('tr_name')."</p>";
          $message .= "<p><a href='".base_url()."home/view_tx_link/".md5($this->input->post("user_email"))."/".$tx_id."/".$this->input->post('category')."'>Click here </a>if you want to see Your Transaction.</p>";
          //If inserted into a database send mail to both party
          if ($this->sendEmail($this->input->post('user_email'), $subject, $message))
          {
            //mail to opposite party
            //check oppsite party mail
            if($this->input->post('user_email') !== $this->input->post('buyer_email')){
              $opp_party_mail = $this->input->post('buyer_email');
            }
            else if($this->input->post('user_email') !== $this->input->post('provider_email'))
            {
              $opp_party_mail = $this->input->post('provider_email');
            }

            $subject = 'Invited to New Transaction';
            $message = "<p>You are Invited to join New Transaction ".$this->input->post('tr_name')."</p>";
            $message .= "<p><a href='".base_url()."home/view_tx_link/".md5($opp_party_mail)."/".$tx_id."/".$this->input->post('category')."'>Click here </a>if you want to see this Transaction details.</p>";

            if ($this->sendEmail($opp_party_mail, $subject, $message))
            {
              echo "mail_sent";
            }
            else
            {
              echo "mail_not_sent";
            }
          }
          else
          {
            echo "mail_not_sent";
          }
      }
      else
      {
          echo "Sorry Unexpected Error occured! Please try after some time!";
      }
    }
  }
  //movie ticket form submit end//

  //see tx details from mail link validate start//
  function view_tx_link($hash,$tx_id,$category)
  {
      if (md5($this->session->userdata('email')) == $hash)
      {
          redirect('home/view_tx_details/'.$tx_id.'/'.$category);
      }
      else if(md5($this->session->userdata('email')) !== $hash)
      {
          $this->session->set_flashdata('verify_msg','<div class="alert alert-danger text-center">Hi, Please Login to your Yscrow Account, Don\'t have Account Create New one to Participate this Transaction!</div>');
          redirect('home');
      }
  }
  //see tx details from mail link validate start//


  //transaction form live buyer provider email match start//
  public function buyer_provider_match()
  {
    $response = array(
      'valid' => false,
      'message' => 'Post argument "email" is missing.'
    );
    if(isset($_POST['provider_email']) or isset($_POST['buyer_email']))
    {
        if(isset($_POST['provider_email']))
        {
          $email = $this->input->post('provider_email');
        }
        else if(isset($_POST['buyer_email']))
        {
          $email = $this->input->post('buyer_email');
        }

        if($email == $this->session->userdata('email'))
        {
          $response = array('valid' => false, 'message' => 'Sorry! Buyer and Provider Can\'t be same');
        }
        else
        {
          $response = array('valid' => true);
        }
    }
    echo json_encode($response);//return json data
  }
  //transaction form live buyer provider email match end//

  //redirect to view_all_tx start//
  public function re_view_all_tx()
  {
    $this->session->set_flashdata('verify_msg','<div class="alert alert-success text-center">New Transaction successfully created!</div>');
        redirect('home/view_all_tx');

  }
  //redirect to view_all_tx end//

  //view all transactions details start//
  public function view_all_tx()
  {
    $session_data = $this->is_logged_in();

      $this->data['all_tx'] = $this->user_model->get_all_tx($session_data['email']);
      $this->load->view('head_section', $session_data);
      $this->load->view('left_side_menu',  $session_data);
      $this->load->view('view_all_tx', $this->data);
  }
  //view all transactions details start//

  //view single tx details start//
  public function view_tx_details($tx_id, $category)
  {
    $session_data = $this->is_logged_in();

      $this->data['single_tx'] = $this->user_model->get_single_tx_details($tx_id,$category);
      $this->data['single_tx_img'] = $this->user_model->get_single_tx_img($tx_id);
      $this->data['single_tx_history'] = $this->user_model->get_single_tx_history($tx_id);
      $this->load->view('head_section', $session_data);
      $this->load->view('left_side_menu', $session_data);
      $this->load->view('view_tx_details', $this->data);
  }
  //view single tx details end//

  //load edit tx page start//
  public function edit_tx($tx_id,$category)
  {
    $session_data = $this->is_logged_in();
    $this->data['single_tx'] = $this->user_model->get_single_tx_details($tx_id,$category);
    $this->data['single_tx_img'] = $this->user_model->get_single_tx_img($tx_id);
    $this->load->view('head_section', $session_data);
    $this->load->view('left_side_menu', $session_data);
    $this->load->view('edit_'.$category, $this->data);
  }
  //load edit tx page end//

  //Movie tx data update to  database start//
  public function movie_ticket_form_update()
  {
    $this->form_validation->set_error_delimiters('<div class="error">', '</div>');
    $this->form_validation->set_rules('tr_name', 'tr_name', 'trim|required|min_length[4]');
    $this->form_validation->set_rules('tr_category', 'tr_category', 'trim|required');
    $this->form_validation->set_rules('provider_email', 'provider_email', 'trim|required|valid_email');
    $this->form_validation->set_rules('buyer_email', 'buyer_email', 'trim|required|valid_email');
    $this->form_validation->set_rules('movie_name', 'movie_name', 'trim|required');
    $this->form_validation->set_rules('show_date', 'show_date', 'trim|required');
    $this->form_validation->set_rules('show_time', 'show_time', 'trim|required');
    $this->form_validation->set_rules('theatre_name', 'theatre_name', 'trim|required');
    $this->form_validation->set_rules('desc', 'desc', 'trim|required');
    $this->form_validation->set_rules('pay_terms', 'pay_terms', 'trim|required');
    $this->form_validation->set_rules('purchase_value', 'purchase_value', 'trim|required');
    //$this->form_validation->set_rules('movie_doc', 'Upload Related Doc', 'callback_movie_doc_upload');

    if($this->form_validation->run() == FALSE)
    {
      echo validation_errors();
    }
    else
    {
      //insert user details into db
      $tx_id = $this->input->post('tx_id');
      if($this->input->post('pay_terms_custom') !== '')
      {
        $pay_terms_custom = $this->input->post('pay_terms_custom');
      }else {
        $pay_terms_custom = "";
      }
      $data_tr = array(
          'tr_name' => $this->input->post('tr_name'),
          'buyer' => $this->input->post('buyer_email'),
          'seller' => $this->input->post('provider_email'),
          'amt_value' => $this->input->post('purchase_value'),
          'yscrow_fee_by' => $this->input->post('yscrow_fee_by'),
          'buyer_pay' => $this->input->post('buyer_amt'),
          'seller_receive' => $this->input->post('seller_amt'),
          'yscrow_fees' => $this->input->post('yscrow_fee'),
          'pay_terms' => $this->input->post('pay_terms'),
          'pay_terms_custom' => $pay_terms_custom,
          'status' => 'invitation_resent'
      );

      $data_cat = array(
          'movie_name' => $this->input->post('movie_name'),
          'show_date' => $this->input->post('show_date'),
          'show_time' => $this->input->post('show_time'),
          'theatre_name' => $this->input->post('theatre_name'),
          //'ticket_image' => $this->upload->file_name, //get uploaded file name
          'other_details' => $this->input->post('desc')
      );

      $data_history = array(
          'tx_id' => $this->input->post('tx_id'),
          'updated_by' => $this->session->userdata('email'),
          'status' => 'invitation_resent'
      );

      if ($this->user_model->update_tr($data_tr, $data_cat, $tx_id) && $this->upload_multiple_tx_images($tx_id) && $this->user_model->update_histroy($data_history))
      {
        $subject = "your ".$this->input->post('tr_name')." Transaction Changed";
        $message = "<p>You have Changed" .$this->input->post('tr_name'). "Transaction</p>";
        $message .= "<p><a href='".base_url()."home/view_all_tx'>Click here </a>if you want to see Your Transaction.</p>";
        //If inserted into a database send mail to both party
        if ($this->sendEmail($this->session->userdata('email'), $subject, $message))
        {
          $subject = 'Invited to New Transaction';
          $message = "<p>You are Invited to join New Transaction ".$this->input->post('tr_name')."</p>";
          $message .= "<p><a href='".base_url()."home/view_all_tx'>Click here </a>if you want to see this Transaction details.</p>";

          //mail to opposite party
          //check oppsite party mail
          if($this->session->userdata('email') !== $this->input->post('buyer_email')){
            $opp_party_mail = $this->input->post('buyer_email');
          }
          else if($this->session->userdata('email') !== $this->input->post('provider_email'))
          {
            $opp_party_mail = $this->input->post('provider_email');
          }
          //mail to opposite party
          if ($this->sendEmail($opp_party_mail, $subject, $message))
          {
            echo "mail_sent";
          }
          else
          {
            echo "mail_not_sent";
            //show_error($this->email->print_debugger());
          }
        }
        else
        {
          echo "mail_not_sent";
          //show_error($this->email->print_debugger());
        }
      }
      else
      {
        echo "Sorry Unexpected Error occured! Please try after some time!";
      }
    }
  }
  //Movie tx data update to  database end//

  //logout function start//
  public function logout()
  {
    $this->session->sess_destroy();
    redirect('home');
  }
  //logout function end//

  //cancel tx start//
  public function cancel_tx()
  {
    $this->form_validation->set_error_delimiters('<div class="error">', '</div>');
    $this->form_validation->set_rules('reason', 'reason', 'trim|required');

    if($this->form_validation->run() == FALSE)
    {
      echo validation_errors();
    }
    else
    {
      $tx_id = $this->input->post('tx_id');
      $data_update = array(
          'tx_id' => $this->input->post('tx_id'),
          'status' => 'cancelled'
      );

      $data_history = array(
          'tx_id' => $this->input->post('tx_id'),
          'updated_by' => $this->session->userdata('email'),
          'status' => 'cancelled'
      );

    if ($this->user_model->update_status($data_update, $tx_id) && $this->user_model->update_histroy($data_history))
    {
        $subject = "your ".$this->input->post('tr_name')." Transaction Cancelled";
        $message = "<p>Your Transaction " .$this->input->post('tr_name'). " has been Cancelled as per Your request.</p>";
        $message .= "<p>The reason is".$this->input->post('reason').".</p>";
        //If inserted into a database send mail to both party
        if ($this->sendEmail($this->session->userdata('email'), $subject, $message))
        {
          $subject = "your ".$this->input->post('tr_name')." Transaction Cancelled";
          $message = "<p>The Transaction " .$this->input->post('tr_name'). " has been Cancelled by ".$this->session->userdata('email').".</p>";
          $message .= "<p>The reason is ". $this->input->post('reason').".</p>";

          //mail to opposite party
          //check oppsite party mail
          if($this->session->userdata('email') !== $this->input->post('buyer_email')){
            $opp_party_mail = $this->input->post('buyer_email');
          }
          else if($this->session->userdata('email') !== $this->input->post('provider_email'))
          {
            $opp_party_mail = $this->input->post('provider_email');
          }
          //mail to opposite party
          if ($this->sendEmail($opp_party_mail, $subject, $message))
          {
            echo "mail_sent";
          }
          else
          {
            echo "mail_not_sent";
            //show_error($this->email->print_debugger());
          }
        }
        else
        {
          echo "mail_not_sent";
          //show_error($this->email->print_debugger());
        }
    }
    else
    {
      echo "Sorry Your Transaction Not Cancelled. Please Try Again..";
    }
    }
  }
  //cancel tx end//

  //Accept tx start//
  public function accept_tx($tx_id,$category)
  {
      $data_update = array(
          'tx_id' => $tx_id,
          'status' => 'accepted'
      );

      $data_history = array(
          'tx_id' => $tx_id,
          'updated_by' => $this->session->userdata('email'),
          'status' => 'accepted'
      );

    if ($this->user_model->update_status($data_update, $tx_id) && $this->user_model->update_histroy($data_history))
    {
      //get particular tx details for build mail template//
      $user_result = $this->user_model->get_buyer_seller_details($tx_id);

        $subject = $user_result[0]->tr_name." Transaction accepted";
        $message = "<p>You are accepted the Transaction " .$user_result[0]->tr_name.".</p>";
        //If inserted into a database send mail to both party
        if ($this->sendEmail($this->session->userdata('email'), $subject, $message))
        {
          $subject = $user_result[0]->tr_name." Transaction accepted";
          $message = "<p>The Transaction " .$user_result[0]->tr_name. " Accepted by ".$this->session->userdata('email').".</p>";

          //mail to opposite party
          //check oppsite party mail
          if($this->session->userdata('email') !== $user_result[0]->buyer){
            $opp_party_mail = $user_result[0]->buyer;
          }
          else if($this->session->userdata('email') !== $user_result[0]->seller)
          {
            $opp_party_mail = $user_result[0]->seller;
          }
          //mail to opposite party
          if ($this->sendEmail($opp_party_mail, $subject, $message))
          {
             $this->session->set_flashdata('verify_msg','<div class="alert alert-success text-center">you are accepted the Transaction..</div>');
              $this->view_tx_details($tx_id,$category);
          }
          else
          {
             $this->session->set_flashdata('verify_msg','<div class="alert alert-success text-center">Sorry Unexpected Server Error. Please Try Again..</div>');
            //show_error($this->email->print_debugger());
          }
        }
        else
        {
           $this->session->set_flashdata('verify_msg','<div class="alert alert-success text-center">Sorry Unexpected Server Error. Please Try Again..</div>');
          //show_error($this->email->print_debugger());
        }
    }
    else
    {
      $this->session->set_flashdata('verify_msg','<div class="alert alert-success text-center">Sorry Unexpected Server Error. Please Try Again..</div>');
    }

  }
  //Accept tx end//

  //dispatched start//
  public function dispatched_tx($tx_id,$category)
  {
      $data_update = array(
          'tx_id' => $tx_id,
          'status' => 'dispatched'
      );

      $data_history = array(
          'tx_id' => $tx_id,
          'updated_by' => $this->session->userdata('email'),
          'status' => 'dispatched'
      );

    if ($this->user_model->update_status($data_update, $tx_id) && $this->user_model->update_histroy($data_history))
    {
      //get particular tx details for build mail template//
      $user_result = $this->user_model->get_buyer_seller_details($tx_id);

        $subject = $user_result[0]->tr_name." Transaction goods delivered";
        $message = "<p>You are delivered the Transaction " .$user_result[0]->tr_name.".</p>";
        //If inserted into a database send mail to both party
        if ($this->sendEmail($this->session->userdata('email'), $subject, $message))
        {
          $subject = $user_result[0]->tr_name." Transaction delivered to you";
          $message = "<p>The Transaction " .$user_result[0]->tr_name. " goods are Delivered to you, check and confirm the goods and update the status in yscrow.com".$this->session->userdata('email').".</p>";

          //mail to opposite party
          //check oppsite party mail
          if($this->session->userdata('email') !== $user_result[0]->buyer){
            $opp_party_mail = $user_result[0]->buyer;
          }
          else if($this->session->userdata('email') !== $user_result[0]->seller)
          {
            $opp_party_mail = $user_result[0]->seller;
          }
          //mail to opposite party
          if ($this->sendEmail($opp_party_mail, $subject, $message))
          {
             $this->session->set_flashdata('verify_msg','<div class="alert alert-success text-center">you are Delivered the goods for this Transaction..</div>');
              //$this->view_tx_details($tx_id,$category);
              redirect('home/view_tx_details/'.$tx_id.'/'.$category);
          }
          else
          {
             $this->session->set_flashdata('verify_msg','<div class="alert alert-success text-center">Sorry Unexpected Server Error. Please Try Again..</div>');
            //show_error($this->email->print_debugger());
          }
        }
        else
        {
           $this->session->set_flashdata('verify_msg','<div class="alert alert-success text-center">Sorry Unexpected Server Error. Please Try Again..</div>');
          //show_error($this->email->print_debugger());
        }
    }
    else
    {
      $this->session->set_flashdata('verify_msg','<div class="alert alert-success text-center">Sorry Unexpected Server Error. Please Try Again..</div>');
    }

  }
  //dispatched end//

  //goods received//
  public function received_tx($tx_id,$category)
  {
      $data_update = array(
          'tx_id' => $tx_id,
          'status' => 'goods received'
      );

      $data_history = array(
          'tx_id' => $tx_id,
          'updated_by' => $this->session->userdata('email'),
          'status' => 'goods received'
      );

    if ($this->user_model->update_status($data_update, $tx_id) && $this->user_model->update_histroy($data_history))
    {
      //get particular tx details for build mail template//
      $user_result = $this->user_model->get_buyer_seller_details($tx_id);

        $subject = $user_result[0]->tr_name." Transaction goods are Received";
        $message = "<p>The Buyer of this " .$user_result[0]->tr_name." Transaction Received the Goods. You may Request Yscrow.com Release to release the Payment to Seller.</p>";
        //If inserted into a database send mail to both party
        if ($this->sendEmail($this->session->userdata('email'), $subject, $message))
        {
          $subject = $user_result[0]->tr_name." Transaction Goods Received by buyer.";
          $message = "<p>The Transaction " .$user_result[0]->tr_name. " goods are Received by buyer. You may Request Yscrow.com Release to release the Payment.</p>";

          //mail to opposite party
          //check oppsite party mail
          if($this->session->userdata('email') !== $user_result[0]->buyer){
            $opp_party_mail = $user_result[0]->buyer;
          }
          else if($this->session->userdata('email') !== $user_result[0]->seller)
          {
            $opp_party_mail = $user_result[0]->seller;
          }
          //mail to opposite party
          if ($this->sendEmail($opp_party_mail, $subject, $message))
          {
             $this->session->set_flashdata('verify_msg','<div class="alert alert-success text-center">Hi, The ' .$user_result[0]->tr_name. 'has been completed Successfully!! </div>');
              //$this->view_tx_details($tx_id,$category);
              redirect('home/view_tx_details/'.$tx_id.'/'.$category);
          }
          else
          {
             $this->session->set_flashdata('verify_msg','<div class="alert alert-success text-center">Sorry Unexpected Server Error. Please Try Again..</div>');
            //show_error($this->email->print_debugger());
          }
        }
        else
        {
           $this->session->set_flashdata('verify_msg','<div class="alert alert-success text-center">Sorry Unexpected Server Error. Please Try Again..</div>');
          //show_error($this->email->print_debugger());
        }
    }
    else
    {
      $this->session->set_flashdata('verify_msg','<div class="alert alert-success text-center">Sorry Unexpected Server Error. Please Try Again..</div>');
    }

  }
  //goods received//

  //req start//
  public function req_raise()
  {
    $this->form_validation->set_error_delimiters('<div class="error">', '</div>');
    $this->form_validation->set_rules('req', 'request', 'trim|required');

    if($this->form_validation->run() == FALSE)
    {
      echo validation_errors();
    }
    else
    {
      $tx_id = $this->input->post('tx_id');
      $data_update = array(
          'tx_id' => $this->input->post('tx_id'),
          'status' => 'requested'
      );

      $data_history = array(
          'tx_id' => $this->input->post('tx_id'),
          'updated_by' => $this->session->userdata('email'),
          'if_requested' => $this->input->post('req'),
          'status' => 'requested'
      );

    if ($this->user_model->update_status($data_update, $tx_id) && $this->user_model->update_histroy($data_history))
    {
        $subject = "your request for ".$this->input->post('tr_name')." Transaction";
        $message = "<p>You have requested to change the below things in " . $this->input->post('tr_name')." Transaction.</p>";
        $message .= "<p>The requested informations are: <br/>".$this->input->post('req').".</p>";
        //If inserted into a database send mail to both party
        if ($this->sendEmail($this->session->userdata('email'), $subject, $message))
        {
          $subject = "your Inviter of ".$this->input->post('tr_name')." Transaction requested to change";
          $message = $this->session->userdata('email') . "<p>requested to you change below things.<br/></p>";
          $message .= "<p>The requested informations are ". $this->input->post('req').".</p>";

          //mail to opposite party
          //check oppsite party mail
          if($this->session->userdata('email') !== $this->input->post('buyer_email')){
            $opp_party_mail = $this->input->post('buyer_email');
          }
          else if($this->session->userdata('email') !== $this->input->post('provider_email'))
          {
            $opp_party_mail = $this->input->post('provider_email');
          }
          //mail to opposite party
          if ($this->sendEmail($opp_party_mail, $subject, $message))
          {
            echo "mail_sent";
          }
          else
          {
            echo "mail_not_sent";
            //show_error($this->email->print_debugger());
          }
        }
        else
        {
          echo "mail_not_sent";
          //show_error($this->email->print_debugger());
        }
    }
    else
    {
      echo "Sorry Unexpected Error occured. Please Try Again..";
    }
    }
  }
  //req end//

  //redirect to after request sent view_all_tx start//
  public function req_sent()
  {
    $this->session->set_flashdata('verify_msg','<div class="alert alert-success text-center">Hi! Your Request sent Successfully!!</div>');
        redirect('home/view_all_tx');

  }
  //redirect to after request sent view_all_tx end//


  //delete tx img start//
  public function delete_tx_img()
  {
      $tx_id = $this->input->post('tx_id');
      $tx_image = $this->input->post('tx_img');

      if ($this->user_model->delete_tx_img($tx_image, $tx_id))
      {
        unlink(FCPATH.'assets/img/tr_doc/'.$tx_image);
        echo "ok";
      }
      else
      {
        echo "not_deleted";
      }
  }
  //delete tx img end//

  //tx related documents upload start//
  function upload_multiple_tx_images($tx_id)
  {
    if(!empty($_FILES['movie_doc']['name'])){

    $filesCount = count($_FILES['movie_doc']['name']);
      for($i = 0; $i < $filesCount; $i++)
      {
        $_FILES['userFile']['name'] = $_FILES['movie_doc']['name'][$i];
        $_FILES['userFile']['type'] = $_FILES['movie_doc']['type'][$i];
        $_FILES['userFile']['tmp_name'] = $_FILES['movie_doc']['tmp_name'][$i];
        $_FILES['userFile']['error'] = $_FILES['movie_doc']['error'][$i];
        $_FILES['userFile']['size'] = $_FILES['movie_doc']['size'][$i];

        $uploadPath = './assets/img/tr_doc/';
        $config['upload_path'] = $uploadPath;
        $config['allowed_types'] = 'gif|jpg|png';
        $config['file_name']     = 'tr_doc'.substr(md5(rand()),0,7);
        $config['max_size'] = '5120';
        //$config['max_width'] = '1024';
        //$config['max_height'] = '768';

        $this->load->library('upload', $config);
        $this->upload->initialize($config);

        if($this->upload->do_upload('userFile'))
        {
          $fileData = $this->upload->data();
          $uploadData[$i]['tx_id'] = $tx_id;
          $uploadData[$i]['tx_image'] = $fileData['file_name'];
        }
      }

      if(!empty($uploadData))
      {
        //Insert files data into the image database
        $insert = $this->user_model->update_tx_image($uploadData);
        return $insert;
      }
    }
    return true;
  }
  //tx related documents upload start//


  function pay_status()
  {

    $status=$_POST["status"];
    $firstname=$_POST["firstname"];
    $amount=$_POST["amount"];
    $txnid=$_POST["txnid"];
    $phone=$_POST["phone"];
    $posted_hash=$_POST["hash"];
    $key=$_POST["key"];
    $productinfo=$_POST["productinfo"];
    $email=$_POST["email"];
    $salt="EDPhIUkAc0";
    $tx_id=$_POST["udf1"];
    $tx_name=$_POST["udf2"];
    $tx_buyer=$_POST["udf3"];
    $tx_seller=$_POST["udf4"];

      $data_update = array(
          'tx_id' => $tx_id,
          'status' => 'Payment Success'
      );

      $data_history = array(
          'tx_id' => $tx_id,
          'updated_by' => $this->session->userdata('email'),
          'status' => 'Payment Success'
      );

    if($status == "success")
    {
      if ($this->user_model->update_status($data_update, $tx_id) && $this->user_model->update_histroy($data_history))
      {
        $subject = "Payment Confirmation from Yscrow";
        $message = "<p>Hi  ".$this->session->userdata('fname')."</p>";
        $message .= "<p>Your Payment ".$amount." for ".$tx_name." Transaction has been successfully Received.</p> <p></p>";

        if ($this->sendEmail($tx_buyer, $subject, $message))
        {
            $subject = "Payment Confirmation from Yscrow";
            $message = "<p>Hi</p>";
            $message .= "<p>".$this->session->userdata('fname')." has been paid ".$amount." for ".$tx_name." Transaction has been successfully Received.</p>
                        <p>Now You Can dispatch the Materials to ".$this->session->userdata('fname')."</p>";

            if ($this->sendEmail($tx_seller, $subject, $message))
            {
              $this->session->set_flashdata('verify_msg','<div class="alert alert-success text-center">You payment successfully Completed</div>');
              redirect('home/view_all_tx');
            }
        }
      }
    }
    else if($status == "failure")
    {
        $subject = "Payment Status from Yscrow";
        $message = "<p>Hi  ".$this->session->userdata('fname')."</p>";
        $message .= "<p>Your Payment ".$amount." for ".$tx_name." Transaction has been failed.</p> <p></p>";

        if ($this->sendEmail($tx_buyer, $subject, $message))
        {
              $this->session->set_flashdata('verify_msg','<div class="alert alert-success text-center">You payment has been Failed.</div>');
              redirect('home/view_all_tx');
        }
    }
  }

}//end class//
