$('.trackLink').click(function(e) {
    var trackNo = e.target.dataset.track,
        trackElement = $('#track' + trackNo)

    navigateLevels(trackElement, trackNo)
})

function navigateLevels (trackElement, trackNo) {
    if  (trackElement.length === 0) {
        $('#container').append($('<div>').load('includes/trackLayout' + trackNo + '.html'))
    } else {
        $('.track').css('display', 'none')
        trackElement.css('display', 'block')
    }

    $('#splash').css('display', 'none')
}

$('body').on('click', '.trackReturn', function() {
    $('.track').css('display', 'none')
    $('#splash').css('display', 'block')
})