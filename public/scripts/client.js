// Fake data taken from initial-tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]


$(document).ready(() => {

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

  renderTweets(data);

});