/* FUNCTION TO CROSSFADE BETWEEN IMAGES
visite https://www.simonbattersby.com/blog/simple-jquery-image-crossfade/
-----------------------------------------------------------------------*/
function cycleImages() {
  const $active = $("#cycler .active");
  const $next =
    $active.next().length > 0 ? $active.next() : $("#cycler img:first");
  $next.css("z-index", 2); //move the next image up the pile
  $active.fadeOut(800, function () {
    //fade out the top image
    $active.css("z-index", 1).show().removeClass("active"); //reset the z-index and unhide the image
    $next.css("z-index", 3).addClass("active"); //make the next image the top one
  });
}

// START JQUERY CODE AFTER PAGE IS LOADED
$(document).ready(function () {
  // force page scroll position to top at page refresh
  $('html, body').animate({ scrollTop: 0 }, 'normal');
  // will first fade out the loading animation
  $("#loader").fadeOut("slow", function () {
    // will fade out the whole DIV that covers the website.
    $("#preloader").delay(200).fadeOut("slow");
  });

  //toggle nav view on mobile
  $("#nav-toggle").on("click", function () {
    this.classList.toggle("active");
    $("nav div").toggle();
  });

  /* check if user scroll and show
------------------------------------*/
  $(document).scroll(function () {
    if ($(".animation_elements").length) {
      //console.log("need to animate");
      const window_height = $(window).height();
      const window_top_position = $(window).scrollTop();
      const window_bottom_position = window_top_position + window_height;

      $.each($(".animation_elements"), function () {
        const $element = $(this);
        const element_height = $element.outerHeight();
        const element_top_position = $element.offset().top;
        const element_bottom_position = element_top_position + element_height;

        if (
          element_bottom_position >= window_top_position &&
          element_top_position <= window_bottom_position
        ) {
          $element.addClass("fade-in-bottom");
          $element.removeClass("animation_elements");
        }
      });
    } else {
      //console.log("animations done!");
      $(document).off("scroll");
    }
  });
  $(document).trigger("scroll");

  /* Change about section image every 5s
-------------------------------------*/
  setInterval("cycleImages()", 5000);
});
