/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


// Function that creates a tweet.
// Takes in a tweet object. Returns a tweet <article> element.
const createTweetElement = function (obj) {

  const avatar = tweetData.user.avatars;
  const name = tweetData.user.name;
  const handle = tweetData.user.handle;
  const content = tweetData.content.text;
  const creationDate = timeago.format(tweetData.created_at);

  const $tweet = $(`
    <article class="tweet">
      <header>
        <div class="user-name">
          <img src="${avatar}"> 
          <span>${name}</span>
        </div>
        <div class="user-handle">
          <span>${handle}</span>
        </div>
      </header>
      <p id="tweet-content">${content}</p>
      <div id="separator"></div>
      <footer>
        <span>${creationDate}</span>
        <div class="icons">
          <i class="fa-solid fa-flag"></i>
          <i class="fa-solid fa-retweet"></i>
          <i class="fa-solid fa-heart"></i>
        </div>
      </footer>
    </article>
  `)
  
  return $tweet;
};

// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}

const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.