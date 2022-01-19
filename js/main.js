/* FUNCTION TO FADE BETWEEN 2 IMAGES
visite https://www.simonbattersby.com/blog/simple-jquery-image-crossfade/
-----------------------------------------------------------------------*/
function cycleImages(){
  const $active = $('#cycler .active');
  const $next = ($active.next().length > 0) ? $active.next() : $('#cycler img:first');
  $next.css('z-index',2);//move the next image up the pile
  $active.fadeOut(800,function(){//fade out the top image
    $active.css('z-index',1).show().removeClass('active');//reset the z-index and unhide the image
    $next.css('z-index',3).addClass('active');//make the next image the top one
  });
}

function topPos(){
  const pos = $(document).scrollTop();
  if (pos <= 250) {
    //$('.arrow').css('display', 'none');
    $('.arrow').hide();
  } else {
    $('.arrow').show();
  }
}

// START JQUERY CODE AFTER PAGE IS LOADED
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

//check if user scroll
/*$(document).scroll(function(){
  $('.arrow').css('display', 'block'); // show arrow at the bottom of sreen
  //$(document).off('scroll'); //turn off the event listener
});*/

setInterval('topPos()', 2000);


// CHANGE ABOUT SECTION IMAGE EVERY 5S
setInterval('cycleImages()', 5000);

});


