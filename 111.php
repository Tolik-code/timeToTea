<?php
$data = json_decode(file_get_contents('php://input'), true);
echo 'Привет ' . htmlspecialchars($_POST["name"]) . '!';
?>