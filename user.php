<?php session_start();?>
<?php require_once('includes/header.php');?>
<?php require_once('config/db.php');?>

<?php 
if(isset($_POST['submit-user'])){
    // username and password is saved from previous page 
    $userName = $_SESSION['username'];
    $hashed = $_SESSION['password'];

    // Get form data 
    $full_name = mysqli_real_escape_string($conn, $_POST['full_name']);
    $e_mail = mysqli_real_escape_string($conn, $_POST['e_mail']);
    $mobile = mysqli_real_escape_string($conn, $_POST['mobile']);
    $city = mysqli_real_escape_string($conn, $_POST['city']);
    
    // Updates database with personal info 
    $query = "UPDATE login
                SET full_name = '$full_name', e_mail = '$e_mail', mobile = '$mobile', city = '$city'
                WHERE user_name = '$userName' AND pass = '$hashed'";
    
    if(mysqli_query($conn, $query)){
        //header('Location:maze.php');
        echo "<script>window.location.href='maze.php';</script>";
    } else {
        echo 'ERROR: '. mysqli_error($conn);
    }
}
?> 



<div class="img-bg-user">

<!-- Content -->
<div class="container">
    <div class="row">
        <div class="col-md-6 userinfo user-box user-boxEdit">
            <h1>User Information</h1>
            <form method="POST" action="<?php $_SERVER['PHP_SELF']; ?>">
            <div class="form-group user">
                <label for="full_name">Full Name</label>
                <input type="text" name="full_name" class="form-control" id="full_name" required>
            </div>
            <div class="form-group user">
                <label for="e_mail">E-mail</label>
                <input type="text" name="e_mail" class="form-control" id="e_mail" required>
            </div>
            <div class="form-group user">
                <label for="mobile">Mobile</label>
                <input type="number" name="mobile" class="form-control" id="mobile" required>
            </div>
            <div class="form-group user">
                <label for="city">City</label>
                <input type="text" name="city" class="form-control" id="city" required>
            </div>
            <button type="submit" name="submit-user" value="Submit" class="btn btn-light myButton" id="usersubmit">Submit</button>
            </form>
        </div>
    </div>
</div>

<?php require_once('includes/footer.php');?>