<?php

$email = $_POST['email'];

if(filter_var($email, filter_validate_email) === false) {
    exit("invalid format");
}
echo "email accepted"

?>