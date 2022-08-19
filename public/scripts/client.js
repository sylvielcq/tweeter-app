/* -------------------------------------------------------------------------- */
/*                     DISPLAY PAST TWEETS AND NEW TWEETS                     */
/* -------------------------------------------------------------------------- */


$(document).ready(() => {

  /* -------------------------------------------------------------------------- */

  /* SUBMIT NEW TWEET FUNCTION
     Called when a new tweet is submitted (passed in the event listener, see bottom of the file).
     The user input is checked, then - if valid - serialized into a query string, and sent to the /tweets server page.
  */

  const submitNewTweet = function(event) {

    event.preventDefault();

    const errorIcon = `<i class="fa-solid fa-triangle-exclamation"></i>`;     // Exclamation icon for error messages
    
    $('#error').text('');                               // Hides any prexisting error messages


    if ($(this).find('#tweet-text').val() === '') {     // If the tweet is empty
      $('#error').html(`${errorIcon} Content required`);
      $('#error').slideDown();
      return;
    }

    if ($(this).find('.invalid')[0]) {                  // If the tweet is too long (= ".invalid" class applied on tweets over 140 chars by our chatCounter function, see composer-char-counter.js file)
      $('#error').html(`${errorIcon} 140 characters maximum`);
      $('#error').slideDown();
      return;
    }

    $.ajax({                                            // Else
      url: '/tweets',
      method: 'POST',
      data: $(this).serialize()
    })
      .then(() => {
        loadTweets();
        $('#tweet-text').val('');                         // Clears the new-tweet form
        $(this).find('.counter').text(140);               // Char counter back to 140
      })
      .catch((error) => {
        console.log('Ajax POST error: ', error);
      });
  };


  /* -------------------------------------------------------------------------- */

  /* LOAD TWEETS FUNCTION
     Fetches tweets from /tweets, and receives an array of tweets as JSON, 
     which is then passed to the renderTweets function.
  */

  const loadTweets = function() {

    $.ajax({
      url: '/tweets',
      method: 'GET',
    })
      .then((result) => {
        renderTweets(result);
      })
      .catch((error) => {
        console.log('loadTweets error: ', error);
      });
  };



  /* -------------------------------------------------------------------------- */

  /* RENDER TWEETS FUNCTION
     Prepends tweets to the .all-tweets section.
     Takes in an array of tweet objects.
  */

  const renderTweets = function(arr) {

    const $allTweets = $('.all-tweets');
    $allTweets.empty();                    // Empties the .all-tweets section each time the function is called, to avoid duplicates.

    arr.forEach((obj) => {
      $allTweets.prepend(createTweetElement(obj));
    });
  };


  /* -------------------------------------------------------------------------- */

  /* ESCAPE FUNCTION
     Escapes text in order to prevent an XSS attack.
     Takes in a string. Returns an escaped string.
  */  

  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };


  /* -------------------------------------------------------------------------- */

  /* CREATE TWEET ELEMENT FUNCTION
     Creates an html article element that contains a new tweet.
     Takes in a tweet object. Returns a tweet <article> element.
  */  

  const createTweetElement = function(obj) {

    const avatar = obj.user.avatars;
    const name = obj.user.name;
    const handle = obj.user.handle;
    const content = escape(obj.content.text);
    const creationDate = timeago.format(obj.created_at);

    const $tweet = `
      <article class="tweet">
        <header>
          <div class="user-photo-name">
            <img src="${avatar}"> 
            <span>${name}</span>
          </div>
          <div class="user-handle">
            <span>${handle}</span>
          </div>
        </header>
        <p class="tweet-content">${content}</p>
        <div class="separator"></div>
        <footer>
          <span>${creationDate}</span>
          <div class="icons">
            <i id="flag" class="fa-solid fa-flag"></i>
            <i id="re-tweet" class="fa-solid fa-retweet"></i>
            <i id="like" class="fa-solid fa-heart"></i>
          </div>
        </footer>
      </article>
    `;

    return $tweet;
  };


  /* ------------------------------ FUNCTION CALLS -------------------------------------- */


  // Loads tweets history on page load.
  loadTweets();

  // Event Listener on the New Tweet submit button.
  $('form').submit(submitNewTweet);

});
