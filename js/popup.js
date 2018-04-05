$('.gameLevel').on('collision', function (player) {
    //hardcoding the winner - to be passed as part of the collision event
    var player = 'Charlie'
    winnerPopup(player)
})

//=======the above is to fire the event  (change collision to click for code review) =========

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

