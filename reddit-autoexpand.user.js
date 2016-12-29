// ==UserScript==
// @name reddit-autoexpand
// @author nemanjan00
// @include https://www.reddit.com/*
// @downloadURL https://raw.githubusercontent.com/nemanjan00/reddit-autoexpand/master/reddit-autoexpand.user.js
// @namespace https://github.com/nemanjan00/reddit-autoexpand
// @updateURL https://raw.githubusercontent.com/nemanjan00/reddit-autoexpand/master/reddit-autoexpand.user.js
// @version 1
// ==/UserScript==

[].forEach.call(document.getElementsByClassName("expando-button"), (b => b.click()));
