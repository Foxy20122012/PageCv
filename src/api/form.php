<?php

$nombre = $_POST['name'];
$email = $_POST['email'];
$mensaje =$_POST['textarea'];

$header .= "Content-Type: text/plain; charset=UTF-8\r\n";
$header .= "From: $email\r\n";

$mensaje = "Este mensaje fue enviado por $nombre,\r\n";
$mensaje .= "Su e-mail es: $email,\r\n";
$mensaje .= "El asunto es: ".$_POST['asunto'].",\r\n";
$mensaje .= "Mensaje: $mensaje\r\n";
$mensaje .= "Enviado el ".date('d/m/Y',time());

$para = "umbrellamaximus43@gmail.com";
$asunto = "Mensaje de mi portafolio web";

if (mail($para, $asunto, utf8_decode($mensaje), $header)) {
  echo "¡Tu mensaje ha sido enviado con éxito!";
} else {
  echo "Lo sentimos, ha ocurrido un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.";
}
