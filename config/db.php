<?php 
$servername = "localhost"; 
$username = "root"; 
$password = "root"; 
$db = "christmas-games"; 

//create connection 
$conn = mysqli_connect($servername, $username, $password, $db);

//check conncection 
if(mysqli_connect_errno()) {
    echo "connection failed: " . mysqli_connect_errno();
}
?>