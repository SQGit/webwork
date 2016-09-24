<?php

$servername = "50.62.209.119:3306";
$username = "ifunduser";
$password = "Root@123";
$db = "ifund"; 

/*
$servername = "localhost";
$username = "root";
$password = "";
$db = "ifund";
*/
// Create connection
$conn = mysqli_connect($servername, $username, $password, $db);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

?>