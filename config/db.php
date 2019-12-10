<?php 
$servername = "localhost"; //dranigdesign.com.mysql
$username = "root"; //dranigdesign_com
$password = "root"; //xpp56gpj
$db = "christmas-games"; // dranigdesign_com

//create connection 
$conn = mysqli_connect($servername, $username, $password, $db);

//check conncection 
if(mysqli_connect_errno()) {
    echo "connection failed: " . mysqli_connect_errno();
}
?>