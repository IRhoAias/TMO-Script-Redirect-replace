// ==UserScript==
// @name Multi-script Para TMO
// @namespace Mother Of Mangas 2021
// @version 0.1
// @description Quiero Ver Mi MANGA!!!!
// @author RhoAias
// @include *
// @grant none
// ==/UserScript==

if (window.top !== window.self)	   // Don’t run in frames.
	return;

var currentURL = location.href;


// ### cook2love.com/news...

if (currentURL.match("cook2love.com/news")) {
	location.href = location.href.replace("cook2love.com/news", "lectortmo.com/viewer");
};


// ### wtechnews.com/news...

if (currentURL.match("wtechnews.com/news")) {
	location.href = location.href.replace("wtechnews.com/news", "lectortmo.com/viewer");
};


// ### animationforyou.com/news...

if (currentURL.match("animationforyou.com/news")) {
	location.href = location.href.replace("animationforyou.com/news", "lectortmo.com/viewer");
};


// ### animalcanine.com/news...

if (currentURL.match("animalcanine.com/news")) {
	location.href = location.href.replace("animalcanine.com/news", "lectortmo.com/viewer");
};


// ### gamesnk.com/news...

if (currentURL.match("gamesnk.com/news")) {
	location.href = location.href.replace("gamesnk.com/news", "lectortmo.com/viewer");
};


// ### otakuworldgames.com/news...

if (currentURL.match("otakuworldgames.com/news")) {
	location.href = location.href.replace("otakuworldgames.com/news", "lectortmo.com/viewer");
};


// end of script
