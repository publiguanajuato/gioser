<?php
$fi= fopen("articulo2.txt", "a")or die ("problemas al crear archivo")
fwrite($fi, $_POST['NOMBRE']);
fwrite($fi, "\n");
fwrite($fi, $_POST['ARTICULO']);
fwrite($fi, "\n");
?>