<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class User_model extends CI_Model
{
	function __construct()
    {
        parent::__construct();
    }

    //reg form live email avaliblity check for registration form start//
    function is_email_available($email)
    {
        $this->db->where('email', $email);
        $query = $this->db->get('reg_user');
        if($query->num_rows() == 1)
            return TRUE;
        else
            return FALSE;
    }
    //reg form live email avaliblity check for registration form end//

    // insert reg form data to database start//
    function insert_user($data)
    {
        return $this->db->insert('reg_user', $data);
    }
    // insert reg form data to database end//

   /* //send verification email to user's email id start//
    function sendEmail($to_email,$subject, $message)
    {
        $from_email = 'sqtesting2016@gmail.com';
        //$subject = 'Verify Your Email Address';
        //$message = 'Dear User,<br /><br />Please click on the below activation link to verify your email address.<br /><br /> http://yscrow/home/verify/'. md5($to_email) . '<br /><br /><br />Thanks<br />Mydomain Team';

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
    //send verification email to user's email id end//*/

    //check email exists while reset password start//
    public function email_exists()
    {
        $email = $this->input->post('recovery_mail');
        $this->db->where('email', $email);
        $query = $this->db->get('reg_user');
        return $query->result();

        /*$query = $this->db->query("SELECT email, password FROM reg_user WHERE email='$email'");
        if($row = $query->row()){
            return TRUE;
        }else{
            return FALSE;
        }*/
    }
    //check email exists while reset password end//

    //verify user account email start//
    function verifyEmailID($key)
    {
        $data = array('status' => 1);
        $this->db->where('md5(email)', $key);
        return $this->db->update('reg_user', $data);
    }
    //verify user account email end//

    //user & password check for login start//
    function get_user($email, $pwd)
    {
        $this->db->where('email', $email);
        $this->db->where('password', $pwd);
        $this->db->where('status', 1);
        $query = $this->db->get('reg_user');
        return $query->result();
    }
    //user & password check for login end//

    //insert temp password to database start//
    public function temp_reset_password($temp_pass)
    {
        $data =array(
            'email' =>$this->input->post('recovery_mail'),
            'password'=>$temp_pass
        );
        $email = $data['email'];

        $this->db->where('email', $email);
        $this->db->update('reg_user', $data);

        if ($this->db->affected_rows() > 0)
            return TRUE;
        else
            return FALSE;
    }
    //insert temp password to database end//

    //check temp password valid start//
    public function is_temp_pass_valid($temp_pass)
    {
        $this->db->where('password', $temp_pass);
        $query = $this->db->get('reg_user');
        if($query->num_rows() == 1)
            return TRUE;
        else
            return FALSE;
    }
    //check temp password valid end//

    //updated password start//
    public function update_password()
    {
        $data =array(
            'email' => $this->input->post('email'),
            'password' =>$this->input->post('password_confirmation'),
        );
        $email = $data['email'];

        $this->db->where('email', $email);
        $this->db->update('reg_user', $data);

        if ($this->db->affected_rows() > 0)
            return TRUE;
        else
            return FALSE;
    }
    //updated password end//

    //inser movie ticket tx details to database start//
    function insert_tr($data_tr, $data_cat, $data_history)
    {
        $this->db->insert('transaction_details', $data_tr);
        $this->db->insert('movie_tickets', $data_cat);
        //$this->db->insert('tx_images', $data_img);
        $this->db->insert('tx_history', $data_history);
        return true;
    }
    //inser movie ticket tx details to database end//

    //get all tx list single user start//
    function get_all_tx($email)
    {
        $this->db->select("tx_id,tr_name,init_by,buyer,seller,tr_category,amt_value,status");
        $this->db->from('transaction_details');
        /*$where = '(buyer='$email 'or seller =' $email')';*/
        $this->db->where('buyer', $email);
        $this->db->or_where('seller', $email);
        /*$this->db->where($where);*/
        $query = $this->db->get();
        return $query->result();
    }
    //get all tx list single user end//

    //get single tx details start//
    function get_single_tx_details($tx_id,$category)
    {
        $this->db->select('*');
        $this->db->from('transaction_details');
        $this->db->join($category, $category.'.tx_id = transaction_details.tx_id','left');
        //$this->db->join('tx_images', 'tx_images.tx_id = transaction_details.tx_id','left');
        //$this->db->join('movie_tickets', 'movie_tickets.tx_id = transaction_details.tx_id','left');
        $this->db->where('transaction_details.tx_id',$tx_id);
        $query = $this->db->get();
        return $query->result();
    }
    //get single tx details end//

    //get_buyer_seller_details start//
    function get_buyer_seller_details($tx_id)
    {
        $this->db->select('*');
        $this->db->from('transaction_details');
        $this->db->where('tx_id', $tx_id);
        $query = $this->db->get();
        return $query->result();
    }
    //get_buyer_seller_details end//

    //get single tx img start//
    function get_single_tx_img($tx_id)
    {
        $this->db->select('*');
        $this->db->from('tx_images');
        $this->db->where('tx_id',$tx_id);
        $query = $this->db->get();
        return $query->result();
    }
    //get single tx img end//

    //get single tx histroy start//
    function get_single_tx_history($tx_id)
    {
        $this->db->select('*');
        $this->db->from('tx_history');
        $this->db->where('tx_id',$tx_id);
        $query = $this->db->get();
        return $query->result();
    }
    //get single tx histroy end//

    //update tx details and resend start//
    function update_tr($data_tr, $data_cat, $tx_id)
    {
        $this->db->where('tx_id', $tx_id);
        $this->db->update('transaction_details', $data_tr);
        $this->db->update('movie_tickets', $data_cat);
        return true;
    }
    //update tx detailo and resent end//

    //update tx images start//
    function update_tx_image($data_img = array())
    {
        $insert = $this->db->insert_batch('tx_images', $data_img);

        return $insert?true:false;
    }
    //update tx images end//

    //update tx table staus start//
    function update_status($data_update, $tx_id)
    {
       $this->db->where('tx_id', $tx_id);
       $this->db->update('transaction_details', $data_update);
       if ($this->db->affected_rows() > 0)
            return TRUE;
        else
            return FALSE;
    }
    //update tx table staus end//

    //insert data to histroy table start//
    function update_histroy($data_history)
    {
        $this->db->insert('tx_history', $data_history);
        if ($this->db->affected_rows() > 0)
            return TRUE;
        else
            return FALSE;
    }
	//insert data to histroy table end//

    function delete_tx_img($tx_image, $tx_id)
    {
        $this->db->where('tx_id', $tx_id);
        $this->db->where('tx_image', $tx_image);
        $this->db->delete('tx_images');
        if ($this->db->affected_rows() > 0)
            return TRUE;
        else
            return FALSE;
    }


}

?>
