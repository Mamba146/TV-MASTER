<?php
$to = "avdoev@yahoo.com"; // куда отправлять

$name = htmlspecialchars($_POST['name']);
$email = htmlspecialchars($_POST['email']);
$message = htmlspecialchars($_POST['message']);

$subject = "Сообщение с сайта TV MASTER NICE";
$body = "Имя: $name\nEmail: $email\nСообщение:\n$message";

$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=utf-8\r\n";

if (mail($to, $subject, $body, $headers)) {
  echo "Сообщение успешно отправлено!";
} else {
  echo "Ошибка при отправке.";
}
?>