$('#playerA').on('death', deathCheck(playerA, playerB))
$('#playerB').on('death',deathCheck(playerA, playerB))

function deathCheck(playerA, playerB) {
    if ( playerA === 'dead'  ) {
        return playerB;
    } else if  ( playerB === 'dead'  ){
        return playerA;
    }
}

// function reachedFinishLine(playerA, playerB) {
//     x="960" y="680" width="40" height="100"
//     x="950" y="700" width="100" height="100"
// }

function callWinner (playerA, playerB) {
    pauseGame('playerA', 'playerB')
    var winnerByDeathCheck = deathCheck(playerA, playerB)
    var winnerByRace = reachedFinishLine(playerA, playerB)
    winnerPopup(winnerByDeathCheck)
    winnerPopup(winnerByRace)
}

$('body').on('click', '#btnRestart' , function() {
    $('#restart').removeClass('restartShow')
    $('.track').css('display', 'none')
    $('#splash').css('display', 'block')
})

setInterval(function () {
    $('.won').toggleClass('wonEffect')
}, 150)


function winnerPopup(playerWon) {
    $('#restart').addClass('restartShow')
    $('#restart').load('includes/popup.html')
        setTimeout(function () {
            $('<h1 class="won">' + playerWon + '</h1>').insertAfter('#popup')
        }, 500)
}

