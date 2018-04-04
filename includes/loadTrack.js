
$('.trackLink').click(function(e) {
    var link = e.target.dataset.track,
        splash = $('#splash'),
        container = $('#container')
        splash.css('display', 'none')
        
    if  (link === '1') container.append($('<div>').load('includes/trackLayout1.html'))
    if  (link === '2') container.append($('<div>').load('includes/trackLayout2.html'))
   
})

$('body').on('click', '.trackReturn', function(e) {
    $('.track').css('display', 'none')
    $('#splash').css('display', 'block')
})
