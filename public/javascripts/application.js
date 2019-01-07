/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})


$(document).ready(function () {
  $(".text").hide();
  $("#r1").click(function () {
    $(".text").show();
  });
  $("#r2").click(function () {
    $(".text").hide();
  });
});


$(function () {
  $('input[name="Other"]').on('click', function () {
    if ($(this).val() == 'Other') {
      $('#textboxes').show();
    }
    else {
      $('#textboxes').hide();
    }
  });
});