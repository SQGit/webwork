<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Admin_model extends CI_Model
{
	function __construct()
    {
        parent::__construct();
    }

//get today's patient list from db    
    function get_today_report($today)
    {
        $this->db->select('*');
        //$this->db->from('patient_details'); 
        $this->db->from('case_history'); 
        $this->db->join('patient_details', 'patient_details.p_id = case_history.p_id','left');
        $this->db->where('last_visited',$today);
        $query = $this->db->get();
        return $query->result();
    }

//insert new patient info to database
    function insert_patient_info()
    {
        $balance_cost = $this->input->post('treat_cost') - $this->input->post('fees');
        if($balance_cost >0)
        {
            $balance = $balance_cost;
        }
        else
        {
            $balance = 0;
        }

        $med_history = NULL;

        if($this->input->post('med_history')!='')
        {
         
            $med_history = implode(', ', $this->input->post('med_history'));

        }


    		$data_patient = array(                
          		'p_id' => $this->input->post('p_id'),                
          		'p_name' => $this->input->post('p_name'),
          		'p_phone' => $this->input->post('p_phone'),
          		'p_address' => $this->input->post('p_address'),
          		'p_dob' => $this->input->post('p_dob'),
          		'p_age' => $this->input->post('p_age'),                
          		'p_blood_group' => $this->input->post('p_blood_group'),
          		'p_sex' => $this->input->post('p_sex'),
          		'timestamp' => date("d-m-Y")
     	 	);

     	 	$data_case_history = array(
     	 		'p_id' => $this->input->post('p_id'),
     	 		'treat_type' => $this->input->post('treat_type'),
                'treat_details' => $this->input->post('treat_details'),
                'treat_procedure' => $this->input->post('treat_procedure'),
                'diagnosis' => $this->input->post('diagnosis'),
                'med_history' => $med_history,
                'treat_cost' => $this->input->post('treat_cost'),
                'bal_cost' => $balance,
                'fees' => $this->input->post('fees'),
                'last_visited' => date("d-m-Y")
     	 	);

     	 	if($this->db->insert('patient_details',$data_patient) && $this->db->insert('case_history',$data_case_history))
     	 	{
     	 		return true;     	 		
     	 	}
     	 	return false;
    }

//select patient info by id
    function select_patient_info_by_patient_id( $p_id )
    {
        $this->db->select('*');
        $this->db->from('patient_details');  
        $this->db->join('case_history', 'case_history.p_id = patient_details.p_id','left');
        $this->db->where('patient_details.p_id',$p_id);
        $query = $this->db->get();
        return $query->result();
    }

    function select_patient_pres_info( $p_id , $pres_id)
    {
        $this->db->select('*');
        $this->db->from('patient_details');  
        $this->db->join('case_history', 'case_history.p_id = patient_details.p_id','left');
        $this->db->where('patient_details.p_id',$p_id);
        $query = $this->db->get();
        return $query->result();
    }

    function select_exist_info()
    {
        $this->db->select('*');
        $this->db->from('patient_details');  
        //$this->db->join('case_history', 'case_history.p_id = patient_details.p_id','left');
        $this->db->where('status','active');
        $query = $this->db->get();
        return $query->result();
    }

    function select_patient_info()
    {
        $this->db->select('*');
        $this->db->from('patient_details');  
        $this->db->join('case_history', 'case_history.p_id = patient_details.p_id','left');
        //$this->db->where('patient_details.p_id',$p_id);
        $query = $this->db->get();
        return $query->result();
    }

    function drug_details()
    {
        $this->db->select('*');
        $this->db->from('drug_details');          
        $query = $this->db->get();
        return $query->result();
    }

    function get_treat_types()
    {
        $this->db->select('*');
        $this->db->from('treat_type');          
        $query = $this->db->get();
        return $query->result();
    }

    function select_patient_info_only($p_id)
    {
        $this->db->select('*');
        $this->db->from('patient_details');          
        $this->db->where('patient_details.p_id',$p_id);
        $query = $this->db->get();
        return $query->result();
    }

    function select_case_history_info($pres_id)
    {
        $this->db->select('*');
        $this->db->from('case_history');          
        $this->db->where('case_history.prescription_id',$pres_id);
        $query = $this->db->get();
        return $query->result();
    }

    function select_pres_info($pres_id)
    {
        $this->db->select('*');
        $this->db->from('prescription_details');          
        $this->db->where('prescription_details.prescription_id',$pres_id);
        $query = $this->db->get();
        return $query->result();
    }

    //insert new patient info to database
    function insert_drug_info()
    {        
       
        $drug_info = array(                
            'drug_name' => $this->input->post('drug_name'),                
            'drug_desc' => $this->input->post('drug_desc'),
            'duration' => $this->input->post('duration'),                                
            'drug_instruct' => $this->input->post('drug_instruct'),
        );

        return $this->db->insert('drug_details',$drug_info);
            
    }

    //insert new patient info to database
    function insert_treat_type()
    {        
       
        $treat_type = array(                
            'treat_name' => $this->input->post('treat_type'),                
            'treat_desc' => $this->input->post('treat_desc'),
        );

        return $this->db->insert('treat_type',$treat_type);
            
    }

    function select_drug_info_by_id($drug_id)
    {
        $this->db->select('*');
        $this->db->from('drug_details');          
        $this->db->where('drug_id',$drug_id);
        $query = $this->db->get();
        return $query->result();
    }

    function select_treat_type_by_id($id)
    {
        $this->db->select('*');
        $this->db->from('treat_type');          
        $this->db->where('id',$id);
        $query = $this->db->get();
        return $query->result();
    }

    function drug_update($drug_id)
    {       
        
        $drug_info_update = array(                
            'drug_name' => $this->input->post('drug_name'),                
            'drug_desc' => $this->input->post('drug_desc'),
            'duration' => $this->input->post('duration'),
            'drug_instruct' => $this->input->post('drug_instruct'),                                
        );

        if($this->db->where('drug_id', $drug_id)->update('drug_details', $drug_info_update))
        {
            return true;
        }

    }

    function treat_type_update($id)
    {       
        
        $treat_type_update = array(                
            'treat_name' => $this->input->post('treat_type'),                
            'treat_desc' => $this->input->post('treat_desc'),                               
        );

        if($this->db->where('id', $id)->update('treat_type', $treat_type_update))
        {
            return true;
        }
    }    

    function insert_new_prescription($p_id)
    {
    	$data =array();
        $case_history_id = $this->input->post('case_history_id');

  		for ($i = 0; $i < count($this->input->post('drug_name')); $i++) {
            $data[] = array(
                'p_id' => $p_id,
            	  'timestamp' => date("d-m-Y"),
                'prescription_id' => $this->input->post('prescription_id'),
                'drug_name' => $this->input->post('drug_name')[$i],
                'time_mrng' => $this->input->post('time_mrng')[$i],
                'time_noon' => $this->input->post('time_noon')[$i],
                'time_night' => $this->input->post('time_night')[$i],
                'no_of_days' => $this->input->post('no_of_days')[$i],
                'qty' => $this->input->post('qty')[$i],
                'instruction' => $this->input->post('instruction')[$i],
            );
        }
        
        //print_r($data); 

      $data_case_history = array(
              'p_id' => $p_id,
              'prescription_id' => $this->input->post('prescription_id'),
              'case_history_id' => $this->input->post('case_history_id'),
              'treat_type' => $this->input->post('treat_type'),
              'treat_details' => $this->input->post('treat_details'),
              'diagnosis' => $this->input->post('diagnosis'),
              'med_history' => $this->input->post('med_history'),
              'treat_cost' => $this->input->post('treat_cost'),
        );

         if($this->db->insert_batch('prescription_details',$data) && $this->db->where('case_history_id', $case_history_id)->update('case_history', $data_case_history))
        {
              return true;          
        }
        
              return false;
    }

//update patient info to database
    function update_patient_info()
    {
        $balance_cost = $this->input->post('treat_cost') - $this->input->post('fees');
        if($balance_cost >0)
        {
            $balance = $balance_cost;
        }
        else
        {
            $balance = 0;
        }

        $med_history = implode(', ', $this->input->post('med_history'));

        $p_id = $this->input->post('p_id');
        $data_patient = array(                
              'p_id' => $this->input->post('p_id'),                
              'p_name' => $this->input->post('p_name'),
              'p_phone' => $this->input->post('p_phone'),
              'p_address' => $this->input->post('p_address'),
              'p_dob' => $this->input->post('p_dob'),
              'p_age' => $this->input->post('p_age'),                
              'p_blood_group' => $this->input->post('p_blood_group'),
              'p_sex' => $this->input->post('p_sex'),
              'timestamp' => date("d-m-Y")
        );

        $data_case_history = array(
              'p_id' => $this->input->post('p_id'),
              'treat_type' => $this->input->post('treat_type'),
              'treat_details' => $this->input->post('treat_details'),
              'treat_procedure' => $this->input->post('treat_procedure'),
              'diagnosis' => $this->input->post('diagnosis'),
              'med_history' => $med_history,
              'treat_cost' => $this->input->post('total_cost'),
              'bal_cost' => $balance,
              'fees' => $this->input->post('fees'),
              'last_visited' => date("d-m-Y")
        );

            if($this->db->where('p_id', $p_id)->update('patient_details', $data_patient) && $this->db->insert('case_history', $data_case_history))

            {
              return true;          
            }
        
              return false;
    }

    function update_patient()
    {

        $p_id = $this->input->post('p_id');
        $data_patient = array(                
              'p_name' => $this->input->post('p_name'),
              'p_phone' => $this->input->post('p_phone'),
              'p_address' => $this->input->post('p_address'),
              'p_dob' => $this->input->post('p_dob'),
              'p_age' => $this->input->post('p_age'),                
              'p_blood_group' => $this->input->post('p_blood_group'),
              'p_sex' => $this->input->post('p_sex'),
        );


            if($this->db->where('p_id', $p_id)->update('patient_details', $data_patient))

            {
              return true;          
            }
        
              return false;
    }

    function archive($p_id)
    {
        $archive_id = array(
            'status' => 'archive',
        );

        if($this->db->where('p_id', $p_id)->update('patient_details', $archive_id))
        {
          return true;          
        }
        
          return false;

    }


    function select_profile_info()
    {
        $this->db->select('*');
        $this->db->from('user');          
        $query = $this->db->get();
        return $query->result();
    }

    function profile_update()
    {
       
        $user_id = '1';
        $profile_data = array(                
              'user_name' => $this->input->post('user_name'),                
              'user_email' => $this->input->post('user_email'),
              'user_address' => $this->input->post('user_address'),
              'user_phone' => $this->input->post('user_phone'),
        );        

        return $this->db->where('user_id', $user_id)->update('user', $profile_data);

    }

    function update_password()
    {
       
        $user_id = '1';
        $profile_data = array(                
              'user_password' => $this->input->post('new_pass'),                
        );        

        return $this->db->where('user_id', $user_id)->update('user', $profile_data);

    }




 }
