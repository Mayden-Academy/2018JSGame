$('#pullInstructions').click(function() {
    $('.instructions').load('includes/instructions.html');
    $('.instructions').addClass('instructionsShow');
});

$('body').on('click', '#instructionsClose' , function() {
    $('.instructions').removeClass('instructionsShow');
});
