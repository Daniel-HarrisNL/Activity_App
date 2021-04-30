<?php

require "dbinfo.php";

$method = $_SERVER['REQUEST_METHOD'];


if (!$con) {
  die("Connection failed: " . mysqli_connect_error());
}

switch ($method) {
    case 'GET':
      $sql = "SELECT * from app_users"; 
      break;
}

// run SQL statement
$result = mysqli_query($con,$sql);

// die if SQL statement failed
if (!$result) {
  http_response_code(500);
  die(mysqli_error($con));
}

if ($method == 'GET') {
    echo '[';
    for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {
      echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
    }
    echo ']';
  } else {
    echo mysqli_affected_rows($con);
  }

$con->close();