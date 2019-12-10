<?php require_once('includes/header.php');?>
<?php require_once('config/db.php');?>

<?php 
// login php - makes sure username exists, and password is correct 
$output = "";

if(isset($_POST['btn-login'])){
    $userName = mysqli_real_escape_string($conn, $_POST['username']);
    $pass = mysqli_real_escape_string($conn, $_POST['password']);

    $salt = "kfjipaejrfoinræfwaf4ir5433¨fjfkeæøålpkop" . $pass . "fjgwhæødååa4u3fraf";

    $hashed = hash('sha512', $salt);

    $sql = "SELECT * FROM login WHERE user_name = '$userName' AND pass = '$hashed'";

    $result = mysqli_query($conn, $sql) or die("Query virker ikke!" . $sql);

    // Hvor mange rows får vi tilbage når vi kaster det tilbage til vores database 
    if(mysqli_num_rows($result) == 1){
        session_start();
        $_SESSION['adgang'] = "adgang";
        //header("location:maze.php"); // når man trykker log-in bliver man sendt ind på games siden 
        echo "<script>window.location.href='maze.php';</script>";

        $output = "Du er logget ind"; 
    }else{
        $output = "Forkert brugernavn eller adgangskode"; 
    }
}

// signup/registrer php - makes sure username is unique, passwords are both the same, hashes (cryptate) password 
// and inserts into database
$signup_output = "";
$flag = false; 
$userUnique = true;

if(isset($_POST['btn-signup'])){

    // Mysqli_real_escape_string = renser for karakterer som kan bruges til SQL angreb 
    $userName = mysqli_real_escape_string($conn, $_POST['username']); // [] = input fields 
    $passOne = mysqli_real_escape_string($conn, $_POST['password']); 
    $passTwo = mysqli_real_escape_string($conn, $_POST['passwordTwo']);

    if($passOne === $passTwo){
        $flag = true;
    }

    $sql = "SELECT * FROM login WHERE user_name = '$userName'"; 
    $result = mysqli_query($conn, $sql) or die ("Query virker ikke - henter" . $sql); 


    // unique username and hasing password 
    if(mysqli_num_rows($result)){
        $userUnique = false;
    }

    if($flag == true AND $userUnique == true){
        $salt = "kfjipaejrfoinræfwaf4ir5433¨fjfkeæøålpkop" . $passOne . "fjgwhæødååa4u3fraf";

        $hashed = hash('sha512', $salt);
        
        $sql = "INSERT INTO login(user_name, pass, tm) VALUES ('$userName', '$hashed', CURRENT_TIMESTAMP);"; //hashed er den krypteret version af passwordet nu 
        $result = mysqli_query($conn, $sql) or die("Query virker overhovedet ikke!");

        session_start();
        $_SESSION['username'] = $userName;
        $_SESSION['password'] = $hashed;
        $_SESSION['adgang'] = "adgang";

        
        //header("location:user.php"); - php version - doesn't work online 
        echo "<script>window.location.href='user.php';</script>";
        $signup_output = "Du er logget ind"; 
    } else {
        $signup_output = "Brugernavn eksistere allerede"; 
    }
}
?>


<!-- Content -->
<div class="img-bg">
<h1 id="logo-frontpg" class="display-2">Julemandens værksted</h1>

<!-- Login -->
<div class="container">
    <div class="row signup">
        <div class="col-md-5 user-box">
            <form action="index.php" method="POST"> <!--  'Post' bliver brugt fremfor 'get', da det er mere sikkert (get i url) -->
            <h2 class=" display-4 header">Login</h2>
                <div class="form-group user">
                    <label for="username">Username</label>
                    <input class="form-control" type="text" name="username">
                </div>
                <div class="form-group user">
                    <label class="passwordform" for="password">Password</label>
                    <input class="form-control" type="password" name="password">
                </div>
                
                <button class="btn btn-light myButton" id="btn-login" name="btn-login" type="submit">Login</button>
                <h3><?= $output ?></h3>
            </form>
        </div>

<!-- Sign up -->
        <div class="col-md-5 user-box">
            <form action="index.php" method="POST" onSubmit="return checkform()" id="checkform">
            <h2 class=" display-4 header">Sign up</h2>
                <div class="form-group user">
                    <label for="username">Username</label>
                    <input class="form-control" type="text" name="username" id="username" required>
                 </div>
                <div class="form-group user">
                    <label class="passwordform" for="password">Password</label>
                    <input class="form-control" type="password" name="password" id="password" 
                    pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$" required>
                    <small>8 characters or more, one number and one upper- and lowercase letter</small>
                    <small id="ensPass"></small>
                </div>
                <div class="form-group user">
                    <label class="passwordform" for="passwordTwo">Confirm password</label>
                    <input class="form-control" type="password" name="passwordTwo" id="passwordTwo" 
                    pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$" required>
                    <small id="ensPass"></small>
                </div>
                
                <button class="btn btn-light myButton" id="btn-signup" name="btn-signup" type="submit">Sign up</button>
                <!-- kort måde at skrive php echo -->
                <h3 id="passShort"><?= $signup_output ?></h3>
            </form>
        </div>
    </div>
</div>
</div>

    
<?php require_once('includes/footer.php');?>