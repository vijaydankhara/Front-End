$(function() {
    $('#inputBox').on('input', function() {
        $('#displayText').text($(this).val()); 
    });
});