$(document).ready(() => {

  $(window).scroll(function() {

    let lastScrollPosition = 0;
    
    let currentScrollPosition = $(this).scrollTop();
    
    if (currentScrollPosition > lastScrollPosition) {
      $('#scroll-up-btn').addClass('active');
      $('.nav-new-tweet').removeClass('active');
    } else {
      $('#scroll-up-btn').removeClass('active');
      $('.nav-new-tweet').addClass('active');
    }

    lastScrollPosition = currentScrollPosition;
  });


  $('#scroll-up-btn').click(function() {

    window.scrollTo(0,0);
    $('#tweet-text').focus(); // Cursor in textarea

  });

});
