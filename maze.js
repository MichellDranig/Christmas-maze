// select canvas 
let canvas = document.querySelector("#canvas");

// ctx=canvascontext 
let ctx = canvas.getContext('2d');

// First maze array 
let maze = [
    [0, 0, 0, 0, 0, 1, 1, 1, 4, 1, 1, 2, 0, 1, 1, 1, 0, 0, 0, 0], 
    [0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0], 
    [0, 1, 6, 0, 0, 1, 0, 1, 5, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0],
    [0, 1, 0, 1, 1, 1, 4, 1, 0, 1, 0, 1, 1, 1, 0, 1, 5, 0, 1, 0], 
    [0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 4, 0, 0, 0, 0, 1, 0], 
    [0, 1, 0, 1, 0, 1, 0, 0, 0, 4, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1], 
    [0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1], 
    [1, 1, 4, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 4, 1], 
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1], 
    [0, 5, 0, 0, 0, 1, 0, 1, 4, 1, 4, 1, 0, 1, 1, 1, 0, 0, 1, 4],

    [1, 1, 1, 1, 0, 1, 0, 1, 1, 6, 1, 1, 0, 1, 4, 0, 0, 1, 1, 0], 
    [0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 4, 1, 0], 
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 5, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0], 
    [0, 4, 1, 1, 1, 0, 1, 1, 0, 0, 5, 0, 1, 0, 1, 0, 1, 0, 1, 0], 
    [0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0], 
    [0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0], 
    [0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0], 
    [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4], 
    [0, 3, 1, 1, 6, 1, 5, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

// Second maze array
let maze2 = [
    [1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 5, 1, 1, 4, 0, 0, 0, 0, 1, 0],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 5, 0],
    [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1],
    [1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 6, 1, 0, 1, 0, 1],
    [1, 1, 1, 0, 1, 5, 0, 1, 0, 1, 1, 0, 0, 5, 5, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1],
    
    [1, 0, 4, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 6, 1, 0, 1, 0, 1, 1, 0, 1],
    [1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 2],
    [0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
    [0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0],
    [0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
    [0, 5, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0],
    [0, 4, 0, 1, 1, 1, 6, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 5, 1, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]

];

// player, maze, tilesize variables 
let y = 0;
let x = 0;
let player = 3;
let playerPosition;
let startPosition = {y:9, x:1};
let tileSize = 25;

// point/score variables
let point = 0;
let gift = 0;
let score = 1;
let pointText = document.querySelector('#point');
let giftText = document.querySelector('#gift');
let totalScore = document.querySelector('#total');


// image variables 
let nisse =new Image();
nisse.src='images/wishnisse.jpg';

let wallImg =new Image();
wallImg.src='images/wallOne.png';

let goal =new Image();
goal.src='images/ladder.jpg';

let nisseHue =new Image();
nisseHue.src='images/nisseHueOne.png';

let giftOne =new Image();
giftOne.src='images/present.png';

let bombeImg =new Image();
bombeImg.src='images/risengroeden.jpg';

let imgGoal =new Image();
imgGoal.src="images/julemanden.jpg";


// Makes the grid for the maze by using a for loop 
// Draws the tiles for the maze by using the image variables 
function grid(){
for(y = 0; y < maze.length; y++){
    for(x = 0; x < maze[y].length; x++){
        if(maze[y][x] == 0) { // selve banen
            ctx.drawImage(wallImg, x*tileSize, y*tileSize, tileSize, tileSize);
        }else if(maze[y][x] == 2){ // mål 
            ctx.drawImage(goal, x*tileSize, y*tileSize, tileSize, tileSize);
        }else if(maze[y][x] == player){ //player = 3
            playerPosition = {y, x}; 
            ctx.drawImage(nisse, x*tileSize, y*tileSize, tileSize, tileSize);
        }else if(maze[y][x] == 4){ //bomb 
            ctx.drawImage(bombeImg, x*tileSize, y*tileSize, tileSize, tileSize);
        }else if(maze[y][x] == 5){ //point 
            ctx.drawImage(nisseHue, x*tileSize, y*tileSize, tileSize, tileSize);
        }
        else if(maze[y][x] == 6){ //nøgler
            ctx.drawImage(giftOne, x*tileSize, y*tileSize, tileSize, tileSize);
        }else{
            ctx.fillStyle = "white"; 
            ctx.fillRect(x*tileSize, y*tileSize, tileSize, tileSize);    
        }
    }
}
}

// The game reloads after hitting a Risengrod("the bomb") after 250 miliseconds 
function risengrod(){
    setTimeout(function(){location.href = "maze.php";}, 250);
}

// point calculations 
function pointScore(){
    point += score;
    pointText.innerHTML = point;
}

// gift/keys calculations 
function giftScore(){
    gift += score;
    giftText.innerHTML = gift;
}

// Changes the first maze to the second if you have 3 gifts and replaces the image on the goal tile 
function toNewMaze(){
    if(maze && gift ==3){
        maze = maze2;
        goal = imgGoal;
    }
// if you have 6 gifts in total, you win and can see your scores 
    if(maze2 && gift==6){
        let result = gift+point;
        soundCheers();
        canvas.style.display = "none";
        totalScore.innerHTML = 'You have ' + result +  ' points in total';
    }
}


// functions for pressing the different keys 
function keyRight() {
    if(maze[playerPosition.y][playerPosition.x+1] == 1){
        maze[playerPosition.y][playerPosition.x+1] = 3; //players new position 
        maze[playerPosition.y][playerPosition.x] = 1; //players old position gets the white tile which is number 1 
    } else if(maze[playerPosition.y][playerPosition.x+1] == 4){ // Risengrød
        soundRisengrod();
        risengrod();
    } else if(maze[playerPosition.y][playerPosition.x+1] == 0){ // wall
        soundWall();
    } else if(maze[playerPosition.y][playerPosition.x+1] == 5){ // point 
        pointScore();
        soundPoint();
        maze[playerPosition.y][playerPosition.x+1] = 3; //players new position 
        maze[playerPosition.y][playerPosition.x] = 1; //players old position 
    } else if(maze[playerPosition.y][playerPosition.x+1] == 6){ // gift
        giftScore();
        soundGift();
        maze[playerPosition.y][playerPosition.x+1] = 3; //players new position 
        maze[playerPosition.y][playerPosition.x] = 1; //players old position 
    }else if(maze[playerPosition.y][playerPosition.x+1] == 2){ //new maze/win this round
        toNewMaze(); 
    }
}

function keyUp(){
    if(maze[playerPosition.y-1][playerPosition.x] == 1){
        maze[playerPosition.y-1][playerPosition.x] = 3; 
        maze[playerPosition.y][playerPosition.x] = 1; 
    } else if(maze[playerPosition.y-1][playerPosition.x] == 4){
        soundRisengrod();
        risengrod();
    } else if(maze[playerPosition.y-1][playerPosition.x] == 0){
        soundWall();
    } else if(maze[playerPosition.y-1][playerPosition.x] == 5){ 
        pointScore();
        soundPoint();
        maze[playerPosition.y-1][playerPosition.x] = 3; 
        maze[playerPosition.y][playerPosition.x] = 1; 
    } else if(maze[playerPosition.y-1][playerPosition.x] == 6){ 
        giftScore();
        soundGift();
        maze[playerPosition.y-1][playerPosition.x] = 3; 
        maze[playerPosition.y][playerPosition.x] = 1; 
    } else if(maze[playerPosition.y-1][playerPosition.x] == 2){
        toNewMaze(); 
    }
}

function keyLeft(){
    if(maze[playerPosition.y][playerPosition.x-1] == 1){
        maze[playerPosition.y][playerPosition.x-1] = 3;
        maze[playerPosition.y][playerPosition.x] = 1;
    } else if(maze[playerPosition.y][playerPosition.x-1] == 4){
        soundRisengrod();
        risengrod();
    } else if(maze[playerPosition.y][playerPosition.x-1] == 0){
        soundWall();
    } else if(maze[playerPosition.y][playerPosition.x-1] == 5){
        pointScore();
        soundPoint();
        maze[playerPosition.y][playerPosition.x-1] = 3;
        maze[playerPosition.y][playerPosition.x] = 1;
    } else if(maze[playerPosition.y][playerPosition.x-1] == 6){
        giftScore();
        soundGift();
        maze[playerPosition.y][playerPosition.x-1] = 3; 
        maze[playerPosition.y][playerPosition.x] = 1; 
    }else if(maze[playerPosition.y][playerPosition.x-1] == 2){
        toNewMaze(); 
    }
}

function keyDown(){
    if(maze[playerPosition.y+1][playerPosition.x] == 1){
        maze[playerPosition.y+1][playerPosition.x] = 3; 
        maze[playerPosition.y][playerPosition.x] = 1; 
    } else if(maze[playerPosition.y+1][playerPosition.x] == 4){
        soundRisengrod();
        risengrod();
    } else if(maze[playerPosition.y+1][playerPosition.x] == 0){
        soundWall();
    } else if(maze[playerPosition.y+1][playerPosition.x] == 5){ 
        pointScore();
        soundPoint();
        maze[playerPosition.y+1][playerPosition.x] = 3; 
        maze[playerPosition.y][playerPosition.x] = 1; 
    } else if(maze[playerPosition.y+1][playerPosition.x] == 6){ 
        giftScore();
        soundGift();
        maze[playerPosition.y+1][playerPosition.x] = 3; 
        maze[playerPosition.y][playerPosition.x] = 1; 
    } else if(maze[playerPosition.y+1][playerPosition.x] == 2){
        toNewMaze();  
    }
}


// Sound functions 
function soundMove(){
    let audio = new Audio('sound/bootwalk.mp3');
    audio.play();
}

function soundWall(){
     let audio = new Audio('sound/wall.flac');
     audio.play();
}

function soundRisengrod(){
    let audio = new Audio('sound/risengrod.wav'); 
    audio.play();
}

function soundCheers(){ 
    let audio = new Audio('sound/winner.mp3');
    audio.play();
}

function soundPoint(){
    let audio = new Audio('sound/nissehue.mp3');
    audio.play();
}

function soundGift(){
    let audio = new Audio('sound/giftsound.mp3');
    audio.play();
}


// Switch - listens to then something is clicked 
// The SoundMove function sounds everytime something is pressed 
window.addEventListener('keydown', function(event){
    soundMove();
    switch (event.keyCode) {
        case 39: // keycode for keyRight
        keyRight();
        grid();
            break;

        case 38: // keycode for keypUp
        keyUp();
        grid();
            break;

        case 37: // keycode for keyLeft
        keyLeft();
        grid();
            break;

        case 40: // keycode for keyDown
        keyDown();
        grid();
            break;
            
        default:
            break;
    }
});


// Makes sure that when the page is loading, all the images are there from the start 
window.addEventListener("load", grid);