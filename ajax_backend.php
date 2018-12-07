<?php

	$path = "chat.txt";

	// MagicFu
	$ip = $_SERVER['REMOTE_ADDR'];

	// get the q parameter from URL
	$q = $_REQUEST["q"];

	// archivar mensaje
	if ($q !== "") {
		$chatFile = file_exists($path) ? fopen($path, "r+") : fopen($path, "w+");
		$chat = filesize($path) ? fread($chatFile, filesize($path)) : '';

		$msg = $ip."> ".$q."&#13;&#10;";
		fwrite($chatFile, $msg);

	    $chat .= $msg;

		fclose($chatFile);
	}
	else {
		$chatFile = file_exists($path) ? fopen($path, "r") : fopen($path, "w+");
		$chat = filesize($path) ? fread($chatFile, filesize($path)) : '';
		fclose($chatFile);
	}

	// Output "no suggestion" if no hint was found or output correct values
	echo $chat;
?>
