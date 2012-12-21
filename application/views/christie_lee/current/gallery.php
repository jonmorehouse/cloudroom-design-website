<?php
$images = 19;

for ($i=1; $i<=$images; $i++){
	echo "\n\n\t<div class='slide'>"
		. "\n\t\t<img src='" . base_url('christie_lee/photography/' . $i . '.png') . "' />"
		. "\n\t</div>";
}

?>