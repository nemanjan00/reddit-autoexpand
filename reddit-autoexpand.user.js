// ==UserScript==
// @name reddit-autoexpand
// @author nemanjan00
// @include https://www.reddit.com/*
// @downloadURL https://raw.githubusercontent.com/nemanjan00/reddit-autoexpand/master/reddit-autoexpand.user.js
// @namespace https://github.com/nemanjan00/reddit-autoexpand
// @updateURL https://raw.githubusercontent.com/nemanjan00/reddit-autoexpand/master/reddit-autoexpand.user.js
// @version 2
// ==/UserScript==

window.elements = Array.from(document.getElementsByClassName("expando-button")).reverse();

if(!window.timer){
	window.timer = setInterval(function(){
		if(window.elements.length > 0){
			let element = window.elements.pop();

			element.click();
		} else {
			clearInterval(window.timer);
			window.timer = undefined;
		}
	}, 500);
};
