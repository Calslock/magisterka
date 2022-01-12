<?php
$site = basename($_SERVER['PHP_SELF']);

if ($site == 'index.php') include_once("../php/main.php");
elseif ($site == 'article1.php') include_once("../php/article1_stub.php");