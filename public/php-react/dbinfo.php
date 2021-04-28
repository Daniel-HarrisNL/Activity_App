<?php

// header("Access-Control-Allow-Origin: *");

$usernames = array();
$i = 0;
while ($i < 10) {
  $usernames[] = "activity_user".$i;
  $i++;
}
$servername = "oneilljp.ipowermysql.com";
$username   = $usernames[rand(0,9)];
$password   = "omegatau129beta36pi";
$dbname     = "activity_app";

// Create connection
$con = mysqli_connect($servername, $username, $password, $dbname);

?>