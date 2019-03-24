// When the document is ready (all loaded)
$(document).ready(function() {

  // When the "load more" button is clicked,
  // remove the class "hide" from "row-2"
  // and hide the clicked button afterwards
  $('.btn-load-more').click(function() {
    $('.row-2').removeClass('hide');
    $(this).hide();
  })

});
