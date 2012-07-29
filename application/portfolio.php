<?php

class Portfolio extends CI_Controller{
	
	function __construct()
	{
		parent::__construct();
		$this->config->load('resources');
	}
	
	function index(){
		// LOADING LIBRARIES
		$this->load->library('header');
		
		// PAGE META DATA
		$data['id'] = 'portfolio';
		$data['page_title'] = 'CloudRoomDesign Portfolio';
		$data['css'] = $this->config->item('css');
		$data['javascript'] = $this->config->item('javascript');
		
		// OUTPUT
		$this->load->view('portfolio', $data);
		$this->load->view('resources/footer');
				
	}
}