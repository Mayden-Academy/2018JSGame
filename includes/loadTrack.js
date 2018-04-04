// 1 We want to select 2 links ON CLICK
$('.trackLink').click(function(e) {
    console.log(e.target)
    var splash = $('#splash')
    splash.css('display', 'none')
    console.log(splash)
})



// 2 If AJAX is successful hide the splash screen

// 3 Make an AJAX request

// 4 If AJAX is sucessful display track

// 5 If AJAX unsuccessful keep splash screen


// $('#pullInstructions').click(function() {
//     $('#instructions').load('instructions.html');
//     $('#instructions').addClass('instructionsShow');
// });

// $('body').on('click', '#instructionsClose' , function() {
//     $('#instructions').removeClass('instructionsShow');
// });
