rhythm.js
=========

Maintain a vertical rhythm with this small jQuery function.

Quick explanation:
------------------
When setting up vertical rhythm for your site, you will find that some elements
will break it. For instance tables and inline images will do this. This function
will add bottom or top margin for the elements that you specify, so that it will
fall into the rhythm.

Status:
-------
Proof of concept.

Usage:
$( selectors ).rhythm( offset );

Example:
--------
$('img, table, pre, iframe, object').rhythm(5);
