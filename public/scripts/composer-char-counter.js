$(document).ready(() => {

  $('#tweet-text').on('input', charCounter);

});


// Function that updates the characters counter on the New Tweet form.
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