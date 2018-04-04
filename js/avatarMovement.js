
//player A variables
var playerAx = 150;
var playerAy = 150;
var playerAHeight = 50;
var playerAWidth = 50;
var playerBOrientation='E';

//Player B variables
var playerBx = 550;
var playerBy = 550;
var playerBHeight = 50;
var playerBWidth = 50;
var playerAOrientation='w';

//create players
var playerA = drawPlayer(playerAx, playerAy, playerAHeight, playerAWidth, 'pink', 'playerA');
var playerB = drawPlayer(playerBx, playerBy, playerBHeight, playerBWidth, 'blue', 'playerB');

//gameplay variables
var distance = 1000;
var time = 3000;


function drawPlayer (x, y, h, w, fill, id) {
    var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttributeNS(null, 'x', x);
    rect.setAttributeNS(null, 'y', y);
    rect.setAttributeNS(null, 'height', h);
    rect.setAttributeNS(null, 'width', w);
    rect.setAttributeNS(null, 'fill', fill);
    rect.setAttributeNS(null, 'id', id);
    document.getElementById('svgOne').appendChild(rect);
    return document.getElementById(id);
}


//  <-  37 = left arrow,  39 = right arrow , 38 = up arrow, 40 = down arrow
//  <-  65 = A (left) ,  68 = D (right)  , 87 = W (up) , 83 = S (down)
function keyDownHandler(e) {
    $playerA=$(playerA);
    $playerB=$(playerB);
    switch(e.keyCode) {
        case 37:
            moveLeft($playerA);
            playerAOrientation='W';
            break;
        case 39:
            moveRight($playerA);
            playerAOrientation='E';
            break;
        case 38:
            moveUp($playerA);
            playerAOrientation='N';
            break;
        case 40:
            moveDown($playerA);
            playerAOrientation='S';
            break;

        case 65:
            moveLeft($playerB);
            playerBOrientation='W';
            break;
        case 68:
            moveRight($playerB);
            playerBOrientation='E';
            break;
        case 87:
            moveUp($playerB);
            playerBOrientation='N';
            break;
        case 83:
            moveDown($playerB);
            playerBOrientation='S';
            break;
        default:
            //switch needs a default.. not sure what this should be??
    }
}


function keyUpHandler(e) {
    switch(e.keyCode) {
        case 37:
        case 39:
        case 38:
        case 40:
            stopMovement(playerA);
            break;
        case 65:
        case 68:
        case 87:
        case 83:
            stopMovement(playerB);
            break;

        default:
            //switch needs a default.. not sure what this should be??
    }
}


function moveLeft($player) {
    if (!$player.hasClass('moving')) {
        $player.addClass('moving');
        $player.animate({x: "-="+distance}, time ,'linear');
    }
}

function moveRight($player) {
    if (!$player.hasClass('moving')) {
        $player.addClass('moving');
        $player.animate({x: "+="+distance}, time ,'linear');
    }
}

function moveUp($player) {
    if (!$player.hasClass('moving')) {
        $player.addClass('moving');
        $player.animate({y: "-="+distance}, time ,'linear');
    }
}

function moveDown($player) {
    if (!$player.hasClass('moving')) {
        $player.addClass('moving');
        $player.animate({y: "+="+distance}, time ,'linear');
    }
}

function stopMovement (player){
    $(player).removeClass('moving');
    $(player).stop()
}


//event listener for player's avatar
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

