<?php

require "dbinfo.php";

$method = $_SERVER['REQUEST_METHOD'];
// $request = explode('/', trim($_SERVER['PATH_INFO'],'/'));


if (!$con) {
  die("Connection failed: " . mysqli_connect_error());
}

switch ($method) {
    case 'GET':
      $id = $_GET['id'];
      if (!$id) {
        $sql = "SELECT * from activity_posts ORDER BY start_datetime ASC"; 
      } else {
        $sql = "SELECT * from activity_posts WHERE id='$id'"; 
      }
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
    if (!$id) echo '[';
    for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {
      echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
    }
    if (!$id) echo ']';
  } else {
    echo mysqli_affected_rows($con);
  }

$con->close();