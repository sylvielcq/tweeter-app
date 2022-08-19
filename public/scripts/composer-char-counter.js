/* -------------------------------------------------------------------------- */
/*                   CHARACTER COUNTER ON NEW TWEET FORM                      */
/* -------------------------------------------------------------------------- */

$(document).ready(() => {

  // Updates the characters counter on the New Tweet form, as the user types.
  // Takes in no argument. Returns a number.

  const charCounter = function() {

    const maxChars = 140;
    let $tweetLength = $(this).val().length;
    let $charsRemaining = maxChars - $tweetLength;
    let $counter = $(this).parent().find('.counter').text($charsRemaining);

    if ($charsRemaining < 0) {
      $($counter).addClass("invalid");
    }

    if ($charsRemaining > 0) {
      $($counter).removeClass("invalid");
    }
  };


  // Event listener on the textarea
  
  $('#tweet-text').on('input', charCounter);

});