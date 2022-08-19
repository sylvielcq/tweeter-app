/* -------------------------------------------------------------------------- */
/*                COMPOSE NEW TWEET BUTTON IN NAVIGATION BAR                  */
/* -------------------------------------------------------------------------- */


$(document).ready(() => {

  $('#collapsible').click(function() {
    
    $('.new-tweet').slideToggle();        // Hides/reveals the New Tweet form
    $('#tweet-text').focus();             // Cursor in textarea

  });

});