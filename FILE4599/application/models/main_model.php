<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Main_model extends CI_Model
{
	function __construct()
    {
        parent::__construct();
    }
	
    // get all ticket points //
    function get_ticket_points()
    {
        $this->db->select('*');
        $this->db->from('ticket_points');
        $query = $this->db->get();
        return $query->result();
    }

    function insert_tkt($data)
    {
        return $this->db->insert('tickets_filed', $data);
    }

    function data_parking_tkt($data)
    {
        return $this->db->insert('parking_ticket', $data);
    }

    function data_red_light_tkt($data)
    {
        return $this->db->insert('red_light_ticket', $data);
    }

    function data_traffic_tkt($data)
    {
        return $this->db->insert('traffic_ticket', $data);
    }

    function getRows($id='')
    {
        $this->db->select('*');
        $this->db->from('tickets_filed');
        $this->db->where('ticket_id',$id);                
        $query = $this->db->get();
        return $query->result();
        //return $query->result_array();
    }

    function get_ticket_price()
    {
        $this->db->select('*');
        $this->db->from('service_charge');                
        $query = $this->db->get();
        return $query->result();
    }


    //insert transaction data
    function insertTransaction($data = array()){
        $insert = $this->db->insert('payments',$data);
        return $insert?true:false;
    }

    function update_status($data = array()){
        
        //$payment_status = $data['payment_status'];
        $ticket_id = $data['ticket_id'];
        $data1 = array('payment_status' => $data['payment_status']);
        $this->db->where('ticket_id', $ticket_id);
        $update = $this->db->update('tickets_filed', $data1);
        return $update?true:false;
    }









}    