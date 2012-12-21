<?php
class Cloudroom_llc extends CI_Controller{
	
	function __construct(){
		parent::__construct();
		$this->load->config('resources');
	}

	function index(){
		// LIBRARIES LOADER
		$this->load->library('header');
		
		// VARIABLE DECLARATION
		$data['id'] = 'cloudroom_llc';
		$data['page_title'] = 'CloudRoomLLC';
		$data['css'] = $this->config->item('css');
		$data['javascript'] = $this->config->item('javascript');
		
		// OUTPUT
		$this->load->view('cloudroom_llc', $data);
		$this->load->view('resources/footer');
	}
}

