<?php

require "dbinfo.php";

$method = $_SERVER['REQUEST_METHOD'];
$_POST = json_decode(file_get_contents("php://input"), true);


if (!$con) {
  die("Connection failed: " . mysqli_connect_error());
}

// table format:
// id	| post_id	| user_id	| user_name	| comment_datetime | comment

switch ($method) {
    case "GET":
      $id = $_GET['post_id'];
      $sql = "SELECT * from post_comments WHERE post_id = '$id' ORDER BY comment_datetime"; 
      break;
    case "POST":
      $post_id     = $_POST["post_id"];
      $user_id     = $_POST["user_id"];
      $user_name   = strtr($_POST["user_name"], $slash_replace);
      $datetime    = date("Y-m-d H:m:s",time());
      $comment     = $_POST["comment"];  

      $sql = "INSERT INTO post_comments VALUES ('', '$post_id', '$user_id', '$user_name', '$datetime', '$comment')"; 

      break;
}

// run SQL statement
$result = mysqli_query($con,$sql);

// die if SQL statement failed
if (!$result) {
  http_response_code(500);
  die(mysqli_error($con));
}

$id = false;
if ($method == 'GET') {
    if (!$id) echo '[';
    for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {
      echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
    }
    if (!$id) echo ']';
  } elseif ($method == 'POST') {
    echo mysqli_insert_id($con);
  } else {
    echo mysqli_affected_rows($con);
  }

$con->close();