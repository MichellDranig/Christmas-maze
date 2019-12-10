<?php session_start();?>
<?php require_once('includes/header.php');?>
<?php require_once('config/db.php');?>

<?php 
//session_start();
$userName = $_SESSION['username'];
$hashed = $_SESSION['password'];

// Create query (forespørgsel) - select alt indhold fra login where username and password is from the database så man kun får info fra sin egen 
$query = "SELECT * FROM login WHERE user_name = '$userName' AND pass = '$hashed'";

// Get result - får fat i ens forespørgsel
$result = mysqli_query($conn, $query);

// Fetch data - henter data som vi vil have 
$users = mysqli_fetch_all($result, MYSQLI_ASSOC);

// Free result from "memory" / free result in the server memory 
mysqli_free_result($result);

// Close connection
mysqli_close($conn);

?> 


<div class="img-bg-user">

<!-- Navbar -->
<nav class="navbar navbar-expand-lg menu-link">
    <div class="collapse navbar-collapse top-nav" id="navbarNavAltMarkup">
    <h1 id="logo">Julemandens værksted</h1>
        <div class="navbar-nav">
            <a class="nav-item nav-link active" href="maze.php">Maze</a>
            <a class="nav-item nav-link" href="#">User</a>
            <a class="nav-item nav-link" href="logout.php">Log out</a>
        </div>
    </div>
</nav>

<!-- Content -->
<div class="container">
    <div class="row">
        <div class="col-md-6 userinfo text-center user-box user-boxOpacity">
            <h1 class="userhead">User Information</h1>
            <?php foreach($users as $user) : ?> 
                <p class="user text-center"><?php echo $user['full_name']; ?></p>
                <p class="user text-center"><?php echo $user['e_mail']; ?></p>
                <p class="user text-center"><?php echo $user['mobile']; ?></p>
                <p class="user text-center"><?php echo $user['city']; ?></p>
                <a href="edituser.php" class="btn btn-light myButton text-center">Edit</a>
        </div>
    </div>
</div>
<?php endforeach; ?>



<?php require_once('includes/footer.php');?>