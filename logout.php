<?php session_start(); ?>
<?php require_once('includes/header.php');?>
<?php require_once('config/db.php');?>

<?php 
session_destroy();
echo "<script>window.location.href='index.php';</script>";
?>

<?php require_once('includes/footer.php');?>