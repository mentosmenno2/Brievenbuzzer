<?php

$file=fopen("messages.txt","a+") or exit("Unable to open file!");

if ($_GET["msg"] <> "")
{
   fwrite($file,$_GET["msg"]."\n");
}

fclose($file);

?>