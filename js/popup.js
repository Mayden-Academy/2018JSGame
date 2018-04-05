$('.gameLevel').on('click', function () {
    winnerPopup('MIKE')
})

//=======the above is to fire the event  =========
//======delete all code above when inserted into project===

$('body').on('click', '#btnRestart' , function() {
    $('#restart').removeClass('restartShow')
})

setInterval(function () {
    $('.won').toggleClass('wonEffect')
}, 100)


function winnerPopup(playerWon) {
    $('#restart').addClass('restartShow')
    $('#restart').load('includes/popup.html')
        setTimeout(function () {
            $('<h1 class="won">' + playerWon + '</h1>').insertAfter('#popup')
        }, 500)
}