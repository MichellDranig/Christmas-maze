<?php require_once('includes/header.php');?>
<?php require_once('config/db.php');?>

<?php 
if(isset($_POST['submit-user'])){
    // Get form data 
    session_start();
    $userName = $_SESSION['username'];
    $hashed = $_SESSION['password'];

    $full_name = mysqli_real_escape_string($conn, $_POST['fullname']);
    $e_mail = mysqli_real_escape_string($conn, $_POST['email']);
    $mobile = mysqli_real_escape_string($conn, $_POST['mobile']);
    $city = mysqli_real_escape_string($conn, $_POST['city']);
    
    $query = "UPDATE login
                SET full_name = '$full_name', e_mail = '$e_mail', mobile = '$mobile', city = '$city'
                WHERE user_name = '$userName' AND pass = '$hashed'";
    
    if(mysqli_query($conn, $query)){
        // header('Location:userinfo.php');
        echo "<script>window.location.href='userinfo.php';</script>";
    } else {
        echo 'ERROR: '. mysqli_error($conn);
    }
}
?> 



<div class="img-bg-user">
    
<!-- Navbar -->
<nav class="navbar navbar-expand-lg menu-link">
    <div class="collapse navbar-collapse top-nav" id="navbarNavAltMarkup">
    <h1 id="logo">Julemandens værksted</h1>
        <div class="navbar-nav">
            <a class="nav-item nav-link active" href="maze.php">Maze</a>
            <a class="nav-item nav-link" href="userinfo.php">User</a>
            <a class="nav-item nav-link" href="logout.php">Log out</a>
        </div>
    </div>
</nav>

<!-- Content -->
<div class="container">
    <div class="row">
        <div class="col-md-6 userinfo user-box user-boxEdit">
            <h1>User Information</h1>
            <form method="POST" action="<?php $_SERVER['PHP_SELF']; ?>">
            <div class="form-group user">
                <label for="fullname" class="user">Full Name</label>
                <input type="text" name="fullname" class="form-control" id="fullname" required>
            </div>
            <div class="form-group user">
                <label for="email" class="user">E-mail</label>
                <input type="text" name="email" class="form-control" id="email" required>
            </div>
            <div class="form-group user">
                <label for="mobile" class="user">Mobile</label>
                <input type="number" name="mobile" class="form-control" id="mobile" required>
            </div>
            <div class="form-group user">
                <label for="city" class="user">City</label>
                <input type="text" name="city" class="form-control" id="city" required>
            </div>
            <button type="submit" name="submit-user" value="Submit" class="btn btn-light myButton" id="usersubmit">Save</button>
            </form>
        </div>
    </div>
</div>

<?php require_once('includes/footer.php');?>