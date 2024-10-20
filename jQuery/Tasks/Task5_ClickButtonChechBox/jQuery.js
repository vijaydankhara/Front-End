$(document).ready(function() {
    $('#myCheckbox').change(function() {
      if ($(this).is(':checked')) {
        $('#myButton').prop('disabled', false);
      } else {
        $('#myButton').prop('disabled', true);
      }
    });
  });
  