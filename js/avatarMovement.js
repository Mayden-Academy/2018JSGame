var countdownStart = 3;
var startGame = false;


// //player A variables
// var playerAx = 150;
// var playerAy = 150;
// var playerAHeight = 50;
// var playerAWidth = 50;
// var playerAOrientation = 'E';
//
// //Player B variables
// var playerBx = 550;
// var playerBy = 550;
// var playerBHeight = 50;
// var playerBWidth = 50;
// var playerBOrientation = 'W';

//gameplay variables
var distance = 1000;
var time = 3000;

var $playerA = $('#playerA')
var $playerB = $('#playerB')

// function drawPlayer(x, y, h, w, fill, playerName, orientation) {
//     var element = "<rect class=" + playerName + "></rect>";
//     $(element).appendTo('svg');
//     $('.' + playerName).attr('x', x);
//     $('.' + playerName).attr('y', y);
//     $('.' + playerName).attr('height', h);
//     $('.' + playerName).attr('width', w);
//     $('.' + playerName).attr('fill', fill);
//     $('.' + playerName).attr('id', playerName);
//     $('.' + playerName).attr('orientation', orientation);
//     console.log(element);
//     return (element);
//
//     // rect.setAttributeNS(null, 'y', y);
//     // rect.setAttributeNS(null, 'height', h);
//     // rect.setAttributeNS(null, 'width', w);
//     // rect.setAttributeNS(null, 'fill', fill);
//     // rect.setAttributeNS(null, 'id', id);
//     // rect.setAttributeNS(null, 'orientation', orientation);
//     // document.getElementById('svgOne').appendChild(rect);
//     // return document.getElementById(id);
// }

//  <-  37 = left arrow,  39 = right arrow , 38 = up arrow, 40 = down arrow
//  <-  65 = A (left) ,  68 = D (right)  , 87 = W (up) , 83 = S (down)
function keyDownHandler(e) {
    switch(e.keyCode) {
        case 37:
            moveLeft($playerA);
            orientation($playerA,'W');
            break;
        case 39:
            moveRight($playerA);
            orientation($playerA,'E');
            break;
        case 38:
            moveUp($playerA);
            orientation($playerA,'N');
            break;
        case 40:
            moveDown($playerA);
            orientation($playerA,'S');
            break;

        case 65:
            moveLeft($playerB);
            orientation($playerB,'W');
            break;
        case 68:
            moveRight($playerB);
            orientation($playerB,'E');
            break;
        case 87:
            moveUp($playerB);
            orientation($playerB,'N');
            break;
        case 83:
            moveDown($playerB);
            orientation($playerB,'S');
            break;
    }
}

function keyUpHandler(e) {
    switch(e.keyCode) {
        case 37:
        case 39:
        case 38:
        case 40:
            stopMovement($playerA);
            break;
        case 65:
        case 68:
        case 87:
        case 83:
            stopMovement($playerB);
            break;
    }
}

function orientation(player, direction) {
    player.attr('orientation', direction)
}

function moveLeft($player) {
    if (!$player.hasClass('moving')) {
        $player.addClass('moving');
        $player.animate({x: "-=" + distance}, time ,'linear');
    }
}

function moveRight($player) {
    if (!$player.hasClass('moving')) {
        $player.addClass('moving');
        $player.animate({x: "+=" + distance}, time ,'linear');
    }
}

function moveUp($player) {
    if (!$player.hasClass('moving')) {
        $player.addClass('moving');
        $player.animate({y: "-=" + distance}, time ,'linear');
    }
}

function moveDown($player) {
    if (!$player.hasClass('moving')) {
        $player.addClass('moving');
        $player.animate({y: "+=" + distance}, time ,'linear');
    }
}

function stopMovement(player) {
    player.removeClass('moving');
    player.stop()
}

// //event listener for player's avatar
// document.addEventListener("keydown", keyDownHandler);
// document.addEventListener("keyup", keyUpHandler);

function myCountdown() {
    var timer = setInterval(function(){
        if (countdownStart > 0) {
            $("#timerP").text(countdownStart);
            countdownStart--;
        } else {
            clearInterval(timer);
            $("#timerDiv").toggle();
            startGame = true;
            console.log('at end of timer' + startGame);
            $(document).trigger('myCustomEvent');
        }
    }, 1000)
}

function playGame() {
    console.log('you can play');
    $(document).on("keydown", keyDownHandler);
    $(document).on("keyup", keyUpHandler);
}



$(document).on('myCustomEvent', function () {
    // //create players
    // var playerA = drawPlayer(playerAx, playerAy, playerAHeight, playerAWidth, 'pink', 'playerA', playerAOrientation);
    // var playerB = drawPlayer(playerBx, playerBy, playerBHeight, playerBWidth, 'blue', 'playerB', playerBOrientation);

    playGame();
    $(document).off("keypress");
});


$(document).on("keypress", function (){
        myCountdown();
        console.log('wait for countdown');
        console.log('on keypress' + startGame);
});


