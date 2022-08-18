$(document).ready(() => {

  $('#collapsible').click(function() {
    $('.new-tweet').slideToggle();
    $('#tweet-text').focus(); // Pointer ready to write a tweet
  });

})