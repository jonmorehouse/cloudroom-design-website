<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed'); 

class File_analysis{
	
	public function file_list($dir, $type){
		
		opendir($dir);
		$list = scandir($dir);
		$i = 0;
		if($type=='image')
			{
			foreach($list as $value)
				{
					$ext = substr($value, -3, 3);
					if($ext=='png' || $ext=='jpg' || $ext=='gif') //to add more file formats just edit this line!
						{
							$file_list[$i] = $value;
							$i++;
						}
				}
			}
		else{
			foreach($list as $value)
				{
					if(substr($value, -3, 3) == $type)
						{
							$file_list[$i] = $value;
							$i++;
						}
				}
		}
		return $file_list;
	}
	
	public function file_count($dir){
		
		$list = file_list($dir);
		$length = count($list);
		return $length;
	}
	// CONSTRUCTOR TO FIND THE ROOT DIRECTORY
	
	public function file_exists($file_name){
		// THIS FUNCTION ASSUMES THAT YOU ARE USING THE BASE_URL AND OUT OF APPLICATION ffolder
		//APPLICATION DOES NOT IN GENERAL ALLOW FOR DIRECTORY ACCESS
		$exists = file_exists($file_name);
		return $exists;
	}
}