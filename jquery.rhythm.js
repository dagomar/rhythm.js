/**
 * Rhythm Plugin
 * Rhythm plugin is a small jquery plugin that helps maintaining a vertical
 * rhythm on your site. It does so by adjusting the margins of selected objects.
 *
 * Version 0.1
 * Updated 22/02/2013
 *
 * Copyright (c) 2013 Dagomar Paulides, iz3
 *
 * Usage: $(object).rhythm([offset]);
 *
 * @todo  Add note on 'offset'.
 */

 (function($) {
  $.fn.rhythm = function( offset ) {

    // This offset seems to be most comon, good for line-heights of 21-24px.
    var o = (offset) ? offset : 6;
    var lh = parseInt($('body').css('line-height'), 10); // Lineheight

    return this.each(function() {
      var h = $(this).outerHeight(); // Height
      var m = h % lh; // Height modulo Lineheight
      var cm = parseInt($(this).css('margin-bottom'), 10); // Current margin
      var d = $(this).css('display'); // Display

      // Make sure this runs after an image is loaded and has height.
      if($(this).is('img') && h === 0) {
        $(this).load(function() {
          $(this).rhythm(offset);
        });
      }

      // For inline items, this will set the image exactly on the baseline.
      if(d == 'inline' || d == 'inline-block'){
        $(this).css('margin-top', cm + lh - m - o);
        console.log(cm + lh - m - o);
      } else {
        // Add margin for block items.
        if(m !== 0) {
          $(this).wrap('<div style="padding-bottom: 1px" />').css('margin-bottom', cm + lh - m -1);
        }
      }

    });
  };
})(jQuery);
