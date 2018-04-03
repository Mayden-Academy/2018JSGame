
$('#pullInstructions').click(function() {
    $('#instructions').load('instructions.html');
    $('#instructions').addClass('instructionsShow');
});

$('body').on('click', '#instructionsClose' , function() {
    $('#instructions').removeClass('instructionsShow');
});

