<?php

$fi=fopen("archivo.txt", "w")
or die ("problemas al crear archivos");

fwrite ($fi, "Registro1=");


fwrite ($fi, $_POST['nombre']);
fclose ($fi)	;
?>