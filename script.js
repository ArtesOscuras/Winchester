$(document).ready(function() {
  $('.spoiler-holder').click(function(){
    $(this).slideToggle('slow');
    $(this).next().slideToggle('slow');
  });

});
