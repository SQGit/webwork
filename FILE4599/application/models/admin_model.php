<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Admin_model extends CI_Model
{
	function __construct()
    {
        parent::__construct();
    }

    function get_filed_tickets()
    {
        $this->db->select('*');
        $this->db->from('tickets_filed');                        
        $this->db->order_by('filed_date','DESC');
      	$query = $this->db->get();
        return $query->result();
    }

    function get_ticket_detils($table,$ticket_id)
    {
    	

		$this->db->select('*');
        $this->db->from('tickets_filed');
        $this->db->join($table, $table.'.'.$table.'_id = tickets_filed.ticket_id','left');        
        $this->db->where('tickets_filed.ticket_id',$ticket_id);
        $query = $this->db->get();
        return $query->result();

    }
 }   