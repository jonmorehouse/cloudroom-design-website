<?php

class Jon_morehouse extends CI_Controller{
	
	function __construct(){
		parent::__construct();
		$this->load->config('resources');
	}
	
	public function index(){
		
		$this->load->library('header');

		// VARIABLE DECLARTION
		$data['id'] = 'jon_morehouse';
		$data['page_title'] = 'Jon Morehouse';
		$data['css'] = $this->config->item('css');
		array_push($data['css'], 'jon_morehouse.less');
		$data['javascript'] = $this->config->item('javascript');

		// OUTPUT
		$this->load->view('bio', $data);
		$this->load->view('resources/footer');	
	}
}
