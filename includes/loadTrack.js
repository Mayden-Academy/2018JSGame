
$('.trackLink').click(function(e) {
    var splash = $('#splash'),
        container = $('#container')
        
    splash.css('display', 'none')
    container.load('includes/track1.html');
})

