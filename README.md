# Tweeter Project

Tweeter is a simplified, single-page Twitter clone, built using HTML, CSS, JS, jQuery and AJAX.

This is my third project at Lighthouse Labs after [Lotide](https://github.com/sylvielcq/lotide) and [TinyApp](https://github.com/sylvielcq/tinyapp).

The back-end code was provided by Lighthouse Labs, as our goal was to focus on building the front-end / client-side.

## Features

- Users can **post tweets** within a 140-character limit. New tweets appear at the top of the page.

- Using AJAX, the app updates tweets **asynchronously** without reloading the whole page.

- A **responsive design** to guarantee a great experience on any screen.

- Other highlights include a character counter, dynamic error messages, bouncing animations, a toggle button to hide/show the text area to compose a new tweet, a scroll up button that appears when the user scrolls down, and special effects like hover or focus!


## Final Product

Homepage
!["Tweets page"](https://github.com/sylvielcq/tweeter/blob/master/docs/tweeter-tweets.png?raw=true)

Character counter & Error message
!["Error message and character counter"](https://github.com/sylvielcq/tweeter/blob/master/docs/tweeter-error.png?raw=true)

Button to scroll back up to the top of the page
!["Scroll up button"](https://github.com/sylvielcq/tweeter/blob/master/docs/tweeter-scroll-up.png?raw=true)

Responsive display

!["Responsive display"](https://github.com/sylvielcq/tweeter/blob/master/docs/tweeter-mobile.png?raw=true)

## Getting Started

1. Install dependencies using the `npm install` command.
2. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
3. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above
- Body-parser
- Chance
- MD5
