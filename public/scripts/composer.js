/* -------------------------------------------------------------------------- */
/*                              SCROLL UP BUTTON                              */
/* -------------------------------------------------------------------------- */


$(document).ready(() => {

  // Event listener on window scroll
  // Identifies if the user is scrolling up or down

  $(window).scroll(function() {

    let lastScrollPosition = 0;
    
    let currentScrollPosition = $(this).scrollTop();       // After scroll position, which is the return value of the scrollTop() function
    
    if (currentScrollPosition > lastScrollPosition) {      // If user is scrolling down
      $('#scroll-up-btn').addClass('active');
      $('.nav-new-tweet').removeClass('active');
    } else {                                               // If user is scrolling up
      $('#scroll-up-btn').removeClass('active');
      $('.nav-new-tweet').addClass('active');
    }

    lastScrollPosition = currentScrollPosition;
  });


  // Event listener on the Scroll-Up button

  $('#scroll-up-btn').click(function() {

    window.scrollTo(0,0);                                 // Scroll back to the top of the page
    $('#tweet-text').focus();                             // Cursor in textarea

  });

});
