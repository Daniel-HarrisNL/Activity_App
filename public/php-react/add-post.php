<?php

$slash_replace = array("\"" => "&#34;", "'" => "&#39;", "," => "&#44;", "-" => "&#8208;");

require "dbinfo.php";

$method = $_SERVER['REQUEST_METHOD'];
$_POST = json_decode(file_get_contents("php://input"), true);

if (!$con) {
  die("Connection failed: " . mysqli_connect_error());
}

//$id = false;
switch ($method) {
  case 'POST':
  //   echo "New Post Data:<br />";
  //   foreach ($_POST as $key => $value) {
  //     echo "<pre>";
  //     echo $key;
  //     echo " : ";
  //     echo $value;
  //     echo "</pre>";
  // }
    $user_id     = $_POST["user_id"];
    $user_name   = strtr($_POST["user_name"], $slash_replace);
    $datetime    = date("Y-m-d H:m:s",time());
    $title       = $_POST["title"];
    $category    = $_POST["category"];
    $location    = $_POST["location"];
    $description = $_POST["description"];
    $start_date  = $_POST["start_date"];
    $end_date    = $_POST["end_date"];
    $start_time  = $_POST["start_time"];
    $end_time    = $_POST["end_time"];
    $start       = $start_date." ".$start_time.":00";
    $end         = $end_date." ".$end_time.":00";
    $tags        = $_POST["tags"];
    $sql = "INSERT INTO activity_posts VALUES ('', '$user_name', '$user_id', '$datetime', '$title', '$category',
                                                   '$location', '$description', '$start', '$end', '$tags')"; 
    break;
}

// run SQL statement
$result = mysqli_query($con,$sql);

// die if SQL statement failed
if (!$result) {
  http_response_code(500);
  die(mysqli_error($con));
}

if ($method == 'POST') {
  // echo json_encode($result);
  echo mysqli_insert_id($con);
} else {
  echo mysqli_affected_rows($con);
}

$con->close();