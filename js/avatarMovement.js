//gameplay variables
var distance = 1000;
var time = 3000;
var countdownStart = 3;
var startGame = false;

var $playerA = $('#playerA');
var $playerB = $('#playerB');

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
        $player.animate(
            {svgX: "-=" + distance},
            {duration: time,
                easing: 'linear',
                step: function(now, fx) {
                    var left = $player.attr('x'),
                        right = $player.position().left + $player.width(),
                        top = $player.attr('y'),
                        down = $player.position().top + $player.height()

                    console.log(left);
                    var alive = false;
                    $('.path').each(function (x) {
                        alive =false
                        if (left > this.getAttribute('x') && top > this.getAttribute('y') && down < (this.getAttribute('y') + this.getAttribute('height')) && right < (this.getAttribute('x') + this.getAttribute('width'))) {
                            alive = true;
                            console.log('baaaaaa')
                        }

                    })

                    console.log('am i alive? ' + alive);

                }});
    }
}

function moveRight($player) {
    if (!$player.hasClass('moving')) {
        $player.addClass('moving');
        $player.animate({svgX: "+=" + distance},
            {duration: time,
                easing: 'linear',
                step: function(now, fx) {
                    var right = $player.position().left + $player.width()
                    if (right > 1000) {
                        console.log('you dead')
                    }
                }});
    }
}

function moveUp($player) {
    if (!$player.hasClass('moving')) {
        $player.addClass('moving');
        $player.animate({svgY: "-=" + distance},{duration: time,
            easing: 'linear',
            step: function(now, fx) {
                var top = $player.position().top
                if ( top <  0) {
                    console.log('you dead')
                }
            }});
    }
}

function moveDown($player) {
    if (!$player.hasClass('moving')) {
        $player.addClass('moving');
        $player.animate({svgY: "+=" + distance},{duration: time,
            easing: 'linear',
            step: function(now, fx) {

                var down = $player.position().top + $player.height()


                if (down > 800) {
                    console.log('you dead')
                }
            }});
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

$('.path').each(function (x) {
    console.log(this.x)
    console.log(this.y)
    console.log(this.width)
})


