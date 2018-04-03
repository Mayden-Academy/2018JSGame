
$('#pullInstructions').click(function() {
    $('#instructions').load('instructions.html');
    $('#instructions').addClass('show');
});

$('body').on('click', '#closeInstructions' , function() {
    console.log ('boom')
    $('#instructions').removeClass('show');
});

