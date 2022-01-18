$(document).ready(function() {
/* SMOOTH SCROLLING WITH JQUERY 
visit https://css-tricks.com/snippets/jquery/smooth-scrolling/
----------------------------------------------------------- */
// Select all links with hashes
$('a[href*="#"]').click(function(event) {
  // Figure out element to scroll to
  const $target = $(this.hash);
  event.preventDefault();
  $('html, body').animate({
    scrollTop: $target.offset().top
  }, 800, function() {
    // Callback after animation
    // Must change focus?!
    });
  });
});
