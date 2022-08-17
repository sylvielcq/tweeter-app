$(document).ready(() => {

  // Event Listener on the new-tweet submit button: prevents the default behavior.
  // The input is then serialized into a query string, and sent to the /tweets server page.
  $('.new-tweet').submit((event) => {

    event.preventDefault();

    const $userInput = $('#tweet-text').serialize()

    $.ajax({
      url: '/tweets',
      method: 'POST',
      data: $userInput,
    })
    .catch((error) => {
      console.log('new-tweet submit ajax error: ', error);
    })
  })

  // Function that fetches tweets from the http://localhost:8080/tweets page,
  // and receives an array of tweets as JSON,
  // which is then passed to the renderTweets function.
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
    })
  };

  loadTweets();


  // Function that appends tweets to the .all-tweets section.
  // Takes in an array of tweet objects.
  const renderTweets = function(arr) {

    const $allTweets = $('.all-tweets');
    let $initialTweets = '';

    for (let obj of arr) {
      $initialTweets += createTweetElement(obj);
    }

    $allTweets.append($initialTweets);
  };


  // Function that creates a tweet.
  // Takes in a tweet object. Returns a tweet <article> element.
  const createTweetElement = function(obj) {

    const avatar = obj.user.avatars;
    const name = obj.user.name;
    const handle = obj.user.handle;
    const content = obj.content.text;
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
            <i class="fa-solid fa-flag"></i>
            <i class="fa-solid fa-retweet"></i>
            <i class="fa-solid fa-heart"></i>
          </div>
        </footer>
      </article>
    `

    return $tweet;
  };

});