$('#playerA').on('death', function(e) {
    console.log(`Player A ID: ${e.target.id}`)
    callWinner(e.target.id)
})



$('#playerB').on('death',function (e) {
    console.log(`Player B ID: ${e.target.id}`)
    callWinner(e.target.id)
})


// function deathCheckDisplay(playerDead) {
//     console.log(playerDead) //=> event
//     // console.log(playerDead.target)
//     // if ( playerA === 'dead' ) {
//     //     return playerB;
//     // } else if  ( playerB === 'dead' ){
//     //     return playerA;
//     // }
// }

function callWinner (deadPlayer) {
    var winner = deadPlayer === 'playerA' ? 'playerB' : 'playerA'
    console.log(`Winner: ${winner}`)
    winnerPopup(winner)

    // pauseGame('playerA', 'playerB')
    // var winnerByDeathCheck = deathCheck(playerA, playerB)
    // var winnerByRace = reachedFinishLine(playerA, playerB)
    // winnerPopup(winnerByDeathCheck)
    // winnerPopup(winnerByRace)
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
