rhythm.js
=========

Maintain a vertical rhythm with this small jQuery function.

Quick explanation:
------------------
When setting up vertical rhythm for your site, you will find that some elements
will break it. For instance tables and inline images will do this. This function
will add bottom or top margin for the elements that you specify, so that it will
fall into the rhythm.

For inline elements to work right, it takes an offset parameter, which defaults
to 6. I haven't figured out a way to automate the offset, this should be found
by manually testing the script. The default seems to work correctly for line-
heights of 21 to 24 pixels, which I presume is the most comon. If you find that
using inline images breaks vertical rhythm, then try adjusting the offset.

Status:
-------
Proof of concept.

Usage:
------
$( selectors ).rhythm( offset );

Example:
--------
$('img, table, pre, iframe, object').rhythm(5);
