
$('.trackLink').click(function(e) {
    var link = e.target.dataset.track
        
    if  (link === '1' && $('#track1').length === 0) {
        $('#container').append($('<div>').load('includes/trackLayout1.html'))
    } else if (link === '1' && $('#track1').length !== 0) {
        $('.track').css('display', 'none')
        $('#track1').css('display', 'block')
    }

    if  (link === '2' && $('#track2').length === 0) {
        $('#container').append($('<div>').load('includes/trackLayout2.html'))  
    } else if (link === '2' && $('#track2').length !== 0) {
        $('.track').css('display', 'none')
        $('#track2').css('display', 'block')
    }

    $('#splash').css('display', 'none')  
})

$('body').on('click', '.trackReturn', function(e) {
    $('.track').css('display', 'none')
    $('#splash').css('display', 'block')
})
