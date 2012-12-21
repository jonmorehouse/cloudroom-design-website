<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed'); 

$config['css'] = array(
	0 => 'site_wide.less',
	1 => 'content.less',
	2 => 'portfolio.less',
	3 => 'cloudroom_llc.less'
	);

$config['javascript'] = array(
	0 => 'resources/jquery-1.7.1.min.js',
	1 => 'resources/jquery-ui-1.8.18.custom.min.js',
	2 => 'resources/less-1.3.0.min.js',
	3 => 'site_wide.js',
	4 => 'homepage.js',
	5 => 'contact.js',
	6 => 'content.js',
	7 => 'current_projects.js',
	8 => 'portfolio.js',
	9 => 'browser_type.js',
	10 => 'about.js',
	);

$config['live_javascript'] = array(
	0=> 'resources/jquery-1.7.1.min.js',
	1 => 'live/site_wide.js'
	); 

$config['live_css'] = array(
	0 => 'live/site_wide.css',
);
//THIS IS FOR HELPERS FOR THE LIVE SITE. ADD HERE THINGS SUCH AS JQUERY_UI

// THE FOLLOWING TWO EMAILS ARE FOR EMAILS THAT GO TO CHRISTIE AND I
$config['administrator_email'] = array(
	0 => 'morehousej09@gmail.com',
	1 => 'morehousej09@gmail.com',
	);
?>