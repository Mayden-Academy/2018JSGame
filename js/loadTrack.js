$('.trackLink').click(function(e) {
    var trackNum = e.target.getAttribute('data-track'),
        trackElement = $('#track' + trackNum)

    navigateLevels(trackElement, trackNum)
})

$('body').on('click', '.trackReturn', function() {
    $('.track').css('display', 'none')
    $('#splash').css('display', 'block')
})

function navigateLevels (trackElement, trackNum) {
    if  (trackElement.length === 0) {
        $('#container').append($('<div id="track' + trackNum + '" class="track">').load('includes/trackLayout' + trackNum + '.html'))
    } else {
        $('.track').css('display', 'none')
        trackElement.css('display', 'block')
    }

    $('#splash').css('display', 'none')
}

