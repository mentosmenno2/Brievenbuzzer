<?php

$file=fopen("messages.txt","w+") or exit("Unable to open file!");

fwrite($file,"");


fclose($file);

?>