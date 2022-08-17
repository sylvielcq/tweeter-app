$(() => {
  $('#tweet-text').on('input', function() {
    console.log(this.val());
  })
});