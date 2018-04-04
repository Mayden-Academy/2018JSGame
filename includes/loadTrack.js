
$('.trackLink').click(function(e) {
    var splash = $('#splash'),
        container = $('#container')
        
    splash.css('display', 'none')

    let link = e.target.dataset.track
    console.log(link)
    if  (link === '1') container.load('includes/trackLayout1.html')
    if  (link === '2') container.load('includes/trackLayout2.html')
})

