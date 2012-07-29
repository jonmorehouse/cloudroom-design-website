<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed'); 
/*HEADER
	1.) This class is called instead of loading view header.php
	2.) This will accept parameters and will determine if the site is live or not
	3.) If live it will load site_wide.css and type.css
	4.) If local it will load all less files as pushed 
	5.) It sends all information to the header view
	6.) Type can be used for loading meta data in the future
	7.) Javascript files are the same way. Will be a combined site_wide.js + a type.js that each page loads.
*/

class Header{

	var $CI;
//MOST LIKELY CALLED FROM HEADERS SO WE WILL ACCEPT MULTIPLE PARAMETERS INSTEAD OF ARRAY
// $type, $page_title, $css, $javascript
	public function index($type, $page_title, $css, $javascript){
		$this->CI =& get_instance();
		$live = $this->site_status();
		$data['page_title'] = $page_title;
		if($live)
			{
				$data['css'] = $this->live_css($type);
				$data['javascript'] = $this->live_javascript($type);
				$data['site_status'] = '';
			}
		else
			{
				$data['css'] = $css;
				$data['javascript'] = $javascript;
				$data['site_status'] = '/less';
			}
		$this->CI->load->view('resources/header', $data);
	}
	
	private function site_status(){
		$this->CI->load->config('site_status');
		$status = $this->CI->config->item('site_status');
		if($status == 'live')
			return true;
		else
			return false;
	}
	
	private function live_css($type){
		// LOADING LIBRARY
		$this->CI->load->library('file_analysis');
		$this->CI->load->config('resources');
		
		// DATA
		$css = $this->CI->config->item('live_css');
		
		// FILE EXISTS
		$file = 'resources/css/live/' . $type . '.css';
		if($this->CI->file_analysis->file_exists($file))
			array_push($css, 'live/' . $type . '.css');		
			
		return $css;
	}
	
	private function live_javascript($type){
		
		// ACCESSING CI LIBRARIES
		$this->CI->load->config('resources');
		$this->CI->load->library('file_analysis');
		
		// DATA 
		//THIS IS NOT BUILT IN BECAUSE SOME SITES WILL REQUIRE CERTAIN LIBRARIES ETC AND OTHERS WON'T
		$javascript = $this->CI->config->item('live_javascript');
		
		// CHECKING IF FILE EXISTS BEFORE WE LOAD IT
		$file_push = 'resources/javascript/live/' . $type . '.js';	
		if($this->CI->file_analysis->file_exists($file_push))
			array_push($javascript, 'live/' . $type . '.js');

			//REMEMBER THIS IS JUST A FOLDER ('live') inside of the resources/javascript
		return $javascript;
	}
	
};
