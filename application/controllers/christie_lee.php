<?php

class Christie_lee extends CI_Controller{
	
	function __construct(){
		parent::__construct();
		$this->load->config('resources');
	}
	
	public function index(){
		
		// LIBRARIES
		$this->load->library('header');
		
		// VARIABLE DECLARTION
		$data['id'] = 'christie_lee';
		$data['name'] = 'Christie Lee';
		$data['page_title'] = 'Christie Lee';
		$data['css'] = $this->config->item('css');
		$data['javascript'] = $this->config->item('javascript');
		array_push($data['javascript'], 'christie_lee.js');
		array_push($data['css'], 'christie_lee.less');
		
		// FOLLOWING ARE OUTPUT VIEWS FOR THE BROWSER
		$this->load->view('bio', $data); //BIO IS WHAT PIECES EVERYTHING TOGETHER
		$this->load->view('resources/footer');	
	}
	
	function gallery_loader(){
		
		// THIS WILL LOAD A SINGLE ELEMENT INTO THE DOM
		$this->load->view('christie_lee/current/gallery');
		
	}	
}