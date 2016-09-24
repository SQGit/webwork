<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Admin extends CI_Controller {

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
		$this->load->model('admin_model');
	}

	public function index()
	{	
		$data['tickets_filed'] = $this->admin_model->get_filed_tickets();
		$this->load->view('admin/includes/header');
		$this->load->view('admin/includes/sidemenu');
		$this->load->view('admin/home',$data);
		$this->load->view('admin/includes/footer');
	}

	public function preview($table,$ticket_id)
	{
		
		$data['tickets_details'] = $this->admin_model->get_ticket_detils($table,$ticket_id);
		//print_r($data['tickets_details']);

		$page = $data['tickets_details']['0']->table_name;
		$this->load->view('admin/'.$page, $data);

		
	}

}
