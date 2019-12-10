<?php require_once('includes/header.php');?>
<?php require_once('config/db.php');?>
<?php 
session_start();
$userName = $_SESSION['username'];
$hashed = $_SESSION['password'];
?>


<div class="img-bg-maze-one">

<!-- Navbar -->
<nav class="navbar navbar-expand-lg menu-link">
    <div class="collapse navbar-collapse top-nav" id="navbarNavAltMarkup">
    <h1 id="logo">Julemandens værksted</h1>
        <div class="navbar-nav">
            <a class="nav-item nav-link active" href="#">Maze</a>
            <a class="nav-item nav-link" href="userinfo.php">User</a>
            <a class="nav-item nav-link" href="logout.php">Log out</a>
        </div>
    </div>
</nav>


<!-- width og height kan sættes uden style tag, da det er noget man kan på canvas html tag -->
    <p class="content-desc desc">Hjælp julenissen med at få samlet alle gaverne til julemanden!</p>
    <p class="content-desc">Men pas på risengrøden, hvis nissen går ind i det, så stopper han med at arbejde!</p>
    <center>
        <canvas id="canvas" width="500" height="500"></canvas>
        <h2 class="gift">You have <span id="gift"></span> gifts</h2>
        <h2 class="point">You have <span id="point"></span> points</h2>
        <h2 id="total"></h2>
    </center>
</div>

    <script src="maze.js"></script>

<?php require_once('includes/footer.php');?>