//jQuery IIFE
(function($){
  //jquery "plugin" function
  $.hoverSlider = function($sliderWrapper, settings) {
    var $sliderWrapper = $($sliderWrapper),
        $slider = $sliderWrapper.children("div"),
        $slides = $slider.children("div"),
        $wrapperWidth = $sliderWrapper.outerWidth(),
        $sliderWidth = 0,
        $tallestElementHeight = 0;

    //mouse watchers
    var watchers = function() {
      //set our timeout vars
      var mouseMoveTimeout, mouseOutTimeout;

      //mousemove watcher -- the gutz of the plugin
      $sliderWrapper.mousemove(function(event) {
        clearTimeout(mouseMoveTimeout);
        mouseMoveTimeout = setTimeout(function() {
          /*---------------------------------------
          Padding percentage:
          Take the percent we defined, turn it into a decimal, and divide it by two to share it on both sides
          Multiply it by the wrapper width to find the percent of the wrapper width

          Left Val:
          Find the mouse position, less the padding and offset
          Divide it by the wrapper width less the percentage, doubled.
          Then make it negative to move in the opposite direction, and multiply it by the actual slider width to get our px val
          ---------------------------------------*/
          var paddingPercentage = ((parseInt(settings.mouseMovePaddingPercent) / Math.pow(10, 2)) / 2) * $wrapperWidth,
              leftVal = $sliderWidth * (((event.pageX - ($sliderWrapper.offset().left + paddingPercentage)) / ($wrapperWidth - (paddingPercentage * 2))) * -1);

          //if we go less than zero, or greater than the slider width, cap them out
          if(leftVal * -1 <= 0) {
            leftVal = 0;
          } else if(leftVal * -1 >= $sliderWidth) {
            leftVal = $sliderWidth * -1;
          }

          //old way; its jittery
          //$slider.css({ left: leftVal + "px)" });

          //new way; not jittery; hardware accelerated, and hella prefixed
          $slider.css({
            '-webkit-transform' : 'translate3d(' + leftVal + 'px, 0, 0)',
            '-moz-transform'    : 'translate3d(' + leftVal + 'px, 0, 0)',
            '-ms-transform'     : 'translate3d(' + leftVal + 'px, 0, 0)',
            '-o-transform'      : 'translate3d(' + leftVal + 'px, 0, 0)',
            'transform'         : 'translate3d(' + leftVal + 'px, 0, 0)'
          });
        }, 10);
      })

      //mouseout
      //only call if we send the parameter
      if(settings.resetOnMouseout) {
        $sliderWrapper.mouseout(function(event) {
          clearTimeout(mouseOutTimeout);
          mouseOutTimeout = setTimeout(function() {
            //reset the position on mouseout
            $slider.css({
            '-webkit-transform' : 'translate3d(0, 0, 0)',
            '-moz-transform'    : 'translate3d(0, 0, 0)',
            '-ms-transform'     : 'translate3d(0, 0, 0)',
            '-o-transform'      : 'translate3d(0, 0, 0)',
            'transform'         : 'translate3d(0, 0, 0)'
          });
          }, 10);
        })
      };

      $(window).resize(function() {
        //re-set the widths
        $wrapperWidth = $sliderWrapper.outerWidth();
        $sliderWidth = $slider.width() - $wrapperWidth;
      });
    };

    //INITIALIZE FUNCTION
    var init = function() {
      //first we find out the height of the slider
      //based on the tallest slide
      $.each($slides, function(i, slide) {
        if($(slide).outerHeight() > $tallestElementHeight) {
          $tallestElementHeight = $(slide).outerHeight();
        }
      })

      //set the REQUIRED parameters for the slider to function
      //on the parent wrapper
      $sliderWrapper.css({
        position: "relative",
        overflow: "hidden",
        "white-space": "nowrap",
        height: $tallestElementHeight
      });

      //on the child slider wrapper
      $slider.css({
        position: "absolute",
        left: "0",
        top: "0",
        transition: "all " + settings.transitionSpeed + " ease-out"
      });

      $slides.css({
        "vertical-align": settings.verticalAlignSlides
      })

      //set sliderwidth after we add our CSS
      //this is due to positioned element being absolute
      $sliderWidth = $slider.width() - $wrapperWidth;

      //lastly, start watchers
      watchers();
    }(); //immediately invoke our init funciton
  };

  //jQuery plugin init on all
  //elements with the plugin bound to them
  $.fn.hoverSlider = function(options) {
    var settings = $.extend({
      //these are the default settings
      //they can be overrode in the instantiation
      //just like jQuery or similar
      resetOnMouseout: false,
      verticalAlignSlides: "middle",
      mouseMovePaddingPercent: "20%",
      transitionSpeed: "0.35s"
    }, options);

    return this.each(function() {
      (new $.hoverSlider(this, settings));
    });
  };

})(jQuery);

//-------------------------------------------------------------

$(function() {
  //base slider
  $(".slider-one").hoverSlider();

  //modified slider
  $(".slider-two").hoverSlider({
    resetOnMouseout: true,
    mouseMovePaddingPercent: "25%",
    transitionSpeed: "0.55s"
  });
});
