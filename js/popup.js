$('#playerA').on('death', function(e, arg) {
    // console.log(e)
    console.log(arg[0].id)
    console.log('Death triggered AAAA!!!!!!!')
})

// $('#playerB').on('death',deathCheckDisplay(playerDead))

$('#playerB').on('death',function (e, arg) {
    // console.log(e)
    console.log(arg[0].id)
    console.log('Death triggered BBBB!!!!!!!')
})


function deathCheckDisplay(playerDead) {
    console.log(playerDead)
    // if ( playerA === 'dead' ) {
    //     return playerB;
    // } else if  ( playerB === 'dead' ){
    //     return playerA;
    // }
}

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

