//gameplay variables
var distance = 1000,
    time = 3000,
    countdownStart = 3,
    startGame = false

//player variables
var $playerA = $('#playerA'),
    $playerB = $('#playerB'),
    $carA = $('#carA'),
    $carB = $('#carB'),
    $faceA = $('#faceA'),
    $faceB = $('#faceB')



//  <-  37 = left arrow,  39 = right arrow , 38 = up arrow, 40 = down arrow
//  <-  65 = A (left) ,  68 = D (right)  , 87 = W (up) , 83 = S (down)
function keyDownHandler(e) {
    switch(e.keyCode) {
        case 37:
            //playerA
            moveLeft($playerA);
            orientRightLeft($playerA, $carA, $faceA, "assets/goldCar.svg");
            break;
        case 39:
            moveRight($playerA);
            orientRightLeft($playerA, $carA, $faceA, "assets/goldCar.svg");
            break;
        case 38:
            moveUp($playerA);
            orientUpDown($playerA,$carA, $faceA, "assets/goldCarDown.svg");
            break;
        case 40:
            moveDown($playerA);
            orientUpDown($playerA,$carA, $faceA, "assets/goldCarDown.svg");
            break;
            //playerB
        case 65:
            moveLeft($playerB);
            orientRightLeft($playerB, $carB, $faceB, "assets/whiteCar.svg");
            break;
        case 68:
            moveRight($playerB);
            orientRightLeft($playerB, $carB, $faceB, "assets/whiteCar.svg");
            break;
        case 87:
            moveUp($playerB);
            orientUpDown($playerB,$carB, $faceB, "assets/whiteCarUp.svg");
            break;
        case 83:
            moveDown($playerB);
            orientUpDown($playerB,$carB, $faceB, "assets/whiteCarUp.svg");
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

function moveLeft($player) {
    if (!$player.hasClass('moving')) {
        $player.addClass('moving');
        $player.animate({svgX: "-=" + distance}, time ,'linear');
    }
}

function moveRight($player) {
    if (!$player.hasClass('moving')) {
        $player.addClass('moving');
        $player.animate({svgX: "+=" + distance}, time ,'linear');
    }
}

function moveUp($player) {
    if (!$player.hasClass('moving')) {
        $player.addClass('moving');
        $player.animate({svgY: "-=" + distance}, time ,'linear');
    }
}

function moveDown($player) {
    if (!$player.hasClass('moving')) {
        $player.addClass('moving');
        $player.animate({svgY: "+=" + distance}, time ,'linear');
    }
}

function stopMovement(player) {
    player.removeClass('moving');
    player.stop()
}

function myCountdown() {
    var timer = setInterval(function(){
        if (countdownStart > 0) {
            $("#timerP").text(countdownStart);
            countdownStart--;
        } else {
            clearInterval(timer);
            $("#timerDiv").toggle();
            startGame = true;
            $(document).trigger('myCustomEvent');
        }
    }, 1000)
}

function playGame() {
    $playerA = $('#playerA')
    $playerB = $('#playerB')
    $carA = $('#carA')
    $carB = $('#carB')
    $faceA = $('#faceA')
    $faceB = $('#faceB')
    $(document).on("keydown", keyDownHandler);
    $(document).on("keyup", keyUpHandler);
}

$(document).on('myCustomEvent', function () {
    playGame();
    $(document).off("keypress");
});

$(document).on("keypress", function (){
        myCountdown();
});

function orientUpDown($player, $car, $face, $image) {
    $player.attr('width', 35);
    $player.attr('height', 70);
    $car.attr('width',35);
    $car.attr('height',70);
    $car.attr('href', $image);
    $face.attr('X',8);
    $face.attr('Y',20);
}

function orientRightLeft($player,$car,$face, $image) {
    $player.attr('width', 70);
    $player.attr('height', 35);
    $car.attr('width', 70);
    $car.attr('height', 35);
    $car.attr('href', $image);
    $face.attr('X',20);
    $face.attr('Y',6);
}