//gameplay variables
var distance = 700,
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
            //playerB: uses Arrows
            moveLeft($playerB);
            orientRightLeft($playerB, $carB, $faceB, "assets/whiteCar.svg");
            break;
        case 39:
            moveRight($playerB);
            orientRightLeft($playerB, $carB, $faceB, "assets/whiteCar.svg");
            break;
        case 38:
            moveUp($playerB);
            orientUpDown($playerB, $carB, $faceB, "assets/whiteCarUp.svg");
            break;
        case 40:
            moveDown($playerB);
            orientUpDown($playerB, $carB, $faceB, "assets/whiteCarUp.svg");
            break;
            //playerA: uses AWSD
        case 65:
            moveLeft($playerA);
            orientRightLeft($playerA, $carA, $faceA, "assets/goldCar.svg");
            break;
        case 68:
            moveRight($playerA);
            orientRightLeft($playerA, $carA, $faceA, "assets/goldCar.svg");
            break;
        case 87:
            moveUp($playerA);
            orientUpDown($playerA, $carA, $faceA, "assets/goldCarDown.svg");
            break;
        case 83:
            moveDown($playerA);
            orientUpDown($playerA, $carA, $faceA, "assets/goldCarDown.svg");
            break;
    }
}

function keyUpHandler(e) {
    switch(e.keyCode) {
        case 37:
        case 39:
        case 38:
        case 40:
            stopMovement($playerB);
            break;
        case 65:
        case 68:
        case 87:
        case 83:
            stopMovement($playerA);
            break;
    }
}

function orientation(player, direction) {
    player.attr('orientation', direction)
}

function deathDetection ($player) {

    var left = parseInt($player.attr('x')),
        right = left + parseInt($player.attr('width')),
        top = parseInt($player.attr('y')),
        down = top + parseInt($player.attr('height'))

    var alive = true,
        skip = false

    $('.path').each(function (x) {
        var boxLeft = parseInt(this.getAttribute('x')),
            boxRight = boxLeft + parseInt(this.getAttribute('width')),
            boxTop = parseInt(this.getAttribute('y')),
            boxBot = boxTop + parseInt(this.getAttribute('height'))

            // console.log('boxLeft: ' + boxLeft)
            // console.log('boxRight: ' + boxRight)
            // console.log('left: ' + left)
            // console.log('right: ' + right)

          if (skip) {
              return false
          }

          alive = false

          if (
              left > boxLeft &&
              top > boxTop &&
              down < boxBot &&
              right < boxRight
          ) {
              alive = true;
              skip = true;
          }

        // if (
        //     left < boxLeft ||
        //     top < boxTop ||
        //     down > boxBot ||
        //     right > boxRight
        // ) {
        //     alive = false;
        //     // $($player).trigger('death');
        // }

    })



    console.log(alive ? 'You are alive' : 'You are dead');
    if (!alive) {
        $($player).trigger('death');
    }
}


function moveLeft($player) {
    if (!$player.hasClass('moving')) {
        $player.addClass('moving');
        $player.animate(
            {svgX: "-=" + distance},
            {duration: time,
                easing: 'linear',
                step: function() {
                    deathDetection($player)
                }
            })
    }
}

function moveRight($player) {
    if (!$player.hasClass('moving')) {
        $player.addClass('moving');
        $player.animate({svgX: "+=" + distance},
            {duration: time,
                easing: 'linear',
                step: function() {
                    deathDetection($player)
                }
            })
    }
}

function moveUp($player) {
    if (!$player.hasClass('moving')) {
        $player.addClass('moving');
        $player.animate({svgY: "-=" + distance},{duration: time,
            easing: 'linear',
            step: function() {
                deathDetection($player)
            }
        })
    }
}

function moveDown($player) {
    if (!$player.hasClass('moving')) {
        $player.addClass('moving');
        $player.animate({svgY: "+=" + distance},{duration: time,
            easing: 'linear',
            step: function() {
                deathDetection($player)
            }
        })
    }
}

function stopMovement(player) {
    player.removeClass('moving');
    player.stop()
}

function pauseGame(player1, player2) {
    stopMovement(player1);
    stopMovement(player2);
    $(document).off("keydown", keyDownHandler);
    $(document).off("keyup", keyUpHandler);
}

function myCountdown() {
    var timer = setInterval(function(){
        if (countdownStart > 0) {
            $("#timerP").text(countdownStart);
            console.log(countdownStart);
            countdownStart--;
        } else {
            clearInterval(timer);
            $("#timerDiv").css('display', 'none');
            startGame = true;
            $(document).trigger('myCustomEvent');
        }
    }, 1000)
}

function playGame() {
    $playerA = $('#playerA');
    $playerB = $('#playerB');
    $carA = $('#carA');
    $carB = $('#carB');
    $faceA = $('#faceA');
    $faceB = $('#faceB');
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


function orientRightLeft($player, $car, $face, $image) {
    $player.attr('width', 70);
    $player.attr('height', 35);
    $car.attr('width', 70);
    $car.attr('height', 35);
    $car.attr('href', $image);
    $face.attr('X',20);
    $face.attr('Y',6);
}
