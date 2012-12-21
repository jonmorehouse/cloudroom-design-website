<?php

class Homepage extends CI_Controller{
	
	function __construct()
	{
		parent::__construct();
		$this->config->load('resources');
	}
	
	function index(){
		// LOADING LIBRARIES
		$this->load->library('header');
		
		// DATA
		$data['id'] = 'homepage';
		$data['page_title'] = 'CloudroomDesign Homepage';
		$data['css'] = $this->config->item('css');
		$data['javascript'] = $this->config->item('javascript');
		
		// OUTPUT
		$this->load->view('homepage', $data);
		$this->load->view('resources/footer');

	}
}